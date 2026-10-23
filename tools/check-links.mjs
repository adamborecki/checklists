// Checks that every source URL still resolves. Usage:  node tools/check-links.mjs
// DOIs are checked against the Crossref API (publisher sites often block bots).
// Some sites (CDC, NAfME, ed.gov, NAEYC...) block automated requests with 403.
// Those are reported as "blocked", not "broken". Open them by hand.
import { readFileSync } from "node:fs";
import vm from "node:vm";

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(readFileSync(new URL("../data/sources.js", import.meta.url), "utf8"), ctx);
const sources = Object.entries(ctx.window.MTC_SOURCES);

async function check([key, s]) {
  try {
    if (s.url.startsWith("https://doi.org/")) {
      const doi = s.url.replace("https://doi.org/", "");
      const r = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`);
      if (!r.ok) return [key, "BROKEN", `Crossref ${r.status}`];
      const m = (await r.json()).message;
      return [key, "ok", (m.title || [""])[0].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").slice(0, 70)];
    }
    const r = await fetch(s.url, { redirect: "follow", headers: { "User-Agent": "Mozilla/5.0 (link checker)" } });
    if (r.ok) return [key, "ok", r.url === s.url ? "" : `→ ${r.url}`];
    if (r.status === 403 || r.status === 429) return [key, "blocked", `HTTP ${r.status}, check by hand`];
    return [key, "BROKEN", `HTTP ${r.status}`];
  } catch (e) {
    return [key, "BROKEN", e.message];
  }
}

const results = [];
for (const s of sources) {          // sequential, to be polite to Crossref
  results.push(await check(s));
  await new Promise(r => setTimeout(r, 300));
}
for (const [k, status, note] of results) console.log(`${status.padEnd(8)} ${k.padEnd(20)} ${note}`);
const broken = results.filter(r => r[1] === "BROKEN").length;
console.log(`\n${results.length} sources · ${broken} broken · ${results.filter(r => r[1] === "blocked").length} blocked`);
process.exit(broken ? 1 : 0);
