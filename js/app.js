/* Adam and Billy's Checklists (for music teachers): a static, hash-routed app. No build step. */
(function () {
  "use strict";

  const CATS = window.MTC_CATEGORIES || [];
  const AUDS = window.MTC_AUDIENCES || [];
  const FMTS = window.MTC_FORMATS || [];
  const EVID = window.MTC_EVIDENCE || {};
  const SOURCES = window.MTC_SOURCES || {};
  const EMO = window.MTC_EMOJI || { levels: [{ id: "none", name: "None" }], defaultLevel: "none", ui: {}, evidence: {}, slop: {}, keywords: [], fallback: [], sparkle: [], confetti: [] };
  const CHECKLISTS = (window.MTC_CHECKLISTS || []).slice();
  const HISTORY = window.MTC_HISTORY || [];
  const SITE = "Adam and Billy's Checklists";
  const REPO = "https://github.com/adamborecki/checklists";
  const catById = Object.fromEntries(CATS.map(c => [c.id, c]));
  const audById = Object.fromEntries(AUDS.map(a => [a.id, a]));
  const fmtById = Object.fromEntries(FMTS.map(f => [f.id, f]));
  const clById = Object.fromEntries(CHECKLISTS.map(c => [c.id, c]));
  const catOrder = Object.fromEntries(CATS.map((c, i) => [c.id, i]));
  const main = document.getElementById("main");

  /* ---------------- Storage (localStorage, wrapped) ---------------- */
  const LS_KEY = "mtc.v1";
  const empty = () => ({ checks: {}, reviews: {}, links: {}, favs: {}, prefs: {}, seen: {} });
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
  // Celebration styles. Each one randomizes itself every time it plays.
  const STYLES = [
    { id: "confetti",  icon: "🎊", name: "Confetti",        help: "Paper confetti bursts out. Big wins fire from both sides." },
    { id: "fireworks", icon: "🎆", name: "Fireworks",       help: "Rockets launch and burst: rings, willows, crossettes." },
    { id: "balloons",  icon: "🎈", name: "Balloons",        help: "A bunch of balloons floats up past you." },
    { id: "notes",     icon: "🎶", name: "Music notes",     help: "Notes drift up and away, swaying as they go." },
    { id: "sparkles",  icon: "✨", name: "Sparkles",        help: "A twinkling starburst, with stray sparkles for big wins." },
    { id: "shower",    icon: "🎏", name: "Confetti shower", help: "Paper and streamers rain down from the top, blown by the wind." },
    { id: "bubbles",   icon: "🫧", name: "Bubbles",         help: "Bubbles wobble up and pop." }
  ];
  const CELEB_MODES = STYLES.concat([
    { id: "random", icon: "🎲", name: "Surprise me",  help: "A different style every time." },
    { id: "quiet",  icon: "🔕", name: "Quiet",        help: "Just a message. Nothing moves." },
    { id: "off",    icon: "",   name: "Off",          help: "No celebrations at all." }
  ]);
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
  // Weights add to 100. Slop = 100 − checked points.
  // Humans earn full points. AI checks earn partial credit on the source checks only:
  // an AI that confirmed a link resolves earns half the link points; an AI that matched
  // claims to the sources earns a quarter of the claim points (half after an independent
  // second AI check). So a cheap, unchecked AI draft is 100% slop, while a draft whose
  // sources were verified and claims matched starts at 85%.
  const W = { read: 15, edited: 20, expert: 20, links: 15, claims: 30 };
  const AI_CREDIT = { links: 0.5, claims: { none: 0, drafter: 0.25, "second-check": 0.5 } };
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
  function aiOf(cl) {
    const a = cl.ai || {};
    return { links: a.links ? AI_CREDIT.links : 0, claims: AI_CREDIT.claims[a.claims] || 0 };
  }
  function hasHuman(cl) {
    const r = review(cl.id), keys = (cl.sources || []).map(s => s.k);
    return !!(r.read || r.edited || r.expert || keys.some(linkChecked) || keys.some(k => r.claims[k]));
  }
  function slopOf(cl) {
    const r = review(cl.id), ai = aiOf(cl);
    let pts = (r.read ? W.read : 0) + (r.edited ? W.edited : 0) + (r.expert ? W.expert : 0);
    const keys = (cl.sources || []).map(s => s.k);
    if (keys.length) {
      pts += W.links * keys.reduce((a, k) => a + (linkChecked(k) ? 1 : ai.links), 0) / keys.length;
      pts += W.claims * keys.reduce((a, k) => a + (r.claims[k] ? 1 : ai.claims), 0) / keys.length;
    } else {
      pts += r.edited ? W.links + W.claims : 0;
    }
    return Math.max(0, Math.round(100 - pts));
  }
  function slopLevel(s) { return s >= 90 ? 5 : s >= 65 ? 4 : s >= 35 ? 3 : s >= 10 ? 2 : 1; }
  function slopLabel(cl) {
    const s = slopOf(cl);
    if (!hasHuman(cl)) return s < 100 ? "AI-checked draft, no human review yet" : "Raw AI draft, unchecked";
    return s >= 65 ? "A human has started checking" : s >= 35 ? "Partly human-checked" : s >= 10 ? "Mostly human-checked" : "Human-verified";
  }
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

  function meterBig(s, title, label) {
    const lv = slopLevel(s);
    return `<div class="meter meter-big s${lv}" style="--pct:${s}%">
      <div class="meter-head">
        <span class="meter-title">${esc(title || "AI slop meter")}</span>
        <span><span class="meter-num">${s}%</span> <span class="meter-label">${slopEmo(lv)}${esc(label || "")}</span></span>
      </div>
      <div class="meter-bar" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${s}" aria-label="AI slop ${s} percent"><div class="meter-fill"></div></div>
      <div class="meter-ends"><span>0% · human-verified</span><span>100% · raw AI draft</span></div>
    </div>`;
  }
  // A quiet one-line tag for lists: "AI-checked · 85% slop".
  function slopTag(cl) {
    const s = slopOf(cl), lv = slopLevel(s);
    const who = hasHuman(cl) ? (s < 10 ? "Human-verified" : "Human-checked") : (s < 100 ? "AI-checked" : "AI draft");
    return `<span class="slop-tag s${lv}" title="${esc(slopLabel(cl))}">${esc(who)} · ${s}% slop</span>`;
  }
  function slopEmo(lv) {
    const e = EMO.slop[lv]; if (!e || lvl() < 3) return "";
    return em(3, lvl() >= 4 ? e.repeat(lv >= 4 ? 3 : 2) : e);
  }
  function evLabel(ev) { return (EVID[ev] && EVID[ev].name) || ev; }
  function evHtml(ev) { return `${em(3, EMO.evidence[ev])}${esc(evLabel(ev))}`; }
  function catHtml(c, min) { return `${em(min, c.emoji)}${esc(c.name || c.id)}`; }

  /* ---------------- Favorites (hearts) ---------------- */
  // An SVG, not an emoji, so hearts still show at "None whatsoever".
  function heartIcon(on) {
    return `<svg class="heart${on ? " on" : ""}" aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path d="M12 20.3l-1.3-1.2C5.6 14.5 2.5 11.7 2.5 8.2 2.5 5.4 4.7 3.2 7.5 3.2c1.6 0 3.1.7 4.5 2.2 1.4-1.5 2.9-2.2 4.5-2.2 2.8 0 5 2.2 5 5 0 3.5-3.1 6.3-8.2 10.9L12 20.3z"/></svg>`;
  }
  function isFav(id) { return !!(store.favs && store.favs[id]); }
  function favCount() { return Object.keys(store.favs || {}).filter(id => clById[id]).length; }
  function toggleFav(id) {
    store.favs = Object.assign({}, store.favs);
    if (store.favs[id]) delete store.favs[id]; else store.favs[id] = today();
    const on = isFav(id);
    if (on && !store.seen.fav) toast("Saved to favorites. It lives in this browser on this device only. Open Your data to back it up.");
    else toast(on ? "Added to favorites" : "Removed from favorites");
    store.seen = Object.assign({}, store.seen, { fav: true });
    save(); paintFavLink();
  }
  function favButton(cl, big) {
    const on = isFav(cl.id);
    return big
      ? `<button type="button" class="btn fav-big" aria-pressed="${on}">${heartIcon(on)}<span>${on ? "Saved to favorites" : "Save to favorites"}</span></button>`
      : `<button type="button" class="fav-btn" data-fav="${cl.id}" aria-pressed="${on}" aria-label="${on ? "Remove from" : "Add to"} favorites: ${esc(cl.title)}" title="${on ? "Remove from" : "Add to"} favorites">${heartIcon(on)}</button>`;
  }
  function paintFav(btn, on, big) {
    btn.setAttribute("aria-pressed", String(on));
    const svg = btn.querySelector("svg"); if (svg) svg.classList.toggle("on", on);
    if (big) btn.querySelector("span").textContent = on ? "Saved to favorites" : "Save to favorites";
    else { const t = (clById[btn.dataset.fav] || {}).title || ""; btn.setAttribute("aria-label", `${on ? "Remove from" : "Add to"} favorites: ${t}`); btn.title = `${on ? "Remove from" : "Add to"} favorites`; }
    if (on) { btn.classList.remove("fav-pop"); void btn.offsetWidth; btn.classList.add("fav-pop"); }
  }
  function paintFavLink() {
    const a = document.querySelector(".fav-link"); if (!a) return;
    const n = favCount();
    a.querySelector(".fav-count").textContent = n ? String(n) : "";
    a.setAttribute("aria-label", `Favorites, ${n} saved`);
    a.querySelector("svg").classList.toggle("on", n > 0);
  }

  /* ---------------- Router ---------------- */
  function route(keepScroll) {
    const h = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    const [view, arg] = [h.split("/")[0], h.split("/").slice(1).join("/")];
    let nav = "list";
    filters.fav = view === "favorites";
    if (view === "c" && clById[arg]) { renderChecklist(clById[arg]); nav = ""; }
    else if (view === "categories") { renderCategories(); nav = "categories"; }
    else if (view === "category" && catById[arg]) { filters.cat = arg; filters.tag = ""; filters.fromRoute = true; renderList(); nav = "categories"; }
    else if (view === "tags") { renderTags(); nav = "tags"; }
    else if (view === "tag") { filters.tag = arg; filters.cat = ""; filters.fromRoute = true; renderList(); nav = "tags"; }
    else if (view === "about") { renderAbout(); nav = "about"; }
    else if (view === "history") { renderHistory(arg); nav = "history"; }
    else if (view === "favorites") { renderList(); nav = "favorites"; }
    else if (view === "data") { renderData(); nav = "data"; }
    else {
      // A category/tag picked by URL is cleared when going back to the plain list.
      if (filters.fromRoute) { filters.cat = ""; filters.tag = ""; filters.fromRoute = false; }
      renderList();
    }
    document.querySelectorAll("[data-nav]").forEach(a => {
      if (a.dataset.nav === nav) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    const fl = document.querySelector(".fav-link");
    if (fl) { if (nav === "favorites") fl.setAttribute("aria-current", "page"); else fl.removeAttribute("aria-current"); }
    if (keepScroll !== true && !(view === "history" && arg)) window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", () => route());

  /* ---------------- List view ---------------- */
  const filters = { q: "", cat: "", aud: "", fmt: "", tag: "", fav: false, sort: "cat", fromRoute: false };

  function renderList() {
    document.title = SITE;
    main.innerHTML = `
      <section class="intro">
        ${filters.fav ? `<h1>${heartIcon(true)}Your favorites</h1>
        <p>Checklists you've hearted. They're saved in this browser on this device only, with no account. <a href="#/data">Back them up</a>.</p>`
        : `<h1>${sparkle(0)}Adam and Billy's checklists${em(4, "🎶", true)}</h1>
        <p>Checklists for music teachers, with the reasons and the research behind them.</p>`}
      </section>
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
        <div class="filter-row chips" role="group" aria-label="What are you teaching?">
          <span class="chip-label">What you're teaching:</span>
          ${FMTS.map(f => `<button type="button" class="chip" data-fmt="${f.id}" aria-pressed="${filters.fmt === f.id}">${em(3, f.emoji)}${esc(f.name)}</button>`).join("")}
        </div>
        <div class="filter-row chips" role="group" aria-label="Who it's for">
          <span class="chip-label">Who it's for:</span>
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
    main.querySelectorAll("[data-fmt]").forEach(b => b.addEventListener("click", () => {
      filters.fmt = filters.fmt === b.dataset.fmt ? "" : b.dataset.fmt;
      main.querySelectorAll("[data-fmt]").forEach(x => x.setAttribute("aria-pressed", String(filters.fmt === x.dataset.fmt)));
      drawList();
    }));
    main.querySelector("#list").addEventListener("click", e => {
      const b = e.target.closest("[data-fav]"); if (!b) return;
      toggleFav(b.dataset.fav);
      if (filters.fav) drawList(); else paintFav(b, isFav(b.dataset.fav));
    });
    drawList();
  }

  function matches(cl) {
    if (filters.cat && cl.cat !== filters.cat) return false;
    if (filters.aud && !(cl.aud || []).includes(filters.aud)) return false;
    if (filters.fmt && !(cl.fmt || []).includes(filters.fmt)) return false;
    if (filters.fav && !isFav(cl.id)) return false;
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
    main.querySelector("#count").textContent = filters.fav ? `${rows.length} favorite${rows.length === 1 ? "" : "s"}` : `${rows.length} of ${CHECKLISTS.length} checklists`;
    if (!rows.length) {
      list.innerHTML = filters.fav && !favCount() ? `<li class="empty">No favorites yet. Tap the heart on any checklist to save it here.</li>` : `<li class="empty">Nothing matches. Try fewer filters.</li>`;
      return;
    }
    list.innerHTML = rows.map((cl, i) => {
      const d = doneCount(cl), n = cl.items.length;
      return `<li class="cl-item"><a class="cl-row" href="#/c/${cl.id}">
        <div class="cl-main">
          <div class="cl-title">${em(2, cl.emoji)}${tx(cl.title)}${sparkle(i, true)}</div>
          <div class="cl-summary">${tx(cl.summary)}</div>
          <div class="cl-meta">
            <span class="cat-pill">${catHtml(catById[cl.cat] || { id: cl.cat }, 3)}</span>
            <span class="ev ev-${cl.evidence}">${evHtml(cl.evidence)}</span>
            <span class="progress-pill${d === n ? " is-done" : ""}">${d === n ? `${em(2, EMO.ui.done)}Done` : d ? `${d}/${n} done` : `${n} items`}</span>
            <span>${em(4, EMO.ui.sources)}${(cl.sources || []).length} sources</span>
            ${slopTag(cl)}
          </div>
        </div>
      </a>${favButton(cl)}</li>`;
    }).join("");
  }

  /* ---------------- Categories & tags ---------------- */
  function renderCategories() {
    document.title = `Categories · ${SITE}`;
    main.innerHTML = `<h1>${em(3, EMO.ui.categories)}Categories</h1>
      <div class="grid">${CATS.map(c => {
        const cls = CHECKLISTS.filter(x => x.cat === c.id);
        return `<a class="card" href="#/category/${c.id}">
          <h3>${catHtml(c, 1)}${em(4, "✨", true)}</h3><p>${esc(c.blurb)}</p>
          <p class="small muted">${cls.length} checklist${cls.length === 1 ? "" : "s"}</p></a>`;
      }).join("")}</div>`;
  }
  function renderTags() {
    document.title = `Tags · ${SITE}`;
    main.innerHTML = `<h1>${em(3, EMO.ui.tags)}Tags</h1>
      <h2>What you're teaching</h2>
      <div class="tag-cloud">${FMTS.map(f => {
        const n = CHECKLISTS.filter(c => (c.fmt || []).includes(f.id)).length;
        return `<a class="chip" href="#/" data-gofmt="${f.id}">${em(3, f.emoji)}${esc(f.name)} · ${n}</a>`;
      }).join("")}</div>
      <h2>Who it's for</h2>
      <div class="tag-cloud">${AUDS.map(a => {
        const n = CHECKLISTS.filter(c => (c.aud || []).includes(a.id)).length;
        return `<a class="chip" href="#/" data-goaud="${a.id}">${em(3, a.emoji)}${esc(a.name)} · ${n}</a>`;
      }).join("")}</div>
      <h2>Topics</h2>
      <div class="tag-cloud">${allTags().map(([t, n]) => `<a class="chip" href="#/tag/${encodeURIComponent(t)}">${em(4, itemEmoji(t, n) || "🏷️")}${esc(t)} · ${n}</a>`).join("")}</div>`;
    main.querySelectorAll("[data-goaud]").forEach(a => a.addEventListener("click", () => { filters.aud = a.dataset.goaud; filters.cat = ""; filters.tag = ""; }));
    main.querySelectorAll("[data-gofmt]").forEach(a => a.addEventListener("click", () => { filters.fmt = a.dataset.gofmt; filters.cat = ""; filters.tag = ""; }));
  }

  /* ---------------- Checklist view ---------------- */
  function renderChecklist(cl) {
    document.title = `${cl.title} · ${SITE}`;
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
        ${favButton(cl, true)}
        <span class="small muted">For: ${(cl.aud || []).length >= AUDS.length ? `${em(4, "🌈")}everyone` : (cl.aud || []).map(a => em(3, (audById[a] || {}).emoji) + esc((audById[a] || {}).name || a)).join(" · ")}</span>
      </div>
      ${(cl.fmt || []).length ? `<div class="meta-line"><span class="small muted">Setting: ${cl.fmt.map(f => em(3, (fmtById[f] || {}).emoji) + esc((fmtById[f] || {}).name || f)).join(" · ")}</span></div>` : ""}
      <div class="meta-line">${(cl.tags || []).map(t => `<a class="chip" href="#/tag/${encodeURIComponent(t)}">${lvl() >= 4 ? em(4, itemEmoji(t, 0) || "🏷️") : "#"}${esc(t)}</a>`).join("")}</div>
      <p class="slop-line"><button type="button" class="linklike slop-jump" id="slopJump"></button></p>

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
          <p class="ai-note"><strong>AI checks so far:</strong> ${esc((cl.ai && cl.ai.note) || "None recorded. Treat these sources as unverified.")} A person still needs to confirm each source says what we claim. That's the check below each source.</p>
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
        <summary><span>${em(3, EMO.ui.review)}Review & AI slop meter</span> <span class="sum-note" id="rev-note"></span></summary>
        <div class="sec-body">
          <div id="meterSlot"></div>
          <p class="small muted">Tick what a real person has done. Source checks above count too. Your review lowers the meter right away, but only in this browser on this device. To make it count for everyone, use "Copy review for repo," or <a href="#/data">export your data</a> and send the file to Adam or Billy. <a href="#/about">How the meter works</a></p>
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
      main.querySelector("#meterSlot").innerHTML = meterBig(s, "AI slop meter", slopLabel(cl));
      main.querySelector("#rev-note").textContent = `${s}% slop`;
      main.querySelector("#slopJump").innerHTML = slopTag(cl);
      const rd = review(cl.id).date;
      main.querySelector("#rev-date").textContent = rd ? `Last reviewed ${rd}` : "Not reviewed yet.";
      const origin = main.querySelector("#meterSlot");
      if (s === 0 && lastSlop > 0) celebrate("verified", { title: cl.title }, origin);
      else if (slopLevel(s) < slopLevel(lastSlop)) celebrate("slop", { slop: s, label: slopLabel(cl) }, origin);
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
    main.querySelector("#slopJump").addEventListener("click", () => {
      const sec = main.querySelector("#sec-review"); sec.open = true;
      sec.scrollIntoView({ behavior: "smooth", block: "start" });
    });

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
    main.querySelector(".fav-big").addEventListener("click", e => { toggleFav(cl.id); paintFav(e.currentTarget, isFav(cl.id), true); });
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

  /* ---------------- About & the slop meter ---------------- */
  function renderAbout() {
    document.title = `About · ${SITE}`;
    const human = CHECKLISTS.filter(hasHuman).length;
    const aiOnly = CHECKLISTS.filter(c => !hasHuman(c) && slopOf(c) < 100).length;
    const pct = v => `${Math.round(v * 100)}%`;
    main.innerHTML = `<div class="prose">
      <h1>${em(3, EMO.ui.about)}About these checklists</h1>
      <p>Adam and Billy's checklists for music teachers: preschool through college, private studios, TAs, and administrators. AI (Claude) drafted them with real, linked sources, and people check them over time. See the <a href="#/history">site history</a> for how it was made, prompt by prompt.</p>

      <h2>The AI slop meter</h2>
      <p>"Slop" is the chance that a confident-sounding AI draft is wrong, generic, or a little off from what its source says. Each checklist's meter lives in its <em>Review</em> section and shows how much has actually been checked, and by whom.</p>
      ${meterBig(siteSlop(), "Whole site right now", `${human} of ${CHECKLISTS.length} have a human check`)}
      <p>Right now ${aiOnly} checklists have AI checks only, and ${human} have at least one human check.</p>

      <h3>Not all AI drafts are equally sloppy</h3>
      <p>A cheap AI that writes from memory and never checks anything is <strong>100% slop</strong>. An AI that confirmed every source exists and matched each claim to the source's abstract has done real work, so that draft starts at <strong>85%</strong>. AI checks only count toward the source checks, and for less than a person's check. Only humans can earn the read, fix, and expert points.</p>
      <table class="score-table">
        <thead><tr><th>Check</th><th>AI can earn</th><th>Human earns</th></tr></thead>
        <tbody>
          <tr><td>Read the whole checklist</td><td>0</td><td>−${W.read}</td></tr>
          <tr><td>Fixed what was wrong or generic (or confirmed it's fine)</td><td>0</td><td>−${W.edited}</td></tr>
          <tr><td>Reviewed by someone who does this job</td><td>0</td><td>−${W.expert}</td></tr>
          <tr><td>Source links resolve to the right source</td><td>−${W.links * AI_CREDIT.links} (${pct(AI_CREDIT.links)})</td><td>−${W.links}</td></tr>
          <tr><td>Sources support how they're used: claims matched by the drafting AI</td><td>−${W.claims * AI_CREDIT.claims.drafter} (${pct(AI_CREDIT.claims.drafter)})</td><td rowspan="2">−${W.claims}</td></tr>
          <tr><td>…plus an independent second AI double-check</td><td>−${W.claims * AI_CREDIT.claims["second-check"]} total (${pct(AI_CREDIT.claims["second-check"])})</td></tr>
        </tbody>
      </table>
      <p class="small muted">Source points are split evenly across a checklist's sources. A human check on a source replaces the AI credit for that source.</p>
      <ul>
        <li><strong>100%</strong>: raw AI draft, nothing checked.</li>
        <li><strong>93%</strong>: the AI verified links, or matched claims, but not both. These are the 21 checklists added by the cloud session on Oct 23 (links verified) and the 7 added on Oct 25 (claims matched to abstracts found by search; links not yet live-checked).</li>
        <li><strong>85%</strong>: links verified and claims matched to abstracts by the drafting AI. These are the first 47 checklists.</li>
        <li><strong>~78%</strong>: the most AI alone can reach, after an independent second AI double-check of claims.</li>
        <li><strong>Below that</strong>: only people can take it further. 0% means a human read it, fixed it, had an expert review it, and checked every source.</li>
      </ul>

      <h2>What the AI did and didn't check</h2>
      <ul>
        <li><strong>Did:</strong> resolved every DOI against Crossref and opened or searched for every web link (re-run Oct 23 for all 147 sources).</li>
        <li><strong>Did (first 47):</strong> read available abstracts and wrote claims to match them.</li>
        <li><strong>Didn't:</strong> read most full papers. Some claims come from abstracts or general knowledge of the literature.</li>
        <li><strong>Didn't:</strong> check your state's laws, your district's policies, or your institution's rules.</li>
      </ul>

      <h2>Evidence labels</h2>
      <ul>${Object.entries(EVID).map(([k, v]) => `<li><span class="ev ev-${k}">${esc(v.name)}</span>: ${esc(v.help)}</li>`).join("")}</ul>

      <h2>${em(3, "🎉")}Emoji and celebrations</h2>
      <p>Use <strong>Display</strong> at the top of any page to pick how many emoji you want, from <em>None whatsoever</em> to <em>There's no such thing as too many</em> (the default is <em>Tactful</em>). Emoji are decorative, so screen readers skip them.</p>
      <p>Celebrations fire when you check your first box, reach the halfway point, finish a checklist, or lower a checklist's slop. Pick one of ${STYLES.length} styles (${STYLES.map(x => x.name.toLowerCase()).join(", ")}), <em>Surprise me</em> for a different one each time, <em>Quiet</em> (a message, nothing moves), or <em>Off</em>. Every style re-rolls its colors, shapes, and timing, so no two look the same. Previews play at half strength, with a short cooldown between tries. If your device asks for reduced motion, you'll get the quiet version.</p>
      <div class="btns"><button type="button" class="btn" data-preview data-label="Try a celebration">${em(2, "🎊")}<span class="pv-label">Try a celebration</span></button></div>

      <h2>Where your checkmarks, favorites, and reviews are saved</h2>
      <p>In <strong>this browser on this device only</strong>. There's no account. See <a href="#/data">Your data</a> to export a backup, move it to another device, or send your reviews to Adam and Billy.</p>

      <h2>Not advice</h2>
      <p>Nothing here is legal, medical, or mental-health advice. Laws and policies (mandated reporting, FERPA, Title IX, copyright) vary by place and change over time. If a student is in danger, contact emergency services or, in the U.S., call or text 988.</p>
    </div>`;

    wirePreviews(main);
  }

  /* ---------------- Your data: what's saved, export, import ---------------- */
  function dataSummary() {
    const checked = Object.entries(store.checks).filter(([id, c]) => clById[id] && Object.keys(c).length);
    const reviewed = Object.keys(store.reviews).filter(id => clById[id] && hasHuman(clById[id]));
    return {
      checklists: checked.length, checks: checked.reduce((a, [, c]) => a + Object.keys(c).length, 0),
      done: checked.filter(([id]) => doneCount(clById[id]) === clById[id].items.length).length,
      favs: favCount(), reviewed: reviewed.length, links: Object.values(store.links).filter(Boolean).length
    };
  }
  function renderData() {
    document.title = `Your data · ${SITE}`;
    const d = dataSummary(), plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
    const last = store.seen.exported;
    main.innerHTML = `<div class="prose">
      <h1>${em(3, EMO.ui.export)}Your data</h1>
      <div class="callout">
        <p><strong>No account. Nothing is sent anywhere.</strong> Everything you do here is saved only in <strong>this browser on this device</strong>. A different browser, a different device, or a private window won't see it. Clearing your browser's site data erases it.</p>
      </div>
      <h2>What's saved here</h2>
      <ul class="data-list">
        <li><strong>${plural(d.favs, "favorite")}</strong>${d.favs ? ` · <a href="#/favorites">see them</a>` : ""}</li>
        <li><strong>${plural(d.checks, "checkmark")}</strong> across ${plural(d.checklists, "checklist")}${d.done ? ` (${d.done} finished)` : ""}</li>
        <li><strong>${plural(d.reviewed, "checklist")}</strong> with your human review, which lowers their slop meter in this browser</li>
        <li><strong>${plural(d.links, "source")}</strong> you marked as opened and correct</li>
        <li>Your display settings: emoji level and celebration style</li>
      </ul>

      <h2>Back up or move to another device</h2>
      <p>Export downloads one small file with everything above. Import it on another browser or device to merge it in. Nothing you already have is deleted.</p>
      <div class="btns">
        <button type="button" class="btn btn-primary" id="exportBtn">${em(3, EMO.ui.export)}Export a backup</button>
        <label class="btn" for="importFile">Import a backup…</label>
        <input type="file" id="importFile" accept="application/json,.json" class="visually-hidden">
      </div>
      <p class="small muted">${last ? `Last exported in this browser: ${esc(last)}.` : "You haven't exported from this browser yet."}</p>

      <h2>Make your reviews count for everyone</h2>
      <p>Each checklist's AI slop meter drops when a person reviews it: reading it, fixing it, having an expert look, and checking each source. You do that in the checklist's <em>Review &amp; AI slop meter</em> section. Your review lowers the meter immediately, but only for you, in this browser.</p>
      <p>To lower it for everyone, either use <em>Copy review for repo</em> on that checklist and add it to the site's data, or export a backup here and send the file to Adam or Billy. Reviews in the site's data show up for every visitor.</p>

      <h2>Start over</h2>
      <p>Clear removes checkmarks, favorites, and reviews from this browser. Your display settings stay.</p>
      <div class="btns"><button type="button" class="btn" id="clearAll">Clear everything in this browser</button></div>
    </div>`;

    main.querySelector("#exportBtn").addEventListener("click", () => {
      store.seen = Object.assign({}, store.seen, { exported: today() }); save();
      const { checks, reviews, links, favs, prefs } = store;
      download(`checklists-backup-${today()}.json`, JSON.stringify({ app: "mtc", version: 2, exported: new Date().toISOString(), checks, reviews, links, favs, prefs }, null, 2));
      renderData();
    });
    main.querySelector("#importFile").addEventListener("change", e => {
      const f = e.target.files[0]; if (!f) return;
      f.text().then(t => {
        const d = JSON.parse(t);
        if (!d || typeof d !== "object" || !(d.checks || d.reviews || d.links || d.favs)) throw new Error("not an export");
        ["checks", "reviews", "links", "favs", "prefs"].forEach(k => { if (d[k] && typeof d[k] === "object") store[k] = Object.assign({}, store[k], d[k]); });
        save(); renderChrome(); toast("Imported and merged"); renderData();
      }).catch(() => toast("That file didn't look like a backup from this site."));
    });
    main.querySelector("#clearAll").addEventListener("click", () => {
      if (confirm("Clear all checkmarks, favorites, and reviews saved in this browser? This can't be undone unless you exported a backup.")) {
        const prefs = store.prefs;   // keep display settings
        store = empty(); store.prefs = prefs; save(); paintFavLink(); toast("Cleared"); renderData();
      }
    });
  }

  /* ---------------- Site history ---------------- */
  function renderHistory(focusId) {
    document.title = `History · ${SITE}`;
    const commitLink = sha => `<a href="${REPO}/commit/${encodeURIComponent(sha)}" target="_blank" rel="noopener"><code>${esc(sha)}</code></a>`;
    main.innerHTML = `<div class="prose">
      <h1>${em(3, EMO.ui.history)}How this site was made</h1>
      <p>Every prompt and change that shaped the site, oldest first. Each entry has a quick summary. Open <em>Full prompt</em> for the exact words, typos included. <a href="${REPO}/commits/main" target="_blank" rel="noopener">All commits on GitHub</a>.</p>
      <ol class="history">${HISTORY.map((h, i) => `
        <li class="h-entry" id="h-${esc(h.id)}">
          <div class="h-head">
            <span class="h-num">${i + 1}</span>
            <div>
              <h2 class="h-title"><a href="#/history/${esc(h.id)}">${esc(h.title)}</a></h2>
              <p class="h-meta">${esc(h.date)}${h.time ? `, ${esc(h.time)}` : ""} · ${esc(h.who)} · ${esc(h.agent)}</p>
            </div>
          </div>
          <p>${esc(h.summary)}</p>
          ${h.prompt ? `<details class="h-full"${focusId === h.id ? " open" : ""}><summary>Full prompt${h.qa && h.qa.length ? " and answers" : ""}</summary>
            <blockquote class="h-prompt">${esc(h.prompt)}</blockquote>
            ${(h.qa || []).map(x => `<p class="h-q"><strong>Q:</strong> ${esc(x.q)}</p><blockquote class="h-prompt">${esc(x.a)}</blockquote>`).join("")}
          </details>` : h.promptNote ? `<p class="small muted">Prompt: ${esc(h.promptNote)}</p>` : ""}
          ${h.did && h.did.length ? `<details class="h-full"${focusId === h.id ? " open" : ""}><summary>What happened</summary><ul>${h.did.map(d => `<li>${esc(d)}</li>`).join("")}</ul></details>` : ""}
          <p class="small h-links">${(h.commits || []).length ? `Commit${h.commits.length > 1 ? "s" : ""}: ${h.commits.map(commitLink).join(", ")}` : ""}
            ${(h.links || []).map(l => `${(h.commits || []).length ? " · " : ""}<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</p>
        </li>`).join("")}
      </ol>
    </div>`;
    if (focusId) {
      const el = document.getElementById("h-" + focusId);
      if (el) setTimeout(() => el.scrollIntoView({ block: "start" }), 0);
    }
  }

  /* ---------------- Celebrations ----------------
     Events (below) say WHAT happened. Styles (STYLES) say HOW it looks. Each style
     re-rolls its palette, shapes, angles, and timing every time, so no two are alike.
     To add an event: give it a key here, then call celebrate("key", data, originElement).
     size: 0 = a single pop, 1 = small, 2 = medium, 3 = big.  */
  const CELEBRATIONS = {
    first:    { size: 1, emo: ["✅", "🎵", "👏", "🙌"],
                msg: () => pickOne(["First box checked. That's how it starts.", "One down. And we're off.", "First check. The downbeat.", "Off to a good start."]) },
    tick:     { size: 0, silent: true },
    half:     { size: 1, emo: ["🎶", "⛳", "💪", "🚀"],
                msg: d => pickOne([`Halfway through "${d.title}".`, `Half done. Keep going.`, `Halfway there. No intermission yet.`, `You're at the halfway double bar.`]) },
    complete: { size: 3, emo: ["🎉", "🎺", "🥁", "🎊", "🏆", "🙌"],
                msg: d => pickOne([`Checklist complete: ${d.title}`, `Done! Every box in "${d.title}".`, `That's a wrap: ${d.title}`, `Fine. (As in, the end.) "${d.title}" is done.`, `All checked. Take a bow.`]) },
    slop:     { size: 1, emo: ["🧹", "📉", "🧽"],
                msg: d => pickOne([`Slop down to ${d.slop}%. ${d.label}.`, `Less slop: ${d.slop}% now. ${d.label}.`]) },
    verified: { size: 3, emo: ["🏅", "🧑‍🏫", "🎉", "✨"],
                msg: d => pickOne([`Human-verified! "${d.title}" is at 0% slop.`, `0% slop. A real person stands behind "${d.title}".`]) },
    test:     { size: 2, emo: ["🎉", "🎶", "✨", "🎊"],
                msg: d => d.random ? `Surprise me picked ${d.name} this time. Previews play at half strength.` : `${d.name}, at half strength. The real thing is bigger.` }
  };
  function reduceMotion() { return !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches); }
  function pickOne(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function shuffled(arr) { return arr.slice().sort(() => Math.random() - .5); }
  let lastStyle = "";
  function resolveStyle(mode) {
    if (mode !== "random") return mode;
    const pool = STYLES.map(s => s.id).filter(id => id !== lastStyle);   // never the same twice in a row
    return pickOne(pool);
  }
  // opts: { style: force a style, preview: true for half strength }
  function celebrate(kind, data, origin, opts) {
    const c = CELEBRATIONS[kind], o = opts || {}, mode = o.style || pref("celebrate");
    if (!c || mode === "off") return;
    const style = mode === "quiet" ? "" : resolveStyle(mode);
    if (style) lastStyle = style;
    const d = Object.assign({}, data, { name: (STYLES.find(s => s.id === style) || {}).name || "Quiet", random: mode === "random" });
    if (!c.silent) {
      const n = [0, 1, 1, 2, 4][lvl()];
      toast((n ? shuffled(c.emo).slice(0, n).join("") + " " : "") + c.msg(d), "celebrate");
    }
    if (!style || reduceMotion()) return;
    if (c.size === 0) { if (lvl() >= 4) runEffect(style, 1, origin, .6); else if (lvl() >= 3) pop(origin); return; }
    runEffect(style, c.size, origin, o.preview ? .5 : 1);
  }
  function pop(origin) {
    if (!origin) return;
    const r = origin.getBoundingClientRect(), el = document.createElement("span");
    el.className = "emo-pop"; el.setAttribute("aria-hidden", "true");
    el.textContent = pickOne(EMO.confetti.length ? EMO.confetti : ["✨"]);
    el.style.left = `${r.left + r.width / 2 + rnd(-8, 8)}px`; el.style.top = `${r.top}px`;
    el.style.setProperty("--drift", `${rnd(-30, 30)}px`);
    document.body.appendChild(el); setTimeout(() => el.remove(), 900);
  }

  // Previews: half strength, and a short cooldown so tries don't pile up on each other.
  const COOLDOWN = 3500;
  let coolUntil = 0, coolTimer = 0;
  function previewCelebration(style, origin) {
    if (Date.now() < coolUntil) return false;
    celebrate("test", {}, origin, { style, preview: true });
    coolUntil = Date.now() + COOLDOWN;
    paintCooldown();
    return true;
  }
  function paintCooldown() {
    clearTimeout(coolTimer);
    const left = coolUntil - Date.now();
    document.querySelectorAll("[data-preview]").forEach(b => {
      const label = b.querySelector(".pv-label");
      b.disabled = left > 0;
      b.classList.toggle("cooling", left > 0);
      if (left > 0) b.style.setProperty("--cool-left", `${left}ms`);
      if (label) label.textContent = left > 0 ? `Ready in ${Math.ceil(left / 1000)}…` : b.dataset.label;
    });
    if (left > 0) coolTimer = setTimeout(paintCooldown, Math.min(250, left));
  }

  /* A small particle engine: one canvas, removed when the last particle is gone. */
  const W_ = () => innerWidth, H_ = () => innerHeight;
  const MAX_PARTS = 1000;
  let fx = null;
  function ensureFx() {
    if (fx) return fx;
    const cv = document.createElement("canvas");
    cv.className = "confetti"; cv.setAttribute("aria-hidden", "true");
    document.body.appendChild(cv);
    fx = { cv, ctx: cv.getContext("2d"), parts: [] };
    fx.fit = () => {
      const dpr = window.devicePixelRatio || 1;
      cv.width = W_() * dpr; cv.height = H_() * dpr;
      fx.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    fx.fit(); addEventListener("resize", fx.fit);
    requestAnimationFrame(tickFx);
    return fx;
  }
  function add(p) {
    if (fx.parts.length >= MAX_PARTS) return;
    fx.parts.push(Object.assign({ x: 0, y: 0, vx: 0, vy: 0, g: .25, drag: .985, rot: rnd(0, 6.3), vr: rnd(-.2, .2),
      life: 0, ttl: 120, delay: 0, size: 10, color: "#c26a2e", sway: 0, swayF: .05, phase: rnd(0, 6.3) }, p));
  }
  function palette() {
    const css = getComputedStyle(document.documentElement);
    const theme = ["--accent", "--focus", "--slop-1", "--slop-2", "--slop-3", "--slop-4"].map(v => css.getPropertyValue(v).trim()).filter(Boolean);
    return pickOne([
      theme,
      ["#e63946", "#f4a261", "#e9c46a", "#2a9d8f", "#457b9d", "#9b5de5"],   // bright
      ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#bdb2ff"],   // pastel
      ["#d4af37", "#f5d76e", "#fff1b8", "#c9a227", "#fffaf0"],              // gold
      ["#ff006e", "#fb5607", "#ffbe0b", "#3a86ff", "#8338ec"],              // neon
      ["#0b3d91", "#e8eef9", "#b22234", "#f2c14e"]                          // marching band
    ].filter(p => p.length));
  }
  // How often a particle becomes an emoji instead of a shape, by emoji level.
  function glyphChance() { return [0, 0, 0, .4, .85][lvl()]; }
  function emojiOr(shape, list) { return Math.random() < glyphChance() ? { kind: "glyph", glyph: pickOne(list || EMO.confetti), size: rnd(18, 28) } : shape; }
  function originXY(origin) {
    const r = origin && origin.getBoundingClientRect ? origin.getBoundingClientRect() : null;
    return r && r.width + r.height > 0 ? [r.left + r.width / 2, r.top + r.height / 2] : [W_() / 2, H_() / 3];
  }
  function count(base, size, k) { return Math.max(1, Math.round(base[size] * k * rnd(.8, 1.25))); }

  const EFFECTS = {
    confetti(size, [ox, oy], k) {
      const pal = palette(), shapes = pickOne([["rect"], ["rect", "circle"], ["rect", "ribbon"], ["rect", "circle", "ribbon"]]);
      const tilt = rnd(-.6, .6), spread = rnd(1.5, 2.8), cannons = size >= 3 && Math.random() < .75;
      const fromLeftY = rnd(.5, .85), fromRightY = rnd(.5, .85);
      for (let i = 0, n = count([0, 30, 70, 160], size, k); i < n; i++) {
        const side = cannons && i % 2 ? (i % 4 === 1 ? -1 : 1) : 0;
        const a = -Math.PI / 2 + tilt + (Math.random() - .5) * spread, v = rnd(4, size >= 2 ? 13 : 9) * (k < 1 ? .85 : 1);
        add(Object.assign({
          kind: pickOne(shapes), color: pickOne(pal), size: rnd(6, 12), ttl: rnd(90, 170), delay: side ? rnd(0, 12) : 0,
          x: side ? (side < 0 ? 0 : W_()) : ox, y: side ? H_() * (side < 0 ? fromLeftY : fromRightY) : oy,
          vx: side ? -side * rnd(4, 12) : Math.cos(a) * v, vy: side ? -rnd(8, 17) : Math.sin(a) * v
        }, emojiOr({})));
      }
    },
    fireworks(size, [ox], k) {
      const rockets = Math.max(1, Math.round([0, 1, 3, 6][size] * (k < 1 ? .6 : 1) + rnd(0, size >= 3 ? 3 : 1.4)));
      for (let i = 0; i < rockets; i++) {
        const x = size >= 2 ? rnd(.12, .88) * W_() : ox + rnd(-80, 80), ty = rnd(.12, .42) * H_(), y0 = H_() + 10, g = .3;
        add({ kind: "rocket", x, y: y0, vx: rnd(-1, 1), vy: -Math.sqrt(2 * g * (y0 - ty)), g, drag: 1, ttl: 400,
          delay: i === 0 ? 0 : rnd(6, 26) * i, color: "", pal: palette(), k, pattern: pickOne(["sphere", "ring", "double", "willow", "crossette"]) });
      }
    },
    balloons(size, [ox], k) {
      const pal = palette();
      for (let i = 0, n = count([0, 5, 12, 24], size, k); i < n; i++) {
        add(Object.assign({ kind: "balloon", color: pickOne(pal), size: rnd(16, 30) * (k < 1 ? .85 : 1),
          x: size >= 2 ? rnd(.05, .95) * W_() : ox + rnd(-140, 140), y: H_() + rnd(30, 260),
          vx: rnd(-.3, .3), vy: -rnd(1.3, 2.8), g: 0, drag: 1, sway: rnd(.3, 1.3), swayF: rnd(.02, .05), ttl: 900, rot: 0, vr: 0 },
        Math.random() < glyphChance() * .5 ? { kind: "glyph", glyph: "🎈", size: rnd(26, 40) } : {}));
      }
    },
    notes(size, [ox, oy], k) {
      const pal = palette(), text = ["♪", "♫", "♬", "♩"], fromBottom = size >= 3 || (size >= 2 && Math.random() < .5);
      for (let i = 0, n = count([0, 10, 26, 54], size, k); i < n; i++) {
        const emoji = Math.random() < glyphChance();
        add({ kind: emoji ? "glyph" : "text", glyph: emoji ? pickOne(["🎵", "🎶", "🎼"]) : pickOne(text), color: pickOne(pal),
          size: rnd(18, 36), x: fromBottom ? rnd(.05, .95) * W_() : ox + rnd(-30, 30), y: fromBottom ? H_() + rnd(10, 120) : oy,
          vx: rnd(-1.2, 1.2), vy: -rnd(1, 2.8), g: 0, drag: 1, sway: rnd(.4, 2.2), swayF: rnd(.03, .08),
          rot: rnd(-.3, .3), vr: rnd(-.01, .01), ttl: rnd(110, 200), delay: rnd(0, fromBottom ? 50 : 25) });
      }
    },
    sparkles(size, [ox, oy], k) {
      const pal = palette(), points = pickOne([4, 5, 6]), rings = Math.max(1, size - (Math.random() < .5 ? 1 : 0)) + (size >= 3 ? 1 : 0);
      for (let r = 0; r < rings; r++) {
        const n = Math.max(5, Math.round(rnd(10, 18) * k)), sp = rnd(2.2, 6.5), off = rnd(0, 6.3);
        for (let i = 0; i < n; i++) {
          const a = off + i / n * Math.PI * 2;
          add({ kind: "star", points, color: pickOne(pal), size: rnd(5, 11), x: ox, y: oy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
            g: .02, drag: .95, ttl: rnd(55, 95), delay: r * rnd(6, 12), vr: rnd(-.15, .15) });
        }
      }
      if (size >= 2) for (let i = 0, n = count([0, 0, 18, 45], size, k); i < n; i++) {
        add(Object.assign({ kind: "star", points, color: pickOne(pal), size: rnd(4, 9), x: rnd(0, W_()), y: rnd(0, H_() * .8),
          vx: 0, vy: rnd(-.2, .2), g: 0, drag: 1, ttl: rnd(40, 80), delay: rnd(0, 60) }, emojiOr({}, ["✨", "🌟", "💫", "⭐"])));
      }
    },
    shower(size, [ox], k) {
      const pal = palette(), wind = rnd(-1.4, 1.4), wide = size >= 2;
      for (let i = 0, n = count([0, 40, 100, 200], size, k); i < n; i++) {
        add(Object.assign({ kind: pickOne(["rect", "rect", "ribbon", "circle"]), color: pickOne(pal), size: rnd(6, 12),
          x: wide ? rnd(-.1, 1.1) * W_() : ox + rnd(-170, 170), y: rnd(-H_() * .35, -10),
          vx: wind + rnd(-.6, .6), vy: rnd(1.2, 3.4), g: .02, drag: .996, ttl: rnd(200, 300), delay: rnd(0, 45) }, emojiOr({})));
      }
    },
    bubbles(size, [ox, oy], k) {
      const pal = palette(), fromBottom = size >= 2;
      for (let i = 0, n = count([0, 10, 26, 48], size, k); i < n; i++) {
        add(Object.assign({ kind: "bubble", color: pickOne(pal), size: rnd(6, 24),
          x: fromBottom ? rnd(.05, .95) * W_() : ox + rnd(-40, 40), y: fromBottom ? H_() + rnd(10, 150) : oy,
          vx: rnd(-.4, .4), vy: -rnd(.8, 2.3), g: 0, drag: 1, sway: rnd(.4, 1.6), swayF: rnd(.03, .07),
          ttl: rnd(fromBottom ? 160 : 70, fromBottom ? 320 : 150), delay: rnd(0, 40) }, Math.random() < glyphChance() * .4 ? { kind: "glyph", glyph: "🫧", size: rnd(20, 34) } : {}));
      }
    }
  };
  function runEffect(style, size, origin, k) {
    const f = EFFECTS[style] || EFFECTS.confetti;
    ensureFx(); f(size, originXY(origin), k);
  }
  function explode(p) {
    const n = Math.round(rnd(60, 110) * (p.k < 1 ? .6 : 1)), c1 = pickOne(p.pal), c2 = pickOne(p.pal);
    add({ kind: "flash", color: c1, size: 8, x: p.x, y: p.y, g: 0, drag: 1, ttl: 14, vr: 0 });
    const glyphs = Math.random() < glyphChance();
    const burst = (sp, color, ttl, g, drag, offset, gcount) => {
      for (let i = 0; i < gcount; i++) {
        const a = offset + i / gcount * Math.PI * 2 + (p.pattern === "sphere" ? rnd(-.2, .2) : 0);
        const v = p.pattern === "sphere" ? sp * rnd(.3, 1) : sp;
        add({ kind: glyphs && i % 7 === 0 ? "glyph" : "spark", glyph: pickOne(["✨", "🌟", "💥", "🎆"]), size: glyphs ? 18 : rnd(2.6, 4),
          color, x: p.x, y: p.y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, g, drag, ttl, rot: 0, vr: 0 });
      }
    };
    if (p.pattern === "double") { burst(rnd(4.5, 6.5), c1, 70, .05, .965, 0, n / 2 | 0); burst(rnd(1.5, 2.5), c2, 60, .05, .965, .2, n / 2 | 0); }
    else if (p.pattern === "willow") burst(rnd(2.5, 4), "#f5d76e", 130, .035, .975, 0, n);
    else if (p.pattern === "crossette") { burst(rnd(3, 4.5), c1, 55, .05, .96, 0, 8); burst(rnd(3, 5), c2, 75, .05, .965, .4, n - 8); }
    else burst(rnd(4.5, 7), p.pattern === "ring" ? c1 : pickOne([c1, c2]), rnd(60, 85), .05, .965, rnd(0, 6.3), n);
  }
  function drawStar(ctx, pts, r) {
    ctx.beginPath();
    for (let i = 0; i < pts * 2; i++) {
      const a = i * Math.PI / pts - Math.PI / 2, rad = i % 2 ? r * .42 : r;
      ctx[i ? "lineTo" : "moveTo"](Math.cos(a) * rad, Math.sin(a) * rad);
    }
    ctx.closePath(); ctx.fill();
  }
  function tickFx() {
    const f = fx; if (!f) return;
    const ctx = f.ctx, W = W_(), H = H_();
    ctx.clearRect(0, 0, W, H);
    // New particles (bursts, pops) are queued and added after the filter, or they'd be lost.
    const born = [], bursting = [];
    f.parts = f.parts.filter(p => {
      if (p.delay > 0) { p.delay--; return true; }
      if (p.kind === "rocket" && p.vy >= -.6) { bursting.push(p); return false; }
      if (p.kind === "bubble" && p.life >= p.ttl) {   // pop
        for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; born.push({ kind: "spark", color: p.color, size: 1.6, x: p.x + Math.cos(a) * p.size, y: p.y + Math.sin(a) * p.size, vx: Math.cos(a) * 1.5, vy: Math.sin(a) * 1.5, g: 0, drag: .9, ttl: 14 }); }
        return false;
      }
      if (p.life >= p.ttl) return false;
      if (p.vy > 0 && p.y > H + 60) return false;
      if (p.vy < 0 && p.y < -160 && p.kind !== "rocket") return false;
      return true;
    });
    born.forEach(p => add(p));
    bursting.forEach(explode);
    for (const p of f.parts) {
      if (p.delay > 0) continue;
      p.px = p.x; p.py = p.y;
      p.life++; p.vy += p.g; p.vx *= p.drag; p.vy *= p.drag; p.rot += p.vr;
      p.x += p.vx + (p.sway ? Math.sin(p.life * p.swayF + p.phase) * p.sway : 0); p.y += p.vy;
      const fade = Math.min(1, (p.ttl - p.life) / 30);
      ctx.save();
      ctx.globalAlpha = p.kind === "star" ? fade * (.55 + .45 * Math.sin(p.life * .45 + p.phase)) : p.kind === "bubble" ? .75 : fade;
      if (p.kind === "spark" || p.kind === "rocket") {
        const color = p.color || p.pal[0], trail = p.kind === "rocket" ? 3 : 4;
        ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = p.kind === "rocket" ? 3 : p.size; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(p.px - (p.x - p.px) * trail, p.py - (p.y - p.py) * trail); ctx.lineTo(p.x, p.y); ctx.stroke();
        ctx.beginPath(); ctx.arc(p.x, p.y, (p.kind === "rocket" ? 3 : p.size) * .9, 0, 6.3); ctx.fill();
        ctx.restore(); continue;
      }
      if (p.kind === "flash") {
        ctx.globalAlpha = (1 - p.life / p.ttl) * .55; ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size + p.life * 5, 0, 6.3); ctx.fill();
        ctx.restore(); continue;
      }
      ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillStyle = p.color;
      if (p.kind === "glyph" || p.kind === "text") {
        ctx.font = `${p.kind === "text" ? "bold " : ""}${p.size}px system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(p.glyph, 0, 0);
      } else if (p.kind === "rect") {
        ctx.scale(1, Math.cos(p.life * .18 + p.phase)); ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * .66);
      } else if (p.kind === "circle") {
        ctx.beginPath(); ctx.arc(0, 0, p.size / 2.6, 0, 6.3); ctx.fill();
      } else if (p.kind === "ribbon") {
        ctx.strokeStyle = p.color; ctx.lineWidth = 3; ctx.lineCap = "round"; ctx.beginPath();
        ctx.moveTo(-p.size, 0); ctx.quadraticCurveTo(0, Math.sin(p.life * .3 + p.phase) * 7, p.size, 0); ctx.stroke();
      } else if (p.kind === "star") {
        drawStar(ctx, p.points || 5, p.size);
      } else if (p.kind === "balloon") {
        const r = p.size;
        ctx.rotate(-p.rot + Math.sin(p.life * p.swayF + p.phase) * .12);
        ctx.strokeStyle = "rgba(120,120,120,.7)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(0, r);
        ctx.quadraticCurveTo(Math.sin(p.life * .08 + p.phase) * 8, r * 1.8, 0, r * 2.6); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(0, 0, r * .82, r, 0, 0, 6.3); ctx.fill();
        ctx.beginPath(); ctx.moveTo(-3, r + 3); ctx.lineTo(3, r + 3); ctx.lineTo(0, r - 2); ctx.fill();
        ctx.globalAlpha *= .35; ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.ellipse(-r * .3, -r * .35, r * .18, r * .3, -.5, 0, 6.3); ctx.fill();
      } else if (p.kind === "bubble") {
        ctx.strokeStyle = p.color; ctx.lineWidth = 1.6; ctx.fillStyle = "rgba(255,255,255,.08)";
        ctx.beginPath(); ctx.arc(0, 0, p.size, 0, 6.3); ctx.fill(); ctx.stroke();
        ctx.fillStyle = "rgba(255,255,255,.6)"; ctx.beginPath(); ctx.arc(-p.size * .35, -p.size * .35, p.size * .18, 0, 6.3); ctx.fill();
      }
      ctx.restore();
    }
    if (f.parts.length) requestAnimationFrame(tickFx);
    else { removeEventListener("resize", f.fit); f.cv.remove(); fx = null; }
  }

  /* ---------------- Display panel (header) ---------------- */
  const SAMPLES = { none: "", barely: "🎻", tactful: "🎻 🎉", plenty: "🎻 🎉 💡 👂", max: "🎻🎉✨🎶🌟🎺" };
  // Any button with data-preview plays the chosen style at half strength, then cools down.
  function wirePreviews(scope) {
    scope.querySelectorAll("[data-preview]").forEach(b => b.addEventListener("click", e => {
      const mode = pref("celebrate"), style = b.dataset.style || (mode === "quiet" || mode === "off" ? "confetti" : mode);
      previewCelebration(style, e.currentTarget);
    }));
    paintCooldown();
  }
  function renderChrome() {
    document.documentElement.dataset.emoji = pref("emoji");
    document.querySelectorAll("[data-nav]").forEach(a => {
      if (!a.dataset.label) a.dataset.label = a.textContent.trim();
      a.innerHTML = em(3, EMO.ui[a.dataset.nav]) + esc(a.dataset.label);
    });
    const slot = document.getElementById("prefsSlot"); if (!slot) return;
    const wasOpen = !!slot.querySelector(".prefs-panel:not([hidden])");
    const cur = pref("emoji"), cm = pref("celebrate"), showIcons = lvl() >= 2;
    const n = favCount();
    slot.innerHTML = `<a class="fav-link" href="#/favorites" aria-label="Favorites, ${n} saved" title="Favorites">${heartIcon(n > 0)}<span class="fav-count">${n || ""}</span></a>
    <div class="prefs">
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
          <p class="small muted legend-note">Pick a style. Each one plays a little differently every time. Previews run at half strength.</p>
          <div class="style-grid">
          ${CELEB_MODES.map(m => `<label class="opt opt-style${m.id === cm ? " is-on" : ""}">
            <input type="radio" name="celebrate" value="${m.id}" ${m.id === cm ? "checked" : ""}>
            <span class="opt-text"><strong>${showIcons && m.icon ? `<span class="emo" aria-hidden="true">${m.icon}</span>` : ""}${esc(m.name)}${m.id === "confetti" ? " (default)" : ""}</strong><span class="small muted">${esc(m.help)}</span></span>
          </label>`).join("")}
          </div>
          ${reduceMotion() ? `<p class="small muted">Your device asks for reduced motion, so celebrations show a message without animation.</p>` : ""}
          <button type="button" class="btn btn-preview" id="prefsTry" data-preview data-label="Preview at half strength" ${cm === "off" || cm === "quiet" ? "hidden" : ""}><span class="pv-label">Preview at half strength</span></button>
        </fieldset>
        <p class="small prefs-foot"><a href="#/data">Your data &amp; backup</a> · saved in this browser only</p>
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
      slot.querySelectorAll(".opt-style").forEach(l => l.classList.toggle("is-on", l.contains(r)));
      const tryBtn = slot.querySelector("#prefsTry");
      tryBtn.hidden = r.value === "off" || r.value === "quiet";
      // Picking a style previews it, unless a preview just played (then the button shows the countdown).
      if (r.value === "quiet") toast("Celebrations will show a message, with nothing moving.");
      else if (r.value === "off") toast("Celebrations are off.");
      else previewCelebration(r.value, r.closest("label"));
    }));
    wirePreviews(slot);
    paintFavLink();
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
