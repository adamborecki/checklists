/*
  Checklists: Orff/elementary, early childhood, student wellbeing, classroom.
  All AI-drafted on 2026-10-22. Nothing here has been human-reviewed yet.

  Item fields:  t = the checkbox text   more = optional detail   src = source keys
  To record a human review in the repo, add:
    review: { read: true, edited: true, expert: true, claims: { sourceKey: true },
              reviewer: "initials", date: "YYYY-MM-DD" }
*/
(window.MTC_CHECKLISTS = window.MTC_CHECKLISTS || []).push(

/* ======================= ORFF & ELEMENTARY ======================= */
{
  id: "orff-instrument-care",
  title: "Setting up & caring for Orff instruments",
  emoji: "🧰",
  cat: "orff", aud: ["elementary", "preschool"], tags: ["orff", "instruments", "room setup"],
  evidence: "mixed",
  summary: "Barred instruments are a five-figure investment. Most damage comes from storage, mallets, and things piled on top.",
  items: [
    { t: "Store barred instruments covered, away from heaters, sunny windows, and exterior doors.",
      more: "Swings in temperature and humidity dry out resonator boxes and glue joints. Ventilated storage with a steady temperature is the goal.", src: ["yamahaMallet", "thomannPerc"] },
    { t: "Clean bars with a dry, soft cloth only. No wet cloths or cleaning sprays on wooden bars.", src: ["thomannPerc"] },
    { t: "Nothing goes on top of an instrument: no mallet bags, water bottles, folders, or stacked instruments.",
      more: "Extra weight can damage rails and resonators.", src: ["yamahaMallet"] },
    { t: "Match mallets to the instrument (yarn, felt, or rubber per the manufacturer). Never use metal or hard plastic on wooden bars.", src: ["thomannPerc"] },
    { t: "Do a monthly buzz check. Swap a buzzing bar into another slot to tell a bar problem from a box-seam problem.",
      more: "If the buzz moves with the bar, the bar is the problem. If it stays in the slot, look at the box seams and pins.", src: ["aosaFix"] },
    { t: "Keep a labeled bin of spare pins, rubber sleeves, and grommets, and record each instrument's brand and model.",
      more: "Parts usually aren't interchangeable across brands. Knowing the model saves a week of emails." },
    { t: "Send bars to the manufacturer or a pro for retuning. Don't try it in your classroom." },
    { t: "Set instruments at a height where children's forearms are about level with the bars when they sit or kneel." },
    { t: "Arrange the room so you can see every face, walk every row, and keep a clear path to the door." },
    { t: "Teach a 'rest position' (mallets down, hands in lap) before anyone plays a first note." },
    { t: "Pull the bars you don't need (e.g., F and B for pentatonic) and store them in one labeled spot.",
      more: "Fewer bars means fewer wrong notes and fewer bars wandering off to other rooms." }
  ],
  why: "The Orff Schulwerk approach depends on children making music on real instruments from the first lesson, so the instruments get heavy, daily use by small hands. Manufacturer and teacher-association care guides agree on the basics: dry cloths, steady storage, correct mallets, and nothing stacked on top.\n\nMuch of this checklist is practitioner wisdom rather than research. Instrument care is not a topic studied in journals.",
  sources: [
    { k: "aosaMission", use: "What Orff Schulwerk is and why instruments are central." },
    { k: "yamahaMallet", use: "Storage, covering, and keeping weight off rails and resonators." },
    { k: "thomannPerc", use: "Dry-cloth cleaning, temperature, and matching mallets to the instrument." },
    { k: "aosaFix", use: "Diagnosing buzzes and basic repair." }
  ]
},
{
  id: "orff-teaching-a-piece",
  title: "Teaching a new Orff arrangement (the elemental process)",
  emoji: "🎶",
  cat: "orff", aud: ["elementary"], tags: ["orff", "lesson planning", "improvisation", "general music"],
  evidence: "practice",
  summary: "Speech → body percussion → unpitched → barred instruments → create. Layer one part at a time.",
  items: [
    { t: "Start in speech or song. Children learn the text and rhythm by ear before touching an instrument." },
    { t: "Move to body percussion (pat, clap, snap, stamp) that mirrors each instrument part's rhythm." },
    { t: "Transfer to unpitched percussion, then to barred instruments, simplest part (usually the bordun) first." },
    { t: "Teach parts by modeling and rote. Notation is optional and can come later." },
    { t: "Layer one part at a time and get it stable before adding the next." },
    { t: "Use a pentatonic setup so improvised sections can't really 'go wrong'." },
    { t: "Build in a creative section (a B section, rondo episodes, a student-made ostinato)." },
    { t: "Include movement, speech, or drama, not just playing.", src: ["aosaMission"] },
    { t: "Rotate parts across lessons so everyone gets bass bars, glocks, and drums." },
    { t: "Plan the full form ahead of time: intro, A, B, coda, and who starts and stops." },
    { t: "Record a run and let students listen and suggest one improvement.",
      more: "This mirrors the 'select, improve, document, reflect' structure in the Model Cornerstone Assessments for performing.", src: ["mca"] },
    { t: "Keep your talking short. Kids should be making sound most of the period.", src: ["goolsby1996"] }
  ],
  why: "This sequence is the standard process taught in Orff Schulwerk teacher-training courses. It moves from the body (speech, movement) to instruments and ends in creation. Controlled research specifically on Orff methods is thin, so treat this as well-established practice rather than proven fact.\n\nThe 'keep talking short' item borrows from rehearsal research with older students. It is a reasonable but untested extension to elementary general music.",
  sources: [
    { k: "aosaMission", use: "Schulwerk integrates music, movement, drama, and speech." },
    { k: "mca", use: "Performing tasks built around selecting, refining, and reflecting." },
    { k: "goolsby1996", use: "Rehearsal time use: less teacher talk, more student playing (studied in secondary bands, not elementary)." }
  ]
},
{
  id: "orff-hearing",
  title: "Protecting ears in a loud music room",
  emoji: "👂",
  cat: "orff", aud: ["elementary", "secondary", "college", "admin"], tags: ["hearing", "health", "self-care"],
  evidence: "research",
  summary: "Your daily dose adds up across back-to-back classes. Measure it, then reduce it.",
  items: [
    { t: "Measure, don't guess. Run a sound level meter app during a typical class and a typical rehearsal.",
      more: "NIOSH publishes a free Sound Level Meter app for iOS. Phone mics aren't lab-grade, but they're far better than guessing.", src: ["niosh"] },
    { t: "Know the benchmark: NIOSH recommends 85 dBA averaged over 8 hours, and every +3 dB halves the safe time.", src: ["niosh"] },
    { t: "Count your whole day, not one class. Teachers stack loud periods back to back.",
      more: "Measured noise doses for music teachers often exceed occupational guidelines.", src: ["behar2004"] },
    { t: "Get musician's earplugs (flat attenuation) and give yourself a few weeks to adjust to them.", src: ["chesky2009", "chesky2008"] },
    { t: "Don't stand directly in front of brass bells, cymbals, glockenspiels, or the drum set." },
    { t: "Use softer mallets and fewer instruments at once. Teach a 'play at a 3' dynamic routine." },
    { t: "Alternate loud and quiet activities, and schedule non-playing time between loud ones." },
    { t: "If the room is very live, ask facilities about absorption (panels, curtains, carpet)." },
    { t: "Teach students about hearing health, too.", src: ["nasmHearing"] },
    { t: "Get a baseline hearing test and recheck periodically. Don't ignore ringing ears (tinnitus).", src: ["niosh", "nasmHearing"] }
  ],
  why: "Noise-induced hearing loss is permanent and cumulative. Music teachers are exposed for hours a day, often above the levels that would trigger a hearing-conservation program in other jobs. NASM and the Performing Arts Medicine Association publish advisories specifically for music students and faculty.",
  sources: [
    { k: "niosh", use: "85 dBA recommended exposure limit and the 3 dB exchange rate." },
    { k: "behar2004", use: "Measured noise exposure of music teachers." },
    { k: "chesky2008", use: "Overview of preventing music-induced hearing loss in music education." },
    { k: "chesky2009", use: "How college musicians experienced musician earplugs." },
    { k: "nasmHearing", use: "Hearing-health advisories for music students and faculty." }
  ]
},
{
  id: "elementary-lesson-plan",
  title: "Planning a 30-minute elementary general music lesson",
  emoji: "🍎",
  cat: "orff", aud: ["elementary"], tags: ["general music", "lesson planning", "first-year teacher"],
  evidence: "mixed",
  summary: "One clear goal, lots of music-making, a routine opening and closing, and a quick check for learning.",
  items: [
    { t: "Write one musical learning goal a visitor could observe (e.g., 'students keep a steady beat while singing')." },
    { t: "Start with a familiar routine: a hello song, a beat warm-up, or an echo pattern.", src: ["simonsen2008"] },
    { t: "Plan for students to be singing, moving, or playing for most of the period.", src: ["goolsby1996"] },
    { t: "Sequence activities from familiar → new → familiar." },
    { t: "Alternate active and calm segments (sit, stand, move, sit)." },
    { t: "Give short instructions, then let them try right away. Give feedback, then try again.", src: ["yarbrough1989"] },
    { t: "Plan specific praise for the behavior and musicianship you want to see more of.", src: ["madsen1968"] },
    { t: "Build in a quick check for learning (a solo turn, a small-group turn, thumbs up/down, an exit ticket).", src: ["mca"] },
    { t: "Prep materials and transitions: where instruments are, who passes them out, and how they come back." },
    { t: "Note students with IEPs or 504 plans and the accommodations you'll use today.", src: ["sec504", "idea"] },
    { t: "Have a 'back pocket' song or game for leftover time." },
    { t: "End with a routine goodbye and a calm line-up." }
  ],
  why: "Classroom-management research consistently supports structure, predictable routines, active engagement, and specific praise. Music-education research on rehearsals shows that effective teachers keep the cycle of 'teacher presents task, student responds, teacher gives feedback' short and frequent. Those rehearsal studies mostly involve older students, so the elementary application is an extension.",
  sources: [
    { k: "simonsen2008", use: "Evidence-based classroom management: structure, routines, engagement, praise." },
    { k: "madsen1968", use: "Rules alone weren't enough. Praise for appropriate behavior was key." },
    { k: "yarbrough1989", use: "The task → response → feedback cycle in music teaching." },
    { k: "goolsby1996", use: "Effective teachers devote more time to student performance." },
    { k: "mca", use: "Examples of classroom-based performance assessment tasks." },
    { k: "sec504", use: "Teachers' obligations under Section 504." },
    { k: "idea", use: "IEPs under IDEA." }
  ]
},

/* ======================= EARLY CHILDHOOD ======================= */
{
  id: "early-session",
  title: "Planning an early childhood music session",
  emoji: "🧸",
  cat: "early", aud: ["preschool"], tags: ["early childhood", "lesson planning", "movement", "families"],
  evidence: "research",
  summary: "Active, playful, repetitive, short segments, and caregivers included where you can.",
  items: [
    { t: "Plan for active participation (singing, moving, playing), not just listening.",
      more: "In a randomized study, infants in active participatory music classes showed better early communication and social development than infants in passive-listening classes.", src: ["gerry2012"] },
    { t: "Keep segments short and repeat favorites. Repetition is a feature, not a failure.", src: ["naeyc"] },
    { t: "Pitch songs in a comfortable middle range with a small span.",
      more: "Preschoolers used a larger range when echoing short patterns than when singing whole songs.", src: ["flowers1990"] },
    { t: "Use echo patterns, and celebrate getting the contour (up/down shape) even when exact pitches aren't there yet.",
      more: "In the same study, children echoed melodic contour more accurately than exact pitches or intervals.", src: ["flowers1990"] },
    { t: "Don't underestimate them: toddlers' singing carries more of the song than adults often assume.", src: ["gudmundsdottir2017"] },
    { t: "Include music-making together as a group (shared beat, shared song).",
      more: "Four-year-olds who made music together then helped and cooperated more than peers who did a matched non-musical activity.", src: ["kirschner2010"] },
    { t: "Count watching as participating. Some children observe for weeks before joining in.", src: ["naeyc"] },
    { t: "Build in child choice (which animal, which movement, which instrument).", src: ["naeyc", "nafmeEarly"] },
    { t: "Use the same song for each transition (hello, clean-up, goodbye) so they become rituals." },
    { t: "Check instruments for choking-hazard parts and loose pieces, and don't share mouth-blown instruments." },
    { t: "Send something home: a song, a lyric sheet, or a recording families can use.", src: ["nafmeEarly", "mcpherson2009"] },
    { t: "Don't promise families that music will make their child smarter. Sell joy, connection, and musicianship.", src: ["sala2020"] }
  ],
  why: "Young children learn music through play, movement, and repetition with responsive adults. NAEYC's developmentally appropriate practice framework and NAfME's early childhood position both emphasize play-based, child-responsive experiences. The research cited here is good, but most of it involves small samples. Take the findings as encouraging directions, not guarantees.",
  sources: [
    { k: "gerry2012", use: "Active vs. passive infant music classes (randomized)." },
    { k: "kirschner2010", use: "Joint music-making and prosocial behavior at age 4." },
    { k: "flowers1990", use: "Preschool vocal range and echoing contour vs. pitch." },
    { k: "gudmundsdottir2017", use: "Toddlers' song renditions are recognizable." },
    { k: "naeyc", use: "Developmentally appropriate practice framework." },
    { k: "nafmeEarly", use: "NAfME position on early childhood music." },
    { k: "mcpherson2009", use: "Parents' role in children's musical development." },
    { k: "sala2020", use: "Music training doesn't reliably raise general cognitive or academic skills." }
  ]
},
{
  id: "early-song-choice",
  title: "Choosing songs for young voices",
  emoji: "🎈",
  cat: "early", aud: ["preschool", "elementary"], tags: ["early childhood", "singing", "repertoire"],
  evidence: "mixed",
  summary: "Small range, mid tessitura, short repeated phrases, and texts worth singing.",
  items: [
    { t: "Check the range: is it small, and does it sit in the middle of children's voices rather than adult-pop keys?", src: ["flowers1990"] },
    { t: "Look for short phrases with lots of repetition and a predictable form." },
    { t: "Prefer songs that invite movement, a game, or a fill-in-the-blank part." },
    { t: "Read the text closely: is it meaningful, age-appropriate, and free of stereotypes?" },
    { t: "Know where the song comes from and what it was for, and say so when you teach it.", src: ["folkways"] },
    { t: "Include songs from the children's own homes and languages.", src: ["ladson1995", "naeyc"] },
    { t: "Sing some songs unaccompanied so children can hear their own voices." },
    { t: "Give a clear starting pitch every time." },
    { t: "Expect echo patterns to reach a wider range than whole songs do.", src: ["flowers1990"] }
  ],
  why: "Children's comfortable singing range is narrower and sits in a different place than much commercial children's music assumes. Choosing songs that fit young voices, and that come from children's own communities, makes in-tune, joyful singing far more likely.",
  sources: [
    { k: "flowers1990", use: "Preschool children's vocal range across singing tasks." },
    { k: "folkways", use: "Culture-bearer recordings and lesson plans with context." },
    { k: "ladson1995", use: "Culturally relevant pedagogy: build on students' cultures." },
    { k: "naeyc", use: "Responsiveness to children's families and contexts." }
  ]
},

/* ======================= STUDENT WELLBEING ======================= */
{
  id: "crying-student",
  title: "A student is crying (in class, a lesson, or your office)",
  emoji: "🫂",
  cat: "students", aud: ["elementary", "secondary", "college", "studio", "ta"], tags: ["crisis", "mental health", "first-year teacher", "relationships"],
  evidence: "standard",
  summary: "Calm, private-but-visible, listen first, and know when a conversation becomes a referral or a report.",
  items: [
    { t: "Stay calm. Lower your voice, slow down, and get to eye level.", src: ["nctsnPfa"] },
    { t: "Give the rest of the group something to do (a run-through, a listening task, a student leader) so you can step aside." },
    { t: "Offer privacy without isolation: a doorway or hallway, still within sight of others.",
      more: "Follow your school's or studio's policy on one-adult/one-student situations.", src: ["cdcYso"] },
    { t: "Ask, don't assume: 'Do you want to talk about it, or do you want a minute?'", src: ["nctsnPfa"] },
    { t: "Listen more than you talk. Don't rush to fix it." },
    { t: "Don't promise to keep everything secret. Say up front that some things you'd have to share to keep them safe.", src: ["childwelfare"] },
    { t: "If anything suggests self-harm or suicide, ask directly, don't leave them alone, and bring in the counselor or crisis team now.",
      more: "In the U.S., the 988 Suicide & Crisis Lifeline takes calls and texts at 988. Crisis Text Line: text HOME to 741741. The Trevor Project supports LGBTQ+ young people.", src: ["lifeline988", "crisistext", "trevor", "nasp"] },
    { t: "Know your mandated-reporter duties. A disclosure of abuse or neglect gets reported per your state law and school policy, the same day.", src: ["childwelfare"] },
    { t: "College: refer to the counseling center, and know that FERPA lets you share information with appropriate officials in a health or safety emergency.", src: ["ferpa", "jed"] },
    { t: "College: if the student discloses sexual harassment or assault, know whether you're a required reporter under your institution's Title IX policy.", src: ["titleix"] },
    { t: "Offer something practical: water, tissues, a pass, a quiet seat, a check-in time." },
    { t: "If the tears are about music (auditions, chair placement, a bad jury), validate first, then give one concrete path forward." },
    { t: "Follow up later that day or next class with a short 'How are you doing?'",
      more: "Warm teacher–student relationships are associated with higher engagement and achievement.", src: ["roorda2011"] },
    { t: "Write down what happened (date, time, what was said, who you told) if you referred or reported." },
    { t: "Take care of yourself afterward. Consider Mental Health First Aid or Psychological First Aid training.", src: ["mhfa", "nctsnPfa"] }
  ],
  why: "Music teachers often see the same students for years, in small groups and one-on-one, so students cry in music rooms a lot. Psychological First Aid frameworks emphasize calm contact, safety, practical help, and connecting people with support. Laws (mandated reporting, FERPA, Title IX) set firm lines on what you must do next. Those laws vary by state and institution, so check your own policies.\n\nThis is not medical or legal advice.",
  sources: [
    { k: "nctsnPfa", use: "Psychological First Aid for Schools: contact, safety, stabilization, and connection." },
    { k: "childwelfare", use: "State-by-state mandated reporting laws." },
    { k: "lifeline988", use: "U.S. crisis line." },
    { k: "crisistext", use: "Text-based crisis support." },
    { k: "trevor", use: "Crisis support for LGBTQ+ youth." },
    { k: "nasp", use: "School crisis resources." },
    { k: "ferpa", use: "Student privacy and the health/safety emergency exception." },
    { k: "titleix", use: "Title IX obligations in education programs." },
    { k: "jed", use: "College and young-adult mental health resources." },
    { k: "cdcYso", use: "Guidelines for adult–youth interactions in youth-serving settings." },
    { k: "roorda2011", use: "Teacher–student relationships and engagement (meta-analysis)." },
    { k: "mhfa", use: "Mental Health First Aid training." }
  ]
},
{
  id: "performance-anxiety",
  title: "Helping a student with performance anxiety",
  emoji: "😰",
  cat: "students", aud: ["secondary", "college", "studio", "ta"], tags: ["mental health", "performance", "juries"],
  evidence: "research",
  summary: "Normalize it, prepare thoroughly, practice performing, and refer when it's more than nerves.",
  items: [
    { t: "Normalize it. Many skilled performers feel it, and some arousal can help.", src: ["kenny2011"] },
    { t: "Tell ordinary nerves apart from anxiety that is disabling (avoiding performances, panic, physical symptoms that wreck playing).", src: ["kenny2011"] },
    { t: "Make preparation solid. Over-learn the hardest passages and memory points.", src: ["duke2009"] },
    { t: "Practice performing: mock juries, run-throughs for friends, recordings, playing for a new person every week." },
    { t: "Build a pre-performance routine (warm-up, breathing, a cue word) and rehearse the routine itself." },
    { t: "Help them reframe catastrophic thoughts ('If I miss a note, I'm done') into realistic ones.",
      more: "Cognitive-behavioral approaches have some of the better (though still limited) evidence among treatments.", src: ["kenny2005"] },
    { t: "Don't joke it away, shame it, or say 'just relax.'" },
    { t: "If they ask about medication (e.g., beta-blockers), send them to a physician. That's not a teacher decision." },
    { t: "Refer to counseling when anxiety is severe, persistent, or spilling beyond performance.", src: ["jed"] },
    { t: "After a performance, debrief what went well first, then one thing to work on." }
  ],
  why: "Music performance anxiety is common among students and professionals. Systematic reviews find that cognitive-behavioral and behavioral treatments have the most support, but the overall research base has methodological limits. Teachers can't treat anxiety, but they can prepare students well, normalize the experience, and give them structured chances to practice performing.",
  sources: [
    { k: "kenny2011", use: "Defining music performance anxiety." },
    { k: "kenny2005", use: "Systematic review of treatments, with notes on study quality." },
    { k: "duke2009", use: "Practice quality and retention under test conditions." },
    { k: "jed", use: "Young adult mental health resources." }
  ]
},
{
  id: "student-wants-to-quit",
  title: "A student wants to quit",
  emoji: "🚪",
  cat: "students", aud: ["secondary", "studio", "elementary", "college"], tags: ["motivation", "retention", "families"],
  evidence: "research",
  summary: "Find out which need is going unmet (competence, connection, or choice) before you try to talk them out of it.",
  items: [
    { t: "Listen first. Ask what changed and when it started feeling different." },
    { t: "Check competence: do they feel like they're getting better? Set smaller, winnable goals.", src: ["evans2013", "ryan2000"] },
    { t: "Check relatedness: do they have friends in the ensemble or studio? Do they feel they belong?", src: ["evans2013"] },
    { t: "Check autonomy: do they get any say in repertoire, goals, or style?", src: ["evans2013", "ryan2000"] },
    { t: "Look at practice quality, not just quantity. Frustrating practice drives kids away.", src: ["mcpherson2005", "duke2009"] },
    { t: "Ask about scheduling, money, and outside pressure. Sometimes it isn't about music at all." },
    { t: "For younger students, talk with parents about how practice support is going at home.", src: ["mcpherson2009"] },
    { t: "Offer real alternatives: a different instrument, ensemble, genre, or lesson format." },
    { t: "Respect the decision if they still want to stop, and leave the door open warmly." },
    { t: "Ask for honest feedback on what would have kept them. Write it down for future students." }
  ],
  why: "Self-determination theory proposes that motivation depends on three needs: competence, relatedness, and autonomy. A longitudinal study of young musicians found that people who stopped playing reported lower satisfaction of all three needs at the time they quit, compared with when they were most engaged.",
  sources: [
    { k: "evans2013", use: "Ceasing music associated with lower competence, relatedness, and autonomy." },
    { k: "ryan2000", use: "Self-determination theory." },
    { k: "mcpherson2005", use: "Beginners' progress depends on more than practice amount." },
    { k: "duke2009", use: "How practice is done matters more than how long." },
    { k: "mcpherson2009", use: "Parents' role in musical development." }
  ]
},
{
  id: "changing-voices",
  title: "Working with changing adolescent voices",
  emoji: "🎤",
  cat: "students", aud: ["secondary"], tags: ["choir", "voice", "middle school"],
  evidence: "mixed",
  summary: "Voice change is normal, ongoing, and happens to everyone. Assign parts by range, not labels.",
  items: [
    { t: "Expect voice change in all students, not just boys." },
    { t: "Do quick private voice checks several times a year. Ranges move month to month.", src: ["killian2010"] },
    { t: "Assign parts by current range and comfort, not by gender or last year's part." },
    { t: "Start warm-ups in a comfortable middle range and expand gradually.", src: ["freer2009"] },
    { t: "Explain what's physically happening so cracks feel normal, not embarrassing.", src: ["freer2009"] },
    { t: "Pick repertoire with flexible or optional parts (cambiata or part-swapping)." },
    { t: "Watch and listen for strain: neck tension, pushing, hoarseness. Back them off the extremes." },
    { t: "Keep changing-voice students singing through the change rather than parking them." },
    { t: "Check in with students whose voice change affects their gender identity or comfort, privately and respectfully." },
    { t: "Share vocal-health basics with singers.", src: ["nasmNms"] }
  ],
  why: "Adolescent voices change gradually and unpredictably. Research describing vocal maturation in middle and high school singers shows wide individual variation. Choral educators like Patrick Freer recommend warm-ups and part assignments designed around the changing voice rather than adult voice categories.",
  sources: [
    { k: "freer2009", use: "Warm-ups designed for changing adolescent voices." },
    { k: "killian2010", use: "Vocal maturation in adolescent male singers and instrumentalists." },
    { k: "nasmNms", use: "Vocal-health advisories." }
  ]
},

/* ======================= CLASSROOM, INCLUSION, SUBS ======================= */
{
  id: "first-week",
  title: "First week of school in the music room",
  emoji: "🏫",
  cat: "classroom", aud: ["elementary", "secondary"], tags: ["classroom management", "first-year teacher", "routines"],
  evidence: "research",
  summary: "Teach routines like you teach music: model, practice, feedback, repeat. And make music on day one.",
  items: [
    { t: "Write 3–5 positively stated expectations and post them.", src: ["simonsen2008"] },
    { t: "Teach, practice, and re-practice routines: entering, getting instruments, the attention signal, packing up, leaving.", src: ["simonsen2008"] },
    { t: "Make music on day one. Don't spend the whole first class on rules." },
    { t: "Catch students doing it right, specifically and often.",
      more: "In the classic study, posting rules alone barely changed behavior. Praising appropriate behavior (and ignoring minor misbehavior) did.", src: ["madsen1968"] },
    { t: "Make a seating chart and learn names fast." },
    { t: "Check rosters for IEPs, 504 plans, allergies, and medical notes.", src: ["sec504", "idea"] },
    { t: "Send a positive, specific message home in the first weeks.", src: ["kraft2015"] },
    { t: "Set up instrument and folder check-out with signed agreements." },
    { t: "Review emergency procedures from the music room (the exits are different from a regular classroom)." },
    { t: "Write down what worked and what didn't by Friday." }
  ],
  why: "Classroom-management reviews identify a core set of evidence-based practices: maximize structure, post and teach expectations, actively engage students, acknowledge appropriate behavior, and respond to misbehavior with a continuum of strategies. These apply directly to music rooms, which have more moving parts (literally) than most classrooms.",
  sources: [
    { k: "simonsen2008", use: "Evidence-based classroom management practices." },
    { k: "madsen1968", use: "Rules + praise + ignoring." },
    { k: "kraft2015", use: "Teacher-to-family communication field experiment." },
    { k: "sec504", use: "Section 504 obligations." },
    { k: "idea", use: "IDEA and IEPs." }
  ]
},
{
  id: "iep-504",
  title: "Including a student with an IEP or 504 plan",
  emoji: "🧩",
  cat: "classroom", aud: ["elementary", "secondary", "preschool"], tags: ["inclusion", "special education", "law", "equity"],
  evidence: "standard",
  summary: "Accommodations apply in music, too. Read the plan, ask questions, and design for everyone.",
  items: [
    { t: "Get and read the IEP or 504 plan. Accommodations apply in your class, too.", src: ["idea", "sec504"] },
    { t: "Ask the case manager what the accommodations look like in a music room specifically." },
    { t: "Plan multiple ways to engage, see or hear the content, and show learning (Universal Design for Learning).", src: ["cast"] },
    { t: "Plan sensory supports: hearing protection or ear defenders, seating away from loud sections, a quiet spot." },
    { t: "Look into adaptive instruments, mallet grips, large-print or color-coded notation, and simplified parts." },
    { t: "Adapt assessments so they measure the musical goal, not the disability.", src: ["darrow2003"] },
    { t: "Plan direct instruction for students who don't learn by watching others.", src: ["darrow2003"] },
    { t: "Consider a trained peer buddy, with clear guidance on helping without doing it for them." },
    { t: "Attend IEP meetings when invited, and bring specific observations from music class." },
    { t: "Keep notes on what works and share them with the next teacher." },
    { t: "Presume competence. Talk to the student, not about them in front of them." }
  ],
  why: "Under IDEA and Section 504, students with disabilities are entitled to accommodations across their education, including electives and ensembles. Music teachers are often left out of the loop, so ask. Universal Design for Learning offers a framework for designing lessons that work for more students from the start, not as an afterthought.",
  sources: [
    { k: "idea", use: "Individuals with Disabilities Education Act." },
    { k: "sec504", use: "Section 504 FAPE obligations." },
    { k: "cast", use: "UDL Guidelines." },
    { k: "darrow2003", use: "Challenges of inclusion and fair evaluation in music." }
  ]
},
{
  id: "sub-plans",
  title: "Leaving sub plans for a music class",
  emoji: "📋",
  cat: "classroom", aud: ["elementary", "secondary"], tags: ["substitutes", "planning", "first-year teacher"],
  evidence: "practice",
  summary: "Assume the sub can't read music and shouldn't touch the instruments. Plan accordingly.",
  items: [
    { t: "Assume the sub is not a musician. Plans must work without reading music or playing piano." },
    { t: "Leave a seating chart with names (and photos if your school allows)." },
    { t: "Explain your attention signal and the routines students already know.", src: ["simonsen2008"] },
    { t: "Say clearly what's off-limits: instruments, the piano, the sound system, the storage room." },
    { t: "Pre-test any video or audio links on the exact computer and account the sub will use." },
    { t: "Include a non-tech backup activity (listening journal, rhythm worksheet, composer reading)." },
    { t: "Name trusted student helpers for each class." },
    { t: "Flag medical, allergy, and IEP/504 notes the sub needs (on paper, per privacy policy).", src: ["ferpa"] },
    { t: "Include emergency procedures and the nearest staff contact." },
    { t: "Leave a short 'how did it go' form for the sub." },
    { t: "Keep an emergency 'sub tub' of 3 generic lessons for days you can't plan." }
  ],
  why: "No research tells you how to write music sub plans. This is accumulated teacher experience. It does rest on a well-supported principle: structure and predictable routines reduce problem behavior. Edit freely.",
  sources: [
    { k: "simonsen2008", use: "Structure and routines in classroom management." },
    { k: "ferpa", use: "Sharing student records appropriately." }
  ]
}
);
