/*
  Emoji settings. The app decides where emoji appear; this file says which ones.

  Levels run from 0 (none) to 4 (as many as possible). "Tactful" is the default.
  Each checklist picks its own emoji with  emoji: "🎻"  in its data object.
  Categories and audiences set theirs in data/categories.js.
*/
window.MTC_EMOJI = {
  levels: [
    { id: "none",    name: "None whatsoever",                    help: "No emoji anywhere. Not even one." },
    { id: "barely",  name: "Barely any",                         help: "One per checklist, on its page, and on category cards." },
    { id: "tactful", name: "Tactful",                            help: "A few, where they help you scan. The default." },
    { id: "plenty",  name: "Plenty",                             help: "Headings, buttons, tags, and items that match a topic." },
    { id: "max",     name: "There's no such thing as too many",  help: "Every item, every heading, every celebration. You asked for this." }
  ],
  defaultLevel: "tactful",

  // Navigation, sections, and evidence labels (shown at "Plenty" and up).
  ui: {
    list: "📋", categories: "🗂️", tags: "🏷️", about: "🤖", history: "📜", settings: "🎛️",
    why: "💡", sources: "📚", review: "🔍", checklist: "✅", print: "🖨️",
    expand: "👀", reset: "🔄", search: "🔎", done: "🎉", copy: "📋", export: "💾"
  },
  evidence: { research: "🔬", mixed: "🧪", standard: "⚖️", practice: "🛠️" },
  // Slop meter labels, from human-verified (1) to pure slop (5).
  slop: { 1: "✅", 2: "🧑‍🏫", 3: "🌗", 4: "🤖", 5: "🤖" },

  // Item emoji: the first pattern that matches an item's text wins (at "Plenty" and up).
  keywords: [
    [/\b(911|emergenc|danger|crisis|threat)/i, "🚨"],
    [/\b(suicid|self-harm|988)/i, "🆘"],
    [/\b(heat|hot|temperature|wbgt|sun)\b/i, "🌡️"],
    [/\b(water|hydrat|drink)/i, "💧"],
    [/\b(ice|cold-water|cooling)\b/i, "🧊"],
    [/\b(sleep|rest\b|naps?\b|tired|fatigue)/i, "😴"],
    [/\b(eat|snack|food|meal|lunch|hungry)/i, "🍎"],
    [/\b(move|exercise|walk|stretch|physical activity)/i, "🚶"],
    [/\b(hearing|ears?\b|earplug|loud|decibel|noise|sound)/i, "👂"],
    [/\b(voice|vocal|sing|singer|hoarse)/i, "🎤"],
    [/\b(pain|injur|tendon|wrist|shoulder|neck|posture)/i, "🩹"],
    [/\b(doctor|medical|physician|clinic|health center|ent\b)/i, "🩺"],
    [/\b(counsel|therap|mental health|anxiety|grief|griev)/i, "💛"],
    [/\b(email|message|text|reply)/i, "📧"],
    [/\b(phone|call)\b/i, "📞"],
    [/\b(parent|famil|guardian|home)/i, "👪"],
    [/\b(translat|interpret|language|english|bilingual|multilingual)/i, "🌍"],
    [/\b(calendar|schedule|deadline|date|timeline|year)/i, "📅"],
    [/\b(meeting|committee|agenda)/i, "🗓️"],
    [/\b(budget|money|tuition|fee|salary|cost|pay)/i, "💰"],
    [/\b(police|report|document|log\b|record)/i, "📝"],
    [/\b(law|legal|ferpa|title ix|clery|504|iep|ada\b|polic)/i, "⚖️"],
    [/\b(photo|video|livestream|stream|social media|post)/i, "📸"],
    [/\b(safe|safety|protect|privacy|secure)/i, "🛡️"],
    [/\b(read|handbook|book|standard)/i, "📖"],
    [/\b(write|written|notes?)\b/i, "✍️"],
    [/\b(listen|ask)\b/i, "👂"],
    [/\b(praise|celebrat|thank|win)/i, "🎉"],
    [/\b(friend|peer|buddy|belong|mentor|colleague)/i, "🤝"],
    [/\b(visual|picture|gesture|model|demonstrat|show)/i, "👀"],
    [/\b(quiet|calm|break|breath)/i, "🧘"],
    [/\b(concert|perform|recital|stage|audience)/i, "🎭"],
    [/\b(rehears|ensemble|band|choir|orchestra|section)/i, "🎼"],
    [/\b(practice|practis)/i, "⏱️"],
    [/\b(piano|keyboard)/i, "🎹"],
    [/\b(drum|percussion|rhythm|beat)/i, "🥁"],
    [/\b(student|class|kid|child)/i, "🧑‍🎓"],
    [/\b(teach|lesson|course|syllabus)/i, "🍎"],
    [/\b(accredit|nasm|self-study|visit)/i, "🏛️"],
    [/\b(grade|assess|rubric|jury|audition)/i, "📊"],
    [/\b(music|song|piece|repertoire)/i, "🎵"]
  ],
  // "There's no such thing as too many": items with no keyword match rotate through these.
  fallback: ["🎵", "🎶", "✨", "🎼", "🌟", "🎺", "🥁", "🎻", "🎷", "🎹", "🎸", "💫"],
  sparkle: ["✨", "🎶", "🌟", "💫", "🎉"],

  // Celebration confetti glyphs (at "Plenty" and up; plain confetti shapes below that).
  confetti: ["🎉", "🎶", "🎵", "✨", "🎺", "🥁", "🎻", "🌟", "🎊", "🎷"]
};
