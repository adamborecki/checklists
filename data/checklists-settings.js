/*
  Checklists: weekly lessons, online lessons, student-led chamber rehearsals,
  theory and aural skills classes, big lecture classes, quizzes, and feedback.
  Added so every "What are you teaching?" setting has plenty to choose from.
  All AI-drafted on 2026-10-25. Nothing here has been human-reviewed yet.
*/
(function () {
const AI = { links: false, claims: "drafter", note: "Citations and most DOIs confirmed by web search (2026-10-25). Claims were written to match abstracts and summaries found by search. Links not yet resolved by a live check, because Crossref was unreachable from the cloud session." };

(window.MTC_CHECKLISTS = window.MTC_CHECKLISTS || []).push(

/* ======================= PRIVATE LESSONS ======================= */
{
  id: "lesson-weekly",
  title: "Running a great weekly lesson",
  emoji: "🎯",
  fmt: ["lessons"],
  cat: "studio", aud: ["studio", "college", "ta", "secondary"], tags: ["lessons", "practice", "feedback", "autonomy"],
  evidence: "research",
  summary: "One or two clear goals, lots of playing, quick specific feedback, and a student who leaves knowing exactly how to practice.",
  items: [
    { t: "Start by hearing them play. Diagnose before you teach." },
    { t: "Pick one or two goals for today, not ten. Say what success will sound like.",
      more: "In videotaped lessons by three renowned artist-teachers, researchers saw clear, short-term goals the student could reach within the lesson, again and again.", src: ["dukeSimmons2006"] },
    { t: "Keep the student playing most of the time. Your talk should be short and specific.", src: ["dukeSimmons2006"] },
    { t: "Give feedback about the task and how to fix it, right away, then let them try again.",
      more: "Feedback works best when it carries useful information about the task and the next step. Praise alone does little for learning.", src: ["hattie2007", "wisniewski2020"] },
    { t: "Don't move on after one good try. Have them do it right several times so it sticks.", src: ["duke2009", "dukeSimmons2006"] },
    { t: "Mix it up near the end of the lesson: return to earlier spots out of order, the way a performance will.", src: ["carter2016"] },
    { t: "Ask questions that make them listen and decide ('What did you notice?' 'Which was better?') instead of always telling.", src: ["gaunt2008", "ryan2000"] },
    { t: "Give them real choices: repertoire, the order of today's work, interpretation.", src: ["ryan2000"] },
    { t: "Assign practice as steps, not minutes: what to practice, how, and what 'done' sounds like.", src: ["duke2009"] },
    { t: "End on something they can do well, and say specifically what improved today." },
    { t: "Write down what you covered and the assignment, and send it to the student (and parent, for minors)." },
    { t: "Every few weeks, ask how lessons are going for them, and listen.", src: ["gaunt2008"] }
  ],
  why: "Most of what's known about effective one-to-one teaching comes from close observation of lessons. Duke and Simmons' study of three renowned artist-teachers found shared habits: high standards, clear goals reachable within the lesson, lots of playing, and quick, precise feedback. Interviews with conservatoire teachers found that one-to-one teaching can quietly become teacher-led and dependent, so building student independence takes deliberate effort. Broader research on feedback and practice backs up the rest.\n\nThe lesson studies are small and mostly observational, so treat them as strong descriptions of expert practice, not experiments.",
  sources: [
    { k: "dukeSimmons2006", use: "Common elements in lessons by three renowned artist-teachers." },
    { k: "gaunt2008", use: "Conservatoire teachers on one-to-one lessons and student autonomy." },
    { k: "hattie2007", use: "What makes feedback effective (review)." },
    { k: "wisniewski2020", use: "Feedback meta-analysis: information-rich feedback works best." },
    { k: "duke2009", use: "How practice is done matters more than how long." },
    { k: "carter2016", use: "Interleaved vs. blocked practice in music." },
    { k: "ryan2000", use: "Autonomy and motivation." }
  ],
  ai: AI
},
{
  id: "lessons-online",
  title: "Teaching lessons online",
  emoji: "💻",
  fmt: ["lessons"],
  cat: "studio", aud: ["studio", "college", "ta"], tags: ["lessons", "online lessons", "technology", "safeguarding"],
  evidence: "practice",
  summary: "Good audio beats good video. Turn off the noise filters, plan for lag, and keep the same safety rules as in person.",
  items: [
    { t: "Turn on the video app's original-sound or music mode and turn off noise suppression and echo cancellation. Default settings are built for speech and can chop off music." },
    { t: "Use wired internet if you can, and an external microphone if you can afford one." },
    { t: "Use headphones on at least one end to cut echo." },
    { t: "Set up camera angles that show what you need: hands, bow arm, posture, embouchure. Ask for a second angle when it matters." },
    { t: "Accept lag. You can't play together in real time, so use call-and-response, and have them play while you listen." },
    { t: "Have students record a take on their own device and send it. The recording sounds far better than the live call." },
    { t: "Send materials ahead: marked PDFs, the page numbers, and a practice plan.", src: ["duke2009"] },
    { t: "Have a backup plan when the call drops (switch to audio-only phone, or continue by recorded exchange)." },
    { t: "Keep the same safety rules as in person: a parent nearby for minors, a professional background, no private-message-only contact, and a clear recording policy.", src: ["cdcYso"] },
    { t: "Talk with families about data privacy if you record lessons, and get consent first.", src: ["ferpa"] },
    { t: "Check in on how online lessons feel for the student. Some love them; some quietly drift away.", src: ["ryan2000"] }
  ],
  why: "Online lessons became normal for many studios after 2020, and they work best when you design for the medium instead of pretending it's in person. Most of this is practitioner experience: there's little controlled research on online instrumental teaching. The safety items follow the same guidelines as in-person one-to-one teaching.",
  sources: [
    { k: "duke2009", use: "Specific practice assignments." },
    { k: "cdcYso", use: "Safety guidelines for adults working with youth." },
    { k: "ferpa", use: "Privacy of student records (schools and colleges)." },
    { k: "ryan2000", use: "Motivation: competence, connection, choice." }
  ],
  ai: AI
},

/* ======================= CHAMBER & SMALL ENSEMBLES ======================= */
{
  id: "chamber-student-led",
  title: "Helping a chamber group rehearse well without you",
  emoji: "🎻",
  fmt: ["small"],
  cat: "rehearsal", aud: ["secondary", "college", "studio", "ta"], tags: ["chamber music", "small ensembles", "student leadership", "rehearsal"],
  evidence: "mixed",
  summary: "Teach them how to rehearse, not just what to fix. Goals, roles, recordings, and a way to disagree well.",
  items: [
    { t: "In the first coaching, model a rehearsal routine: tune, run, choose a spot, fix it, run it in context." },
    { t: "Ask the group to set goals for each rehearsal and write them down.", src: ["ryan2000"] },
    { t: "Rotate leadership. Different players lead warm-up, choose spots, and run the clock." },
    { t: "Teach non-verbal coordination: breathing together, eye contact, who gives entrances and cutoffs.",
      more: "An observational study of a student string quartet looked at how players coordinate through movement and glances as well as talk.", src: ["davidsonGood2002"] },
    { t: "Give them language for musical disagreements: 'Can we try it both ways?' and decide by recording." },
    { t: "Have them record rehearsals and listen back together for one minute before deciding what to fix." },
    { t: "Fix problems in short loops, then put them back in context, the same way you'd practice alone.", src: ["duke2009", "carter2016"] },
    { t: "Make sure everyone has the score, not just their part." },
    { t: "Watch for social friction (one player dominating, one player silent) and address it privately and early.", src: ["davidsonGood2002"] },
    { t: "In coachings, ask questions more than you give answers: 'What did you hear in bar 30?'", src: ["gaunt2008"] },
    { t: "Give feedback the group can act on, and have them say back their plan before they leave.", src: ["hattie2007"] },
    { t: "Schedule performances for the group early. A deadline focuses rehearsals." }
  ],
  why: "Chamber groups spend most of their time rehearsing without a coach, so the coach's biggest job is teaching them how to rehearse. Research on student chamber groups describes how much coordination happens through non-verbal cues and how social dynamics shape rehearsals. Broader research on practice, autonomy, and feedback supports teaching students to set goals, fix spots in short loops, and decide things themselves.\n\nResearch specifically on coaching chamber groups is thin, so several items are practitioner wisdom.",
  sources: [
    { k: "davidsonGood2002", use: "Social and musical coordination in a student string quartet." },
    { k: "ryan2000", use: "Autonomy and motivation." },
    { k: "duke2009", use: "Practice strategies that build retention." },
    { k: "carter2016", use: "Interleaved practice in music." },
    { k: "gaunt2008", use: "Teacher-led instruction vs. student autonomy." },
    { k: "hattie2007", use: "Feedback students can act on." }
  ],
  ai: AI
},

/* ======================= LECTURE & ACADEMIC CLASSES ======================= */
{
  id: "theory-aural-class",
  title: "Teaching music theory and aural skills so it sticks",
  emoji: "🎼",
  fmt: ["lecture"],
  cat: "higher", aud: ["college", "ta", "secondary"], tags: ["music theory", "aural skills", "retrieval practice", "spacing", "AP Music Theory"],
  evidence: "research",
  summary: "Quiz often and low-stakes, space it out, mix problem types, and make everyone sing, write, and play every class.",
  items: [
    { t: "Start most classes with a short, low-stakes recall quiz on earlier material: no notes, quick feedback.",
      more: "Retrieving information from memory improves long-term retention more than restudying it, even though restudying feels more effective.", src: ["roediger2006", "adesope2017"] },
    { t: "Space practice out. Bring back intervals, chord qualities, and part-writing rules weeks later, not just the week they're taught.", src: ["cepeda2006", "dunlosky2013"] },
    { t: "Mix problem types in homework and drills (inversions, cadences, and non-chord tones together) once students know each one.",
      more: "Mixed (interleaved) practice feels harder but tends to transfer better. A music study found similar benefits for advanced performers.", src: ["dunlosky2013", "carter2016"] },
    { t: "Make every student respond every class: sing, write, play, or vote, not just the confident few.", src: ["freeman2014"] },
    { t: "Connect each concept to repertoire students are actually playing or singing." },
    { t: "Do short, frequent dictation and sight-singing rather than rare long ones.", src: ["cepeda2006"] },
    { t: "Give worked examples, then fade the help: full solution, partial solution, then on their own." },
    { t: "Tell students which study habits work (self-testing, spacing) and which feel good but don't (rereading, highlighting).", src: ["dunlosky2013"] },
    { t: "Let students re-do a skill check after more practice, so mastery matters more than one bad day." },
    { t: "Implement accommodation letters, and offer alternatives to keyboard or singing tasks when a disability requires it.", src: ["sec504"] },
    { t: "Check which students are missing background (no piano, no prior theory) early, and point them to support." }
  ],
  why: "Theory and aural skills depend on durable memory and fluent recall, which is exactly where learning science is strongest. Practice testing and spaced practice earned the highest ratings in a major review of study techniques. Interleaving has growing support, including a music-performance study. Active learning beats lecture in large STEM meta-analyses, and there's no reason to think theory classes are different, though they haven't been studied as directly.",
  sources: [
    { k: "roediger2006", use: "Testing improves long-term retention more than restudying." },
    { k: "adesope2017", use: "Meta-analysis of practice testing." },
    { k: "cepeda2006", use: "Spacing (distributed practice) meta-analysis." },
    { k: "dunlosky2013", use: "Ratings of ten study techniques." },
    { k: "carter2016", use: "Interleaved practice in music performance." },
    { k: "freeman2014", use: "Active learning meta-analysis (STEM)." },
    { k: "sec504", use: "Disability accommodations." }
  ],
  ai: AI
},
{
  id: "large-lecture",
  title: "Running a big lecture class (music appreciation, history surveys)",
  emoji: "🏟️",
  fmt: ["lecture"],
  cat: "higher", aud: ["college", "ta"], tags: ["lecture", "active learning", "peer instruction", "music history", "music appreciation"],
  evidence: "research",
  summary: "Break up the talk. Ask questions every 10–15 minutes, have students argue with a neighbor, and listen to real music in class.",
  items: [
    { t: "Plan the hour in chunks: 10–15 minutes of you, then something students do." },
    { t: "Use peer instruction: pose a question, students answer alone, discuss with a neighbor, then answer again.",
      more: "Ten years of peer instruction in large physics courses showed gains in conceptual understanding and problem solving.", src: ["crouch2001"] },
    { t: "Expect students to say they learn more from polished lecture. Tell them up front why you're doing active work.",
      more: "In a randomized study, students in active classes learned more but felt they had learned less than students in polished lectures.", src: ["deslauriers2019"] },
    { t: "Listen in class with a task: 'Raise a hand when the theme returns', 'Write one word for the mood change.'" },
    { t: "Use low-stakes quizzes or clicker questions on last week's material.", src: ["roediger2006"] },
    { t: "Learn some names, and use them. Big classes feel anonymous." },
    { t: "Post slides or notes, with captions on any video, for access.", src: ["sec504"] },
    { t: "Use your TAs for small-group discussion and feedback, and meet with them weekly to calibrate grading." },
    { t: "Bring in listening beyond the usual canon, and say why you chose it.", src: ["icd"] },
    { t: "Check copyright for anything you post or stream outside class.", src: ["circ21"] },
    { t: "Collect a quick mid-semester check ('What's helping? What's not?') and change one thing.", src: ["freeman2014"] }
  ],
  why: "Big lecture classes are where active learning has the strongest evidence. A large meta-analysis found active learning raised exam scores and cut failure rates compared with traditional lecture, and peer instruction is one of the best-studied versions. One useful warning from the research: students often feel they learn less in active classes even when they learn more, so explaining why matters. The studies are mostly in science courses; music survey classes haven't been studied as much.",
  sources: [
    { k: "crouch2001", use: "Peer instruction in large courses." },
    { k: "deslauriers2019", use: "Actual learning vs. the feeling of learning." },
    { k: "freeman2014", use: "Active learning meta-analysis." },
    { k: "roediger2006", use: "Testing effect." },
    { k: "sec504", use: "Accessibility and accommodations." },
    { k: "icd", use: "Composer diversity database." },
    { k: "circ21", use: "Copyright limits." }
  ],
  ai: AI
},
{
  id: "quizzes-that-teach",
  title: "Quizzes and exams that help students learn",
  emoji: "📝",
  fmt: ["lecture", "general", "large", "lessons"],
  cat: "assessment", aud: ["elementary", "secondary", "college", "ta", "studio"], tags: ["assessment", "retrieval practice", "grading", "tests"],
  evidence: "research",
  summary: "Test early and often, keep most of it low-stakes, give feedback fast, and space it out.",
  items: [
    { t: "Use frequent low-stakes quizzes, not just a midterm and a final.", src: ["adesope2017", "roediger2006"] },
    { t: "Give the answers and explanations soon after the quiz.", src: ["hattie2007"] },
    { t: "Revisit older material on later quizzes, so it doesn't vanish after the unit test.", src: ["cepeda2006"] },
    { t: "Include questions that make students produce answers (sing it, write it, play it), not just recognize them." },
    { t: "Use playing tests and recordings for performance skills, with a short rubric students see in advance.", src: ["russell2010"] },
    { t: "Use the results: reteach what most students missed instead of moving on." },
    { t: "Let students correct or retake some work, so the goal is learning, not one shot." },
    { t: "Keep tests about the music skill, not reading speed or English, and implement accommodations.", src: ["sec504", "cast"] },
    { t: "Teach students to quiz themselves when they study.", src: ["dunlosky2013"] }
  ],
  why: "Testing isn't only for measuring learning; retrieving something from memory strengthens it. A meta-analysis of practice testing found it generally beats restudying, across ages and formats. Spacing that retrieval out over time helps even more. Music teachers can use the same idea with playing tests, sight-singing checks, and listening quizzes.",
  sources: [
    { k: "adesope2017", use: "Practice testing meta-analysis." },
    { k: "roediger2006", use: "Testing effect." },
    { k: "cepeda2006", use: "Spacing meta-analysis." },
    { k: "hattie2007", use: "Feedback timing and content." },
    { k: "dunlosky2013", use: "Self-testing as a study technique." },
    { k: "russell2010", use: "How secondary music teachers assess." },
    { k: "sec504", use: "Accommodations." },
    { k: "cast", use: "Universal Design for Learning." }
  ],
  ai: AI
},
{
  id: "feedback-students-use",
  title: "Giving feedback students can actually use",
  emoji: "💬",
  fmt: ["lessons", "small", "large", "general", "lecture"],
  cat: "assessment", aud: ["elementary", "secondary", "college", "ta", "studio"], tags: ["feedback", "assessment", "writing", "rehearsal"],
  evidence: "research",
  summary: "Say where they're going, how they're doing, and what to do next. Specific, timely, and about the work, not the person.",
  items: [
    { t: "Answer three questions: Where are we going? How am I doing? What's next?", src: ["hattie2007"] },
    { t: "Make it about the task and the strategy ('the release was late in bar 12; breathe a beat earlier'), not the person.", src: ["hattie2007", "wisniewski2020"] },
    { t: "Give fewer comments with more information. One or two fixes they can act on beat ten they can't.", src: ["wisniewski2020"] },
    { t: "Give it while they can still use it: in rehearsal, during a draft, before the jury, not only after." },
    { t: "Don't count on praise alone to teach. Pair it with the specific thing that went well.", src: ["hattie2007", "henderlong2002"] },
    { t: "In rehearsal, how you word a correction probably matters less than whether it's clear and the group gets to fix it right away.", src: ["duke1998corr"] },
    { t: "For written work (program notes, papers), comment on a draft and require a revision." },
    { t: "Ask students to say back what they'll do next." },
    { t: "Teach students to give each other feedback with a simple structure (one strength, one question, one suggestion)." },
    { t: "Check later whether the feedback worked, and adjust." }
  ],
  why: "Feedback is one of the most powerful influences on learning, and also one of the most variable. A major review proposed that useful feedback answers where the learner is going, how they're doing, and what's next, and that feedback about the task and strategy beats feedback about the person. A later meta-analysis of 435 studies found a medium average effect that depended heavily on how much useful information the feedback carried.",
  sources: [
    { k: "hattie2007", use: "Model of effective feedback (review)." },
    { k: "wisniewski2020", use: "Feedback meta-analysis." },
    { k: "henderlong2002", use: "When praise helps or hurts motivation." },
    { k: "duke1998corr", use: "Wording of verbal corrections in rehearsal." }
  ],
  ai: AI
}
);
})();
