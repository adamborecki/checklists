/*
  Checklists: teacher survival, families & advocacy, private studio, copyright & safety.
  All AI-drafted on 2026-10-22. Nothing here has been human-reviewed yet.
*/
(window.MTC_CHECKLISTS = window.MTC_CHECKLISTS || []).push(

/* ======================= TEACHER SURVIVAL ======================= */
{
  id: "faculty-meeting-empty-stomach",
  title: "Surviving a faculty meeting on an empty stomach",
  emoji: "🥪",
  cat: "survival", aud: ["elementary", "secondary", "college", "studio", "admin", "ta", "preschool"], tags: ["meetings", "self-care", "hangry", "decision-making"],
  evidence: "research",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "You're not furious, you're hungry. Probably. Eat, hydrate, and don't volunteer for anything until you've had a snack.",
  items: [
    { t: "Eat something before you go. Keep shelf-stable snacks in your desk, bag, and car.",
      more: "In a 21-day experience-sampling study, people's day-to-day hunger was associated with more anger and irritability and less pleasure.", src: ["swami2022"] },
    { t: "Name it to tame it: 'I'm hungry, not outraged.'",
      more: "Lab studies suggest hunger turns into negative emotion more when people aren't paying attention to their own bodily state.", src: ["maccormack2019"] },
    { t: "Bring water.", src: ["masento2014"] },
    { t: "Don't volunteer for a committee, agree to a new duty, or send a spicy email while hangry. Say 'Let me get back to you by Friday.'",
      more: "A famous study found judges granted parole less often just before meal breaks. Critics argue case ordering explains much of that, so treat it as a fun cautionary tale, not proof.", src: ["danziger2011", "weinshall2011"] },
    { t: "Don't count on 'willpower runs on glucose' either. A large replication found the ego-depletion effect near zero.", src: ["hagger2016"] },
    { t: "Read the agenda ahead and prepare your one point (concert dates, the schedule conflict, the bus)." },
    { t: "Sit near the door if you have rehearsal right after." },
    { t: "Bring a snack to share. Morale is a team sport." },
    { t: "If you run meetings: don't schedule them over lunch without food, and keep them short.",
      more: "Stand-up meetings ran about a third shorter than sit-down ones, with similar decision quality.", src: ["bluedorn1999"] },
    { t: "Notice your meeting load. Too many meetings is linked to fatigue and feeling overloaded.", src: ["rogelberg2006"] },
    { t: "Afterward, eat first, then answer emails." }
  ],
  why: "This is the fun one, but the research is real. Hunger is reliably associated with irritability in everyday life. Some evidence suggests the effect is stronger when you don't notice it, so naming it helps. The famous 'hungry judges' study is included with its critics, because it's a great example of a finding that's cited more confidently than it deserves. Meeting-science research suggests shorter, more purposeful meetings are better for everyone.",
  sources: [
    { k: "swami2022", use: "Hunger associated with anger and irritability in daily life." },
    { k: "maccormack2019", use: "When hunger becomes 'hanger'." },
    { k: "masento2014", use: "Hydration, cognition, and mood (review)." },
    { k: "danziger2011", use: "Parole decisions and meal breaks." },
    { k: "weinshall2011", use: "Critique of the parole study." },
    { k: "hagger2016", use: "Ego-depletion replication." },
    { k: "bluedorn1999", use: "Stand-up vs. sit-down meetings." },
    { k: "rogelberg2006", use: "Meeting load and employee well-being." }
  ]
},
{
  id: "concert-season-survival",
  title: "Surviving concert season",
  emoji: "🛟",
  fmt: ["large", "general"],
  cat: "survival", aud: ["elementary", "secondary", "college", "studio"], tags: ["self-care", "burnout", "sleep", "voice"],
  evidence: "research",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Protect sleep and your voice, delegate, and put one real day off on the calendar now.",
  items: [
    { t: "Protect sleep. Even short-term sleep loss measurably hurts attention and working memory.", src: ["lim2010"] },
    { t: "Use amplification and nonverbal cues during long rehearsal days.", src: ["roy2002"] },
    { t: "Put every rehearsal, dress rehearsal, and deadline on one calendar, shared with your family." },
    { t: "Delegate: student leaders, parent volunteers, accompanists, a colleague." },
    { t: "Prep meals or snacks for concert week." },
    { t: "Set email boundaries (an auto-reply for concert week is OK)." },
    { t: "Wear your earplugs in loud rehearsals.", src: ["chesky2009"] },
    { t: "Schedule one real day off after the last concert, now." },
    { t: "Notice burnout signs: dread, cynicism, exhaustion that a weekend doesn't fix.", src: ["madigan2021"] },
    { t: "For college students: watch for overload in music majors, too.", src: ["bernhard2005"] },
    { t: "Celebrate with your students. Write down three things that went well." }
  ],
  why: "Concert season stacks long days, vocal strain, and lost sleep. Sleep-deprivation meta-analyses show clear cognitive costs. Teacher-burnout research links exhaustion and low job satisfaction with leaving the profession.",
  sources: [
    { k: "lim2010", use: "Short-term sleep deprivation and cognition (meta-analysis)." },
    { k: "roy2002", use: "Amplification for teachers' voices." },
    { k: "chesky2009", use: "Musician earplugs." },
    { k: "madigan2021", use: "Burnout, satisfaction, and intent to quit (meta-analysis)." },
    { k: "bernhard2005", use: "Burnout in college music education majors." }
  ]
},
{
  id: "teacher-voice",
  title: "Protecting your teaching voice",
  emoji: "🗣️",
  fmt: ["lessons", "large", "general", "lecture"],
  cat: "survival", aud: ["elementary", "secondary", "college", "studio", "preschool", "ta"], tags: ["voice", "health", "self-care"],
  evidence: "research",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Teachers get voice disorders far more often than the general public. Amplify, hydrate, rest, and stop shouting over the band.",
  items: [
    { t: "Know the risk: teachers report voice disorders far more often than non-teachers.", src: ["roy2004"] },
    { t: "Use amplification (a small personal mic) if you talk over groups all day.",
      more: "In a randomized trial with voice-disordered teachers, amplification beat vocal-hygiene instruction on several outcomes.", src: ["roy2002"] },
    { t: "Stop talking over the ensemble. Use cutoffs, gestures, and visual cues instead." },
    { t: "Drink water through the day, and go easy on caffeine and alcohol.", src: ["ashaVoice"] },
    { t: "Give your voice breaks between classes, and skip talking during loud transitions.", src: ["ashaVoice"] },
    { t: "Don't whisper as 'voice rest'. It can strain too.", src: ["ashaVoice"] },
    { t: "Warm up your speaking voice, not just your singing voice." },
    { t: "Model singing in a comfortable register, and use a student or a recording for extremes." },
    { t: "If hoarseness lasts more than about two weeks, see a doctor (ENT) or speech-language pathologist.", src: ["ashaVoice"] },
    { t: "Share vocal-health info with your singers.", src: ["nasmNms"] }
  ],
  why: "A large prevalence study found that teachers report current and lifetime voice disorders much more often than the general population. A clinical trial found portable amplification helped teachers with voice disorders. ASHA's guidance for teachers covers hydration, rest, and when to get evaluated.",
  sources: [
    { k: "roy2004", use: "Prevalence of voice disorders in teachers." },
    { k: "roy2002", use: "Amplification vs. vocal hygiene (randomized)." },
    { k: "ashaVoice", use: "ASHA tips for teachers' voices." },
    { k: "nasmNms", use: "Vocal-health advisories for music students." }
  ]
},

/* ======================= FAMILIES & ADVOCACY ======================= */
{
  id: "upset-parent-email",
  title: "Responding to an upset parent email",
  emoji: "📧",
  fmt: ["lessons", "large", "general"],
  cat: "families", aud: ["elementary", "secondary", "studio", "preschool"], tags: ["communication", "parents", "conflict"],
  evidence: "mixed",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Wait, check the facts, reply short and kind, offer to talk, and document.",
  items: [
    { t: "Don't reply while angry. Draft, then wait (but acknowledge within a day or two)." },
    { t: "Re-read it and find the actual request or worry under the tone." },
    { t: "Check the facts: the gradebook, attendance, emails, what actually happened." },
    { t: "Reply short, factual, and kind. Lead with the shared goal (their kid)." },
    { t: "Offer a call or meeting for anything complicated or emotional." },
    { t: "Never discuss another student's grades, behavior, or placement.", src: ["ferpa"] },
    { t: "Loop in your administrator per school policy, especially if it may escalate." },
    { t: "Save the thread and add notes from any call." },
    { t: "If it's threatening, stop and go to administration right away." },
    { t: "Prevent the next one with early, regular, specific communication.",
      more: "In a field experiment, regular individualized messages to families reduced dropout. Messages about what students could improve worked better than purely positive ones.", src: ["kraft2015"] }
  ],
  why: "Most of this is professional practice. Two firm anchors: student privacy law limits what you can share, and research shows proactive, specific teacher-to-family communication can change student outcomes.",
  sources: [
    { k: "ferpa", use: "Privacy of student records." },
    { k: "kraft2015", use: "Teacher-to-parent communication field experiment." }
  ]
},
{
  id: "family-communication",
  title: "Building family communication from day one",
  emoji: "💬",
  fmt: ["large", "general"],
  cat: "families", aud: ["elementary", "secondary", "preschool"], tags: ["communication", "parents", "newsletters"],
  evidence: "research",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Early, regular, specific, translated, and with something families can actually do.",
  items: [
    { t: "Send a positive, specific note home in the first few weeks.", src: ["kraft2015"] },
    { t: "Share the year's calendar early, with concert dates and call times." },
    { t: "Pick a regular rhythm (weekly or biweekly) and stick to it." },
    { t: "Include one specific, doable suggestion for home practice or listening.", src: ["kraft2015", "mcpherson2009"] },
    { t: "Translate messages into families' home languages." },
    { t: "Use more than one channel (email, text app, paper), since not every family sees every one." },
    { t: "Invite families to watch a rehearsal, not just the concert." },
    { t: "Make it easy to ask questions, and say how quickly you'll reply." }
  ],
  why: "A randomized field experiment showed that individualized teacher-to-parent messages improved student outcomes, especially messages pointing to specific things to improve. Research on music learning shows parents' involvement shapes children's musical development.",
  sources: [
    { k: "kraft2015", use: "Teacher-to-parent communication experiment." },
    { k: "mcpherson2009", use: "Parents' role in children's musical development." }
  ]
},
{
  id: "honest-advocacy",
  title: "Advocating for your program (without overclaiming)",
  emoji: "📣",
  fmt: ["large", "general"],
  cat: "families", aud: ["elementary", "secondary", "college", "admin", "studio", "preschool"], tags: ["advocacy", "budget", "research literacy"],
  evidence: "research",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Drop 'music makes you smarter.' Lead with what music actually is and does, and use local data.",
  items: [
    { t: "Retire the 'music makes kids smarter' pitch.",
      more: "A large meta-analysis found that once study quality is controlled, music training's effect on general cognitive and academic skills is about zero.", src: ["sala2020"] },
    { t: "Retire the 'Mozart effect'.", src: ["pietschnig2010"] },
    { t: "Be careful with test-score claims.",
      more: "Music students' higher SAT scores largely disappeared after controlling for who chooses music in the first place.", src: ["elpus2013"] },
    { t: "If you cite positive associations, call them associations.",
      more: "Large population studies do find music participants doing well academically, but these designs can't fully rule out selection.", src: ["guhn2020"] },
    { t: "Lead with intrinsic value: music-making, belonging, culture, expression, a lifelong skill." },
    { t: "Use local numbers: enrollment, who has access, and who doesn't.", src: ["artsed"] },
    { t: "Bring students' own words and recordings." },
    { t: "Invite decision-makers to a rehearsal, not just a concert." },
    { t: "Make one concrete ask (a budget line, a schedule fix, a position)." }
  ],
  why: "Overclaiming backfires when someone checks the research. The strongest recent evidence doesn't support claims that music training raises general intelligence or test scores. Music's value doesn't depend on that. Honest advocacy is more durable.",
  sources: [
    { k: "sala2020", use: "Meta-analysis: no reliable far-transfer effect." },
    { k: "pietschnig2010", use: "Mozart effect meta-analysis." },
    { k: "elpus2013", use: "SAT scores and selection bias." },
    { k: "guhn2020", use: "Population-level associations (correlational)." },
    { k: "artsed", use: "State arts-education access data." }
  ]
},

/* ======================= PRIVATE STUDIO ======================= */
{
  id: "studio-policies",
  title: "Setting up your studio policies",
  emoji: "📄",
  fmt: ["lessons"],
  cat: "studio", aud: ["studio"], tags: ["business", "policies", "safeguarding", "taxes"],
  evidence: "standard",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Write it down before you need it: money, missed lessons, safety, and how you communicate.",
  items: [
    { t: "Tuition: amount, schedule (monthly, semester, per lesson), and payment methods." },
    { t: "Missed lessons: student cancellations, teacher cancellations, makeups, and illness." },
    { t: "Late arrival and late pickup rules." },
    { t: "Extra fees: recitals, materials, festivals, accompanists." },
    { t: "Communication: which channels, response times, and contacting minors only with parents included.", src: ["cdcYso"] },
    { t: "Safety: door and window policy, who's present for young students, and online lesson rules.", src: ["cdcYso"] },
    { t: "Photo, video, and recording consent." },
    { t: "Notice required to stop lessons." },
    { t: "Professional conduct and privacy commitments.", src: ["mtnaEthics"] },
    { t: "Keep business records and plan for self-employment taxes.", src: ["irsSelf"] },
    { t: "Look into liability insurance." },
    { t: "Have families sign or acknowledge the policy each year." }
  ],
  why: "A written policy prevents most studio conflicts. MTNA's Code of Ethics frames professional conduct with students and families. CDC guidance on youth-serving organizations is a useful framework for safety policies, even for a one-person studio. Tax rules vary by country and state, so check yours.",
  sources: [
    { k: "mtnaEthics", use: "Professional commitments to students and families." },
    { k: "cdcYso", use: "Interaction and communication guidelines with minors." },
    { k: "irsSelf", use: "U.S. self-employment tax basics." }
  ]
},
{
  id: "studio-first-lesson",
  title: "First lesson with a new student",
  emoji: "👋",
  fmt: ["lessons"],
  cat: "studio", aud: ["studio", "college"], tags: ["lessons", "motivation", "practice"],
  evidence: "research",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Find out why they're here, give them a win today, and send them home with a specific practice plan.",
  items: [
    { t: "Ask what music they love and why they want lessons.", src: ["ryan2000"] },
    { t: "Hear them play or sing something they're comfortable with." },
    { t: "Ask about prior teachers, what worked, and what didn't." },
    { t: "Ask whether there's anything about how they learn you should know." },
    { t: "Teach one thing they can do by the end of the lesson.", src: ["evans2013"] },
    { t: "Give them a choice (piece, goal, or style).", src: ["ryan2000"] },
    { t: "Assign specific practice: what, how slowly, and what 'done' sounds like.", src: ["duke2009"] },
    { t: "For young students, include the parent in the practice plan.", src: ["mcpherson2009"] },
    { t: "Explain studio policies and communication." },
    { t: "Write notes on goals so next week builds on today." }
  ],
  why: "Self-determination theory suggests students stay motivated when they feel competent, connected, and in control of some choices. Practice research suggests specific, accuracy-focused assignments work better than 'practice 30 minutes a day.'",
  sources: [
    { k: "ryan2000", use: "Autonomy, competence, relatedness." },
    { k: "evans2013", use: "Unmet needs and quitting." },
    { k: "duke2009", use: "Practice quality over quantity." },
    { k: "mcpherson2009", use: "Parent involvement." }
  ]
},
{
  id: "studio-parents",
  title: "Working with studio parents",
  emoji: "👪",
  fmt: ["lessons"],
  cat: "studio", aud: ["studio"], tags: ["parents", "practice", "communication"],
  evidence: "research",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Parents shape practice at home. Give them a job they can actually do.",
  items: [
    { t: "Learn the parents' goals for their child, and make sure they're realistic and shared.", src: ["mcpherson2009"] },
    { t: "Give parents a specific role (start practice, listen to one piece, sign the log), not 'make them practice'.", src: ["creech2003"] },
    { t: "Coach parents to praise effort and specific progress, not talent." },
    { t: "Send a short weekly note: what we worked on, what to listen for at home.", src: ["kraft2015"] },
    { t: "Invite parents to sit in occasionally (or always, for young children)." },
    { t: "Talk privately when practice friction is hurting the relationship." },
    { t: "Hold boundaries: lesson time is for the student, and money talk goes by email." },
    { t: "Celebrate milestones with the family." }
  ],
  why: "Research on the parent–teacher–pupil triangle in instrumental lessons shows parents' goals, styles, and practices shape children's motivation and achievement. Field experiments on teacher-family communication suggest specific, regular messages help.",
  sources: [
    { k: "creech2003", use: "Parent–teacher–pupil interactions (literature review)." },
    { k: "mcpherson2009", use: "Parents' role in musical development." },
    { k: "kraft2015", use: "Effect of teacher-to-parent messages." }
  ]
},
{
  id: "safeguarding-one-on-one",
  title: "Safeguarding in one-on-one lessons",
  emoji: "🛡️",
  fmt: ["lessons", "small"],
  cat: "studio", aud: ["studio", "secondary", "college", "ta"], tags: ["safeguarding", "boundaries", "law", "online lessons"],
  evidence: "standard",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Visible, interruptible, documented, and with parents in the loop for minors.",
  items: [
    { t: "Teach in a space that's visible and interruptible (a window in the door, door ajar, others nearby).", src: ["cdcYso"] },
    { t: "For minors, have a parent or guardian on site, or follow your organization's policy.", src: ["cdcYso"] },
    { t: "Ask before any physical touch for technique, explain why, and offer an alternative (model it, use a prop).", src: ["cdcYso"] },
    { t: "Send electronic communication with minors through, or copied to, parents.", src: ["cdcYso"] },
    { t: "Online lessons: a professional background, a parent nearby, and a clear recording policy." },
    { t: "Don't drive a student alone, give gifts that single someone out, or socialize privately on social media." },
    { t: "Know your mandated-reporter obligations in your state.", src: ["childwelfare"] },
    { t: "College: know Title IX policies on relationships and reporting.", src: ["titleix"] },
    { t: "Get background checks and training if you work for an organization, and consider them anyway." },
    { t: "If you see a boundary crossed by a colleague, report it per policy." },
    { t: "Write and share your policy.", src: ["mtnaEthics"] }
  ],
  why: "One-on-one lessons are valuable and also a known risk setting. CDC guidance for youth-serving organizations identifies six prevention components: screening, interaction guidelines, monitoring, safe environments, responding to concerns, and training. These scale down to a single studio.",
  sources: [
    { k: "cdcYso", use: "Six components of child sexual abuse prevention in organizations." },
    { k: "childwelfare", use: "Mandated reporting laws." },
    { k: "titleix", use: "Title IX in education programs." },
    { k: "mtnaEthics", use: "Professional conduct." }
  ]
},

/* ======================= COPYRIGHT & SAFETY ======================= */
{
  id: "copyright-basics",
  title: "Copyright basics for music teachers (U.S.)",
  emoji: "©️",
  fmt: ["lessons", "small", "large", "general", "lecture"],
  cat: "legal", aud: ["elementary", "secondary", "college", "studio", "admin", "ta"], tags: ["copyright", "law", "photocopies", "arranging"],
  evidence: "standard",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Buy the copies, ask before arranging, and know the narrow emergency exceptions.",
  items: [
    { t: "Buy enough legal copies for every performer.", src: ["circ21"] },
    { t: "Emergency photocopies are allowed only to stand in for purchased copies that aren't available for an imminent performance, and must be replaced with purchased copies.", src: ["circ21"] },
    { t: "For academic (non-performance) study, the guidelines allow limited excerpts: never more than 10% of a work, and never a whole performable unit like a movement or aria. One copy per pupil.", src: ["circ21"] },
    { t: "You may edit or simplify purchased copies, as long as you don't distort the work's character or change or add lyrics.", src: ["circ21"] },
    { t: "New arrangements of copyrighted works need the copyright owner's permission.", src: ["nafmeCopyright"] },
    { t: "One recording of student performances may be made for evaluation or rehearsal and kept by the school or teacher.", src: ["circ21"] },
    { t: "Nonprofit live performances without admission (or with proceeds used only for educational or charitable purposes) may be exempt.", src: ["usc110"] },
    { t: "Check public domain by publication date and edition.",
      more: "Each January 1 in the U.S., works published 95 years earlier enter the public domain. A modern edition or arrangement of an old piece may still be protected.", src: ["nafmeCopyright"] },
    { t: "For online teaching, check the distance-learning guidance.", src: ["nafmeDistance"] },
    { t: "When in doubt, ask the publisher. Most respond." }
  ],
  why: "The U.S. Copyright Office's Circular 21 includes the Guidelines for Educational Uses of Music, a negotiated safe harbor that's narrower than many teachers assume. This checklist is U.S.-specific and not legal advice.",
  sources: [
    { k: "circ21", use: "Guidelines for Educational Uses of Music." },
    { k: "usc110", use: "Performance exemptions." },
    { k: "nafmeCopyright", use: "Plain-language overview for music teachers." },
    { k: "nafmeDistance", use: "Distance-learning copyright guidance." }
  ]
}
);
