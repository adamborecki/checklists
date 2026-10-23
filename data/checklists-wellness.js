/*
  Checklists: health & wellness, grief, stalking, student privacy, celebrating students.
  All AI-drafted on 2026-10-23. Nothing here has been human-reviewed yet.
*/
(window.MTC_CHECKLISTS = window.MTC_CHECKLISTS || []).push(

/* ======================= HEALTH & WELLNESS ======================= */
{
  id: "musician-injury-prevention",
  title: "Preventing playing-related pain and injury",
  emoji: "🩹",
  cat: "health", aud: ["secondary", "college", "studio", "ta"], tags: ["health", "injury", "practice", "NASM"],
  evidence: "mixed",
  summary: "Pain while playing is common, but it isn't normal. Ramp up gradually, take breaks, fix the setup, and refer early.",
  items: [
    { t: "Teach that pain is a signal, not a rite of passage. 'No pain, no gain' doesn't apply to tendons.",
      more: "In a systematic review of professional musicians, 12-month prevalence of musculoskeletal complaints ranged from 41% to 93%. The authors rated study quality as low, so the exact numbers are shaky. The pattern isn't.", src: ["kok2016", "zaza1998"] },
    { t: "Ramp up gradually after time off (summer, winter break, illness, a new instrument). Sudden jumps in practice time are a classic setup for overuse trouble." },
    { t: "Build breaks into practice (for example, a few minutes every 25–30 minutes), and spread practice across the day.",
      more: "There's little controlled research on exact break schedules. This is common performing-arts-medicine advice, not a tested prescription." },
    { t: "Warm up physically and musically before demanding repertoire.", src: ["nasmNms"] },
    { t: "Check the setup: chair and bench height, stand height, straps and instrument support, chin and shoulder rests, and reach for small hands." },
    { t: "Watch for tension habits (raised shoulders, locked wrists, a clenched jaw, collapsed posture) and coach the body, not just the notes." },
    { t: "Don't stack several technically brutal pieces right before a jury, audition, or tour." },
    { t: "Tell students exactly what to do when pain shows up: stop, rest, tell you, and see a clinician if it persists or comes with numbness, tingling, or weakness.", src: ["nasmNms"] },
    { t: "Know where to refer: a performing-arts medicine clinic, sports medicine, physical or occupational therapy, or the campus health center." },
    { t: "Take every report seriously. Neck and shoulders are the most common sites, and women report complaints more often in most studies.", src: ["kok2016"] },
    { t: "Never shame a student for cutting back practice or needing a modified part while they recover." },
    { t: "Model it yourself: warm up, take breaks, and talk openly about how you avoid injury." }
  ],
  why: "Playing-related musculoskeletal disorders are common enough that reviews going back to the 1990s describe them as an occupational hazard of serious music-making, not a rare accident. NASM and the Performing Arts Medicine Association publish advisories on neuromusculoskeletal health, and NASM expects schools to give music majors basic injury-prevention information.\n\nThe evidence for specific prevention strategies (exact break lengths, particular warm-ups) is much thinner than the evidence that the problem exists. Several items here are standard clinical advice rather than tested interventions.",
  sources: [
    { k: "kok2016", use: "Prevalence of musculoskeletal complaints in professional musicians (systematic review)." },
    { k: "zaza1998", use: "Defines playing-related musculoskeletal disorders and reviews their prevalence." },
    { k: "nasmNms", use: "NASM-PAMA advisory on neuromusculoskeletal and vocal health." }
  ]
},
{
  id: "music-student-wellness",
  title: "Student wellness in a high-pressure music program",
  emoji: "🌿",
  cat: "health", aud: ["secondary", "college", "studio", "ta"], tags: ["health", "wellness", "sleep", "mental health", "NASM"],
  evidence: "mixed",
  summary: "Sleep, food, movement, friends, and help that's actually visible. Health is part of the training, not a distraction from it.",
  items: [
    { t: "Protect sleep in your own scheduling: no routine late-night rehearsals, and no 'all-nighter before the jury' culture.",
      more: "The American Academy of Sleep Medicine recommends 8–10 hours per 24 hours for teens 13–18. Even short-term sleep loss measurably hurts attention and working memory.", src: ["paruthi2016", "lim2010"] },
    { t: "Schedule long rehearsals and jury days so students can eat. Put meal breaks on the calendar.", src: ["swami2022"] },
    { t: "Encourage regular movement that isn't instrument practice.",
      more: "For adults, the federal guideline is 150–300 minutes a week of moderate activity plus muscle strengthening on two or more days. Some is better than none.", src: ["pag2018"] },
    { t: "Put health resources where students will see them: the syllabus, studio policies, practice-room doors, the department website.", src: ["perkins2017", "nasmHearing", "nasmNms"] },
    { t: "Talk openly about comparison and competition. Students in one conservatoire study named them as barriers to their health.", src: ["perkins2017"] },
    { t: "Give feedback that is specific and actionable, and separate the playing from the person.", src: ["perkins2017"] },
    { t: "Watch for warning signs: missed lessons, a sudden drop in preparation, withdrawal, exhaustion, talk of hopelessness.", src: ["jed"] },
    { t: "Know the referral path (school counselor or counseling center), and walk a student there if needed. In the U.S., call or text 988 in a crisis.", src: ["jed", "lifeline988"] },
    { t: "Treat rest days and reduced practice during illness or injury as part of training, not as slacking." },
    { t: "Build belonging: studios and ensembles where students know each other's names, and a teacher who checks in.", src: ["roorda2011"] },
    { t: "Make hearing protection and vocal-health basics normal, not optional extras.", src: ["nasmHearing", "nasmNms"] }
  ],
  why: "In an interview study at UK conservatoires, students described barriers to health at three levels: their own routines, support services that felt invisible, and an environment of comparison, pressure, and overwork. The authors argued that institutions should change daily routines, not just tell individuals to cope better.\n\nSleep and activity guidelines here are general, not music-specific. NASM expects accredited schools to give students basic information on hearing, vocal, and musculoskeletal health.",
  sources: [
    { k: "perkins2017", use: "Enablers and barriers to health among conservatoire students (qualitative)." },
    { k: "paruthi2016", use: "Recommended sleep for children and teens." },
    { k: "lim2010", use: "Short-term sleep deprivation and cognition (meta-analysis)." },
    { k: "swami2022", use: "Hunger and irritability in daily life." },
    { k: "pag2018", use: "Physical activity guidelines." },
    { k: "nasmHearing", use: "Hearing-health advisories." },
    { k: "nasmNms", use: "Neuromusculoskeletal and vocal-health advisories." },
    { k: "jed", use: "Young-adult mental health resources and warning signs." },
    { k: "lifeline988", use: "U.S. crisis line." },
    { k: "roorda2011", use: "Teacher–student relationships and engagement (meta-analysis)." }
  ]
},
{
  id: "teacher-wellness",
  title: "Teacher wellness that survives a real school year",
  emoji: "🧘",
  cat: "health", aud: ["preschool", "elementary", "secondary", "college", "studio", "ta", "admin"], tags: ["self-care", "burnout", "wellness", "sleep", "boundaries"],
  evidence: "mixed",
  summary: "Not bubble baths. Sleep, food, movement, boundaries, your ears and voice, and other people.",
  items: [
    { t: "Know it isn't just you. Teachers report frequent job-related stress and burnout more often than similar working adults.", src: ["rand2025"] },
    { t: "Guard sleep first during concert and grading weeks. It's the first thing to go and the most expensive to lose.", src: ["lim2010"] },
    { t: "Eat before meetings and long rehearsal blocks. Keep real food at school.", src: ["swami2022"] },
    { t: "Move most days. Any amount beats none.",
      more: "The adult guideline is 150–300 minutes a week of moderate activity plus strength work on two or more days.", src: ["pag2018"] },
    { t: "Protect your voice and ears like the work tools they are.", src: ["roy2004", "niosh"] },
    { t: "Set a work-hours boundary you can actually keep (for example, no email after 8 p.m.), and tell people about it.",
      more: "In RAND's 2025 survey, teachers reported working about 49 hours a week, roughly 10 more than they were contracted for.", src: ["rand2025"] },
    { t: "Keep one non-music, non-school thing on your weekly calendar." },
    { t: "Keep a 'good file' of thank-you notes and student wins for the hard days." },
    { t: "Find your people: a colleague outside your building, a mentor, a music-teacher group.", src: ["eby2008"] },
    { t: "Notice burnout signs (exhaustion, cynicism, dread a weekend doesn't fix) and take them seriously.", src: ["madigan2021"] },
    { t: "Use your employee assistance program or a therapist. It's a tool, not a failure." },
    { t: "If you're in crisis, call or text 988 (U.S.).", src: ["lifeline988"] }
  ],
  why: "RAND's State of the American Teacher surveys have found teachers reporting poorer well-being than similar working adults every year since 2021. Burnout research links exhaustion and low satisfaction with teachers leaving the profession.\n\nNone of this fixes systemic problems like workload or pay, and it shouldn't be used to suggest that burnout is an individual failing. These are the parts within your control.",
  sources: [
    { k: "rand2025", use: "Teacher stress, burnout, and hours worked (2025 survey)." },
    { k: "lim2010", use: "Sleep loss and cognition." },
    { k: "swami2022", use: "Hunger and irritability." },
    { k: "pag2018", use: "Physical activity guidelines." },
    { k: "roy2004", use: "Voice disorders in teachers." },
    { k: "niosh", use: "Noise exposure limits." },
    { k: "eby2008", use: "Mentoring outcomes (meta-analysis)." },
    { k: "madigan2021", use: "Burnout and intent to quit (meta-analysis)." },
    { k: "lifeline988", use: "U.S. crisis line." }
  ]
},
{
  id: "marching-heat-safety",
  title: "Heat safety for marching band and outdoor rehearsals",
  emoji: "🌡️",
  cat: "health", aud: ["secondary", "college", "admin"], tags: ["marching band", "heat", "safety", "band camp", "health"],
  evidence: "standard",
  summary: "Band camp is in August. Exertional heat stroke is preventable, and survivable when you plan, acclimatize, and cool first.",
  items: [
    { t: "Write a heat policy with your athletic trainer before band camp, based on wet-bulb globe temperature (WBGT), not air temperature alone.",
      more: "WBGT accounts for humidity, sun, and wind. Some state associations now require WBGT-based limits for marching band as well as athletics. Check yours.", src: ["casa2015"] },
    { t: "Acclimatize over the first 1–2 weeks: shorter sessions, lighter clothing (no full uniforms or shakos), and gradually more time in the heat.",
      more: "NATA recommends phasing in heat exposure over 7–14 days. The first days of a new season carry the greatest risk.", src: ["casa2015"] },
    { t: "Hold outdoor blocks early in the morning or in the evening when you can." },
    { t: "Build in shaded breaks, with water at every break. Students drink, not just carry bottles.", src: ["casa2015"] },
    { t: "Have an athletic trainer or other medically trained person on site for band camp and hot rehearsals.", src: ["casa2015"] },
    { t: "Know the signs of exertional heat stroke: confusion, odd behavior, stumbling, collapse. A behavior change is a red flag, not 'being dramatic.'", src: ["casa2015"] },
    { t: "Cool first, transport second: when trained staff and a tub are there, start cold-water immersion right away and call 911.",
      more: "The Korey Stringer Institute's guide stresses getting body temperature down on site, quickly, before transport, when medical staff and cold-water immersion are available.", src: ["ksiCooling", "casa2015"] },
    { t: "Set up a cooling tub (or tarp), ice, and water at practice on hot days, before anyone needs it.", src: ["ksiCooling"] },
    { t: "Collect health information (asthma, sickle cell trait, medications, past heat illness) and share it with medical staff per policy.", src: ["ferpa"] },
    { t: "Watch the students who won't speak up: first-years, eager section leaders, anyone who doesn't want to look weak." },
    { t: "Have a lightning and severe-weather plan for the same outdoor rehearsals." },
    { t: "Debrief every heat-related incident and update the plan." }
  ],
  why: "Marching band combines athletic exertion, heavy uniforms and instruments, and August heat. Sports medicine guidance on exertional heat illness applies directly. The NATA position statement calls exertional heat stroke one of the leading causes of sudden death in sport and lays out prevention (acclimatization, environmental monitoring, medical coverage) and treatment (rapid on-site cooling).\n\nRules differ by state, district, and athletic association. This checklist is not medical advice. Work with your athletic trainer and administration.",
  sources: [
    { k: "casa2015", use: "NATA position statement on exertional heat illnesses." },
    { k: "ksiCooling", use: "Cold-water immersion and 'cool first, transport second'." },
    { k: "ferpa", use: "Sharing student health records appropriately." }
  ]
},

/* ======================= STUDENT WELLBEING ======================= */
{
  id: "grieving-student",
  title: "Supporting a grieving student (or a grieving ensemble)",
  emoji: "🕯️",
  cat: "students", aud: ["elementary", "secondary", "college", "studio", "ta"], tags: ["grief", "crisis", "mental health", "relationships"],
  evidence: "mixed",
  summary: "Say something. Keep it short, keep showing up, and let music be a place to feel, not just perform.",
  items: [
    { t: "Acknowledge the loss. Saying nothing can feel to a student like you don't care, or that the topic is off limits.", src: ["grieving"] },
    { t: "Keep it simple: 'I heard about your grandmother. I'm so sorry. I'm here if you want to talk.'", src: ["grieving"] },
    { t: "Skip 'I know how you feel', 'They're in a better place', and 'Be strong for your family.'",
      more: "The Coalition to Support Grieving Students has a free module on what not to say, with better alternatives.", src: ["grieving"] },
    { t: "Ask what the student wants classmates to know. Don't share details without their permission and the family's wishes." },
    { t: "Offer flexibility: a pass on a solo, a quieter part, an extension, a place to step out." },
    { t: "Check upcoming repertoire for texts that may hit hard (death, a parent, a funeral hymn), and give a heads-up or an alternative." },
    { t: "Expect grief to come back around birthdays, holidays, anniversaries, and concerts the person would have attended.", src: ["grieving"] },
    { t: "Loop in the counselor. Watch for signs it's more than grief: self-harm talk, or not functioning for weeks.", src: ["nasp", "lifeline988"] },
    { t: "If the ensemble lost a member, talk with administration and counselors before planning any tribute, and let students help shape it.", src: ["nctsnPfa", "nasp"] },
    { t: "Ask students and the family what feels right about the empty chair, the program, and the memorial piece. Don't decide for them." },
    { t: "Follow up a week, a month, and a few months later.", src: ["grieving", "roorda2011"] },
    { t: "Take care of yourself, too. Supporting grief is heavy.", src: ["grieving"] }
  ],
  why: "Music teachers often know students for years and see them in small groups, so they're frequently among the first adults a grieving student trusts. The Coalition to Support Grieving Students, backed by education and school-mental-health organizations, offers free guidance on talking with grieving students, supporting them over time, and educator self-care. Psychological First Aid frameworks cover school-wide losses.\n\nThis is mostly professional guidance, not experimental research.",
  sources: [
    { k: "grieving", use: "What to say, what not to say, and support over time." },
    { k: "nctsnPfa", use: "Psychological First Aid after school crises and losses." },
    { k: "nasp", use: "School crisis resources." },
    { k: "lifeline988", use: "U.S. crisis line." },
    { k: "roorda2011", use: "Teacher–student relationships (meta-analysis)." }
  ]
},
{
  id: "student-stalked",
  title: "A student is being stalked by someone from another school",
  emoji: "🔒",
  cat: "students", aud: ["secondary", "college", "studio", "ta", "admin"], tags: ["safety", "stalking", "crisis", "privacy", "concerts", "Title IX"],
  evidence: "standard",
  summary: "Take it seriously, bring in the right people today, and look hard at the places music makes students easy to find: concerts, programs, posts, and pickup.",
  items: [
    { t: "Believe the student and take it seriously. Stalking is a pattern of behavior that causes fear, and that fear is the point.",
      more: "A review of stalking assessment notes that victims' own sense of risk is an important warning sign, and that stalking causes harm beyond violence, including disrupted school, work, and relationships.", src: ["logan2017", "sparc"] },
    { t: "If anyone is in immediate danger, call 911." },
    { t: "Tell administration (and the school resource officer or campus police) the same day. Don't handle it alone, and don't promise to keep it secret.", src: ["childwelfare"] },
    { t: "If the student is a minor, the family needs to know. If anything suggests abuse by a caregiver, follow your state's mandated-reporting law.", src: ["childwelfare"] },
    { t: "College: send it to the Title IX office and campus police. Stalking is a Clery Act crime, and the institution must give the student written information about rights and options.", src: ["titleix", "clery"] },
    { t: "Encourage a dated log of every contact, sighting, message, and gift, with screenshots.",
      more: "SPARC's free log warns students to write as if the stalker might someday read it, because logs can become evidence in court.", src: ["sparcLog"] },
    { t: "Don't contact or confront the stalker yourself. Administration contacts the other school's administration and law enforcement." },
    { t: "Connect the student and family with a victim advocate for safety planning.",
      more: "VictimConnect: call or text 1-855-484-2846. If the stalker is a current or former dating partner, love is respect: text LOVEIS to 22522.", src: ["victimconnect", "loveisrespect", "sparc"] },
    { t: "Concerts: consider leaving the student's name off public programs and posted seating charts, and skip livestreams and tagged photos for now.",
      more: "Under FERPA, names and participation in activities can be 'directory information' that schools publish unless the family opts out. Concert programs, rosters, and social media are exactly where a stalker looks.", src: ["ferpa"] },
    { t: "Plan concert and rehearsal logistics: an adult walks the student to the car, a known pickup person, and a plan if the stalker shows up at a public performance." },
    { t: "Trips: review rooming lists, published itineraries, and who knows where the group will be and when." },
    { t: "Studios and lessons: don't share the student's lesson time or location, and check what's public on your website or studio app." },
    { t: "Make sure the front office, security, and relevant staff know who the person is (with a photo if police or administration provide one), per policy." },
    { t: "Know that protective orders exist and vary by state. An advocate or attorney can explain options.", src: ["womenslaw"] },
    { t: "Check in quietly and regularly. Stalking often goes on for months.", src: ["logan2017"] }
  ],
  why: "Music programs make students findable. Concert dates, venues, programs with names, livestreams, trip itineraries, and lesson schedules are often public. When a student is being stalked, especially by someone at another school who isn't covered by your school's discipline, the music teacher's best contributions are bringing in administration right away and quietly reducing what's public.\n\nLaws on stalking, protective orders, and school obligations vary by state and institution. This is not legal advice. Follow your school's policy and let administration and law enforcement lead.",
  sources: [
    { k: "logan2017", use: "Framework for stalking assessment and safety planning." },
    { k: "sparc", use: "Stalking information and resources for victims and professionals." },
    { k: "sparcLog", use: "Free stalking incident and behavior log." },
    { k: "childwelfare", use: "Mandated reporting laws." },
    { k: "titleix", use: "Title IX in education programs." },
    { k: "clery", use: "Stalking as a Clery Act reportable crime (VAWA amendments)." },
    { k: "victimconnect", use: "Help line for victims of crime, including stalking." },
    { k: "loveisrespect", use: "Dating-abuse support for young people." },
    { k: "ferpa", use: "Directory information and opt-outs." },
    { k: "womenslaw", use: "State-by-state protective order information." }
  ]
},

/* ======================= COPYRIGHT, PRIVACY & SAFETY ======================= */
{
  id: "concert-student-privacy",
  title: "Protecting student privacy at concerts and online",
  emoji: "📸",
  cat: "legal", aud: ["preschool", "elementary", "secondary", "college", "studio", "admin"], tags: ["privacy", "FERPA", "social media", "livestream", "safety"],
  evidence: "standard",
  summary: "Programs, livestreams, and social posts can tell strangers exactly where a child will be. Know the opt-outs and make a plan.",
  items: [
    { t: "Learn your school's FERPA directory-information policy and which families opted out.",
      more: "FERPA lets schools publish designated 'directory information' (often including names and participation in activities) unless a parent or eligible student opts out. Schools must tell families how and when they can opt out.", src: ["ferpa"] },
    { t: "Check the opt-out list before printing programs, posting seating charts, or sharing rosters.", src: ["ferpa"] },
    { t: "Get photo and video consent each year, and carry a short 'no photos' list to every event." },
    { t: "Livestreams: frame the ensemble, avoid close-ups of individuals, and don't stream students who opted out." },
    { t: "Remember that livestreaming and posting recordings raise copyright and licensing questions too.", src: ["circ21", "nafmeDistance"] },
    { t: "Don't tag students, pair first and last names in posts, or share real-time locations ('At the bus stop on 5th!')." },
    { t: "Post trip and competition photos after the event, not during it." },
    { t: "Studio teachers: use first names only, and get written consent before posting recital photos or videos." },
    { t: "Ask families to follow the same rules for photos of other people's children." },
    { t: "For students with safety concerns (custody orders, stalking, protective orders), work out a specific plan with administration.", src: ["cdcYso"] },
    { t: "Communicate through approved channels, with parents included for minors.", src: ["cdcYso"] }
  ],
  why: "Music programs publish more about students than most classes do: names in programs, photos on social media, livestreamed concerts, and trip itineraries. Most of the time that's a joy. For a student in a custody dispute or being stalked, it's a map. FERPA's directory-information rules and a few simple habits cover most of the risk.\n\nThis is U.S.-specific and not legal advice. District policies are often stricter than the law.",
  sources: [
    { k: "ferpa", use: "Directory information and opt-out rights." },
    { k: "circ21", use: "Copyright limits on recording." },
    { k: "nafmeDistance", use: "Copyright guidance for streaming and online sharing." },
    { k: "cdcYso", use: "Communication and safety guidelines in youth-serving settings." }
  ]
},

/* ======================= CLASSROOM ======================= */
{
  id: "celebrating-students",
  title: "Celebrating student wins (without making it weird)",
  emoji: "🎉",
  cat: "classroom", aud: ["preschool", "elementary", "secondary", "college", "studio", "ta"], tags: ["praise", "motivation", "celebrations", "relationships"],
  evidence: "research",
  summary: "Be specific, praise the process, be sincere, and let students own the win.",
  items: [
    { t: "Be specific: name what they did ('Your phrasing in bar 12 finally breathed').", src: ["henderlong2002", "madsen1968"] },
    { t: "Praise effort, strategy, and progress more than talent.",
      more: "A classic study found that praising children for intelligence undermined their persistence after failure. A large later replication didn't find the effect, so treat this as a sensible default, not settled science.", src: ["mueller1998", "li2019"] },
    { t: "Be sincere. Generic or manipulative-sounding praise can backfire.", src: ["henderlong2002"] },
    { t: "Don't praise by comparing students to each other in front of the group.", src: ["henderlong2002"] },
    { t: "Know your students. Some love public celebration. Others would much rather get a quiet note.",
      more: "Reviews suggest age, gender, and culture can change how praise lands.", src: ["henderlong2002"] },
    { t: "Celebrate the whole group, not just the soloists: sections, crew, accompanists, librarians, stage managers." },
    { t: "Mark milestones: a first performance, a finished method book, a first audition, a first run with no stops." },
    { t: "Send a short, specific note home.", src: ["kraft2015"] },
    { t: "Celebrate comebacks, too: the student who returned after a rough jury." },
    { t: "Keep celebrations inclusive: food allergies, sensory needs (confetti cannons and air horns aren't for everyone), and religious and cultural considerations." },
    { t: "Let students celebrate each other with quick shout-outs at the end of rehearsal." }
  ],
  why: "Praise is one of the most-studied tools in teaching. A major review concluded that praise can raise, lower, or leave intrinsic motivation unchanged depending on whether it's sincere, specific, attributes success to things students control, and avoids social comparison. The famous 'praise effort, not intelligence' finding is included alongside a failed replication. The general advice holds up, but its effect size is debated.",
  sources: [
    { k: "henderlong2002", use: "When praise helps or hurts intrinsic motivation (review)." },
    { k: "mueller1998", use: "Praise for intelligence vs. effort." },
    { k: "li2019", use: "Large replication that didn't find the praise effect." },
    { k: "madsen1968", use: "Specific praise for appropriate behavior." },
    { k: "kraft2015", use: "Teacher-to-family messages field experiment." }
  ]
}
);
