/*
  Checklists: repertoire, rehearsals, concerts, assessment, trips & gear.
  All AI-drafted on 2026-10-22. Nothing here has been human-reviewed yet.
*/
(window.MTC_CHECKLISTS = window.MTC_CHECKLISTS || []).push(

/* ======================= REPERTOIRE ======================= */
{
  id: "choosing-rep",
  title: "Choosing repertoire for an ensemble",
  emoji: "📚",
  fmt: ["small", "large"],
  cat: "rep", aud: ["secondary", "college", "elementary"], tags: ["choir", "band", "orchestra", "planning"],
  evidence: "mixed",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "What will students learn from this piece? Can these students sing or play it in the time you have? Would you be proud of it in ten years?",
  items: [
    { t: "Start from what you want students to learn this term. The repertoire is the curriculum.", src: ["reynolds2000"] },
    { t: "Judge quality honestly: is the music (and the text) worth weeks of rehearsal?", src: ["apfelstadt2000"] },
    { t: "Check ranges and tessitura against the students you actually have, not the ones you wish you had.", src: ["apfelstadt2000"] },
    { t: "Find the hardest eight bars. Can your weakest section get there in the rehearsals available?" },
    { t: "Balance the set: tempos, keys, styles, eras, languages, and accompanied vs. unaccompanied." },
    { t: "Look beyond the usual names. Search a composer-diversity database.", src: ["icd"] },
    { t: "For music from outside your tradition, research context and pronunciation, and find a culture bearer.", src: ["folkways", "ladson1995"] },
    { t: "Ask whether students will see themselves in this program.", src: ["ladson1995"] },
    { t: "Study the score before committing. Can you sing every line and explain every harmony?",
      more: "Expert band directors' preparation and rehearsals looked measurably different from novices' when preparing the same piece.", src: ["goolsby1999"] },
    { t: "Budget for legal copies for every performer, plus rental and performance fees.", src: ["circ21"] },
    { t: "Plan a backup piece in case one doesn't land." }
  ],
  why: "Reynolds' and Apfelstadt's widely cited Music Educators Journal articles make the case that repertoire choice is a curriculum decision. It determines what students learn about music, not just what the concert sounds like. The criteria here (quality, teachability, fit, variety) are professional consensus rather than experimental findings.",
  sources: [
    { k: "reynolds2000", use: "Repertoire is the curriculum." },
    { k: "apfelstadt2000", use: "Criteria for selecting repertoire: quality, teachability, appropriateness." },
    { k: "icd", use: "Searchable databases of composers from underrepresented groups." },
    { k: "folkways", use: "Context-rich lesson plans built on recordings of culture bearers." },
    { k: "ladson1995", use: "Culturally relevant pedagogy." },
    { k: "goolsby1999", use: "Expert vs. novice preparation of identical repertoire." },
    { k: "circ21", use: "What you may and may not photocopy." }
  ]
},
{
  id: "rep-other-cultures",
  title: "Programming music from a culture that isn't yours",
  emoji: "🌏",
  fmt: ["small", "large", "general"],
  cat: "rep", aud: ["elementary", "secondary", "college", "preschool"], tags: ["equity", "culture", "choir", "world music"],
  evidence: "practice",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Context, consultation, credit, and care. Not a costume, not a token closer.",
  items: [
    { t: "Research where the piece comes from and what it was for (sacred, ritual, work, play, protest)." },
    { t: "Ask whether it's appropriate to perform out of context, and with whom you'd check that." },
    { t: "Find a culture bearer or community member to consult. Pay them if they help.", src: ["folkways"] },
    { t: "Listen to several recordings by people from that tradition, not just the published arrangement.", src: ["folkways"] },
    { t: "Get pronunciation and language right. Budget real rehearsal time for it." },
    { t: "Teach students the context, not just the notes.", src: ["ladson1995"] },
    { t: "Credit the source tradition, the arranger, and anyone who helped, in the program." },
    { t: "Skip costumes, accents, or 'exotic' staging unless culture bearers recommend them." },
    { t: "Avoid tokenism, like one 'world music' piece as a closer every year." },
    { t: "Notice who profits from the arrangement, and whether better or more authentic versions exist." }
  ],
  why: "This is a values-and-practice checklist more than a research one. It draws on culturally relevant pedagogy (taking students' and communities' cultures seriously) and the world-music-pedagogy practice of learning from culture bearers. Reasonable educators disagree on some items. Treat it as a conversation starter.",
  sources: [
    { k: "folkways", use: "Lesson plans built on recordings of culture bearers." },
    { k: "ladson1995", use: "Culturally relevant pedagogy." }
  ]
},

/* ======================= REHEARSALS & PRACTICE ======================= */
{
  id: "running-rehearsal",
  title: "Running a rehearsal",
  emoji: "🎼",
  fmt: ["small", "large"],
  cat: "rehearsal", aud: ["secondary", "college", "elementary"], tags: ["choir", "band", "orchestra", "pacing", "feedback"],
  evidence: "research",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Less talking, more playing. Every stop has a purpose, then back to music fast.",
  items: [
    { t: "Post the order before students arrive." },
    { t: "Start on time with a warm-up that connects to the music you'll rehearse." },
    { t: "Talk less. Aim for students to be playing or singing most of the time.",
      more: "In videotaped rehearsals, student teachers talked the most and let students play the least.", src: ["goolsby1996", "goolsby1999"] },
    { t: "Make every stop a complete cycle: one specific instruction → students try → specific feedback.", src: ["yarbrough1989"] },
    { t: "Don't stop and restart without saying why.",
      more: "Novice teachers stopped and restarted more often without giving any instruction.", src: ["goolsby1999"] },
    { t: "Keep the pace brisk, with frequent short performance trials.", src: ["duke1998pace"] },
    { t: "Model by singing or playing more than you describe in words.", src: ["goolsby1996"] },
    { t: "Notice your approval-to-disapproval ratio. Give specific approval when it's earned.",
      more: "In one study, experienced teachers were highly disapproving of student responses while preparatory teachers were highly approving. Neither extreme is the goal; specific, accurate feedback is.", src: ["yarbrough1989"] },
    { t: "Phrase corrections however feels natural. What matters most is that students succeed.",
      more: "Negative statements ('that was flat') vs. directives ('lift the third') made no measurable difference in attitude or achievement when students reached the goal.", src: ["duke1998corr"] },
    { t: "Don't leave a section idle for long. Give them a task (audiate, finger along, mark breaths)." },
    { t: "End with a run of something that got better today." },
    { t: "Spend two minutes afterward noting what improved and what's next." }
  ],
  why: "Decades of observational research in music education describe what effective rehearsals look like. Students spend more time making music. Teacher talk is brief and specific. Instruction runs in complete task → response → feedback cycles. Most of these studies are descriptive or quasi-experimental and involve specific populations (often secondary bands), so they suggest practices rather than prove them.",
  sources: [
    { k: "goolsby1996", use: "Time use by experienced, novice, and student teachers." },
    { k: "goolsby1999", use: "Experts spent more rehearsal time performing; novices stopped without instruction." },
    { k: "yarbrough1989", use: "Sequential patterns of instruction; approval and disapproval rates." },
    { k: "duke1998pace", use: "Perceptions of instructional pace." },
    { k: "duke1998corr", use: "Negative feedback vs. directives." }
  ]
},
{
  id: "rehearsal-planning",
  title: "Planning a rehearsal (score study → plan)",
  emoji: "🗒️",
  fmt: ["small", "large"],
  cat: "rehearsal", aud: ["secondary", "college"], tags: ["score study", "planning", "choir", "band", "orchestra"],
  evidence: "mixed",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Know the score cold, predict the problems, and budget the minutes.",
  items: [
    { t: "Study the score away from the podium: form, harmony, texture, text, and every line sung or played.", src: ["goolsby1999"] },
    { t: "Mark the likely trouble spots before students find them for you." },
    { t: "For each trouble spot, plan a specific fix (isolate, slow down, change texture, sing it)." },
    { t: "Write a measurable goal per piece ('mm. 32–48 in tune at ♩=96')." },
    { t: "Budget minutes per piece, including transitions and a buffer." },
    { t: "Order pieces by energy and focus (fresh minds for the hardest work)." },
    { t: "Derive the warm-up from today's music." },
    { t: "Plan how idle sections stay engaged." },
    { t: "Prep materials: pencils, folders, recordings, the seating chart." },
    { t: "Plan to record part of the rehearsal and listen back.", src: ["duke2009"] }
  ],
  why: "Comparisons of expert and novice band directors preparing identical pieces found different preparation and rehearsal behaviors. Experts spent more of the rehearsal performing and less on verbal instruction, which is hard to do without knowing the score well.",
  sources: [
    { k: "goolsby1999", use: "Expert vs. novice preparation of identical compositions." },
    { k: "duke2009", use: "Identifying and addressing errors precisely." }
  ]
},
{
  id: "teaching-practice",
  title: "Teaching students how to practice",
  emoji: "⏱️",
  fmt: ["lessons", "small", "large"],
  cat: "rehearsal", aud: ["studio", "secondary", "college", "elementary"], tags: ["practice", "motivation", "studio"],
  evidence: "research",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Count correct repetitions, not minutes. Fix errors early and precisely.",
  items: [
    { t: "Define the practice goal as accurate repetitions, not minutes.",
      more: "In a study of advanced pianists, practice time and number of trials didn't predict next-day performance. The percentage of correct trials and how errors were handled did.", src: ["duke2009"] },
    { t: "Teach them to slow down until it's right, then speed up in small steps.", src: ["duke2009"] },
    { t: "Pinpoint errors exactly (which beat, which note) and fix them right away.", src: ["duke2009"] },
    { t: "Mix up practice: rotate between passages instead of drilling one for 20 minutes.",
      more: "A small study of advanced clarinetists found interleaved practice schedules compared favorably with blocked practice.", src: ["carter2016"] },
    { t: "Teach deliberate practice: a specific goal, focused effort, immediate feedback.", src: ["ericsson1993"] },
    { t: "Be honest that practice matters but isn't everything.",
      more: "A meta-analysis found deliberate practice explained about a fifth of the variance in music performance. Important, but not the whole story.", src: ["macnamara2014"] },
    { t: "Teach mental strategies: hearing it first, knowing the structure, self-monitoring.", src: ["mcpherson2005"] },
    { t: "Swap minute logs for 'what I fixed today' logs." },
    { t: "Have them record and listen back once a week." },
    { t: "End each session with a correct run, so they stop on a success." }
  ],
  why: "Ericsson's deliberate-practice research popularized the idea that structured, goal-directed practice drives expertise. Later meta-analyses show practice is important but explains less variance than once claimed. Studies of how musicians practice suggest quality (accuracy, error correction, strategy) matters more than raw time.",
  sources: [
    { k: "duke2009", use: "Practice behaviors that predicted retention." },
    { k: "carter2016", use: "Interleaved vs. blocked practice in advanced musicians." },
    { k: "ericsson1993", use: "Deliberate practice." },
    { k: "macnamara2014", use: "Deliberate practice explains part, not all, of performance differences." },
    { k: "mcpherson2005", use: "Mental strategies in beginning instrumentalists." }
  ]
},
{
  id: "sectionals",
  title: "Running a sectional or coaching chamber music",
  emoji: "🎻",
  fmt: ["small", "large"],
  cat: "rehearsal", aud: ["secondary", "college", "ta"], tags: ["sectionals", "chamber music", "student leaders", "TA"],
  evidence: "practice",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "A sectional without a goal is just a hangout with instruments.",
  items: [
    { t: "Get specific goals from the director: which measures, what problem, and the target tempo." },
    { t: "Start on time, with the room set and stands up." },
    { t: "Work in complete cycles: instruction → try → feedback.", src: ["yarbrough1989"] },
    { t: "Isolate the problem: slow it down, take a smaller chunk, play one line at a time.", src: ["duke2009"] },
    { t: "Keep talking short and playing time high.", src: ["goolsby1996"] },
    { t: "Give everyone a chance to play alone or in pairs, kindly." },
    { t: "Record the before and after." },
    { t: "Report back to the director: what improved, what's still shaky." },
    { t: "For student leaders, teach them this checklist first." }
  ],
  why: "Sectionals and chamber coachings are mini-rehearsals, so the same principles apply. This list adapts rehearsal research to a smaller setting. That adaptation is practice-based, not separately studied.",
  sources: [
    { k: "yarbrough1989", use: "Complete teaching cycles." },
    { k: "goolsby1996", use: "Time spent performing vs. talking." },
    { k: "duke2009", use: "Precise error correction." }
  ]
},

/* ======================= CONCERTS & PROGRAMS ======================= */
{
  id: "concert-program",
  title: "Making a concert program",
  emoji: "📜",
  fmt: ["lessons", "small", "large", "general"],
  cat: "concerts", aud: ["elementary", "secondary", "college", "studio", "preschool"], tags: ["programs", "accessibility", "writing", "copyright"],
  evidence: "mixed",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Accurate, credited, accessible, proofread by a second human, with short notes.",
  items: [
    { t: "Get titles, composer and arranger names, and dates right, including diacritics (Dvořák, not Dvorak)." },
    { t: "Credit arrangers, lyricists, translators, and publishers as the publisher's credit line requires." },
    { t: "Include translations for texts not in the audience's language, and check whether the translation is copyrighted." },
    { t: "Don't print full lyrics of copyrighted songs without permission. That's reproduction.", src: ["nafmeCopyright"] },
    { t: "Keep program notes short and human (who, why, what to listen for), not a lecture.",
      more: "In a small study, listeners without musical training enjoyed Beethoven excerpts less when they read a description first.", src: ["margulis2010"] },
    { t: "List every performer, spelled the way they want. Ask students for preferred names." },
    { t: "Honor privacy opt-outs. Some families have restricted directory information.", src: ["ferpa"] },
    { t: "Offer a large-print version (around 18-point, sans serif, high contrast).", src: ["acb"] },
    { t: "Consider a QR code to a digital program for screen readers and resizing." },
    { t: "Thank accompanists, custodians, office staff, administrators, and families." },
    { t: "Add a friendly etiquette note (phones, photos, when to clap) if your audience wants one." },
    { t: "Have a second human proofread it, ideally someone who wasn't involved." },
    { t: "Confirm print count and deadline with whoever's printing." }
  ],
  why: "Programs are a public document with your students' names on them, so accuracy and privacy matter. Accessibility guidelines from the American Council of the Blind give concrete large-print standards. Margulis's study is a fun caution: more text isn't always better for the audience's experience. That was one small study with non-musicians, so don't over-read it.",
  sources: [
    { k: "margulis2010", use: "Program descriptions reduced enjoyment for non-musicians." },
    { k: "acb", use: "Large print guidelines." },
    { k: "ferpa", use: "Directory information and opt-outs." },
    { k: "nafmeCopyright", use: "Copyright basics for printed materials." }
  ]
},
{
  id: "concert-day",
  title: "Concert day run-of-show",
  emoji: "🎭",
  fmt: ["small", "large", "general"],
  cat: "concerts", aud: ["elementary", "secondary", "college", "studio"], tags: ["concerts", "logistics", "supervision"],
  evidence: "practice",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Call times, supervision, the script, and the strike. Assume nothing.",
  items: [
    { t: "Send call times, dress, and location to students and families (again) 48 hours out." },
    { t: "Draw a stage plot: risers, chairs, stands, piano lid, mic placement." },
    { t: "Make a supervision plan: who watches students backstage and in holding rooms.", src: ["cdcYso"] },
    { t: "Bring emergency contacts, medical forms, and any student meds, plus who holds them." },
    { t: "Plan restroom and water breaks before call, not during the opening number." },
    { t: "Do a sound and lighting check with the actual tech person." },
    { t: "Write a script for who speaks, what they say, and how long. Keep it short." },
    { t: "Check whether your admission and ticketing setup keeps you inside the nonprofit-performance exemption.", src: ["usc110"] },
    { t: "Know who has photo or recording opt-outs before anyone posts video.", src: ["ferpa"] },
    { t: "Rehearse entrances, exits, and bows." },
    { t: "Plan the strike: who stacks chairs, who returns the piano, where the lost-and-found goes." },
    { t: "Make sure students leave only with an authorized adult (for minors)." },
    { t: "Send a thank-you email the next day." }
  ],
  why: "Concert day is logistics, not pedagogy, and there's no research on it. The few non-negotiables (supervising minors, health information, privacy for photos and video, and how admission interacts with copyright) are backed by guidelines and law.",
  sources: [
    { k: "cdcYso", use: "Supervision and monitoring in youth-serving settings." },
    { k: "ferpa", use: "Student privacy and directory information." },
    { k: "usc110", use: "Performances without commercial advantage; admission conditions." }
  ]
},
{
  id: "concert-recording",
  title: "Recording, streaming, or selling a concert",
  emoji: "🎙️",
  fmt: ["small", "large"],
  cat: "concerts", aud: ["secondary", "college", "studio", "admin"], tags: ["copyright", "licensing", "streaming", "recording"],
  evidence: "standard",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Performing live and distributing a recording are different legal acts. Plan licenses before the concert.",
  items: [
    { t: "Know that a nonprofit live performance may be exempt from performance licensing, but a recording you distribute is different.", src: ["usc110"] },
    { t: "Selling or giving away audio copies of copyrighted songs needs mechanical licenses.", src: ["songfile"] },
    { t: "Posting video of copyrighted music generally needs a synchronization license from the publisher.", src: ["nafmeCopyright"] },
    { t: "Before livestreaming, check the platform's licenses and the publisher's terms.", src: ["nafmeDistance"] },
    { t: "Know that a single recording of student performances for evaluation or rehearsal is generally fine under the educational guidelines.", src: ["circ21"] },
    { t: "Check public-domain status for each piece. Modern editions and arrangements may still be protected.", src: ["circ21"] },
    { t: "Collect student and family consent and respect opt-outs before posting.", src: ["ferpa"] },
    { t: "Credit composers, arrangers, and publishers in the video description." },
    { t: "Ask your administration or institution's counsel when in doubt. This isn't legal advice." }
  ],
  why: "U.S. copyright law treats live nonprofit performances, recordings, and synchronized video differently. NAfME and NFHS have published plain-language guidance for music educators, especially since streaming became common. This is a U.S.-focused checklist, and law changes, so verify with current sources.",
  sources: [
    { k: "usc110", use: "Exemptions for certain nonprofit performances." },
    { k: "circ21", use: "Guidelines for educational uses of music, including recordings for evaluation." },
    { k: "songfile", use: "Mechanical licenses for recordings." },
    { k: "nafmeCopyright", use: "Copyright basics for music educators." },
    { k: "nafmeDistance", use: "Streaming and distance-learning copyright guidance." },
    { k: "ferpa", use: "Consent and privacy for students." }
  ]
},

/* ======================= AUDITIONS, JURIES, GRADING ======================= */
{
  id: "fair-auditions",
  title: "Running fair auditions & seating",
  emoji: "⚖️",
  fmt: ["large"],
  cat: "assessment", aud: ["secondary", "college", "admin"], tags: ["auditions", "bias", "equity", "rubrics"],
  evidence: "research",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Hide what you can, define criteria first, randomize order, and use more than one judge.",
  items: [
    { t: "Screen auditions when possible, or judge from audio only.",
      more: "Goldin & Rouse's famous study linked blind auditions to more women advancing in orchestras. Later critics argue its statistical evidence is weaker than often reported. Screening is still cheap insurance.", src: ["goldin2000", "gelman2019"] },
    { t: "Remember that sight biases judges.",
      more: "In experiments, people (including professional musicians) picked competition winners more accurately from silent video than from sound.", src: ["tsay2013"] },
    { t: "Write the rubric and criteria before hearing anyone." },
    { t: "Calibrate judges with anchor recordings so '4 out of 5' means the same thing to everyone.", src: ["wesolowski2016"] },
    { t: "Randomize the order, and watch for 'last is best' drift over the day.",
      more: "In song contests and figure skating, performers who went later tended to score higher.", src: ["bruine2005"] },
    { t: "Use multiple judges and score independently before discussing." },
    { t: "Take breaks and eat. Long, hungry judging days are a risk.", src: ["danziger2011", "weinshall2011"] },
    { t: "Decide tie-breaks and appeals in advance." },
    { t: "Provide accommodations for students with disabilities.", src: ["sec504"] },
    { t: "Keep written scores and comments. Share specific feedback privately." },
    { t: "Deliver results kindly and with a path forward." }
  ],
  why: "Audition outcomes shape students' opportunities. Research shows judgments can be swayed by appearance, performance order, and how consistently raters use a scale. Not all famous findings are as solid as they're cited to be, so the checklist notes the debate around blind auditions.",
  sources: [
    { k: "goldin2000", use: "Blind auditions and women in orchestras." },
    { k: "gelman2019", use: "Critique of how strongly the Goldin & Rouse results are often cited." },
    { k: "tsay2013", use: "Visual information dominates judgments of performance." },
    { k: "bruine2005", use: "Serial position effects in competition judging." },
    { k: "wesolowski2016", use: "Rater precision in music performance assessment." },
    { k: "danziger2011", use: "Decisions and meal breaks (contested)." },
    { k: "weinshall2011", use: "Alternative explanation for the parole-board pattern." },
    { k: "sec504", use: "Accommodations." }
  ]
},
{
  id: "jury-day",
  title: "Applied jury day (for faculty panels)",
  emoji: "🧑‍⚖️",
  fmt: ["lessons"],
  cat: "assessment", aud: ["college", "admin", "ta"], tags: ["juries", "applied lessons", "rubrics", "bias"],
  evidence: "research",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Same rubric, calibrated panel, randomized order, food in the room, and written feedback students can use.",
  items: [
    { t: "Publish the rubric and expectations to students well in advance." },
    { t: "Calibrate the panel at the start of the day with a sample or a discussion of standards.", src: ["wesolowski2016"] },
    { t: "Randomize or rotate the order so the same studio isn't always last.", src: ["bruine2005"] },
    { t: "Watch for drift late in the day, and re-anchor after lunch." },
    { t: "Keep food and water in the jury room, and schedule a real break.",
      more: "A famous parole study found favorable rulings dropped before meal breaks, but critics point to case-ordering confounds. Either way, tired, hungry judges are not your best judges.", src: ["danziger2011", "weinshall2011"] },
    { t: "Declare conflicts of interest (your own studio students) and follow your policy on recusal." },
    { t: "Write specific, actionable comments, not 'nice job' or 'more musical'." },
    { t: "Implement approved accommodations.", src: ["sec504"] },
    { t: "Plan support for anxious students (warm-up room, clear schedule, kind greeting).", src: ["kenny2005"] },
    { t: "Make sure students get comments promptly, and studio teachers help interpret them." }
  ],
  why: "Juries are high-stakes performance assessments. Research on raters shows variability in how judges use scales and sensitivity to performance order. A few low-cost procedures (calibration, randomization, breaks, written feedback) make the day fairer.",
  sources: [
    { k: "wesolowski2016", use: "Rater precision and need for calibration." },
    { k: "bruine2005", use: "Later performers score higher." },
    { k: "danziger2011", use: "Decisions and breaks (contested)." },
    { k: "weinshall2011", use: "Critique: case ordering may explain the pattern." },
    { k: "sec504", use: "Accommodations." },
    { k: "kenny2005", use: "Performance anxiety treatments." }
  ]
},
{
  id: "ensemble-grading",
  title: "Grading in performance ensembles",
  emoji: "📊",
  fmt: ["small", "large"],
  cat: "assessment", aud: ["secondary", "college"], tags: ["grading", "assessment", "rubrics", "choir", "band", "orchestra"],
  evidence: "research",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Grade musical learning, not just attendance and attitude, and use more than one kind of evidence.",
  items: [
    { t: "Look at your current grade breakdown. How much is attendance, attitude, or participation?",
      more: "A survey of secondary music teachers found heavy use of non-achievement criteria like attendance and attitude in ensemble grades.", src: ["russell2010"] },
    { t: "Separate musical achievement from behavior and work habits (report them separately if you can)." },
    { t: "Use performance tasks with clear rubrics.", src: ["mca"] },
    { t: "Collect multiple types of evidence: recorded playing tests, self-assessments, written reflections." },
    { t: "Check that your rubric levels are distinct and you use them consistently.", src: ["wesolowski2016"] },
    { t: "Allow reassessment on key skills." },
    { t: "Apply accommodations from IEPs and 504 plans to assessments too.", src: ["sec504", "darrow2003"] },
    { t: "Don't grade on prior private lessons or innate talent. Grade growth on goals you taught." },
    { t: "Explain the system to students and families in writing." }
  ],
  why: "Grades in ensembles are often based mostly on attendance and attitude, which says little about musical learning. Model Cornerstone Assessments and rubric research offer frameworks for grading what you actually teach.",
  sources: [
    { k: "russell2010", use: "Survey of secondary music teachers' grading practices." },
    { k: "mca", use: "Model Cornerstone Assessments." },
    { k: "wesolowski2016", use: "Rating scale precision." },
    { k: "sec504", use: "Accommodations in assessment." },
    { k: "darrow2003", use: "Fair evaluation in inclusive classrooms." }
  ]
},

/* ======================= TRIPS & GEAR ======================= */
{
  id: "ensemble-trip",
  title: "Planning an ensemble trip",
  emoji: "🚌",
  fmt: ["large"],
  cat: "logistics", aud: ["secondary", "college", "admin"], tags: ["trips", "supervision", "logistics", "safety"],
  evidence: "practice",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Approvals, money, medical, supervision, and a plan for when the bus breaks down.",
  items: [
    { t: "Get administrative approval in writing before telling students." },
    { t: "Build a budget, plus a plan for students who can't pay." },
    { t: "Follow district or institution chaperone ratios and screening requirements.", src: ["cdcYso"] },
    { t: "Collect medical forms, medications, allergies, and emergency contacts, and decide who carries them." },
    { t: "Plan rooming with clear rules, and make sure no adult is alone in a room with a minor.", src: ["cdcYso"] },
    { t: "Plan accessible transportation, lodging, and venues for students with disabilities.", src: ["sec504"] },
    { t: "Confirm insurance, bus contracts, and instrument transport and storage." },
    { t: "Send families the itinerary with contacts, and include a code-of-conduct signature." },
    { t: "Plan dietary needs and meal times (including for chaperones)." },
    { t: "Do nightly headcounts and check-ins." },
    { t: "Write a contingency plan for illness, a lost student, a vehicle breakdown, or weather." },
    { t: "Hold a debrief afterward and note what to fix next time." }
  ],
  why: "Ensemble trips are mostly logistics and risk management, and your district or institution's policies come first. The supervision items reflect CDC guidance for youth-serving organizations. The rest is accumulated director experience.",
  sources: [
    { k: "cdcYso", use: "Supervision, screening, and interaction guidelines." },
    { k: "sec504", use: "Equal access for students with disabilities." }
  ]
},
{
  id: "instrument-inventory",
  title: "Instrument inventory, checkout & repair",
  emoji: "📦",
  fmt: ["large", "general"],
  cat: "logistics", aud: ["elementary", "secondary", "college"], tags: ["instruments", "inventory", "budget"],
  evidence: "practice",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Serial numbers, signed agreements, a repair budget, and hygiene for shared instruments.",
  items: [
    { t: "Inventory every instrument: make, model, serial number, condition, and location." },
    { t: "Photograph the condition at checkout and check-in." },
    { t: "Use signed checkout agreements with replacement and repair terms." },
    { t: "Keep a running repair list and an annual repair budget line." },
    { t: "Clean shared mouthpieces and reeds between users per manufacturer guidance, and don't share reeds." },
    { t: "Store mallet instruments covered, with nothing stacked on top.", src: ["yamahaMallet"] },
    { t: "Schedule annual maintenance (pads, valves, strings, re-hairing)." },
    { t: "Tag broken instruments 'Do not use' so they don't go back into rotation." },
    { t: "Do an end-of-year return sweep, and follow up on missing items before summer." }
  ],
  why: "Inventory is unglamorous but protects budgets and access, since students who can't afford instruments depend on school ones. There's little research here; this is practice-based.",
  sources: [
    { k: "yamahaMallet", use: "Storage for mallet percussion." }
  ]
},
{
  id: "end-of-year",
  title: "End-of-year wrap-up",
  emoji: "🏁",
  fmt: ["lessons", "large", "general"],
  cat: "logistics", aud: ["elementary", "secondary", "college", "studio"], tags: ["planning", "inventory", "families"],
  evidence: "practice",
  ai: { links: true, claims: "drafter", note: "Sources resolved via Crossref and live URLs; claims written to match abstracts (2026-10-22)." },
  summary: "Collect, file, thank, and write down next year's calendar while you still remember.",
  items: [
    { t: "Collect instruments, uniforms, folders, and music." },
    { t: "Refile the music library and mark missing parts." },
    { t: "Update the inventory and repair list." },
    { t: "Write thank-yous to accompanists, volunteers, custodians, and administrators." },
    { t: "Draft next year's calendar and get conflicts on the school calendar early." },
    { t: "Write down what worked and what to change, by ensemble or class." },
    { t: "Save concert recordings and programs to an archive." },
    { t: "Send families a note on summer opportunities (camps, community ensembles)." },
    { t: "Take an actual break.", src: ["madigan2021"] }
  ],
  why: "This is a practice-based checklist. The last item is backed by burnout research: burnout and job satisfaction are linked to teachers' intentions to quit.",
  sources: [
    { k: "madigan2021", use: "Teacher burnout and attrition (meta-analysis)." }
  ]
}
);
