/*
  Checklists: new faculty, first-year music majors, NASM & accreditation.
  All AI-drafted on 2026-10-23. Nothing here has been human-reviewed yet.

  NASM details (percentages, deadlines, Code of Ethics dates) were confirmed by
  web search against NASM pages and copies of past Handbooks, not by reading the
  full 2025-26 Handbook. Check the current Handbook before relying on a number.
*/
(window.MTC_CHECKLISTS = window.MTC_CHECKLISTS || []).push(

/* ======================= COLLEGE TEACHING ======================= */
{
  id: "new-faculty-new-university",
  title: "New faculty: your first year at a new university",
  emoji: "🔑",
  cat: "higher", aud: ["college", "ta", "admin"], tags: ["new faculty", "tenure", "mentoring", "first year", "NASM"],
  evidence: "mixed",
  summary: "Learn the people and the unwritten rules, teach well without overpreparing, write a little every day, and say yes slowly.",
  items: [
    { t: "Get the written expectations for tenure, promotion, or reappointment, and ask your chair what they actually look like for music faculty.", src: ["aaup1940"] },
    { t: "Ask for a mentor, and find more than one: one in music and one outside it.",
      more: "A multidisciplinary meta-analysis linked mentoring with better outcomes, though the effects were generally small. Academic and workplace mentoring showed larger effects than youth mentoring.", src: ["eby2008"] },
    { t: "Meet the staff early: the department administrator, piano technician, librarian, concert manager, and facilities contact. They run everything." },
    { t: "Learn the calendar: juries, recitals, auditions, ensemble seating, studio assignments, recruitment days, and grade deadlines." },
    { t: "Learn the rules that protect students and you: FERPA, Title IX reporting, accommodation letters, and how to refer a student in distress.", src: ["ferpa", "titleix", "sec504", "jed"] },
    { t: "Find out where your area stands with NASM and what's coming up.", src: ["nasmHandbook"] },
    { t: "Don't overprepare lectures. Teach actively, and leave time for students to sing, play, solve, and discuss.", src: ["freeman2014"] },
    { t: "Write (or compose, or practice) a little every day instead of waiting for a free week.",
      more: "In Robert Boice's work with new faculty, brief daily writing sessions worked better than bingeing, and new faculty found them relatively painless.", src: ["boice1989"] },
    { t: "Say yes slowly. Ask your mentor which service actually counts before you join committees." },
    { t: "Get to know your studio or ensemble students early. Your first year shapes your studio for years." },
    { t: "Keep a running evidence file: programs, syllabi, student outcomes, reviews, invitations, notes." },
    { t: "Learn the local scene: gigs, churches, community ensembles, K–12 partners." },
    { t: "Put your own playing, singing, or composing on the calendar." },
    { t: "Set up the basics for your body: earplugs, a personal mic if you lecture a lot, and an ergonomic studio.", src: ["nasmHearing"] }
  ],
  why: "Research on new faculty, led by Robert Boice in the 1990s, found that most took years to settle in, while a small group of 'quick starters' did better by building networks early, teaching without overpreparing, and working in brief, regular sessions instead of binges. Mentoring research supports finding guides, though effects are modest. The rest is practical experience from music departments, which run on staff relationships, a dense calendar, and accreditation.",
  sources: [
    { k: "aaup1940", use: "Academic freedom and tenure principles." },
    { k: "eby2008", use: "Mentoring outcomes (meta-analysis)." },
    { k: "ferpa", use: "Student privacy." },
    { k: "titleix", use: "Title IX reporting." },
    { k: "sec504", use: "Disability accommodations." },
    { k: "jed", use: "Student mental health referral." },
    { k: "nasmHandbook", use: "Accreditation standards." },
    { k: "freeman2014", use: "Active learning (meta-analysis, STEM)." },
    { k: "boice1989", use: "Brief daily writing vs. bingeing in new faculty." },
    { k: "nasmHearing", use: "Hearing-health advisories." }
  ]
},
{
  id: "first-year-music-majors",
  title: "Helping first-year music majors land well at a new university",
  emoji: "🌱",
  cat: "higher", aud: ["college", "ta", "admin", "studio"], tags: ["first-year students", "belonging", "college", "wellness", "transition"],
  evidence: "research",
  summary: "Tell them the struggle is normal and temporary, write down the unwritten rules, and make sure every student has at least one person who knows their name.",
  items: [
    { t: "Say it early and plainly: almost everyone struggles at first, and it gets better with time and effort.",
      more: "In a randomized study, a one-hour intervention framing early adversity as common and temporary raised Black students' GPAs over three years. A larger set of pre-college experiments found similar benefits for disadvantaged students.", src: ["walton2011", "yeager2016"] },
    { t: "Share stories from older students about their own first year and what helped.", src: ["walton2011"] },
    { t: "Write down the unwritten rules: practice-room sign-ups, juries, studio class, recital requirements, how to email a professor, what office hours are for." },
    { t: "Reset expectations. Being the top player in high school and landing in the middle of a studio is normal.", src: ["perkins2017"] },
    { t: "Help them plan practice and sleep around a much bigger schedule.", src: ["duke2009", "lim2010"] },
    { t: "Make sure each first-year has at least one faculty member who knows them by name.", src: ["roorda2011"] },
    { t: "Teach hearing, vocal, and musculoskeletal health in the first semester.", src: ["nasmHearing", "nasmNms"] },
    { t: "Point to support early: counseling, tutoring, the disability office, financial aid.", src: ["jed"] },
    { t: "Watch for warning signs around weeks 4–8 (missed lessons, withdrawal, sudden silence) and reach out.", src: ["jed"] },
    { t: "Pair first-years with a peer mentor in their studio or ensemble.", src: ["eby2008"] },
    { t: "Ask about money and work. Many students hold jobs while carrying a full music load." }
  ],
  why: "The transition to college is hard, and music majors add auditions, juries, rankings, and long practice hours. Belonging research is some of the strongest in education: brief, well-designed messages that normalize early struggle have improved grades and retention in randomized trials, though results vary by setting and later studies show smaller effects in some contexts. Conservatoire research points to comparison and overwork as health barriers.",
  sources: [
    { k: "walton2011", use: "Social-belonging intervention (randomized)." },
    { k: "yeager2016", use: "Pre-college interventions at scale." },
    { k: "perkins2017", use: "Barriers to health among music students." },
    { k: "duke2009", use: "Practice quality over quantity." },
    { k: "lim2010", use: "Sleep loss and cognition." },
    { k: "roorda2011", use: "Teacher–student relationships." },
    { k: "nasmHearing", use: "Hearing-health information." },
    { k: "nasmNms", use: "Vocal and NMS health information." },
    { k: "jed", use: "Mental health resources and warning signs." },
    { k: "eby2008", use: "Mentoring outcomes." }
  ]
},

/* ======================= NASM & ACCREDITATION ======================= */
{
  id: "nasm-101",
  title: "NASM 101: what accreditation asks of faculty and staff",
  emoji: "📘",
  cat: "nasm", aud: ["college", "admin", "ta"], tags: ["NASM", "accreditation", "standards", "new faculty"],
  evidence: "standard",
  summary: "NASM accreditation runs on published standards, an honest self-study, peer review, and annual data. Here's what that means for your job.",
  items: [
    { t: "Find out whether your institution is NASM-accredited, and when its next comprehensive review is.", src: ["nasmHandbook"] },
    { t: "Use the current Handbook. NASM published its 2025–26 edition in February 2026, and it supersedes earlier editions.", src: ["nasmHandbookNotice"] },
    { t: "Understand the cycle: the institution writes a self-study, trained peer evaluators visit, and a Commission decides.", src: ["nasmVisitors"] },
    { t: "Know that the standards focus on what graduates can do and on whether programs are coherent and honestly described, not on one required curriculum.", src: ["nasmHandbook"] },
    { t: "Make sure what's published (catalog, website, audition requirements) matches what actually happens.", src: ["nasmHandbook"] },
    { t: "Keep your syllabi, degree sheets, and studio and ensemble policies current and easy to find." },
    { t: "Know the health and safety expectation: music majors get basic information on hearing, vocal, and musculoskeletal health.", src: ["nasmHearing", "nasmNms"] },
    { t: "Know the recruiting ethics basics: accepting talent-based aid isn't binding before May 1 (April 15 for graduate students).",
      more: "This comes from NASM's Code of Ethics as printed in past Handbooks. Confirm the current wording.", src: ["nasmHandbook"] },
    { t: "Expect to contribute: a current CV, assessment evidence, student work, and maybe a meeting with the visiting team." },
    { t: "Ask your chair where your program's assessment data lives and how it gets used." }
  ],
  why: "The National Association of Schools of Music is the specialized accreditor for most U.S. music schools and departments. Faculty often meet NASM only when a site visit is coming. Knowing the basics (current Handbook, the review cycle, accurate published information, health and safety, recruiting ethics) makes the self-study easier and helps you advocate for your program using standards everyone has agreed to.",
  sources: [
    { k: "nasmHandbook", use: "NASM standards and Code of Ethics." },
    { k: "nasmHandbookNotice", use: "2025–26 Handbook is current." },
    { k: "nasmVisitors", use: "Comprehensive review procedures." },
    { k: "nasmHearing", use: "Hearing-health advisories." },
    { k: "nasmNms", use: "Neuromusculoskeletal and vocal-health advisories." }
  ]
},
{
  id: "nasm-self-study",
  title: "Preparing an NASM self-study and site visit",
  emoji: "🧾",
  cat: "nasm", aud: ["admin", "college"], tags: ["NASM", "accreditation", "self-study", "site visit", "department chair"],
  evidence: "standard",
  summary: "Start early, write honestly, gather evidence as you go, and make the visit easy for the evaluators.",
  items: [
    { t: "Confirm your review timeline with NASM, then work backward from the self-study due date, the visit, and the Commission meeting.", src: ["nasmVisitors"] },
    { t: "Start 18–24 months out. Name a coordinator and a small writing team, and get them release time." },
    { t: "Download the current Handbook and the current self-study instructions. Don't reuse last cycle's template blindly.", src: ["nasmHandbookNotice", "nasmHandbook"] },
    { t: "Map every degree and program against the applicable standards, including curricular structure tables.", src: ["nasmHandbook"] },
    { t: "Check published materials (catalog, website, audition and scholarship pages) for accuracy.", src: ["nasmHandbook"] },
    { t: "Pull several years of your HEADS data and use it to describe trends in enrollment, faculty, and budget.",
      more: "HEADS submissions are a required part of each self-study.", src: ["nasmHeads"] },
    { t: "Gather evidence as you go: syllabi, recital programs, jury sheets, student work, assessment results, meeting minutes." },
    { t: "Document health and safety: what students are told about hearing, vocal, and musculoskeletal health, and where.", src: ["nasmHearing", "nasmNms"] },
    { t: "Walk the facilities like a visitor: practice rooms, storage, accessibility, safety, instrument inventory." },
    { t: "Write honestly. Name weaknesses alongside your plans to address them." },
    { t: "Involve faculty, staff, and students, and explain what the visit is and why it matters." },
    { t: "Plan the visit: a private workroom, class and rehearsal schedules to observe, and meetings with faculty, students, and administrators.", src: ["nasmVisitors"] },
    { t: "After the visit, decide whether to send an optional response to the visitors' report, and correct factual errors promptly.", src: ["nasmVisitors"] },
    { t: "File the Commission's action letter and track any follow-up it requires, with due dates." }
  ],
  why: "A comprehensive review has three parts: the institution's self-study, an on-site visit by peer evaluators, and a decision by the Commission on Accreditation. Done well, the self-study is the most useful planning document a music unit produces all decade. Done in a rush, it's a compliance scramble. Most of this list is administrative practice. The procedures and standards come from NASM.\n\nReview timelines and self-study formats change. Always use NASM's current documents.",
  sources: [
    { k: "nasmVisitors", use: "Procedures for comprehensive review and the visit." },
    { k: "nasmHandbookNotice", use: "Which Handbook edition is current." },
    { k: "nasmHandbook", use: "Standards the self-study addresses." },
    { k: "nasmHeads", use: "HEADS data as a self-study component." },
    { k: "nasmHearing", use: "Hearing-health information requirement." },
    { k: "nasmNms", use: "Vocal and NMS health information requirement." }
  ]
},
{
  id: "nasm-health-safety",
  title: "Meeting NASM's health and safety expectations",
  emoji: "🦺",
  cat: "nasm", aud: ["admin", "college", "ta"], tags: ["NASM", "health", "hearing", "voice", "injury", "accreditation"],
  evidence: "standard",
  summary: "Give every music major basic information on hearing, vocal, and musculoskeletal health, and make it findable, current, and real.",
  items: [
    { t: "Know the expectation: music majors receive basic information on maintaining hearing, vocal, and musculoskeletal health and preventing injury.",
      more: "Beyond that basic information and a list of resources, the Handbook leaves breadth and depth to each institution.", src: ["nasmHandbook", "nasmHearing", "nasmNms"] },
    { t: "Start from the free NASM-PAMA advisories. They're written for students and faculty.", src: ["nasmHearing", "nasmNms"] },
    { t: "Decide where it's taught: orientation, a first-year seminar, studio classes, ensemble handbooks, or all of these." },
    { t: "Put it on the website and in student handbooks, and check that the links still work." },
    { t: "Look at spaces, not just students: sound levels in rehearsal rooms, practice-room acoustics, and how equipment is used.", src: ["niosh"] },
    { t: "Offer musician's earplugs and information about hearing tests.", src: ["chesky2009", "nasmHearing"] },
    { t: "Name a contact person and list referral resources: health center, counseling, performing-arts medicine." },
    { t: "Include faculty and staff, not just students." },
    { t: "Keep evidence for the self-study: what you provide, when, and to whom.", src: ["nasmHandbook"] },
    { t: "Review it every year with student input." }
  ],
  why: "Since 2011, NASM has worked with the Performing Arts Medicine Association on health and safety. Accredited institutions are expected to make sure music majors get basic information on hearing, vocal, and musculoskeletal health and injury prevention. How deep to go is up to each school. The NASM-PAMA advisories are the usual starting point, and noise-exposure guidance from NIOSH helps when you evaluate rehearsal spaces.",
  sources: [
    { k: "nasmHandbook", use: "Health and safety standard." },
    { k: "nasmHearing", use: "NASM-PAMA hearing-health advisories." },
    { k: "nasmNms", use: "NASM-PAMA neuromusculoskeletal and vocal-health advisories." },
    { k: "niosh", use: "Noise exposure limits." },
    { k: "chesky2009", use: "Musician earplugs with college students." }
  ]
},
{
  id: "nasm-degree-design",
  title: "Designing or revising a music degree with NASM standards in mind",
  emoji: "📐",
  cat: "nasm", aud: ["admin", "college"], tags: ["NASM", "curriculum", "degrees", "accreditation"],
  evidence: "standard",
  summary: "Start with what graduates should be able to do, check the curricular balance, and make the catalog say exactly what students experience.",
  items: [
    { t: "Read the standards for your specific degree type (professional BM, liberal arts BA or BS, music education, graduate) before drafting anything.", src: ["nasmHandbook"] },
    { t: "Write the competencies graduates should have, then map courses to them.", src: ["nasmHandbook"] },
    { t: "Check the curricular balance with a structure table.",
      more: "For the professional BM in performance, NASM's guideline puts the major area, supportive music courses, and general studies at roughly 25–35% each, with the major area and supportive music together normally at least 65%. Confirm the numbers for your degree in the current Handbook.", src: ["nasmHandbook"] },
    { t: "Check credit-hour and contact-hour policies for lessons, ensembles, and labs.", src: ["nasmHandbook"] },
    { t: "Build in the required health and safety information where students can't miss it.", src: ["nasmHearing", "nasmNms"] },
    { t: "Check prerequisites and sequencing, and confirm students can actually finish in the stated time." },
    { t: "Talk to NASM staff early about new degrees or major changes. Some need approval before you enroll students.", src: ["nasmHandbook"] },
    { t: "Make the catalog, website, and advising sheets match exactly.", src: ["nasmHandbook"] },
    { t: "Plan how you'll assess whether students meet the competencies." },
    { t: "Involve faculty, current students, and recent alumni in the review." }
  ],
  why: "NASM standards describe what graduates of each degree type should know and be able to do, plus guidelines for how the curriculum is balanced. They also expect published descriptions to match reality. Starting from competencies, rather than from the existing course list, usually produces a cleaner degree and an easier accreditation review.\n\nPercentages and approval rules here were confirmed against copies of NASM standards found by search, not the full current Handbook. Check before you rely on them.",
  sources: [
    { k: "nasmHandbook", use: "Degree standards, curricular guidelines, and approval procedures." },
    { k: "nasmHearing", use: "Hearing-health information." },
    { k: "nasmNms", use: "Vocal and NMS health information." }
  ]
},
{
  id: "nasm-annual",
  title: "NASM's yearly to-do list: HEADS, ethics, and staying current",
  emoji: "🗓️",
  cat: "nasm", aud: ["admin", "college"], tags: ["NASM", "HEADS", "data", "recruiting", "accreditation", "department chair"],
  evidence: "standard",
  summary: "File HEADS by January 31, follow the Code of Ethics when recruiting, and keep up with Handbook changes.",
  items: [
    { t: "File the HEADS Data Survey. It opens November 1 and is due January 31.", src: ["nasmHeads"] },
    { t: "Name one owner for HEADS, and collect enrollment, faculty, and budget data in the fall, not in late January.", src: ["nasmHeads"] },
    { t: "Keep every year's HEADS submission. Your next self-study will need them.", src: ["nasmHeads"] },
    { t: "Check each new Handbook for changes, and note which edition your documents follow.", src: ["nasmHandbookNotice"] },
    { t: "Recruit by the Code of Ethics: tell students that accepting talent-based aid isn't binding before May 1 (April 15 for graduate students).", src: ["nasmHandbook"] },
    { t: "Keep published audition, admission, and scholarship information accurate.", src: ["nasmHandbook"] },
    { t: "Refresh health and safety information and links.", src: ["nasmHearing", "nasmNms"] },
    { t: "Track any follow-up reports the Commission requested, with due dates." },
    { t: "Send someone to the NASM annual meeting or a workshop, especially before a self-study." },
    { t: "Brief new chairs and staff on all of the above." }
  ],
  why: "Between comprehensive reviews, NASM membership comes with yearly obligations. The biggest is the Higher Education Arts Data Services (HEADS) survey, required of accredited members and used again in every self-study. Recruiting under the Code of Ethics affects students directly: they shouldn't feel locked into a scholarship offer before the common response date.",
  sources: [
    { k: "nasmHeads", use: "HEADS reporting window and requirement." },
    { k: "nasmHandbookNotice", use: "Current Handbook edition." },
    { k: "nasmHandbook", use: "Code of Ethics and published-information standards." },
    { k: "nasmHearing", use: "Hearing-health advisories." },
    { k: "nasmNms", use: "Vocal and NMS advisories." }
  ]
}
);
