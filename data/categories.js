/* Categories, shown in this order. */
window.MTC_CATEGORIES = [
  { id: "orff",       name: "Orff & Elementary General Music", blurb: "Barred instruments, the elemental process, and keeping a loud room safe." },
  { id: "early",      name: "Early Childhood",                 blurb: "Birth through pre-K: songs, play, and realistic expectations." },
  { id: "rep",        name: "Choosing Repertoire",             blurb: "Repertoire is the curriculum. Choose like it." },
  { id: "rehearsal",  name: "Rehearsals & Practice",           blurb: "Less talking, more playing, better practice." },
  { id: "concerts",   name: "Concerts & Programs",             blurb: "Programs, run-of-show, recording, and streaming." },
  { id: "assessment", name: "Auditions, Juries & Grading",     blurb: "Fairer judging and grading that measures music." },
  { id: "students",   name: "Student Wellbeing",               blurb: "Tears, nerves, quitting, and knowing when to get help." },
  { id: "classroom",  name: "Classroom, Inclusion & Subs",     blurb: "Routines, IEPs and 504s, and leaving the room for a day." },
  { id: "survival",   name: "Teacher Survival",                blurb: "Faculty meetings, concert season, your voice, your ears." },
  { id: "families",   name: "Families & Advocacy",             blurb: "Parent emails, communication, and honest advocacy." },
  { id: "studio",     name: "Private Studio",                  blurb: "Policies, first lessons, parents, and safeguarding." },
  { id: "legal",      name: "Copyright & Safety",              blurb: "Copies, arrangements, licenses, and keeping kids safe." },
  { id: "logistics",  name: "Trips & Gear",                    blurb: "Travel, inventory, and the end-of-year scramble." },
  { id: "higher",     name: "College Teaching & TAs",          blurb: "Grad TAs, recommendation letters, and college classrooms." },
  { id: "leadership", name: "Leadership & Administration",     blurb: "Chairs, area directors, deans, provosts, presidents." }
];

/* "Who is this for?" filters. */
window.MTC_AUDIENCES = [
  { id: "preschool",  name: "Early childhood" },
  { id: "elementary", name: "Elementary" },
  { id: "secondary",  name: "Middle & high school" },
  { id: "college",    name: "College faculty" },
  { id: "ta",         name: "TAs & grad students" },
  { id: "studio",     name: "Studio teachers" },
  { id: "admin",      name: "Administrators" }
];

/* How strong the evidence behind a checklist is, as the AI drafter judged it. */
window.MTC_EVIDENCE = {
  research: { name: "Research-backed",     help: "Most items trace to peer-reviewed studies or meta-analyses." },
  mixed:    { name: "Research + practice", help: "Some items are research-backed. Others are professional practice." },
  standard: { name: "Law & guidelines",    help: "Mostly laws, regulations, or professional-body guidelines. Check your own state, district, and institution." },
  practice: { name: "Practitioner wisdom", help: "Experience-based. There is little or no formal research here, so be skeptical and edit freely." }
};
