/* Music Teacher Checklists: a static, hash-routed app. No build step. */
(function () {
  "use strict";

  const CATS = window.MTC_CATEGORIES || [];
  const AUDS = window.MTC_AUDIENCES || [];
  const EVID = window.MTC_EVIDENCE || {};
  const SOURCES = window.MTC_SOURCES || {};
  const CHECKLISTS = (window.MTC_CHECKLISTS || []).slice();
  const catById = Object.fromEntries(CATS.map(c => [c.id, c]));
  const audById = Object.fromEntries(AUDS.map(a => [a.id, a]));
  const clById = Object.fromEntries(CHECKLISTS.map(c => [c.id, c]));
  const catOrder = Object.fromEntries(CATS.map((c, i) => [c.id, i]));
  const main = document.getElementById("main");

  /* ---------------- Storage (localStorage, wrapped) ---------------- */
  const LS_KEY = "mtc.v1";
  const empty = () => ({ checks: {}, reviews: {}, links: {} });
  let store = empty();
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) store = Object.assign(empty(), JSON.parse(raw));
  } catch (e) { /* private mode, blocked storage, or bad JSON: start fresh */ }
  function save() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(store)); }
    catch (e) { toast("Couldn't save: browser storage is blocked."); }
  }

  /* ---------------- Review + slop math ---------------- */
  // Weights add to 100. Slop = 100 − human-checked points.
  const W = { read: 15, edited: 20, expert: 20, links: 15, claims: 30 };
  const STEPS = [
    { key: "read",   pts: W.read,   label: "A human read the whole checklist, rationale and all." },
    { key: "edited", pts: W.edited, label: "A human fixed anything wrong, vague, or generic (or confirmed nothing needed fixing)." },
    { key: "expert", pts: W.expert, label: "Someone who actually does this job reviewed it (a working teacher, chair, studio teacher…)." }
  ];

  function review(id) {
    const base = (clById[id] && clById[id].review) || {};
    const local = store.reviews[id] || {};
    return {
      read: pick(local.read, base.read),
      edited: pick(local.edited, base.edited),
      expert: pick(local.expert, base.expert),
      claims: Object.assign({}, base.claims || {}, local.claims || {}),
      reviewer: pick(local.reviewer, base.reviewer) || "",
      date: pick(local.date, base.date) || "",
      notes: local.notes || ""
    };
  }
  function pick(a, b) { return a !== undefined ? a : b; }
  function linkChecked(k) {
    if (store.links[k] !== undefined) return store.links[k];
    return !!(SOURCES[k] && SOURCES[k].humanLinkCheck);
  }
  function today() {
    const d = new Date(), p = n => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }
  function setReview(id, patch) {
    const r = store.reviews[id] = store.reviews[id] || {};
    Object.assign(r, patch);
    r.date = today();
    save();
  }
  function slopOf(cl) {
    const r = review(cl.id);
    let human = (r.read ? W.read : 0) + (r.edited ? W.edited : 0) + (r.expert ? W.expert : 0);
    const keys = (cl.sources || []).map(s => s.k);
    if (keys.length) {
      human += W.links * keys.filter(linkChecked).length / keys.length;
      human += W.claims * keys.filter(k => r.claims[k]).length / keys.length;
    } else {
      human += r.edited ? W.links + W.claims : 0;
    }
    return Math.max(0, Math.round(100 - human));
  }
  function slopLevel(s) { return s >= 90 ? 5 : s >= 65 ? 4 : s >= 35 ? 3 : s >= 10 ? 2 : 1; }
  const LABELS = {
    5: "Pure AI slop: unreviewed first draft",
    4: "Mostly slop: a human has started",
    3: "Half-baked: partly human-checked",
    2: "Mostly human: nearly verified",
    1: "Human-verified"
  };
  function siteSlop() {
    if (!CHECKLISTS.length) return 100;
    return Math.round(CHECKLISTS.reduce((a, c) => a + slopOf(c), 0) / CHECKLISTS.length);
  }

  /* ---------------- Helpers ---------------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function paras(text) { return String(text || "").split(/\n\s*\n/).map(p => `<p>${esc(p)}</p>`).join(""); }
  function checksFor(id) { return store.checks[id] || {}; }
  function doneCount(cl) { const c = checksFor(cl.id); return cl.items.filter((_, i) => c[i]).length; }
  function allTags() {
    const m = {};
    CHECKLISTS.forEach(c => (c.tags || []).forEach(t => { m[t] = (m[t] || 0) + 1; }));
    return Object.entries(m).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }
  let toastTimer;
  function toast(msg) {
    let el = document.querySelector(".toast");
    if (!el) { el = document.createElement("div"); el.className = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); }
    el.textContent = msg; el.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
  }
  function copyText(text) {
    const fallback = () => {
      const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta);
      ta.select(); try { document.execCommand("copy"); toast("Copied"); } catch (e) { toast("Copy failed"); }
      ta.remove();
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(() => toast("Copied"), fallback);
    else fallback();
  }
  function download(name, text) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], { type: "application/json" }));
    a.download = name; document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
  }

  function meterBig(s, title) {
    const lv = slopLevel(s);
    return `<div class="meter meter-big s${lv}" style="--pct:${s}%">
      <div class="meter-head">
        <span class="meter-title">${esc(title || "AI slop meter")}</span>
        <span><span class="meter-num">${s}%</span> <span class="meter-label">${LABELS[lv]}</span></span>
      </div>
      <div class="meter-bar" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${s}" aria-label="AI slop ${s} percent"><div class="meter-fill"></div></div>
      <div class="meter-ends"><span>0% · human-verified</span><span>100% · raw AI draft</span></div>
    </div>`;
  }
  function meterMini(s) {
    const lv = slopLevel(s);
    return `<div class="meter meter-mini s${lv}" style="--pct:${s}%" title="${esc(LABELS[lv])}">
      <span class="meter-num">${s}% slop</span>
      <div class="meter-bar"><div class="meter-fill"></div></div>
    </div>`;
  }
  function evLabel(ev) { return (EVID[ev] && EVID[ev].name) || ev; }

  /* ---------------- Router ---------------- */
  function route() {
    const h = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    const [view, arg] = [h.split("/")[0], h.split("/").slice(1).join("/")];
    let nav = "list";
    if (view === "c" && clById[arg]) { renderChecklist(clById[arg]); nav = ""; }
    else if (view === "categories") { renderCategories(); nav = "categories"; }
    else if (view === "category" && catById[arg]) { filters.cat = arg; filters.tag = ""; filters.fromRoute = true; renderList(); nav = "categories"; }
    else if (view === "tags") { renderTags(); nav = "tags"; }
    else if (view === "tag") { filters.tag = arg; filters.cat = ""; filters.fromRoute = true; renderList(); nav = "tags"; }
    else if (view === "about") { renderAbout(); nav = "about"; }
    else {
      // A category/tag picked by URL is cleared when going back to the plain list.
      if (filters.fromRoute) { filters.cat = ""; filters.tag = ""; filters.fromRoute = false; }
      renderList();
    }
    document.querySelectorAll("[data-nav]").forEach(a => {
      if (a.dataset.nav === nav) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  /* ---------------- List view ---------------- */
  const filters = { q: "", cat: "", aud: "", tag: "", sort: "cat", fromRoute: false };

  function renderList() {
    const s = siteSlop();
    document.title = "Music Teacher Checklists";
    main.innerHTML = `
      <section class="intro">
        <h1>Checklists for music teachers</h1>
        <p>From Orff instruments and choosing repertoire to crying students, faculty meetings, and the dean's office.
        Each checklist explains its reasoning and links real sources. An AI drafted all of it, so each one carries a slop meter showing how much a human has checked it.</p>
      </section>
      ${meterBig(s, "Whole-site slop meter")}
      <div class="filters" role="search">
        <div class="filter-row">
          <label class="visually-hidden" for="q">Search checklists</label>
          <input id="q" class="search" type="search" placeholder="Search: rehearsal, crying, copyright, jury…" value="${esc(filters.q)}" autocomplete="off">
          <label class="visually-hidden" for="cat">Category</label>
          <select id="cat">
            <option value="">All categories</option>
            ${CATS.map(c => `<option value="${c.id}" ${filters.cat === c.id ? "selected" : ""}>${esc(c.name)}</option>`).join("")}
          </select>
          <label class="visually-hidden" for="sort">Sort</label>
          <select id="sort">
            <option value="cat" ${filters.sort === "cat" ? "selected" : ""}>Sort: category</option>
            <option value="az" ${filters.sort === "az" ? "selected" : ""}>Sort: A–Z</option>
            <option value="slop" ${filters.sort === "slop" ? "selected" : ""}>Sort: most slop first</option>
            <option value="human" ${filters.sort === "human" ? "selected" : ""}>Sort: most human-checked</option>
          </select>
        </div>
        <div class="filter-row chips" role="group" aria-label="Who is this for?">
          <span class="chip-label">I'm a…</span>
          ${AUDS.map(a => `<button type="button" class="chip" data-aud="${a.id}" aria-pressed="${filters.aud === a.id}">${esc(a.name)}</button>`).join("")}
        </div>
        <div id="activeTag"></div>
      </div>
      <p class="count" id="count" aria-live="polite"></p>
      <ul class="cl-list" id="list"></ul>`;

    const q = main.querySelector("#q");
    q.addEventListener("input", () => { filters.q = q.value; drawList(); });
    main.querySelector("#cat").addEventListener("change", e => { filters.cat = e.target.value; filters.fromRoute = false; drawList(); });
    main.querySelector("#sort").addEventListener("change", e => { filters.sort = e.target.value; drawList(); });
    main.querySelectorAll("[data-aud]").forEach(b => b.addEventListener("click", () => {
      filters.aud = filters.aud === b.dataset.aud ? "" : b.dataset.aud;
      main.querySelectorAll("[data-aud]").forEach(x => x.setAttribute("aria-pressed", String(filters.aud === x.dataset.aud)));
      drawList();
    }));
    drawList();
  }

  function matches(cl) {
    if (filters.cat && cl.cat !== filters.cat) return false;
    if (filters.aud && !(cl.aud || []).includes(filters.aud)) return false;
    if (filters.tag && !(cl.tags || []).includes(filters.tag)) return false;
    const q = filters.q.trim().toLowerCase();
    if (!q) return true;
    const hay = [cl.title, cl.summary, cl.why, (cl.tags || []).join(" "), (catById[cl.cat] || {}).name,
      cl.items.map(i => i.t + " " + (i.more || "")).join(" ")].join(" ").toLowerCase();
    return q.split(/\s+/).every(w => hay.includes(w));
  }

  function drawList() {
    const list = main.querySelector("#list");
    const at = main.querySelector("#activeTag");
    at.innerHTML = filters.tag
      ? `<span class="active-filter">Tag: <strong>${esc(filters.tag)}</strong> · <button type="button" class="linklike" id="clearTag">clear</button></span>` : "";
    const ct = at.querySelector("#clearTag");
    if (ct) ct.addEventListener("click", () => { filters.tag = ""; history.replaceState(null, "", "#/"); drawList(); });

    let rows = CHECKLISTS.filter(matches);
    const by = {
      cat: (a, b) => (catOrder[a.cat] - catOrder[b.cat]) || 0,
      az: (a, b) => a.title.localeCompare(b.title),
      slop: (a, b) => slopOf(b) - slopOf(a) || a.title.localeCompare(b.title),
      human: (a, b) => slopOf(a) - slopOf(b) || a.title.localeCompare(b.title)
    }[filters.sort];
    rows = rows.slice().sort(by);
    main.querySelector("#count").textContent = `${rows.length} of ${CHECKLISTS.length} checklists`;
    if (!rows.length) { list.innerHTML = `<li class="empty">Nothing matches. Try fewer filters.</li>`; return; }
    list.innerHTML = rows.map(cl => {
      const d = doneCount(cl), n = cl.items.length;
      return `<li><a class="cl-row" href="#/c/${cl.id}">
        <div class="cl-main">
          <div class="cl-title">${esc(cl.title)}</div>
          <div class="cl-summary">${esc(cl.summary)}</div>
          <div class="cl-meta">
            <span class="cat-pill">${esc((catById[cl.cat] || {}).name || cl.cat)}</span>
            <span class="ev ev-${cl.evidence}">${esc(evLabel(cl.evidence))}</span>
            <span class="progress-pill">${d ? `${d}/${n} done` : `${n} items`}</span>
            <span>${(cl.sources || []).length} sources</span>
          </div>
        </div>
        ${meterMini(slopOf(cl))}
      </a></li>`;
    }).join("");
  }

  /* ---------------- Categories & tags ---------------- */
  function renderCategories() {
    document.title = "Categories · Music Teacher Checklists";
    main.innerHTML = `<h1>Categories</h1>
      <div class="grid">${CATS.map(c => {
        const cls = CHECKLISTS.filter(x => x.cat === c.id);
        const s = cls.length ? Math.round(cls.reduce((a, x) => a + slopOf(x), 0) / cls.length) : 100;
        return `<a class="card" href="#/category/${c.id}">
          <h3>${esc(c.name)}</h3><p>${esc(c.blurb)}</p>
          <p class="small muted">${cls.length} checklist${cls.length === 1 ? "" : "s"}</p>
          ${meterMini(s)}</a>`;
      }).join("")}</div>`;
  }
  function renderTags() {
    document.title = "Tags · Music Teacher Checklists";
    main.innerHTML = `<h1>Tags</h1>
      <h2>Who it's for</h2>
      <div class="tag-cloud">${AUDS.map(a => {
        const n = CHECKLISTS.filter(c => (c.aud || []).includes(a.id)).length;
        return `<a class="chip" href="#/" data-goaud="${a.id}">${esc(a.name)} · ${n}</a>`;
      }).join("")}</div>
      <h2>Topics</h2>
      <div class="tag-cloud">${allTags().map(([t, n]) => `<a class="chip" href="#/tag/${encodeURIComponent(t)}">${esc(t)} · ${n}</a>`).join("")}</div>`;
    main.querySelectorAll("[data-goaud]").forEach(a => a.addEventListener("click", () => { filters.aud = a.dataset.goaud; filters.cat = ""; filters.tag = ""; }));
  }

  /* ---------------- Checklist view ---------------- */
  function renderChecklist(cl) {
    document.title = `${cl.title} · Music Teacher Checklists`;
    const cat = catById[cl.cat] || { name: cl.cat };
    const srcIndex = Object.fromEntries((cl.sources || []).map((s, i) => [s.k, i + 1]));
    const checks = checksFor(cl.id);
    const r = review(cl.id);
    const ev = EVID[cl.evidence] || {};

    main.innerHTML = `
      <p class="crumbs"><a href="#/">All checklists</a> / <a href="#/category/${cl.cat}">${esc(cat.name)}</a></p>
      <h1>${esc(cl.title)}</h1>
      <p class="lede">${esc(cl.summary)}</p>
      <div class="meta-line">
        <span class="ev-badge ev ev-${cl.evidence}" title="${esc(ev.help || "")}">${esc(evLabel(cl.evidence))}</span>
        <span class="small muted">For: ${(cl.aud || []).length >= AUDS.length ? "everyone" : (cl.aud || []).map(a => esc((audById[a] || {}).name || a)).join(" · ")}</span>
      </div>
      <div class="meta-line">${(cl.tags || []).map(t => `<a class="chip" href="#/tag/${encodeURIComponent(t)}">#${esc(t)}</a>`).join("")}</div>
      <div id="meterSlot">${meterBig(slopOf(cl))}</div>

      <div class="toolbar">
        <h2 id="items-h">Checklist <span class="small muted" id="prog-txt"></span></h2>
        <div class="btns">
          <button type="button" class="btn" id="expandAll">Show all details</button>
          <button type="button" class="btn" id="resetBtn">Reset checks</button>
          <button type="button" class="btn" id="printBtn">Print</button>
        </div>
      </div>
      <div class="progress" aria-hidden="true"><span id="prog-bar"></span></div>
      <ul class="items" aria-labelledby="items-h">
        ${cl.items.map((it, i) => {
          const cites = (it.src || []).filter(k => srcIndex[k]).map(k =>
            `<a class="cite" href="#/c/${cl.id}" data-src="${k}" title="${esc((SOURCES[k] || {}).cite || k)}">${srcIndex[k]}</a>`).join("");
          return `<li class="item ${checks[i] ? "done" : ""}" data-i="${i}">
            <div class="item-row">
              <input type="checkbox" id="it-${i}" ${checks[i] ? "checked" : ""}>
              <label for="it-${i}"><span class="item-text">${esc(it.t)}</span></label>
              <span class="item-tools">${cites}${it.more ? `<button type="button" class="more-btn" aria-expanded="false" aria-controls="more-${i}">more</button>` : ""}</span>
            </div>
            ${it.more ? `<div class="item-more" id="more-${i}" hidden>${esc(it.more)}</div>` : ""}
          </li>`;
        }).join("")}
      </ul>

      <details class="section why" id="sec-why">
        <summary>Rationale: why this checklist <span class="sum-note">${esc(evLabel(cl.evidence))}</span></summary>
        <div class="sec-body">${paras(cl.why)}<p class="small muted">${esc(ev.help || "")}</p></div>
      </details>

      <details class="section" id="sec-src">
        <summary>Sources (${(cl.sources || []).length}) <span class="sum-note">${(cl.sources || []).filter(s => linkChecked(s.k)).length} human-opened</span></summary>
        <div class="sec-body">
          <p class="ai-note">An AI resolved each DOI and URL when drafting (Oct 2026), which confirms the source exists. It did not confirm the source says what we claim. That's the human check below each source.</p>
          <ol class="sources">${(cl.sources || []).map((s, i) => {
            const src = SOURCES[s.k] || { cite: `Missing source: ${s.k}`, url: "" };
            return `<li id="src-${s.k}">
              <p class="src-cite"><span class="src-kind">${esc(src.kind || "source")}</span>${esc(src.cite)}</p>
              ${src.url ? `<p class="small"><a href="${esc(src.url)}" target="_blank" rel="noopener">${esc(src.url)}</a></p>` : ""}
              ${s.use ? `<p class="src-use"><strong>Used for:</strong> ${esc(s.use)}</p>` : ""}
              <div class="src-checks">
                <label><input type="checkbox" data-link="${s.k}" ${linkChecked(s.k) ? "checked" : ""}> A human opened the link; it's the right source</label>
                <label><input type="checkbox" data-claim="${s.k}" ${r.claims[s.k] ? "checked" : ""}> A human confirmed it supports how it's used here</label>
              </div>
            </li>`;
          }).join("")}</ol>
        </div>
      </details>

      <details class="section review-section" id="sec-review">
        <summary>Human review (lower the slop) <span class="sum-note" id="rev-note"></span></summary>
        <div class="sec-body">
          <p class="small muted">Tick what a real person has done. Source checks above count too. Reviews are saved in this browser. Use "Copy for repo" to make them permanent for everyone.</p>
          <ul class="review-steps">${STEPS.map(st => `<li><label>
            <input type="checkbox" data-step="${st.key}" ${r[st.key] ? "checked" : ""}>
            <span>${esc(st.label)} <span class="pts">−${st.pts} slop</span></span></label></li>`).join("")}
            <li class="small muted">Sources: −${W.links} for links opened, −${W.claims} for claims confirmed (split across sources).</li>
          </ul>
          <div class="field"><label for="reviewer">Reviewer name or initials</label>
            <input id="reviewer" type="text" value="${esc(r.reviewer)}" placeholder="e.g., A.B., HS choir, 12 yrs"></div>
          <div class="field"><label for="notes">Notes and corrections (for whoever edits the data file)</label>
            <textarea id="notes" placeholder="Item 4 is wrong for our state because…">${esc(r.notes)}</textarea></div>
          <p class="small muted" id="rev-date">${r.date ? `Last reviewed ${esc(r.date)}` : "Not reviewed yet."}</p>
          <div class="btns"><button type="button" class="btn" id="copyRepo">Copy review for repo</button></div>
        </div>
      </details>`;

    const updateProgress = () => {
      const d = doneCount(cl), n = cl.items.length;
      main.querySelector("#prog-txt").textContent = `${d} of ${n} done`;
      main.querySelector("#prog-bar").style.width = `${n ? (100 * d / n) : 0}%`;
    };
    const updateMeter = () => {
      main.querySelector("#meterSlot").innerHTML = meterBig(slopOf(cl));
      main.querySelector("#rev-note").textContent = `${slopOf(cl)}% slop`;
      const rd = review(cl.id).date;
      main.querySelector("#rev-date").textContent = rd ? `Last reviewed ${rd}` : "Not reviewed yet.";
    };
    updateProgress(); updateMeter();

    main.querySelectorAll(".item input[type=checkbox]").forEach(cb => cb.addEventListener("change", () => {
      const li = cb.closest(".item"), i = li.dataset.i;
      const c = store.checks[cl.id] = store.checks[cl.id] || {};
      if (cb.checked) c[i] = true; else delete c[i];
      li.classList.toggle("done", cb.checked); save(); updateProgress();
    }));
    main.querySelectorAll(".more-btn").forEach(b => b.addEventListener("click", () => {
      const box = document.getElementById(b.getAttribute("aria-controls"));
      const open = b.getAttribute("aria-expanded") !== "true";
      b.setAttribute("aria-expanded", String(open)); box.hidden = !open; b.textContent = open ? "less" : "more";
    }));
    main.querySelector("#expandAll").addEventListener("click", e => {
      const btns = main.querySelectorAll(".more-btn");
      const open = e.target.textContent.startsWith("Show");
      btns.forEach(b => { b.setAttribute("aria-expanded", String(open)); document.getElementById(b.getAttribute("aria-controls")).hidden = !open; b.textContent = open ? "less" : "more"; });
      main.querySelector("#sec-why").open = open;
      e.target.textContent = open ? "Hide details" : "Show all details";
    });
    main.querySelectorAll(".cite").forEach(a => a.addEventListener("click", e => {
      e.preventDefault();
      const sec = main.querySelector("#sec-src"); sec.open = true;
      const target = document.getElementById("src-" + a.dataset.src);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        target.style.transition = "background .6s"; target.style.background = "var(--accent-soft)";
        setTimeout(() => { target.style.background = ""; }, 1400);
      }
    }));
    main.querySelector("#resetBtn").addEventListener("click", () => {
      if (!doneCount(cl) || confirm("Uncheck every item on this checklist?")) {
        delete store.checks[cl.id]; save();
        main.querySelectorAll(".item").forEach(li => { li.classList.remove("done"); li.querySelector("input").checked = false; });
        updateProgress();
      }
    });
    main.querySelector("#printBtn").addEventListener("click", () => window.print());

    main.querySelectorAll("[data-link]").forEach(cb => cb.addEventListener("change", () => {
      store.links[cb.dataset.link] = cb.checked; save(); updateMeter();
      const s = main.querySelector("#sec-src .sum-note");
      if (s) s.textContent = `${(cl.sources || []).filter(x => linkChecked(x.k)).length} human-opened`;
    }));
    main.querySelectorAll("[data-claim]").forEach(cb => cb.addEventListener("change", () => {
      const cur = Object.assign({}, (store.reviews[cl.id] || {}).claims || {});
      cur[cb.dataset.claim] = cb.checked; setReview(cl.id, { claims: cur }); updateMeter();
    }));
    main.querySelectorAll("[data-step]").forEach(cb => cb.addEventListener("change", () => {
      setReview(cl.id, { [cb.dataset.step]: cb.checked }); updateMeter();
    }));
    main.querySelector("#reviewer").addEventListener("change", e => { setReview(cl.id, { reviewer: e.target.value.trim() }); updateMeter(); });
    main.querySelector("#notes").addEventListener("change", e => {
      const r2 = store.reviews[cl.id] = store.reviews[cl.id] || {}; r2.notes = e.target.value; save();
    });
    main.querySelector("#copyRepo").addEventListener("click", () => copyText(repoSnippet(cl)));
  }

  function repoSnippet(cl) {
    const r = review(cl.id);
    const claims = Object.fromEntries(Object.entries(r.claims).filter(([, v]) => v));
    const obj = { read: !!r.read, edited: !!r.edited, expert: !!r.expert, claims, reviewer: r.reviewer, date: r.date };
    const links = (cl.sources || []).filter(s => store.links[s.k]).map(s => s.k);
    let out = `// In the checklist "${cl.id}", add or replace:\nreview: ${JSON.stringify(obj, null, 2)},\n`;
    if (links.length) out += `\n// In data/sources.js, add to each of these sources:\n// humanLinkCheck: "${r.reviewer || "initials"}, ${r.date || today()}"\n// ${links.join(", ")}\n`;
    if (r.notes) out += `\n/* Reviewer notes:\n${r.notes.replace(/\*\//g, "* /")}\n*/\n`;
    return out;
  }

  /* ---------------- About / slop meter ---------------- */
  function renderAbout() {
    document.title = "How the slop meter works · Music Teacher Checklists";
    const reviewed = CHECKLISTS.filter(c => slopOf(c) < 100).length;
    main.innerHTML = `<div class="prose">
      <h1>How the AI slop meter works</h1>
      <p>An AI (Claude) drafted every checklist, rationale, and source note on this site in October 2026. Drafts like that can sound confident and still be wrong, generic, or slightly off from what a source says. That's the "slop." The meter shows how much of each checklist a human has actually checked.</p>
      ${meterBig(siteSlop(), "Whole site right now")}
      <p>${reviewed} of ${CHECKLISTS.length} checklists have had at least one human check.</p>

      <h2>Scoring</h2>
      <p>Every checklist starts at <strong>100% slop</strong>. Each human check removes some:</p>
      <table class="score-table">
        <thead><tr><th>Human check</th><th>Slop removed</th></tr></thead>
        <tbody>
          <tr><td>Read the whole checklist</td><td>−${W.read}</td></tr>
          <tr><td>Fixed what was wrong or generic (or confirmed it's fine)</td><td>−${W.edited}</td></tr>
          <tr><td>Reviewed by someone who does this job</td><td>−${W.expert}</td></tr>
          <tr><td>Source links opened by a human (split across sources)</td><td>−${W.links}</td></tr>
          <tr><td>Sources confirmed to support their claims (split across sources)</td><td>−${W.claims}</td></tr>
        </tbody>
      </table>
      <p>Checking sources counts the most, because that's where AI drafts most often go subtly wrong. A real paper gets cited for something it didn't quite say.</p>

      <h2>What the AI did and didn't check</h2>
      <ul>
        <li><strong>Did:</strong> resolved every DOI against Crossref and opened or searched for every web link, so every source is real and the citation details match.</li>
        <li><strong>Did:</strong> read available abstracts for many studies and wrote claims to match them.</li>
        <li><strong>Didn't:</strong> read most full papers. Some claims come from abstracts or general knowledge of the literature.</li>
        <li><strong>Didn't:</strong> check your state's laws, your district's policies, or your institution's rules.</li>
      </ul>

      <h2>Evidence labels</h2>
      <ul>${Object.entries(EVID).map(([k, v]) => `<li><span class="ev ev-${k}">${esc(v.name)}</span>: ${esc(v.help)}</li>`).join("")}</ul>

      <h2>Where reviews are saved</h2>
      <p>Checkmarks and reviews live in <strong>this browser only</strong> (localStorage). They don't sync to other devices or other people. To make a review permanent for everyone, use <em>Copy review for repo</em> on a checklist and paste it into the data file, or export everything below and send it to whoever maintains the site.</p>
      <div class="btns">
        <button type="button" class="btn btn-primary" id="exportBtn">Export my reviews & checks</button>
        <label class="btn" for="importFile">Import…</label>
        <input type="file" id="importFile" accept="application/json,.json" class="visually-hidden">
        <button type="button" class="btn" id="clearAll">Clear everything in this browser</button>
      </div>

      <h2>Not advice</h2>
      <p>Nothing here is legal, medical, or mental-health advice. Laws and policies (mandated reporting, FERPA, Title IX, copyright) vary by place and change over time. If a student is in danger, contact emergency services or, in the U.S., call or text 988.</p>
    </div>`;

    main.querySelector("#exportBtn").addEventListener("click", () => {
      download(`music-checklists-${today()}.json`, JSON.stringify({ app: "mtc", version: 1, ...store }, null, 2));
    });
    main.querySelector("#importFile").addEventListener("change", e => {
      const f = e.target.files[0]; if (!f) return;
      f.text().then(t => {
        const d = JSON.parse(t);
        ["checks", "reviews", "links"].forEach(k => { if (d[k] && typeof d[k] === "object") store[k] = Object.assign(store[k] || {}, d[k]); });
        save(); toast("Imported"); renderAbout();
      }).catch(() => toast("That file didn't look like an export."));
    });
    main.querySelector("#clearAll").addEventListener("click", () => {
      if (confirm("Clear all checkmarks and reviews saved in this browser? This can't be undone.")) {
        store = empty(); save(); toast("Cleared"); renderAbout();
      }
    });
  }

  window.addEventListener("beforeprint", () => {
    document.querySelectorAll("details.section:not(.review-section)").forEach(d => { d.open = true; });
  });

  // Sanity check for maintainers: missing sources show up in the console.
  CHECKLISTS.forEach(cl => {
    (cl.sources || []).forEach(s => { if (!SOURCES[s.k]) console.warn(`[${cl.id}] unknown source key: ${s.k}`); });
    cl.items.forEach((it, i) => (it.src || []).forEach(k => {
      if (!(cl.sources || []).some(s => s.k === k)) console.warn(`[${cl.id}] item ${i + 1} cites ${k}, which isn't in its sources list`);
    }));
    if (!catById[cl.cat]) console.warn(`[${cl.id}] unknown category: ${cl.cat}`);
  });

  route();
})();
