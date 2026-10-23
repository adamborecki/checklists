/* Categories, shown in this order. */
window.MTC_CATEGORIES = [
  { id: "orff",         emoji: "🎶", name: "Orff & Elementary General Music", blurb: "Barred instruments, the elemental process, and keeping a loud room safe." },
  { id: "early",        emoji: "🧸", name: "Early Childhood",                 blurb: "Birth through pre-K: songs, play, and realistic expectations." },
  { id: "rep",          emoji: "📚", name: "Choosing Repertoire",             blurb: "Repertoire is the curriculum. Choose like it." },
  { id: "rehearsal",    emoji: "🎻", name: "Rehearsals & Practice",           blurb: "Less talking, more playing, better practice." },
  { id: "concerts",     emoji: "🎭", name: "Concerts & Programs",             blurb: "Programs, run-of-show, recording, streaming, and sensory-friendly shows." },
  { id: "assessment",   emoji: "📝", name: "Auditions, Juries & Grading",     blurb: "Fairer judging and grading that measures music." },
  { id: "students",     emoji: "💛", name: "Student Wellbeing",               blurb: "Tears, nerves, grief, quitting, stalking, and knowing when to get help." },
  { id: "classroom",    emoji: "🏫", name: "Classroom, Inclusion & Subs",     blurb: "Routines, IEPs and 504s, autistic students, and leaving the room for a day." },
  { id: "multilingual", emoji: "🌍", name: "English Learners & Multilingual Families", blurb: "Teaching music across language levels, and talking with every family." },
  { id: "health",       emoji: "🩺", name: "Health & Wellness",               blurb: "Bodies, ears, voices, sleep, heat, and minds, for students and teachers." },
  { id: "survival",     emoji: "🛟", name: "Teacher Survival",                blurb: "Faculty meetings, concert season, your voice, your ears." },
  { id: "families",     emoji: "👪", name: "Families & Advocacy",             blurb: "Parent emails, communication, and honest advocacy." },
  { id: "studio",       emoji: "🎹", name: "Private Studio",                  blurb: "Policies, first lessons, parents, and safeguarding." },
  { id: "legal",        emoji: "⚖️", name: "Copyright, Privacy & Safety",     blurb: "Copies, arrangements, licenses, student privacy, and keeping kids safe." },
  { id: "logistics",    emoji: "🚌", name: "Trips & Gear",                    blurb: "Travel, inventory, and the end-of-year scramble." },
  { id: "higher",       emoji: "🎓", name: "College Teaching & TAs",          blurb: "New faculty, first-year students, grad TAs, and recommendation letters." },
  { id: "nasm",         emoji: "🏛️", name: "NASM & Accreditation",            blurb: "What NASM expects, self-studies, site visits, and annual reporting." },
  { id: "leadership",   emoji: "🧭", name: "Leadership & Administration",     blurb: "Chairs, area directors, deans, provosts, presidents." }
];

/* "Who is this for?" filters. */
window.MTC_AUDIENCES = [
  { id: "preschool",  emoji: "🧸", name: "Early childhood" },
  { id: "elementary", emoji: "🍎", name: "Elementary" },
  { id: "secondary",  emoji: "🎒", name: "Middle & high school" },
  { id: "college",    emoji: "🎓", name: "College faculty" },
  { id: "ta",         emoji: "📝", name: "TAs & grad students" },
  { id: "studio",     emoji: "🎹", name: "Studio teachers" },
  { id: "admin",      emoji: "💼", name: "Administrators" }
];

/* How strong the evidence behind a checklist is, as the AI drafter judged it. */
window.MTC_EVIDENCE = {
  research: { name: "Research-backed",     help: "Most items trace to peer-reviewed studies or meta-analyses." },
  mixed:    { name: "Research + practice", help: "Some items are research-backed. Others are professional practice." },
  standard: { name: "Law & guidelines",    help: "Mostly laws, regulations, or professional-body guidelines. Check your own state, district, and institution." },
  practice: { name: "Practitioner wisdom", help: "Experience-based. There is little or no formal research here, so be skeptical and edit freely." }
};
