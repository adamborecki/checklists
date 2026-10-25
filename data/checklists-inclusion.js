/*
  Checklists: autistic students, sensory-friendly concerts, English learners,
  multilingual families, international students.
  All AI-drafted on 2026-10-23. Nothing here has been human-reviewed yet.
*/
(window.MTC_CHECKLISTS = window.MTC_CHECKLISTS || []).push(

/* ======================= CLASSROOM & INCLUSION ======================= */
{
  id: "autistic-student",
  title: "Supporting an autistic student (including one who's \"slightly on the spectrum\")",
  emoji: "♾️",
  fmt: ["lessons", "small", "large", "general", "lecture"],
  cat: "classroom", aud: ["preschool", "elementary", "secondary", "college", "studio", "ta"], tags: ["autism", "inclusion", "special education", "sensory", "hearing"],
  evidence: "mixed",
  ai: { links: true, claims: "none", note: "Citations checked by web search (2026-10-23); DOIs and URLs re-verified via Crossref and live check (2026-10-23). Claims not yet checked against sources." },
  summary: "Ask, don't assume. Make the room predictable, plan for sound, and build on strengths. \"Slightly\" rarely tells you what someone needs.",
  items: [
    { t: "Drop 'slightly' and 'mild.' Support needs change with the day and the setting. A student who seems fine in class may be exhausted from holding it together.",
      more: "Autistic adults in one study described 'camouflaging' (hiding autistic traits to fit in) and reported exhaustion and strain as a result.", src: ["hull2017"] },
    { t: "Ask the student (and the family, for minors) what words they prefer: 'autistic', 'on the autism spectrum', or 'person with autism.' People genuinely disagree.",
      more: "A UK survey of 3,470 people found no single term everyone preferred. Autistic adults favored 'autistic' far more often than professionals did. The authors' advice: ask.", src: ["kenny2016"] },
    { t: "Don't diagnose or label a student yourself. If you notice needs, share specific observations with the case manager, counselor, or family." },
    { t: "Read the IEP or 504 plan, and ask the case manager what it looks like in a music room.", src: ["idea", "sec504"] },
    { t: "College: accommodations come through the disability services office. Implement the letter, and don't ask for a diagnosis.", src: ["sec504"] },
    { t: "Make class predictable: a posted or visual agenda, the same opening routine, and warnings before transitions.",
      more: "Visual supports and changes made before a difficult moment (antecedent-based interventions) are among the evidence-based practices identified in a large review.", src: ["hume2021"] },
    { t: "Preview the new and the loud: show the space, play a recording, and explain what a fire drill, dress rehearsal, or concert will be like.", src: ["hume2021", "hammel2020"] },
    { t: "Plan for sound. Offer ear defenders or earplugs, a seat away from brass and percussion, and a place to cool down.",
      more: "A meta-analysis estimated that decreased sound tolerance affects roughly 27–41% of autistic people, depending on how it's measured.", src: ["williams2021"] },
    { t: "Give one direction at a time, say it literally, and pair it with a model or a gesture.", src: ["hume2021"] },
    { t: "Allow stimming and movement that doesn't hurt anyone. A rocking or fidgeting student may be regulating, not misbehaving." },
    { t: "Don't require eye contact as proof of attention." },
    { t: "Build on interests and strengths: pitch memory, rhythm, a deep interest in one composer, instrument, or genre.", src: ["hammel2020"] },
    { t: "Remember that communication runs both ways. Misunderstandings between autistic and non-autistic people are mutual, so adjust your style too.", src: ["milton2012"] },
    { t: "Teach the social side of ensemble life directly (when to talk, where to stand, when to clap) instead of assuming it's obvious.", src: ["hume2021"] },
    { t: "Prepare for performances: a rehearsal on the stage, an exit plan, and a quiet spot backstage." },
    { t: "Know that music class isn't music therapy. Music therapy is a separate clinical profession with its own evidence base.", src: ["geretsegger2022"] },
    { t: "Talk to the student, not about them in front of them. Presume competence." }
  ],
  why: "\"Slightly on the spectrum\" is a common phrase, but autism isn't a line from mild to severe. The same student can need very little support in one setting and a lot in another, and students who mask their differences often pay for it later in the day. Language preferences vary, so the respectful move is to ask.\n\nThe practical items draw on a large systematic review of evidence-based practices for autistic children and young adults (visual supports, priming, explicit instruction), research on sound sensitivity, and a widely used music-education text. Classroom music research specifically on autistic students is still limited. Laws (IDEA, Section 504) are U.S.-specific.",
  sources: [
    { k: "hume2021", use: "Evidence-based practices for autistic children, youth, and young adults (systematic review)." },
    { k: "kenny2016", use: "Preferred terms for autism vary; ask the person." },
    { k: "hull2017", use: "Camouflaging and its costs." },
    { k: "milton2012", use: "The 'double empathy problem': communication breakdowns go both ways." },
    { k: "williams2021", use: "Prevalence of decreased sound tolerance in autistic people (meta-analysis)." },
    { k: "geretsegger2022", use: "Cochrane review of music therapy for autistic people." },
    { k: "hammel2020", use: "Practical guide to teaching music to autistic students." },
    { k: "idea", use: "IEPs under IDEA." },
    { k: "sec504", use: "Section 504 accommodations." }
  ]
},

/* ======================= CONCERTS ======================= */
{
  id: "sensory-friendly-concert",
  title: "Planning a sensory-friendly (relaxed) concert",
  emoji: "🎧",
  fmt: ["small", "large", "general"],
  cat: "concerts", aud: ["preschool", "elementary", "secondary", "college", "studio", "admin"], tags: ["concerts", "autism", "accessibility", "inclusion", "sensory"],
  evidence: "practice",
  ai: { links: true, claims: "none", note: "Citations checked by web search (2026-10-23); DOIs and URLs re-verified via Crossref and live check (2026-10-23). Claims not yet checked against sources." },
  summary: "Shorter, softer, house lights partly up, freedom to move, a quiet room, and a story so people know what to expect.",
  items: [
    { t: "Decide who it's for (autistic audience members, young children, people with sensory or anxiety needs), and ask them or their families what would help." },
    { t: "Send a visual story ahead of time: photos of the building, stage, bathrooms, and quiet room, and what happens in what order.", src: ["pittsburghSensory"] },
    { t: "Share a playlist or video of the program in advance.", src: ["pittsburghSensory"] },
    { t: "Keep it short (about an hour), with no long speeches." },
    { t: "Lower peak volume and avoid sudden loud effects (cymbal crashes, air horns, cannons), or warn people right before them.", src: ["williams2021"] },
    { t: "Keep house lights partly up, and skip strobe or flashing lights." },
    { t: "Make it OK to move, talk, rock, flap, leave, and come back. Say so from the stage.", src: ["mnorchSensory"] },
    { t: "Offer a quiet room with an audio feed, plus ear defenders and fidgets.", src: ["mnorchSensory"] },
    { t: "Leave aisle space and flexible seating: floor cushions, wheelchair spots, room to stand." },
    { t: "Train ushers and volunteers: no shushing, and how to help someone who's overwhelmed.", src: ["mnorchSensory"] },
    { t: "Prepare your performers, too, so audience movement and sound don't throw them." },
    { t: "Ask for feedback afterward, especially from autistic adults and families." }
  ],
  why: "Many families with autistic children avoid concerts because they worry about disturbing others. Sensory-friendly or 'relaxed' performances change the norms of the room so everyone can attend. The practices here come from orchestras that run these concerts. There's little or no outcome research on the concerts themselves, so this is practitioner wisdom. It is informed by research showing that sound sensitivity is common among autistic people.",
  sources: [
    { k: "pittsburghSensory", use: "Example of a pre-visit story, playlist, and introductory videos." },
    { k: "mnorchSensory", use: "Example of relaxed-performance norms, quiet spaces, and staff training." },
    { k: "williams2021", use: "Sound sensitivity is common in autistic people." }
  ]
},

/* ======================= ENGLISH LEARNERS & MULTILINGUAL FAMILIES ======================= */
{
  id: "ell-by-level",
  title: "Teaching English learners in music, level by level",
  emoji: "🔤",
  fmt: ["large", "general"],
  cat: "multilingual", aud: ["preschool", "elementary", "secondary", "studio"], tags: ["English learners", "ESL", "inclusion", "language", "equity"],
  evidence: "mixed",
  ai: { links: true, claims: "none", note: "Citations checked by web search (2026-10-23); DOIs and URLs re-verified via Crossref and live check (2026-10-23). Claims not yet checked against sources." },
  summary: "Music is a great place to learn in a new language, if you show more than you tell and match your language to each student's level.",
  items: [
    { t: "Find out each student's English proficiency level and home language(s). Ask the EL or ESL teacher.",
      more: "Many states use WIDA's six proficiency levels: 1 Entering, 2 Emerging, 3 Developing, 4 Expanding, 5 Bridging, 6 Reaching.", src: ["wida2020"] },
    { t: "Learn to say every student's name correctly." },
    { t: "Show, then say: model, gesture, demonstrate, and use visuals for every direction.", src: ["abril2003", "colorinMusic", "nafmeEll"] },
    { t: "Teach music vocabulary on purpose (beat, rest, measure, phrase, forte) with pictures and gestures, and post a word wall.", src: ["colorinMusic"] },
    { t: "Levels 1–2 (Entering, Emerging): lean on echo, call-and-response, and imitation. Accept pointing, yes/no, and showing. Silence early on is normal, so don't force speaking.", src: ["wida2020"] },
    { t: "Levels 3–4 (Developing, Expanding): add sentence frames for describing music ('The tempo is ___ because ___') and pair work.", src: ["wida2020"] },
    { t: "Levels 5–6 (Bridging, Reaching): push academic language (program notes, critiques, reflections), with support for tricky vocabulary.", src: ["wida2020"] },
    { t: "Use songs for language. Singing may help learners remember and produce new phrases.",
      more: "In a lab study, adults who learned Hungarian phrases by singing recalled them better than those who learned by speaking. That's adults in a lab, not kids in a classroom, but it's encouraging.", src: ["ludke2014"] },
    { t: "Pair students with a buddy, ideally one who shares a language, and let them use their home language to figure things out." },
    { t: "Invite music from students' home cultures, and let them be the experts if they want to.", src: ["colorinMusic", "ladson1995"] },
    { t: "Make assessments measure music, not English: perform, point, or demonstrate instead of writing.", src: ["cast"] },
    { t: "Don't mistake conversational English for academic English.",
      more: "In one well-known study, oral proficiency took 3–5 years and academic English 4–7 years, even in districts considered successful.", src: ["hakuta2000"] },
    { t: "Make sure English learners can join ensembles and electives like everyone else.",
      more: "U.S. civil-rights law requires meaningful access to the instructional program for English learners. The 2015 federal guidance spelling this out was rescinded in August 2025, but the underlying law (Title VI, Lau v. Nichols, the Equal Educational Opportunities Act) still applies.", src: ["lau1974", "idra2025"] },
    { t: "Coordinate with the EL teacher: share your vocabulary list and upcoming songs." }
  ],
  why: "Music classes can be among the most welcoming places for English learners, because so much happens through modeling, sound, and movement. They can also quietly exclude students when directions, written tests, and rehearsal talk all assume fluent English. Matching your language to each student's proficiency level, as described in frameworks like WIDA's, keeps everyone making music while they learn English.\n\nResearch on music specifically for English learners is mostly descriptive. The language-development research is more robust.",
  sources: [
    { k: "wida2020", use: "English language development standards and six proficiency levels." },
    { k: "abril2003", use: "Breaking the language barrier in music instruction." },
    { k: "colorinMusic", use: "Practical tips for music educators teaching English learners." },
    { k: "nafmeEll", use: "Practices for English learners in elementary general music." },
    { k: "ludke2014", use: "Singing and foreign-language phrase learning (lab experiment)." },
    { k: "hakuta2000", use: "How long English proficiency takes." },
    { k: "ladson1995", use: "Culturally relevant pedagogy." },
    { k: "cast", use: "Universal Design for Learning: multiple ways to show learning." },
    { k: "lau1974", use: "Supreme Court decision on English learners' access to instruction." },
    { k: "idra2025", use: "Status of federal EL guidance after the 2025 rescission." }
  ]
},
{
  id: "ell-newcomer",
  title: "A newcomer who speaks little or no English joins your class tomorrow",
  emoji: "🧳",
  fmt: ["large", "general"],
  cat: "multilingual", aud: ["preschool", "elementary", "secondary"], tags: ["English learners", "newcomers", "first day", "inclusion"],
  evidence: "practice",
  ai: { links: true, claims: "none", note: "Citations checked by web search (2026-10-23); DOIs and URLs re-verified via Crossref and live check (2026-10-23). Claims not yet checked against sources." },
  summary: "Welcome first. Their name, a buddy, routines they can see, and music they can join on day one.",
  items: [
    { t: "Get the basics: home language, how to say their name, any prior music experience, and the EL teacher's name." },
    { t: "Say their name correctly from the first minute." },
    { t: "Learn 'hello' and 'welcome' in their language." },
    { t: "Assign a buddy. One who shares a language is ideal, but any kind classmate works." },
    { t: "Make routines visible with picture cards: line up, instruments out, rest position, sit, stand.", src: ["abril2003"] },
    { t: "Give them something they can do right away: a drum part, a body-percussion pattern, an echo song.", src: ["colorinMusic"] },
    { t: "Expect a quiet period. Watching is participating." },
    { t: "Use a translation app for quick logistics if you need to, but use a human interpreter for anything important.", src: ["dcl2015"] },
    { t: "Send home a translated welcome note with concert dates and what to bring.", src: ["lau1974"] },
    { t: "Watch for signs of stress or trauma, especially in refugee students, and loop in the counselor.", src: ["nctsnPfa"] },
    { t: "Check in with the EL teacher after the first week." }
  ],
  why: "A newcomer's first music class can be a relief (music doesn't require fluent English) or one more confusing room. Most of this is practitioner wisdom from music and EL teachers. The anchors are simple: learn their name, make routines visual, give them a real musical job right away, and communicate with the family in a language they understand.",
  sources: [
    { k: "abril2003", use: "Visual and nonverbal strategies across a language barrier." },
    { k: "colorinMusic", use: "Tips for music educators teaching English learners." },
    { k: "dcl2015", use: "Prior federal guidance on interpreters and translation (rescinded 2025)." },
    { k: "lau1974", use: "English learners' right to meaningful access." },
    { k: "nctsnPfa", use: "Psychological First Aid for students who've been through hard things." }
  ]
},
{
  id: "multilingual-families",
  title: "Communicating with families who speak other languages",
  emoji: "🌐",
  fmt: ["lessons", "large", "general"],
  cat: "multilingual", aud: ["preschool", "elementary", "secondary", "studio", "admin"], tags: ["parents", "communication", "translation", "English learners", "equity"],
  evidence: "standard",
  ai: { links: true, claims: "none", note: "Citations checked by web search (2026-10-23); DOIs and URLs re-verified via Crossref and live check (2026-10-23). Claims not yet checked against sources." },
  summary: "Translate what matters, use real interpreters, and don't make kids do it.",
  items: [
    { t: "Find out each family's preferred language for writing and for talking. Registration data may be out of date." },
    { t: "Translate the essentials: concert dates, call times, dress code, trip forms, fees and fee waivers, and permission slips.", src: ["lau1974", "dcl2015"] },
    { t: "Use qualified interpreters for meetings and calls. Your district likely has a service.", src: ["dcl2015"] },
    { t: "Don't use students as interpreters for their own families, especially about grades, behavior, or anything sensitive.",
      more: "The 2015 federal guidance said schools shouldn't rely on students or untrained staff to interpret. That guidance was rescinded in August 2025, but it's still best practice, and many state and district policies require it.", src: ["dcl2015", "idra2025"] },
    { t: "Keep messages short, plain, and specific: date, time, place, what to bring." },
    { t: "Machine translation is fine for quick logistics. Don't use it for anything legal, medical, or high-stakes." },
    { t: "Use pictures and examples: a photo of 'concert black', a map to the venue, a picture of the instrument rental form." },
    { t: "Use more than one channel: a messaging app with translation, paper, and a phone call.", src: ["kraft2015"] },
    { t: "Invite families to share music from home and to come to rehearsals, not just concerts.", src: ["colorinMusic"] },
    { t: "Don't assume no reply means no interest. Follow up a different way." }
  ],
  why: "Families can't support a music program they can't understand. Under Title VI and Lau v. Nichols, U.S. public schools must communicate with parents in a language they understand about school programs and activities. The detailed 2015 federal guidance on this was rescinded in 2025, and advocates and legal analysts say the underlying obligations remain. Check your state and district policy, which may be more specific.",
  sources: [
    { k: "lau1974", use: "English learners' rights under Title VI." },
    { k: "dcl2015", use: "Prior federal guidance on communicating with parents with limited English (rescinded 2025)." },
    { k: "idra2025", use: "What's still required after the rescission." },
    { k: "kraft2015", use: "Teacher-to-family communication experiment." },
    { k: "colorinMusic", use: "Involving families in music programs." }
  ]
},
{
  id: "international-students",
  title: "International students in your college studio or ensemble",
  emoji: "✈️",
  fmt: ["lessons", "small", "large", "lecture"],
  cat: "multilingual", aud: ["college", "ta", "studio", "admin"], tags: ["international students", "college", "belonging", "language"],
  evidence: "mixed",
  ai: { links: true, claims: "none", note: "Citations checked by web search (2026-10-23); DOIs and URLs re-verified via Crossref and live check (2026-10-23). Claims not yet checked against sources." },
  summary: "Spell out the unwritten rules, check understanding, and know what's different about their visa, money, and distance from home.",
  items: [
    { t: "Tell them the first semester is hard for almost everyone, and that it gets better.",
      more: "Brief interventions that frame early struggles as common and temporary improved outcomes for students who often feel they don't belong. Those studies weren't specific to international students.", src: ["walton2011", "yeager2016"] },
    { t: "Explain the unwritten rules: office hours, studio class, juries, recital requirements, how to email a professor, what 'optional' really means." },
    { t: "Check understanding without asking 'Do you understand?' Ask them to say the plan back, or play it." },
    { t: "Put assignments, deadlines, and rehearsal changes in writing. Spoken announcements are easy to miss in a second language." },
    { t: "Learn their musical background. Training systems differ (fixed do, solfège, terminology, repertoire, how lessons work)." },
    { t: "Say their name correctly, and use the name they ask you to use." },
    { t: "Send visa and enrollment questions to the international student office, and don't give immigration advice.",
      more: "Dropping a class, taking a leave, or changing programs can affect visa status. Encourage students to check before they decide." },
    { t: "Ask about breaks. Dorms may close, and flights home are expensive." },
    { t: "Watch for isolation and homesickness, and know the counseling referral path.", src: ["jed"] },
    { t: "Pair them with a peer mentor in the studio or ensemble.", src: ["eby2008"] }
  ],
  why: "International students bring a lot to music programs and face extra hurdles: a new language, a new academic culture, visa rules, and distance from home. Research on belonging suggests that telling students early struggles are normal and temporary helps, though the best-known studies weren't about international students specifically. The rest is practical experience. Visa rules change, so the international office is always the authority.",
  sources: [
    { k: "walton2011", use: "Social-belonging intervention (randomized)." },
    { k: "yeager2016", use: "Pre-college lay-theory interventions at scale." },
    { k: "jed", use: "Young-adult mental health resources." },
    { k: "eby2008", use: "Mentoring outcomes (meta-analysis)." }
  ]
}
);
