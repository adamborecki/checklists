/*
  Checklists: college teaching & TAs, leadership & administration.
  All AI-drafted on 2026-10-22. Nothing here has been human-reviewed yet.
*/
(window.MTC_CHECKLISTS = window.MTC_CHECKLISTS || []).push(

/* ======================= COLLEGE TEACHING & TAs ======================= */
{
  id: "ta-first-semester",
  title: "TA: your first semester teaching",
  emoji: "📝",
  cat: "higher", aud: ["ta", "college"], tags: ["TA", "FERPA", "Title IX", "active learning", "boundaries"],
  evidence: "mixed",
  summary: "Know the rules (FERPA, Title IX, accommodations), teach actively, and protect your own degree.",
  items: [
    { t: "Get the syllabus, the grading policy, and what decisions are yours vs. the instructor of record's." },
    { t: "Learn FERPA basics: no public grade posting by name, and no discussing grades with parents without consent.", src: ["ferpa"] },
    { t: "Find out whether you're a required reporter under your institution's Title IX policy.", src: ["titleix"] },
    { t: "Implement accommodation letters from the disability office. Don't ask for diagnoses.", src: ["sec504"] },
    { t: "Use active learning (singing, solving, discussing, doing) instead of only lecturing.",
      more: "A large meta-analysis of STEM courses found active learning raised exam performance and cut failure rates compared with lecture. Music theory and aural skills are likely similar, though not directly studied there.", src: ["freeman2014"] },
    { t: "Calibrate grading with your supervisor on a few sample papers before grading them all." },
    { t: "Hold regular office hours and say how fast you'll answer email." },
    { t: "Set boundaries with students who may be close to your age (social media, parties, rides).", src: ["titleix"] },
    { t: "Know the campus counseling and crisis resources, and how to refer.", src: ["jed"] },
    { t: "Ask for an observation and feedback early, not at the end." },
    { t: "Block time for your own practice, research, and coursework. You're a student too." }
  ],
  why: "Graduate TAs often start teaching with little preparation. A few legal frameworks (FERPA, Title IX, disability accommodations) set non-negotiable rules. Research strongly favors active learning over pure lecture, though the biggest meta-analysis comes from STEM, not music.",
  sources: [
    { k: "ferpa", use: "Student privacy." },
    { k: "titleix", use: "Title IX in education programs." },
    { k: "sec504", use: "Disability accommodations." },
    { k: "freeman2014", use: "Active learning meta-analysis (STEM)." },
    { k: "jed", use: "Student mental health resources." }
  ]
},
{
  id: "recommendation-letter",
  title: "Writing a recommendation letter",
  emoji: "✉️",
  cat: "higher", aud: ["college", "studio", "secondary", "admin", "ta"], tags: ["letters", "bias", "writing", "careers"],
  evidence: "research",
  summary: "Specific, comparative, achievement-focused, and audited for gendered language.",
  items: [
    { t: "Ask what it's for, the deadline, and how to submit. Get a CV or résumé and a short list of highlights." },
    { t: "Lead with how you know them, for how long, and in what role." },
    { t: "Give specific examples: performances, projects, leadership moments." },
    { t: "Compare when you can ('among the top 3 of 60 students I've taught in 10 years')." },
    { t: "Check for gendered patterns. Describe achievements and abilities, not just warmth and helpfulness.",
      more: "Letters for women in academia contained more communal and fewer agentic descriptors, and communal descriptors were linked to lower hiring evaluations.", src: ["madera2009"] },
    { t: "Watch for 'grindstone' words ('hardworking', 'diligent') standing in for 'brilliant' or 'exceptional'.", src: ["trix2003"] },
    { t: "Cut doubt raisers (hedges, faint praise, irrelevant negatives).", src: ["trix2003"] },
    { t: "Make letters a similar length and structure for every student you recommend.", src: ["trix2003"] },
    { t: "Leave out personal life, health, family, and appearance." },
    { t: "Know whether the student waived access under FERPA, and write as if they might read it.", src: ["ferpa"] },
    { t: "Submit on time, and confirm with the student." }
  ],
  why: "Studies of real recommendation letters found systematic differences by gender: shorter letters, more doubt raisers, and fewer standout adjectives for women, and more communal language that readers penalized. A quick self-audit before you hit send helps.",
  sources: [
    { k: "madera2009", use: "Agentic vs. communal language by gender in academic letters." },
    { k: "trix2003", use: "Letter length, doubt raisers, grindstone adjectives by gender." },
    { k: "ferpa", use: "Student access rights to letters." }
  ]
},

/* ======================= LEADERSHIP & ADMIN ======================= */
{
  id: "chair-first-90-days",
  title: "New department chair: first 90 days",
  emoji: "🪑",
  cat: "leadership", aud: ["admin", "college"], tags: ["department chair", "leadership", "accreditation", "governance"],
  evidence: "mixed",
  summary: "Listen before you change things. Learn the money, the calendar, accreditation, and the people.",
  items: [
    { t: "Meet one-on-one with every faculty and staff member. Ask what's working, what's broken, and what they need." },
    { t: "Read the faculty handbook, contracts, any union agreement, and the department bylaws." },
    { t: "Know your NASM accreditation status, the next review date, and what's due.", src: ["nasmHandbook"] },
    { t: "Learn the budget lines: what's yours, what's recurring, what's soft money." },
    { t: "Build a calendar of every deadline (schedules, evaluations, budget, juries, auditions)." },
    { t: "Review health-and-safety obligations and information for students and faculty.", src: ["nasmHearing", "nasmNms"] },
    { t: "Understand shared-governance and academic-freedom norms before making curricular moves.", src: ["aaup1940"] },
    { t: "Use student evaluations carefully. They're biased and weakly tied to learning.", src: ["boring2016", "uttl2017"] },
    { t: "Fix the meetings: an agenda, outcomes, shorter, and fewer.", src: ["rogelberg2006", "bluedorn1999"] },
    { t: "Write down the decisions that were made before you, and why." },
    { t: "Protect some time for your own teaching and creative work." },
    { t: "Find a mentor chair outside your department." }
  ],
  why: "A new chair inherits people, budgets, and obligations at once. Accreditation standards (NASM) and governance norms (AAUP) set the frame. Research on meetings and teaching evaluations offers quick wins. Most of this list is leadership practice rather than research.",
  sources: [
    { k: "nasmHandbook", use: "Accreditation standards." },
    { k: "nasmHearing", use: "Hearing-health information requirements and advisories." },
    { k: "nasmNms", use: "Neuromusculoskeletal and vocal health advisories." },
    { k: "aaup1940", use: "Academic freedom and tenure principles." },
    { k: "boring2016", use: "Bias in student evaluations of teaching." },
    { k: "uttl2017", use: "SET ratings not related to learning (meta-analysis)." },
    { k: "rogelberg2006", use: "Meeting load and well-being." },
    { k: "bluedorn1999", use: "Stand-up meetings." }
  ]
},
{
  id: "faculty-search",
  title: "Running a faculty search",
  emoji: "🔎",
  cat: "leadership", aud: ["admin", "college"], tags: ["hiring", "search committee", "bias", "interviews"],
  evidence: "research",
  summary: "Criteria first, structured interviews, real work samples, independent scoring, then discussion.",
  items: [
    { t: "Write the criteria and how you'll weigh them before reading any applications." },
    { t: "Use structured interviews: the same questions, in the same order, with a scoring guide.",
      more: "Structured interviews are among the most valid selection methods in personnel research.", src: ["levashina2014", "sackett2022"] },
    { t: "Include real work samples: a teaching demo, a rehearsal with your students, a lesson, a performance.", src: ["schmidt1998", "sackett2022"] },
    { t: "Have members score independently before the committee discusses." },
    { t: "Screen preliminary recorded auditions for performance positions when feasible.", src: ["goldin2000", "tsay2013"] },
    { t: "Read letters knowing they carry gender bias.", src: ["madera2009", "trix2003"] },
    { t: "Build a committee with varied perspectives, and include students in demos where appropriate." },
    { t: "Check with HR on illegal or inappropriate interview questions." },
    { t: "Make the campus visit accessible, and ask every candidate about accommodations.", src: ["sec504"] },
    { t: "Communicate timelines honestly and promptly with all candidates." },
    { t: "Document decisions and the reasons for them." }
  ],
  why: "Personnel-selection meta-analyses consistently find structured interviews and work samples outperform unstructured conversation. Research on recommendation letters and visual judgments of performance shows where bias creeps in.",
  sources: [
    { k: "levashina2014", use: "Structured interview research review." },
    { k: "sackett2022", use: "Updated validity estimates for selection methods." },
    { k: "schmidt1998", use: "Classic meta-analysis of selection methods." },
    { k: "goldin2000", use: "Screened auditions." },
    { k: "tsay2013", use: "Visual information in judging performance." },
    { k: "madera2009", use: "Gender and letters." },
    { k: "trix2003", use: "Gender and letters." },
    { k: "sec504", use: "Accessibility." }
  ]
},
{
  id: "evaluating-teaching",
  title: "Evaluating teaching fairly (annual review, tenure, promotion)",
  emoji: "📈",
  cat: "leadership", aud: ["admin", "college"], tags: ["evaluation", "tenure", "bias", "student evaluations"],
  evidence: "research",
  summary: "Never rely on student evaluations alone. Use multiple measures and written criteria.",
  items: [
    { t: "Don't use student evaluation scores as the main measure of teaching quality.",
      more: "Studies find student evaluations are biased (e.g., by instructor gender) and weakly or not related to student learning.", src: ["boring2016", "uttl2017"] },
    { t: "Use multiple measures: peer observation with a shared protocol, syllabi, student work, and a teaching statement." },
    { t: "Use music-specific evidence: studio retention and growth, ensemble repertoire and growth, recital outcomes." },
    { t: "Read student comments for patterns, not one-off extremes, and watch for biased language." },
    { t: "Put response rates and course context (required or elective, size, level) next to any numbers." },
    { t: "Keep formative (helpful feedback) separate from summative (personnel decisions) when you can." },
    { t: "Put criteria in writing ahead of time, and apply them consistently.", src: ["aaup1940"] },
    { t: "Train reviewers on bias, briefly and practically." }
  ],
  why: "Student evaluations of teaching are convenient but flawed. Multi-section studies and meta-analyses suggest they're weakly related to learning and can reflect bias. Fair evaluation uses several kinds of evidence.",
  sources: [
    { k: "boring2016", use: "SET bias and weak validity." },
    { k: "uttl2017", use: "SET and learning unrelated in multi-section studies." },
    { k: "aaup1940", use: "Academic freedom and tenure principles." }
  ]
},
{
  id: "running-meetings",
  title: "Running a meeting people don't hate",
  emoji: "⏰",
  cat: "leadership", aud: ["admin", "college", "secondary", "elementary"], tags: ["meetings", "leadership"],
  evidence: "research",
  summary: "Purpose, agenda, short, decisions recorded, and snacks if it's near a meal.",
  items: [
    { t: "Ask whether this could be an email. Cancel if so." },
    { t: "Send an agenda with desired outcomes at least a day ahead." },
    { t: "Invite only the people needed for the decisions." },
    { t: "Start and end on time. Shorter than an hour is fine." },
    { t: "Try standing for quick check-ins.", src: ["bluedorn1999"] },
    { t: "Provide food if it's near a meal or right after teaching.", src: ["swami2022"] },
    { t: "Record decisions, owners, and deadlines, and send them within 24 hours." },
    { t: "Keep a 'parking lot' for off-topic items." },
    { t: "Audit the whole meeting load each semester.", src: ["rogelberg2006"] }
  ],
  why: "Meeting science finds that meeting load relates to fatigue and perceived workload, and that format choices (like standing) can shorten meetings without hurting decisions. Some of this is just courtesy.",
  sources: [
    { k: "rogelberg2006", use: "Meeting load and well-being." },
    { k: "bluedorn1999", use: "Stand-up meeting outcomes." },
    { k: "swami2022", use: "Hunger and irritability." }
  ]
},
{
  id: "area-director",
  title: "Area director (vocal, choral, instrumental, keyboard…)",
  emoji: "🗺️",
  cat: "leadership", aud: ["admin", "college"], tags: ["area director", "choral", "vocal", "scheduling", "studio assignments"],
  evidence: "mixed",
  summary: "Coordinate the calendar, make studio assignments transparent, and keep students healthy and fairly judged.",
  items: [
    { t: "Build one area calendar: ensembles, juries, recitals, auditions, studio classes, and conflicts." },
    { t: "Make studio-assignment and change-of-teacher processes transparent and written down." },
    { t: "Coordinate repertoire across ensembles to avoid duplication and balance student load." },
    { t: "Coordinate accompanist and collaborative-pianist assignments and hours fairly." },
    { t: "Run auditions and juries with shared rubrics, calibration, and randomized order.", src: ["wesolowski2016", "bruine2005"] },
    { t: "Share vocal-health and neuromusculoskeletal-health information with students.", src: ["nasmNms"] },
    { t: "Share hearing-health information, especially for instrumental areas.", src: ["nasmHearing"] },
    { t: "Mentor adjuncts and TAs: syllabi, policies, who to call.", src: ["ferpa", "titleix"] },
    { t: "Budget for scores, rentals, and licenses.", src: ["circ21"] },
    { t: "Coordinate recruitment events and messaging with admissions." },
    { t: "Hold an area meeting with an agenda, and keep it short.", src: ["bluedorn1999"] }
  ],
  why: "Area directors sit between faculty, students, and administration, and usually without much authority. Transparency and a shared calendar head off a lot of conflict. Health-and-safety information is an NASM expectation. Fairer judging procedures come from rater research.",
  sources: [
    { k: "wesolowski2016", use: "Rater precision." },
    { k: "bruine2005", use: "Order effects in judging." },
    { k: "nasmNms", use: "Vocal and NMS health advisories." },
    { k: "nasmHearing", use: "Hearing-health advisories." },
    { k: "ferpa", use: "Student privacy for new instructors." },
    { k: "titleix", use: "Title IX obligations." },
    { k: "circ21", use: "Legal copies." },
    { k: "bluedorn1999", use: "Shorter meetings." }
  ]
},
{
  id: "dean-provost-president",
  title: "Dean, provost, or president: supporting the music unit",
  emoji: "🏛️",
  cat: "leadership", aud: ["admin"], tags: ["dean", "provost", "president", "budget", "facilities", "accreditation"],
  evidence: "mixed",
  summary: "Show up, learn what's different about music (one-on-one teaching, facilities, health), and advocate honestly.",
  items: [
    { t: "Attend a rehearsal, not just a gala concert." },
    { t: "Learn why applied lessons and ensembles count credit hours and contact hours differently, and how that affects load." },
    { t: "Know the accreditation cycle and what it costs (NASM).", src: ["nasmHandbook"] },
    { t: "Ask about health and safety: hearing, vocal, and physical health of students and faculty.", src: ["nasmHearing", "nasmNms"] },
    { t: "Walk the facilities: practice rooms, acoustic isolation, instrument storage climate, and accessibility." },
    { t: "Fund staff support (collaborative pianists, piano techs, librarians, production staff)." },
    { t: "Budget for performance and recording licensing.", src: ["usc110", "songfile"] },
    { t: "Protect academic freedom in repertoire and text choices.", src: ["aaup1940"] },
    { t: "Make sure evaluation of music faculty doesn't over-rely on student evaluations.", src: ["boring2016", "uttl2017"] },
    { t: "Pitch music honestly to donors and boards: belonging, excellence, and community, not 'it makes you smarter'.", src: ["sala2020", "elpus2013"] },
    { t: "Ask how students' mental health is supported in high-pressure programs.", src: ["jed"] }
  ],
  why: "Senior leaders often come from disciplines with different teaching models. Music relies on one-on-one instruction, specialized facilities, and performance health concerns. This checklist gives non-musician leaders the right questions, using accreditation standards and honest research.",
  sources: [
    { k: "nasmHandbook", use: "Accreditation standards." },
    { k: "nasmHearing", use: "Hearing-health advisories." },
    { k: "nasmNms", use: "Vocal and NMS advisories." },
    { k: "usc110", use: "Performance exemptions." },
    { k: "songfile", use: "Recording licenses." },
    { k: "aaup1940", use: "Academic freedom." },
    { k: "boring2016", use: "SET bias." },
    { k: "uttl2017", use: "SET and learning." },
    { k: "sala2020", use: "No far-transfer effect." },
    { k: "elpus2013", use: "SAT selection bias." },
    { k: "jed", use: "Student mental health." }
  ]
}
);
