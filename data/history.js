/*
  Site history: how this site was made, oldest first.

  Each entry:  id, date (YYYY-MM-DD), time (optional, local to the author), who, agent,
  title, summary (a quick summary of the prompt), prompt (full text, word for word, when we have it),
  qa (clarifying questions and answers), did (what happened), commits, links.

  Prompts are quoted exactly as typed, typos and all.
*/
window.MTC_HISTORY = [
  {
    id: "first-prompt",
    date: "2026-10-22", time: "about 9:40 PM PT",
    who: "Adam", agent: "Claude Opus 5.5 · Claude Code desktop app (local session)",
    title: "The first prompt: a checklist app with an AI slop meter",
    summary: "Asked for a checklist app for music teachers covering Orff instruments, choosing repertoire, running rehearsals, concert programs, surviving a faculty meeting on an empty stomach, and crying students. It should cite real, credible research with links. The list of checklists comes first, then categories and maybe tags. Each checklist gets a \"more\", sources, or rationale section. An AI slop meter on everything shows first-draft AI vs. human-checked. Up to two clarifying questions allowed.",
    prompt: "make a checklist app for music teachers with categories about like orff instruments and choosing rep, and how to run a rehearsal, and making a concert program and surviving a faculty meeting on an empty stomach, crying student, etc. include real research and real sources , find credible studies and include links. we want like a list of checklists first, and then categories and maybe tags but dont get tooo fancy right of the bat, and then each checklist should have like a \"more' or \"sources\" or \"rationale\" ... go ahead and make up a few other categories and draft checklists, put an AI slop meter for everything to show what is 1st draft ai vs checked by a human. yu may ask me up to 2 questinos before you begin",
    qa: [
      { q: "Who will use this, and where should human \"checked\" marks on the AI slop meter save?",
        a: "it'll be github pages so save in local storage" },
      { q: "What teaching level should the drafted checklists focus on?",
        a: "be smart and do lots of good stuff so it works for every, like preschool and k-12 and college and indepent studio teachers and administrators like department chair or vocal area director or choral area director or dean or provost or president or TA etc. this might take yu a while...." }
    ],
    did: [
      "Collected about 100 candidate sources from memory, then verified every DOI against the Crossref API and every web link by request or search before using it.",
      "Several remembered DOIs pointed to the wrong papers (one 'Goolsby' DOI actually belonged to a Byo study), so those were looked up by title and replaced.",
      "Pulled abstracts where available and rewrote claims to match them. For example, Duke & Henninger (1998) found the wording of corrections made no measurable difference, so the checklist says that.",
      "Kept known controversies visible: the 'hungry judges' parole study is cited alongside its critique, and the blind-audition study alongside a later statistical critique.",
      "Built a no-build static site (HTML, CSS, vanilla JS) with hash routing, search, category and audience filters, tags, per-item 'more', citations, rationale, sources, and a per-checklist slop meter saved in localStorage.",
      "Shipped 47 checklists (494 items) in 15 categories, plus a link-checking script, and tested it in a browser on desktop and phone, in light and dark mode."
    ],
    commits: ["bf4ac06"]
  },
  {
    id: "publish",
    date: "2026-10-22", time: "about 10:37 PM PT",
    who: "Adam", agent: "Claude Opus 5.5 · same local session",
    title: "Publish to GitHub Pages",
    summary: "Asked to publish the site to GitHub Pages under adamborecki/checklists.",
    prompt: "push it to github pages with adamborecki/checklists",
    did: [
      "Created the public repo adamborecki/checklists. Pages on a free account needs a public repo.",
      "Committed the site, pushed it, and turned on Pages from the main branch.",
      "Waited for the first build and confirmed the live site loaded all 47 checklists with no errors."
    ],
    commits: ["bf4ac06"]
  },
  {
    id: "actions-workflow",
    date: "2026-10-23", time: "12:37 AM PT",
    who: "Adam", agent: "Edited directly on GitHub (no AI prompt)",
    title: "Deploy with GitHub Actions",
    summary: "Adam added a GitHub Actions workflow that deploys the site to Pages on every push to main, or by hand from the Actions tab.",
    did: [
      "Added .github/workflows/static.yml (\"Deploy static content to Pages\").",
      "Pages now builds from that workflow instead of the plain branch build."
    ],
    commits: ["fa99f35"]
  },
  {
    id: "cloud-expansion",
    date: "2026-10-23", time: "1:11 AM PT",
    who: "Adam", agent: "Claude Opus 5.5 · Claude Code on the web (cloud session)",
    title: "21 more checklists, emoji levels, and celebrations",
    summary: "Said the site was good now and asked for more, much more: research NASM standards, health and wellness, a first time at a new university, a student who is slightly on the spectrum, a student with a stalker from a different school, and ESL students at different levels. Add an emoji setting from \"None whatsoever\" to \"there's no such thing as too many,\" with tactful as the default. Add some celebrations now, ahead of a fuller version later. No questions needed.",
    prompt: "It’s good now. Make it better with more more and more, maybe research NASM standards and health and wellness and first time at a new university and how to deal with a student who is slightly on the spectrum and how to deal with a situation where a student has a stalker who goes to a different school and how to best work with ESL students at different levels. Add an emoji feature where you can adjust levels of emojis from None whatsoever to barely any to tactful (default) to plenty to there’s no such thing as too many emojis. Later we’ll implement celebrations. Might as well add some now take your time. You don’t need to ask me questions ? LMK",
    did: [
      "Added 21 checklists: NASM accreditation (basics, self-study and site visit, health and safety, degree design, annual obligations), health and wellness (playing-related injury, student wellness, teacher wellness, marching band heat safety), first-year faculty, first-year music majors, autistic students, sensory-friendly concerts, a student being stalked, concert and online privacy, English learners by level, newcomers, multilingual families, international students, grieving students, and celebrating student wins.",
      "Added a Display menu with five emoji levels (from 'None whatsoever' to 'There's no such thing as too many') and celebrations (confetti, quiet, or off) that respect reduced-motion settings.",
      "Crossref was unreachable from that environment, so the new sources were checked by web search only. It flagged three DOIs it couldn't confirm."
    ],
    commits: ["6fd5bdb"],
    links: [{ label: "Cloud session (opens for Adam's account)", url: "https://claude.ai/code/session_01Bpu9Zb55HmB56Ubo5ALK31" }]
  },
  {
    id: "history-and-slop",
    date: "2026-10-23", time: "afternoon PT",
    who: "Adam", agent: "Claude Opus 5.5 · original local session",
    title: "Site history, a simpler welcome, and a fairer slop meter",
    summary: "Asked to review the recent changes, add a complete history of how the site was made (quick prompt summaries, with links to full text), make the welcome simply say something like \"Adam and Billy's checklists,\" tone down the AI slop meter, and give AI-checked drafts partial credit: a cheap unchecked AI draft is fully sloppy, but a draft whose sources were already double-checked might be 85%. Later AI double-checking might count for something too. Then: merge the cloud branch and publish.",
    prompt: "good. see recent changes. add a complete history of how this site was created as best as you can, yours was the initial prompt. first welcome back should be simply and say something like \"adam and billy's checklists\" the ai slop thing shouldn't be so prominent. also note that if we have things AI checked its not immediately sloppy, if its a cheap AI that doesn't check thats hella sloppy, but if you've already done a lot and double checked the sources then maybe we call that 85% slop instead of 100% or some other thing that makes sense with your existing thing... and i guess we can have ai do double checking and that might be worth something later....  but yeah build a site history thing with quick summaries of prompts with links to full text when possible, do you need to ask me questions or can u start?",
    qa: [
      { q: "Should I build on the cloud session's unmerged branch and publish it together with the history page and slop changes? (Claude asked; the app quit mid-question.)",
        a: "yeah merge that branch and publish, then do stuff here" }
    ],
    did: [
      "Fast-forwarded main to the cloud branch and pushed it, so its 21 checklists went live.",
      "Re-verified all 147 sources here, where Crossref was reachable. The three DOIs the cloud session couldn't confirm all resolved. The rest either loaded or are on sites that block automated checks.",
      "Reworked the slop meter: humans earn full points, and AI checks earn partial credit on the source checks only. The first 47 checklists (links verified, claims matched to abstracts) start at 85%. The cloud session's 21 (links verified, claims not yet checked) start at 93%. A future independent AI double-check of claims is worth a little more.",
      "Simplified the welcome to \"Adam and Billy's checklists,\" moved the slop meter out of the spotlight into each checklist's review section, and renamed the 'Slop meter' page to About.",
      "Added this History page."
    ],
    commits: ["b701f2a"]
  },
  {
    id: "celebrations-favorites",
    date: "2026-10-25",
    who: "Adam", agent: "Claude · Claude Code on the web (same cloud session as entry 4)",
    title: "Celebration styles, favorites, a teaching-setting filter, and Your data",
    summary: "Asked to add this conversation to the History page; expand celebrations to 6 or 7 styles plus a random option, each with noticeable randomness; consider a 3–4 second cooldown between previews and half-strength previews; fix the \"I'm a…\" label, whose grammar didn't fit the buttons; add a filter for private lessons vs. small or large ensembles vs. lecture classes, with research so each has plenty; add hearts for a quick favorites list; explain browser-only storage simply; and answer how the AI slop meter changes and whether reviews can be exported.",
    prompt: "See how there’s now a history tab on the thing? Add this conversation to it. Also elaborate on celebrations, maybe like 6 or 7 to choose from ? 😭🤣🤣  - and a random option. For all celebrations; within each you choose , make sure there’s some noticeable randomization for each so it’s not always the same. What do you think about making it so that when you pick a celebration and try it out there’s like a 3 or 4 second cool down before you can try the next one? Overthinking it?  Maybe the previews are like at 50% intensity of what the real thing is too? Seems kinda nice… also the thing says “I’m a…” but grammar doesn’t work for what buttons are u know? Also I think we should maybe have some sort of filter for if you’re teaching private instruction (lessons) vs an ensemble (small or large) vs lecture classes … go out and do research to make sure there’s plenty there. Also add a heart feature so you can have a quick list of favorites - idk how fussy we need to be about educating the user about localstorage (ie no account not saved anywhere except on this browser on this device, maybe an export option later but keep it simple for now  - in fact how does one change the ai slop meter? It’s by human review but does that get saved in localstorage and ready to export? Perhaps an export feature now is essential) I know I’m asking you way too many things in 1 prompt, but I know you’re Opus 5.5 and I think you can handle it",
    did: [
      "Added this entry, and filled in entry 4's prompt word for word, since this cloud session still had it.",
      "Rebuilt celebrations as 7 styles (confetti, fireworks, balloons, music notes, sparkles, confetti shower, bubbles) plus Surprise me, Quiet, and Off. Each play re-rolls its palette (six palettes), shapes, angles, burst patterns, wind, and timing, and the messages rotate too. Surprise me never repeats the previous style.",
      "Previews play at half strength with a 3.5-second cooldown. The Preview button shows a countdown and a shrinking bar, so the wait reads as deliberate rather than broken. Real celebrations aren't throttled.",
      "Fixed a bug found while testing: firework bursts were created mid-update and silently dropped, so fireworks showed only rocket trails.",
      "Replaced \"I'm a…\" with two labeled rows: \"What you're teaching:\" (private lessons, chamber and small ensembles, large ensembles, general music classes, lecture and academic classes) and \"Who it's for:\". Tagged all 68 existing checklists with the settings they fit.",
      "Researched and wrote 7 new checklists so every setting has at least 15: a great weekly lesson, teaching lessons online, helping a chamber group rehearse without you, teaching theory and aural skills so it sticks, running a big lecture class, quizzes that help students learn, and feedback students can use. 11 new sources (Duke & Simmons, Gaunt, Davidson & Good, Roediger & Karpicke, Adesope, Cepeda, Dunlosky, Deslauriers, Crouch & Mazur, Hattie & Timperley, Wisniewski). Crossref was unreachable again, so these were checked by web search only; their slop starts at 93%.",
      "Added hearts on every checklist, a favorites count in the header, and a Favorites page. Hearts are drawn as SVG, so they still show at \"None whatsoever\".",
      "Answered the slop-meter question with a new Your data page: no account, saved only in this browser on this device. It shows what's saved, exports and imports a backup (checkmarks, favorites, reviews, source checks, settings), and explains that a review lowers the meter only locally until it's added to the site's data or sent to Adam or Billy.",
      "Tested in a real browser: all styles, random, cooldown, hearts, filters, export, phone width, and \"None whatsoever\", with no console errors."
    ],
    commits: [],
    links: [{ label: "Cloud session (opens for Adam's account)", url: "https://claude.ai/code/session_01Bpu9Zb55HmB56Ubo5ALK31" }]
  }
];
