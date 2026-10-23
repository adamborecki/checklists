# Music Teacher Checklists

Research-linked checklists for music teachers: preschool, K–12, college, private studio, TAs, and administrators (chairs, area directors, deans, provosts, presidents).

68 checklists in 18 categories, including health and wellness, English learners, autistic students, student safety, new faculty, and NASM accreditation.

Every checklist has:

- **Checkable items** (saved in your browser), many with a **more** button for detail
- Numbered **citations** that jump to the sources
- A **Rationale** section explaining why
- A **Sources** section with real, linked studies, laws, and guidelines
- An **AI slop meter** showing how much of it a human has checked
- **Emoji levels** and **celebrations** you control from the **Display** button

> An AI (Claude) drafted all of this on 2026-10-22 and 2026-10-23. Every checklist starts at **100% slop**.

## Run it

It's a static site with no build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8417
```

## Put it on GitHub Pages

1. Push this folder to a GitHub repo.
2. In the repo, go to **Settings → Pages**, set **Source: Deploy from a branch**, pick `main` and `/ (root)`, then save.
3. Your site appears at `https://<you>.github.io/<repo>/`.

`.nojekyll` is included so GitHub serves the files as-is.

## Files

```
index.html                    page shell
css/style.css                 styles (light/dark, print, mobile)
js/app.js                     app: routing, filters, checklists, slop meter, storage
data/categories.js            categories, audiences ("I'm a…"), evidence labels, their emoji
data/emoji.js                 emoji levels, UI emoji, item keyword → emoji map, confetti glyphs
data/sources.js               the source library (every citation lives here once)
data/checklists-*.js          the checklists, grouped by area
tools/check-links.mjs         checks every source URL (node tools/check-links.mjs)
```

## Emoji and celebrations

The **Display** button in the header has two settings, saved in this browser:

| Emoji level                         | What you get                                                        |
|-------------------------------------|---------------------------------------------------------------------|
| None whatsoever                     | No emoji anywhere. Emoji typed into checklist text are stripped too. |
| Barely any                          | One per checklist (on its page) and on category cards.              |
| **Tactful** (default)               | Checklist and category emoji in lists, one emoji in celebrations.   |
| Plenty                              | Nav, headings, buttons, evidence labels, audiences, and items whose text matches a topic. |
| There's no such thing as too many   | Every item, sparkles on titles, emoji confetti on every checkbox.   |

Emoji are decorative (`aria-hidden`), so screen readers skip them. Each checklist sets its own with `emoji: "🎻"`. The keyword map that picks item emoji lives in `data/emoji.js`.

**Celebrations** fire on your first checked box, the halfway point, finishing a checklist, lowering a checklist's slop band, and reaching 0% slop. Modes: **Confetti** (default), **Quiet** (a message, nothing moves), or **Off**. If the device asks for reduced motion, confetti is skipped automatically.

To add a celebration, add a key to `CELEBRATIONS` in `js/app.js` and call `celebrate("key", data, originElement)`.

## How the slop meter works

Each checklist starts at 100% slop. Human checks remove slop:

| Human check                                          | Slop removed          |
|------------------------------------------------------|-----------------------|
| Read the whole checklist                             | −15                   |
| Fixed what was wrong or generic (or confirmed fine)  | −20                   |
| Reviewed by someone who does this job                | −20                   |
| Source links opened by a human                       | −15 (split by source) |
| Sources confirmed to support their claims            | −30 (split by source) |

Reviews are saved in **localStorage** (this browser only). To make a review permanent for everyone:

1. On a checklist, open **Human review** and click **Copy review for repo**.
2. Paste the `review: {...}` block into that checklist's object in `data/checklists-*.js`.
3. For links you opened, add `humanLinkCheck: "initials, YYYY-MM-DD"` to the source in `data/sources.js`.
4. Commit. Everyone now sees the lower slop.

You can also **Export** all your reviews and checks as JSON from the Slop meter page, and **Import** someone else's.

## What the AI did and didn't verify

**Sources added 2026-10-23** (the 21 newest checklists): Crossref and doi.org were unreachable from the drafting environment, so these were checked by **web search only**. Titles, authors, journals, volumes, and pages matched search results. Three DOIs (`boice1989`, `milton2012`, `paruthi2016`) didn't appear in results and are marked in `data/sources.js`. NASM details (BM percentages, HEADS dates, the May 1 Code of Ethics rule) came from NASM pages and copies of past Handbooks, not a full read of the 2025–26 Handbook. Run `node tools/check-links.mjs` before trusting them.

**Sources from 2026-10-22:**

- ✅ Resolved every DOI against the Crossref API, so titles, authors, journals, and years match real records.
- ✅ Opened or searched for every web URL. `tools/check-links.mjs` reports 0 broken. Nine sites (CDC, NAfME, ed.gov, NAEYC, Smithsonian Folkways, a stats blog) block automated checks and were confirmed by search instead.
- ✅ Read abstracts where available and wrote claims to match them.
- ❌ Did **not** read most full papers. Several claims come from abstracts or general knowledge of the literature.
- ❌ Did **not** check state laws, district policies, or institutional rules. Mandated reporting, FERPA, Title IX, Clery, English-learner, and copyright items are U.S.-centric.
- ⚠️ The 2015 federal English-learner guidance was rescinded in August 2025. The checklists say so and cite the underlying law (Title VI, *Lau v. Nichols*) instead.

This makes the **"confirmed it supports how it's used"** checks the most valuable thing a human reviewer can do.

## Add or edit a checklist

Each checklist is a plain object:

```js
{
  id: "unique-slug",
  title: "Doing the thing",
  emoji: "🎻",                         // shown depending on the viewer's emoji level
  cat: "rehearsal",                    // id from data/categories.js
  aud: ["secondary", "college"],       // audiences from data/categories.js
  tags: ["choir", "pacing"],
  evidence: "research",                // research | mixed | standard | practice
  summary: "One-sentence promise.",
  items: [
    { t: "Checkbox text.", more: "Optional detail.", src: ["duke2009"] }
  ],
  why: "Rationale. Separate paragraphs with a blank line.",
  sources: [ { k: "duke2009", use: "What this source is used for here." } ],
  review: { read: true, edited: true, expert: false, claims: { duke2009: true }, reviewer: "AB", date: "2026-11-01" }
}
```

Add new sources to `data/sources.js` first. The browser console warns about any missing source keys.

## Not advice

Nothing here is legal, medical, or mental-health advice. If a student is in danger, contact emergency services or, in the U.S., call or text 988.
