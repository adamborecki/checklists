/* Music Teacher Checklists: a static, hash-routed app. No build step. */
(function () {
  "use strict";

  const CATS = window.MTC_CATEGORIES || [];
  const AUDS = window.MTC_AUDIENCES || [];
  const EVID = window.MTC_EVIDENCE || {};
  const SOURCES = window.MTC_SOURCES || {};
  const EMO = window.MTC_EMOJI || { levels: [{ id: "none", name: "None" }], defaultLevel: "none", ui: {}, evidence: {}, slop: {}, keywords: [], fallback: [], sparkle: [], confetti: [] };
  const CHECKLISTS = (window.MTC_CHECKLISTS || []).slice();
  const catById = Object.fromEntries(CATS.map(c => [c.id, c]));
  const audById = Object.fromEntries(AUDS.map(a => [a.id, a]));
  const clById = Object.fromEntries(CHECKLISTS.map(c => [c.id, c]));
  const catOrder = Object.fromEntries(CATS.map((c, i) => [c.id, i]));
  const main = document.getElementById("main");

  /* ---------------- Storage (localStorage, wrapped) ---------------- */
  const LS_KEY = "mtc.v1";
  const empty = () => ({ checks: {}, reviews: {}, links: {}, prefs: {}, seen: {} });
  let store = empty();
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) store = Object.assign(empty(), JSON.parse(raw));
  } catch (e) { /* private mode, blocked storage, or bad JSON: start fresh */ }
  function save() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(store)); }
    catch (e) { toast("Couldn't save: browser storage is blocked."); }
  }

  /* ---------------- Display preferences: emoji level & celebrations ---------------- */
  const CELEB_MODES = [
    { id: "confetti", name: "Confetti", help: "A message and a burst of confetti when you finish things." },
    { id: "quiet",    name: "Quiet",    help: "Just a message. Nothing moves." },
    { id: "off",      name: "Off",      help: "No celebrations." }
  ];
  const levelIds = EMO.levels.map(l => l.id);
  function pref(k) {
    const p = store.prefs || {};
    if (k === "emoji") return levelIds.includes(p.emoji) ? p.emoji : EMO.defaultLevel;
    if (k === "celebrate") return CELEB_MODES.some(m => m.id === p.celebrate) ? p.celebrate : "confetti";
  }
  function setPref(k, v) { store.prefs = Object.assign({}, store.prefs, { [k]: v }); save(); }
  // 0 = none, 1 = barely, 2 = tactful, 3 = plenty, 4 = no such thing as too many
  function lvl() { return Math.max(0, levelIds.indexOf(pref("emoji"))); }
  // Decorative emoji are hidden from screen readers so "party popper" isn't read aloud everywhere.
  function em(min, ch, after) { return ch && lvl() >= min ? `<span class="emo${after ? " emo-after" : ""}" aria-hidden="true">${ch}</span>` : ""; }
  function emText(min, ch) { return ch && lvl() >= min ? ch + " " : ""; }
  const EMOJI_RE = /(\p{Extended_Pictographic}|\p{Regional_Indicator})(\uFE0F|\u200D(\p{Extended_Pictographic}))*/gu;
  // Text from the data files: at "None whatsoever", strip any emoji an author typed in.
  function tx(s) { return esc(lvl() === 0 ? String(s == null ? "" : s).replace(EMOJI_RE, "").replace(/ {2,}/g, " ") : s); }
  function itemEmoji(text, i) {
    if (lvl() < 3) return "";
    const hit = EMO.keywords.find(([re]) => re.test(text));
    if (hit) return hit[1];
    return lvl() >= 4 && EMO.fallback.length ? EMO.fallback[i % EMO.fallback.length] : "";
  }
  function sparkle(i, after) { return lvl() >= 4 && EMO.sparkle.length ? em(4, EMO.sparkle[i % EMO.sparkle.length], after) : ""; }

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
  function toast(msg, kind) {
    let el = document.querySelector(".toast");
    if (!el) { el = document.createElement("div"); el.className = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); }
    el.textContent = msg; el.classList.add("show");
    el.classList.toggle("toast-celebrate", kind === "celebrate");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("show"), kind === "celebrate" ? 3600 : 2200);
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
        <span><span class="meter-num">${s}%</span> <span class="meter-label">${slopEmo(lv)}${LABELS[lv]}</span></span>
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
  function slopEmo(lv) {
    const e = EMO.slop[lv]; if (!e || lvl() < 3) return "";
    return em(3, lvl() >= 4 ? e.repeat(lv >= 4 ? 3 : 2) : e);
  }
  function evLabel(ev) { return (EVID[ev] && EVID[ev].name) || ev; }
  function evHtml(ev) { return `${em(3, EMO.evidence[ev])}${esc(evLabel(ev))}`; }
  function catHtml(c, min) { return `${em(min, c.emoji)}${esc(c.name || c.id)}`; }

  /* ---------------- Router ---------------- */
  function route(keepScroll) {
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
    if (keepScroll !== true) window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", () => route());

  /* ---------------- List view ---------------- */
  const filters = { q: "", cat: "", aud: "", tag: "", sort: "cat", fromRoute: false };

  function renderList() {
    const s = siteSlop();
    document.title = "Music Teacher Checklists";
    main.innerHTML = `
      <section class="intro">
        <h1>${sparkle(0)}Checklists for music teachers${em(4, "🎶", true)}</h1>
        <p>From Orff instruments and choosing repertoire to crying students, English learners, NASM site visits, and the dean's office.
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
            ${CATS.map(c => `<option value="${c.id}" ${filters.cat === c.id ? "selected" : ""}>${esc(emText(3, c.emoji) + c.name)}</option>`).join("")}
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
          ${AUDS.map(a => `<button type="button" class="chip" data-aud="${a.id}" aria-pressed="${filters.aud === a.id}">${em(3, a.emoji)}${esc(a.name)}</button>`).join("")}
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
    list.innerHTML = rows.map((cl, i) => {
      const d = doneCount(cl), n = cl.items.length;
      return `<li><a class="cl-row" href="#/c/${cl.id}">
        <div class="cl-main">
          <div class="cl-title">${em(2, cl.emoji)}${tx(cl.title)}${sparkle(i, true)}</div>
          <div class="cl-summary">${tx(cl.summary)}</div>
          <div class="cl-meta">
            <span class="cat-pill">${catHtml(catById[cl.cat] || { id: cl.cat }, 3)}</span>
            <span class="ev ev-${cl.evidence}">${evHtml(cl.evidence)}</span>
            <span class="progress-pill${d === n ? " is-done" : ""}">${d === n ? `${em(2, EMO.ui.done)}Done` : d ? `${d}/${n} done` : `${n} items`}</span>
            <span>${em(4, EMO.ui.sources)}${(cl.sources || []).length} sources</span>
          </div>
        </div>
        ${meterMini(slopOf(cl))}
      </a></li>`;
    }).join("");
  }

  /* ---------------- Categories & tags ---------------- */
  function renderCategories() {
    document.title = "Categories · Music Teacher Checklists";
    main.innerHTML = `<h1>${em(3, EMO.ui.categories)}Categories</h1>
      <div class="grid">${CATS.map(c => {
        const cls = CHECKLISTS.filter(x => x.cat === c.id);
        const s = cls.length ? Math.round(cls.reduce((a, x) => a + slopOf(x), 0) / cls.length) : 100;
        return `<a class="card" href="#/category/${c.id}">
          <h3>${catHtml(c, 1)}${em(4, "✨", true)}</h3><p>${esc(c.blurb)}</p>
          <p class="small muted">${cls.length} checklist${cls.length === 1 ? "" : "s"}</p>
          ${meterMini(s)}</a>`;
      }).join("")}</div>`;
  }
  function renderTags() {
    document.title = "Tags · Music Teacher Checklists";
    main.innerHTML = `<h1>${em(3, EMO.ui.tags)}Tags</h1>
      <h2>Who it's for</h2>
      <div class="tag-cloud">${AUDS.map(a => {
        const n = CHECKLISTS.filter(c => (c.aud || []).includes(a.id)).length;
        return `<a class="chip" href="#/" data-goaud="${a.id}">${em(3, a.emoji)}${esc(a.name)} · ${n}</a>`;
      }).join("")}</div>
      <h2>Topics</h2>
      <div class="tag-cloud">${allTags().map(([t, n]) => `<a class="chip" href="#/tag/${encodeURIComponent(t)}">${em(4, itemEmoji(t, n) || "🏷️")}${esc(t)} · ${n}</a>`).join("")}</div>`;
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
      <p class="crumbs"><a href="#/">All checklists</a> / <a href="#/category/${cl.cat}">${catHtml(cat, 2)}</a></p>
      <h1>${sparkle(1)}${em(1, cl.emoji)}${tx(cl.title)}${em(4, cl.emoji, true)}${sparkle(2, true)}</h1>
      <p class="lede">${tx(cl.summary)}${em(4, "✨", true)}</p>
      <div class="meta-line">
        <span class="ev-badge ev ev-${cl.evidence}" title="${esc(ev.help || "")}">${evHtml(cl.evidence)}</span>
        <span class="small muted">For: ${(cl.aud || []).length >= AUDS.length ? `${em(4, "🌈")}everyone` : (cl.aud || []).map(a => em(3, (audById[a] || {}).emoji) + esc((audById[a] || {}).name || a)).join(" · ")}</span>
      </div>
      <div class="meta-line">${(cl.tags || []).map(t => `<a class="chip" href="#/tag/${encodeURIComponent(t)}">${lvl() >= 4 ? em(4, itemEmoji(t, 0) || "🏷️") : "#"}${esc(t)}</a>`).join("")}</div>
      <div id="meterSlot">${meterBig(slopOf(cl))}</div>

      <div class="toolbar">
        <h2 id="items-h">${em(3, EMO.ui.checklist)}Checklist <span class="small muted" id="prog-txt"></span></h2>
        <div class="btns">
          <button type="button" class="btn" id="expandAll">${em(3, EMO.ui.expand)}<span>Show all details</span></button>
          <button type="button" class="btn" id="resetBtn">${em(3, EMO.ui.reset)}Reset checks</button>
          <button type="button" class="btn" id="printBtn">${em(3, EMO.ui.print)}Print</button>
        </div>
      </div>
      <div class="progress" id="prog" aria-hidden="true"><span id="prog-bar"></span></div>
      <ul class="items" aria-labelledby="items-h">
        ${cl.items.map((it, i) => {
          const cites = (it.src || []).filter(k => srcIndex[k]).map(k =>
            `<a class="cite" href="#/c/${cl.id}" data-src="${k}" title="${esc((SOURCES[k] || {}).cite || k)}">${srcIndex[k]}</a>`).join("");
          const ie = itemEmoji(it.t, i);
          return `<li class="item ${checks[i] ? "done" : ""}" data-i="${i}">
            <div class="item-row">
              <input type="checkbox" id="it-${i}" ${checks[i] ? "checked" : ""}>
              <label for="it-${i}">${ie ? `<span class="item-emo" aria-hidden="true">${ie}</span>` : ""}<span class="item-text">${tx(it.t)}</span></label>
              <span class="item-tools">${cites}${it.more ? `<button type="button" class="more-btn" aria-expanded="false" aria-controls="more-${i}">more</button>` : ""}</span>
            </div>
            ${it.more ? `<div class="item-more" id="more-${i}" hidden>${tx(it.more)}</div>` : ""}
          </li>`;
        }).join("")}
      </ul>

      <details class="section why" id="sec-why">
        <summary><span>${em(3, EMO.ui.why)}Rationale: why this checklist</span> <span class="sum-note">${esc(evLabel(cl.evidence))}</span></summary>
        <div class="sec-body">${paras(lvl() === 0 ? String(cl.why || "").replace(EMOJI_RE, "") : cl.why)}<p class="small muted">${esc(ev.help || "")}</p></div>
      </details>

      <details class="section" id="sec-src">
        <summary><span>${em(3, EMO.ui.sources)}Sources (${(cl.sources || []).length})</span> <span class="sum-note">${(cl.sources || []).filter(s => linkChecked(s.k)).length} human-opened</span></summary>
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
        <summary><span>${em(3, EMO.ui.review)}Human review (lower the slop)</span> <span class="sum-note" id="rev-note"></span></summary>
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
          <div class="btns"><button type="button" class="btn" id="copyRepo">${em(3, EMO.ui.copy)}Copy review for repo</button></div>
        </div>
      </details>`;

    const updateProgress = () => {
      const d = doneCount(cl), n = cl.items.length;
      main.querySelector("#prog-txt").textContent = d === n ? `${emText(2, EMO.ui.done)}All ${n} done` : `${d} of ${n} done`;
      main.querySelector("#prog-bar").style.width = `${n ? (100 * d / n) : 0}%`;
      main.querySelector("#prog").classList.toggle("complete", d === n);
    };
    let lastSlop = slopOf(cl);
    const updateMeter = () => {
      const s = slopOf(cl);
      main.querySelector("#meterSlot").innerHTML = meterBig(s);
      main.querySelector("#rev-note").textContent = `${s}% slop`;
      const rd = review(cl.id).date;
      main.querySelector("#rev-date").textContent = rd ? `Last reviewed ${rd}` : "Not reviewed yet.";
      const origin = main.querySelector("#meterSlot");
      if (s === 0 && lastSlop > 0) celebrate("verified", { title: cl.title }, origin);
      else if (slopLevel(s) < slopLevel(lastSlop)) celebrate("slop", { slop: s, label: LABELS[slopLevel(s)] }, origin);
      lastSlop = s;
    };
    updateProgress(); updateMeter();

    main.querySelectorAll(".item input[type=checkbox]").forEach(cb => cb.addEventListener("change", () => {
      const li = cb.closest(".item"), i = li.dataset.i;
      const c = store.checks[cl.id] = store.checks[cl.id] || {};
      if (cb.checked) c[i] = true; else delete c[i];
      li.classList.toggle("done", cb.checked); updateProgress();
      if (cb.checked) {
        const d = doneCount(cl), n = cl.items.length;
        if (d === n) celebrate("complete", { title: cl.title }, cb);
        else if (n >= 6 && d === Math.ceil(n / 2)) celebrate("half", { title: cl.title }, cb);
        else if (!store.seen.first) celebrate("first", {}, cb);
        else celebrate("tick", {}, cb);
        store.seen = Object.assign({}, store.seen, { first: true });
      }
      save();
    }));
    main.querySelectorAll(".more-btn").forEach(b => b.addEventListener("click", () => {
      const box = document.getElementById(b.getAttribute("aria-controls"));
      const open = b.getAttribute("aria-expanded") !== "true";
      b.setAttribute("aria-expanded", String(open)); box.hidden = !open; b.textContent = open ? "less" : "more";
    }));
    main.querySelector("#expandAll").addEventListener("click", e => {
      const btns = main.querySelectorAll(".more-btn");
      const label = e.currentTarget.querySelector("span:last-child");
      const open = label.textContent.startsWith("Show");
      btns.forEach(b => { b.setAttribute("aria-expanded", String(open)); document.getElementById(b.getAttribute("aria-controls")).hidden = !open; b.textContent = open ? "less" : "more"; });
      main.querySelector("#sec-why").open = open;
      label.textContent = open ? "Hide details" : "Show all details";
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
      <h1>${em(3, EMO.ui.about)}How the AI slop meter works</h1>
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

      <h2>${em(3, "🎉")}Emoji and celebrations</h2>
      <p>Use <strong>Display</strong> at the top of any page to pick how many emoji you want, from <em>None whatsoever</em> to <em>There's no such thing as too many</em> (the default is <em>Tactful</em>). Emoji are decorative, so screen readers skip them.</p>
      <p>Celebrations fire when you check your first box, reach the halfway point, finish a checklist, or lower a checklist's slop. Pick <em>Confetti</em>, <em>Quiet</em> (a message, nothing moves), or <em>Off</em>. If your device asks for reduced motion, you'll get the quiet version.</p>
      <div class="btns"><button type="button" class="btn" id="tryCelebrate">${em(2, "🎊")}Try a celebration</button></div>

      <h2>Where reviews are saved</h2>
      <p>Checkmarks and reviews live in <strong>this browser only</strong> (localStorage). They don't sync to other devices or other people. To make a review permanent for everyone, use <em>Copy review for repo</em> on a checklist and paste it into the data file, or export everything below and send it to whoever maintains the site.</p>
      <div class="btns">
        <button type="button" class="btn btn-primary" id="exportBtn">${em(3, EMO.ui.export)}Export my reviews & checks</button>
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
        const prefs = store.prefs;   // keep display settings
        store = empty(); store.prefs = prefs; save(); toast("Cleared"); renderAbout();
      }
    });
    main.querySelector("#tryCelebrate").addEventListener("click", e => celebrate("test", {}, e.currentTarget));
  }

  /* ---------------- Celebrations ----------------
     To add one: give it a key here, then call celebrate("key", data, originElement).
     size: 0 = a single pop, 1 = small burst, 2 = medium, 3 = big.  */
  const CELEBRATIONS = {
    first:    { size: 1, emo: ["✅", "🎵"], msg: () => "First box checked. That's how it starts." },
    tick:     { size: 0, silent: true },
    half:     { size: 1, emo: ["🎶", "⛳"], msg: d => `Halfway through "${d.title}".` },
    complete: { size: 3, emo: ["🎉", "🎺", "🥁", "🎊"], msg: d => `Checklist complete: ${d.title}` },
    slop:     { size: 1, emo: ["🧹", "📉"], msg: d => `Slop down to ${d.slop}%. ${d.label}.` },
    verified: { size: 3, emo: ["🏅", "🧑‍🏫", "🎉", "✨"], msg: d => `Human-verified! "${d.title}" is at 0% slop.` },
    test:     { size: 2, emo: ["🎉", "🎶", "✨", "🎊"], msg: () => "This is what a celebration looks like." }
  };
  function reduceMotion() { return !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches); }
  function celebrate(kind, data, origin) {
    const c = CELEBRATIONS[kind], mode = pref("celebrate");
    if (!c || mode === "off") return;
    if (!c.silent) {
      const n = [0, 1, 1, 2, c.emo.length][lvl()];
      toast((n ? c.emo.slice(0, n).join("") + " " : "") + c.msg(data || {}), "celebrate");
    }
    if (mode !== "confetti" || reduceMotion()) return;
    if (c.size === 0) { if (lvl() >= 4) burst(1, origin); else if (lvl() >= 3) pop(origin); return; }
    burst(c.size, origin);
  }
  function pop(origin) {
    if (!origin) return;
    const r = origin.getBoundingClientRect(), el = document.createElement("span");
    el.className = "emo-pop"; el.setAttribute("aria-hidden", "true");
    el.textContent = EMO.confetti[Math.floor(Math.random() * EMO.confetti.length)] || "✨";
    el.style.left = `${r.left + r.width / 2}px`; el.style.top = `${r.top}px`;
    document.body.appendChild(el); setTimeout(() => el.remove(), 900);
  }

  // A tiny confetti engine: one canvas, removed when the last particle lands.
  let confetti = null;
  function burst(size, origin) {
    const counts = [0, 26, 70, 150], n = counts[size] || 26;
    if (!confetti) {
      const cv = document.createElement("canvas");
      cv.className = "confetti"; cv.setAttribute("aria-hidden", "true");
      document.body.appendChild(cv);
      confetti = { cv, ctx: cv.getContext("2d"), parts: [], last: 0 };
      const fit = () => {
        const dpr = window.devicePixelRatio || 1;
        cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
        confetti.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };
      fit(); confetti.fit = fit; addEventListener("resize", fit);
      requestAnimationFrame(tickConfetti);
    }
    const r = origin && origin.getBoundingClientRect ? origin.getBoundingClientRect() : null;
    const ox = r ? r.left + r.width / 2 : innerWidth / 2, oy = r ? r.top + r.height / 2 : innerHeight / 3;
    const css = getComputedStyle(document.documentElement);
    const colors = ["--accent", "--focus", "--slop-1", "--slop-2", "--slop-3", "--slop-4"].map(v => css.getPropertyValue(v).trim()).filter(Boolean);
    const glyphShare = [0, 0, 0, .45, 1][lvl()];
    for (let i = 0; i < n; i++) {
      const big = size >= 3, a = big ? Math.random() * Math.PI * 2 : -Math.PI / 2 + (Math.random() - .5) * 2.2;
      const v = (big ? 5 : 3.5) + Math.random() * (big ? 9 : 6);
      confetti.parts.push({
        x: big && i % 2 ? (i % 4 === 1 ? 0 : innerWidth) : ox, y: big && i % 2 ? innerHeight * .65 : oy,
        vx: big && i % 2 ? (i % 4 === 1 ? 1 : -1) * (4 + Math.random() * 8) : Math.cos(a) * v,
        vy: big && i % 2 ? -(9 + Math.random() * 8) : Math.sin(a) * v,
        rot: Math.random() * 6, vr: (Math.random() - .5) * .35, life: 0, ttl: 90 + Math.random() * 70,
        w: 6 + Math.random() * 6, h: 4 + Math.random() * 6, color: colors[i % colors.length] || "#c26a2e",
        glyph: Math.random() < glyphShare ? EMO.confetti[i % EMO.confetti.length] : ""
      });
    }
  }
  function tickConfetti() {
    const c = confetti; if (!c) return;
    c.ctx.clearRect(0, 0, innerWidth, innerHeight);
    c.parts = c.parts.filter(p => p.life < p.ttl && p.y < innerHeight + 40);
    for (const p of c.parts) {
      p.life++; p.vy += .28; p.vx *= .985; p.vy *= .985; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      c.ctx.save(); c.ctx.globalAlpha = Math.min(1, (p.ttl - p.life) / 30);
      c.ctx.translate(p.x, p.y); c.ctx.rotate(p.rot);
      if (p.glyph) { c.ctx.font = "22px system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif"; c.ctx.textAlign = "center"; c.ctx.fillText(p.glyph, 0, 0); }
      else { c.ctx.fillStyle = p.color; c.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); }
      c.ctx.restore();
    }
    if (c.parts.length) requestAnimationFrame(tickConfetti);
    else { removeEventListener("resize", c.fit); c.cv.remove(); confetti = null; }
  }

  /* ---------------- Display panel (header) ---------------- */
  const SAMPLES = { none: "", barely: "🎻", tactful: "🎻 🎉", plenty: "🎻 🎉 💡 👂", max: "🎻🎉✨🎶🌟🎺" };
  function renderChrome() {
    document.documentElement.dataset.emoji = pref("emoji");
    document.querySelectorAll("[data-nav]").forEach(a => {
      if (!a.dataset.label) a.dataset.label = a.textContent.trim();
      a.innerHTML = em(3, EMO.ui[a.dataset.nav]) + esc(a.dataset.label);
    });
    const slot = document.getElementById("prefsSlot"); if (!slot) return;
    const wasOpen = !!slot.querySelector(".prefs-panel:not([hidden])");
    const cur = pref("emoji"), cm = pref("celebrate");
    slot.innerHTML = `<div class="prefs">
      <button type="button" class="prefs-btn" aria-expanded="${wasOpen}" aria-controls="prefsPanel">
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/></svg>
        ${em(4, EMO.ui.settings)}Display</button>
      <div class="prefs-panel" id="prefsPanel" ${wasOpen ? "" : "hidden"}>
        <fieldset>
          <legend>Emoji</legend>
          ${EMO.levels.map(l => `<label class="opt">
            <input type="radio" name="emoji" value="${l.id}" ${l.id === cur ? "checked" : ""}>
            <span class="opt-text"><strong>${esc(l.name)}${l.id === EMO.defaultLevel ? " (default)" : ""}</strong><span class="small muted">${esc(l.help || "")}</span></span>
            ${cur === "none" ? "" : `<span class="opt-sample" aria-hidden="true">${SAMPLES[l.id] || ""}</span>`}
          </label>`).join("")}
        </fieldset>
        <fieldset>
          <legend>Celebrations</legend>
          ${CELEB_MODES.map(m => `<label class="opt">
            <input type="radio" name="celebrate" value="${m.id}" ${m.id === cm ? "checked" : ""}>
            <span class="opt-text"><strong>${esc(m.name)}${m.id === "confetti" ? " (default)" : ""}</strong><span class="small muted">${esc(m.help)}</span></span>
          </label>`).join("")}
          ${reduceMotion() ? `<p class="small muted">Your device asks for reduced motion, so confetti stays quiet.</p>` : ""}
          <button type="button" class="btn" id="prefsTry">${em(2, "🎊")}Try a celebration</button>
        </fieldset>
      </div>
    </div>`;
    const btn = slot.querySelector(".prefs-btn"), panel = slot.querySelector(".prefs-panel");
    btn.addEventListener("click", () => {
      const open = panel.hidden; panel.hidden = !open; btn.setAttribute("aria-expanded", String(open));
    });
    slot.querySelectorAll("input[name=emoji]").forEach(r => r.addEventListener("change", () => {
      setPref("emoji", r.value); renderChrome(); route(true);
      const again = slot.querySelector(`input[name=emoji][value="${r.value}"]`); if (again) again.focus();
    }));
    slot.querySelectorAll("input[name=celebrate]").forEach(r => r.addEventListener("change", () => {
      setPref("celebrate", r.value);
      if (r.value !== "off") celebrate("test", {}, r);
    }));
    slot.querySelector("#prefsTry").addEventListener("click", e => celebrate("test", {}, e.currentTarget));
  }
  document.addEventListener("click", e => {
    const slot = document.getElementById("prefsSlot"), panel = slot && slot.querySelector(".prefs-panel");
    if (panel && !panel.hidden && !slot.contains(e.target)) { panel.hidden = true; slot.querySelector(".prefs-btn").setAttribute("aria-expanded", "false"); }
  });
  document.addEventListener("keydown", e => {
    const slot = document.getElementById("prefsSlot"), panel = slot && slot.querySelector(".prefs-panel");
    if (e.key === "Escape" && panel && !panel.hidden) { panel.hidden = true; const b = slot.querySelector(".prefs-btn"); b.setAttribute("aria-expanded", "false"); b.focus(); }
  });

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

  renderChrome();
  route();
})();
