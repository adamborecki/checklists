/*
  Source library. Every checklist cites sources by key.

  When drafted (2026-10-22), every DOI here was resolved against the Crossref API
  and every web URL was opened or found by search. That was an automated, AI-run
  check. It is NOT a human check, and it says nothing about whether a source
  supports the claim a checklist makes. Humans do that part in the app.

  kind: study | meta-analysis | review | replication | critique | law | government |
        guideline | organization | article | chapter | book | manufacturer | resource

  Sources added 2026-10-23 were checked by web search only (Crossref and doi.org
  were unreachable from the drafting environment). Titles, authors, journals,
  volumes, and pages were confirmed in search results. Three DOIs did not appear
  in those results and are marked "DOI not seen in search" below. Run
  tools/check-links.mjs to resolve them.

  To record that a human opened a link, set  humanLinkCheck: "initials, YYYY-MM-DD"
*/
window.MTC_SOURCES = {
  // ---------- Practice & rehearsal research ----------
  duke2009: {
    cite: "Duke, R. A., Simmons, A. L., & Cash, C. D. (2009). It's not how much; it's how: Characteristics of practice behavior and retention of performance skills. Journal of Research in Music Education, 56(4), 310–321.",
    url: "https://doi.org/10.1177/0022429408328851", kind: "study"
  },
  ericsson1993: {
    cite: "Ericsson, K. A., Krampe, R. T., & Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. Psychological Review, 100(3), 363–406.",
    url: "https://doi.org/10.1037/0033-295X.100.3.363", kind: "study"
  },
  macnamara2014: {
    cite: "Macnamara, B. N., Hambrick, D. Z., & Oswald, F. L. (2014). Deliberate practice and performance in music, games, sports, education, and professions: A meta-analysis. Psychological Science, 25(8), 1608–1618.",
    url: "https://doi.org/10.1177/0956797614535810", kind: "meta-analysis"
  },
  carter2016: {
    cite: "Carter, C. E., & Grahn, J. A. (2016). Optimizing music learning: Exploring how blocked and interleaved practice schedules affect advanced performance. Frontiers in Psychology, 7, 1251.",
    url: "https://doi.org/10.3389/fpsyg.2016.01251", kind: "study"
  },
  mcpherson2005: {
    cite: "McPherson, G. E. (2005). From child to musician: Skill development during the beginning stages of learning an instrument. Psychology of Music, 33(1), 5–35.",
    url: "https://doi.org/10.1177/0305735605048012", kind: "study"
  },
  yarbrough1989: {
    cite: "Yarbrough, C., & Price, H. E. (1989). Sequential patterns of instruction in music. Journal of Research in Music Education, 37(3), 179–187.",
    url: "https://doi.org/10.2307/3344668", kind: "study"
  },
  goolsby1996: {
    cite: "Goolsby, T. W. (1996). Time use in instrumental rehearsals: A comparison of experienced, novice, and student teachers. Journal of Research in Music Education, 44(4), 286–303.",
    url: "https://doi.org/10.2307/3345442", kind: "study"
  },
  goolsby1999: {
    cite: "Goolsby, T. W. (1999). A comparison of expert and novice music teachers' preparing identical band compositions: An operational replication. Journal of Research in Music Education, 47(2), 174–187.",
    url: "https://doi.org/10.2307/3345722", kind: "study"
  },
  duke1998pace: {
    cite: "Duke, R. A., Prickett, C. A., & Jellison, J. A. (1998). Empirical description of the pace of music instruction. Journal of Research in Music Education, 46(2), 265–280.",
    url: "https://doi.org/10.2307/3345628", kind: "study"
  },
  duke1998corr: {
    cite: "Duke, R. A., & Henninger, J. C. (1998). Effects of verbal corrections on student attitude and performance. Journal of Research in Music Education, 46(4), 482–495.",
    url: "https://doi.org/10.2307/3345345", kind: "study"
  },
  freer2009: {
    cite: "Freer, P. K. (2009). Choral warm-ups for changing adolescent voices. Music Educators Journal, 95(3), 57–62.",
    url: "https://doi.org/10.1177/0027432108330209", kind: "article"
  },
  killian2010: {
    cite: "Killian, J. N., & Wayman, J. B. (2010). A descriptive study of vocal maturation among male adolescent vocalists and instrumentalists. Journal of Research in Music Education, 58(1), 5–19.",
    url: "https://doi.org/10.1177/0022429409359941", kind: "study"
  },

  // ---------- Repertoire & culture ----------
  reynolds2000: {
    cite: "Reynolds, H. R. (2000). Repertoire is the curriculum. Music Educators Journal, 87(1), 31–33.",
    url: "https://doi.org/10.2307/3399675", kind: "article"
  },
  apfelstadt2000: {
    cite: "Apfelstadt, H. (2000). First things first: Selecting repertoire. Music Educators Journal, 87(1), 19–22, 46.",
    url: "https://doi.org/10.2307/3399672", kind: "article"
  },
  icd: {
    cite: "Institute for Composer Diversity (SUNY Fredonia). Composer and repertoire databases.",
    url: "https://www.composerdiversity.com/", kind: "resource"
  },
  ladson1995: {
    cite: "Ladson-Billings, G. (1995). Toward a theory of culturally relevant pedagogy. American Educational Research Journal, 32(3), 465–491.",
    url: "https://doi.org/10.3102/00028312032003465", kind: "article"
  },
  folkways: {
    cite: "Smithsonian Folkways Recordings. Tools for Teaching (free lesson plans built on recordings of culture bearers).",
    url: "https://folkways.si.edu/tools-for-teaching/smithsonian", kind: "resource"
  },

  // ---------- Orff & instruments ----------
  aosaMission: {
    cite: "American Orff-Schulwerk Association. Mission & Values.",
    url: "https://aosa.org/about-aosa/mission/", kind: "organization"
  },
  aosaFix: {
    cite: "American Orff-Schulwerk Association. \"Fix, Fiddle, and Make Do\" (care and repair of barred instruments).",
    url: "https://aosa.org/resource/1562-2/", kind: "organization"
  },
  yamahaMallet: {
    cite: "Yamaha Music Educators Hub. 4 Steps in Caring for Mallet Percussion Instruments.",
    url: "https://hub.yamaha.com/music-educators/instruments/perc/care-for-mallet-instruments/", kind: "manufacturer"
  },
  thomannPerc: {
    cite: "Thomann Online Expert. Orchestral Percussion: Repair and Maintenance.",
    url: "https://www.thomannmusic.com/onlineexpert_page_orchestral_percussion_repair_and_maintenance.html", kind: "manufacturer"
  },
  mca: {
    cite: "National Coalition for Core Arts Standards. Music Model Cornerstone Assessments (MCAs).",
    url: "https://nationalartsstandards.org/node/485", kind: "guideline"
  },

  // ---------- Early childhood ----------
  gerry2012: {
    cite: "Gerry, D., Unrau, A., & Trainor, L. J. (2012). Active music classes in infancy enhance musical, communicative and social development. Developmental Science, 15(3), 398–407.",
    url: "https://doi.org/10.1111/j.1467-7687.2012.01142.x", kind: "study"
  },
  kirschner2010: {
    cite: "Kirschner, S., & Tomasello, M. (2010). Joint music making promotes prosocial behavior in 4-year-old children. Evolution and Human Behavior, 31(5), 354–364.",
    url: "https://doi.org/10.1016/j.evolhumbehav.2010.04.004", kind: "study"
  },
  flowers1990: {
    cite: "Flowers, P. J., & Dunne-Sousa, D. (1990). Pitch-pattern accuracy, tonality, and vocal range in preschool children's singing. Journal of Research in Music Education, 38(2), 102–114.",
    url: "https://doi.org/10.2307/3344930", kind: "study"
  },
  gudmundsdottir2017: {
    cite: "Gudmundsdottir, H. R., & Trehub, S. E. (2018). Adults recognize toddlers' song renditions. Psychology of Music, 46(2), 281–291. (Online first 2017.)",
    url: "https://doi.org/10.1177/0305735617711762", kind: "study"
  },
  naeyc: {
    cite: "National Association for the Education of Young Children (2020). Developmentally Appropriate Practice (DAP) Position Statement.",
    url: "https://www.naeyc.org/resources/position-statements/dap/contents", kind: "guideline"
  },
  nafmeEarly: {
    cite: "National Association for Music Education. Early Childhood Music Education (position statement).",
    url: "https://nafme.org/resource/early-childhood-music-education/", kind: "guideline"
  },

  // ---------- Concerts, programs, copyright ----------
  margulis2010: {
    cite: "Margulis, E. H. (2010). When program notes don't help: Music descriptions and enjoyment. Psychology of Music, 38(3), 285–302.",
    url: "https://doi.org/10.1177/0305735609351921", kind: "study"
  },
  acb: {
    cite: "American Council of the Blind. Large Print Guidelines.",
    url: "https://www.acb.org/large-print-guidelines", kind: "guideline"
  },
  circ21: {
    cite: "U.S. Copyright Office. Circular 21: Reproduction of Copyrighted Works by Educators and Librarians (includes the Guidelines for Educational Uses of Music).",
    url: "https://www.copyright.gov/circs/circ21.pdf", kind: "government"
  },
  usc110: {
    cite: "17 U.S. Code § 110: Limitations on exclusive rights: Exemption of certain performances and displays (see §110(4) for nonprofit live performances).",
    url: "https://www.law.cornell.edu/uscode/text/17/110", kind: "law"
  },
  nafmeCopyright: {
    cite: "National Association for Music Education. Basics of Copyright for Music Educators.",
    url: "https://nafme.org/resource/basics-of-copyright-for-music-educators", kind: "guideline"
  },
  nafmeDistance: {
    cite: "NAfME & NFHS. Copyright Guidance for Distance Learning for Music Educators.",
    url: "https://nafme.org/resource/copyright-guidance-for-distance-learning-for-music-educators", kind: "guideline"
  },
  songfile: {
    cite: "Harry Fox Agency. Songfile (mechanical licenses for recordings of songs).",
    url: "https://www.songfile.com/", kind: "resource"
  },

  // ---------- Hunger, meetings, sleep, burnout ----------
  danziger2011: {
    cite: "Danziger, S., Levav, J., & Avnaim-Pesso, L. (2011). Extraneous factors in judicial decisions. PNAS, 108(17), 6889–6892.",
    url: "https://doi.org/10.1073/pnas.1018033108", kind: "study"
  },
  weinshall2011: {
    cite: "Weinshall-Margel, K., & Shapard, J. (2011). Overlooked factors in the analysis of parole decisions. PNAS, 108(42), E833.",
    url: "https://doi.org/10.1073/pnas.1110910108", kind: "critique"
  },
  maccormack2019: {
    cite: "MacCormack, J. K., & Lindquist, K. A. (2019). Feeling hangry? When hunger is conceptualized as emotion. Emotion, 19(2), 301–319.",
    url: "https://doi.org/10.1037/emo0000422", kind: "study"
  },
  swami2022: {
    cite: "Swami, V., Hochstöger, S., Kargl, E., & Stieger, S. (2022). Hangry in the field: An experience sampling study on the impact of hunger on anger, irritability, and affect. PLOS ONE, 17(7), e0269629.",
    url: "https://doi.org/10.1371/journal.pone.0269629", kind: "study"
  },
  hagger2016: {
    cite: "Hagger, M. S., Chatzisarantis, N. L. D., et al. (2016). A multilab preregistered replication of the ego-depletion effect. Perspectives on Psychological Science, 11(4), 546–573.",
    url: "https://doi.org/10.1177/1745691616652873", kind: "replication"
  },
  masento2014: {
    cite: "Masento, N. A., Golightly, M., Field, D. T., Butler, L. T., & van Reekum, C. M. (2014). Effects of hydration status on cognitive performance and mood. British Journal of Nutrition, 111(10), 1841–1852.",
    url: "https://doi.org/10.1017/S0007114513004455", kind: "review"
  },
  rogelberg2006: {
    cite: "Rogelberg, S. G., Leach, D. J., Warr, P. B., & Burnfield, J. L. (2006). \"Not another meeting!\" Are meeting time demands related to employee well-being? Journal of Applied Psychology, 91(1), 83–96.",
    url: "https://doi.org/10.1037/0021-9010.91.1.83", kind: "study"
  },
  bluedorn1999: {
    cite: "Bluedorn, A. C., Turban, D. B., & Love, M. S. (1999). The effects of stand-up and sit-down meeting formats on meeting outcomes. Journal of Applied Psychology, 84(2), 277–285.",
    url: "https://doi.org/10.1037/0021-9010.84.2.277", kind: "study"
  },
  lim2010: {
    cite: "Lim, J., & Dinges, D. F. (2010). A meta-analysis of the impact of short-term sleep deprivation on cognitive variables. Psychological Bulletin, 136(3), 375–389.",
    url: "https://doi.org/10.1037/a0018883", kind: "meta-analysis"
  },
  madigan2021: {
    cite: "Madigan, D. J., & Kim, L. E. (2021). Towards an understanding of teacher attrition: A meta-analysis of burnout, job satisfaction, and teachers' intentions to quit. Teaching and Teacher Education, 105, 103425.",
    url: "https://doi.org/10.1016/j.tate.2021.103425", kind: "meta-analysis"
  },
  bernhard2005: {
    cite: "Bernhard, H. C. (2005). Burnout and the college music education major. Journal of Music Teacher Education, 15(1), 43–51.",
    url: "https://doi.org/10.1177/10570837050150010107", kind: "study"
  },

  // ---------- Voice & hearing ----------
  roy2004: {
    cite: "Roy, N., Merrill, R. M., Thibeault, S., Parsa, R. A., Gray, S. D., & Smith, E. M. (2004). Prevalence of voice disorders in teachers and the general population. Journal of Speech, Language, and Hearing Research, 47(2), 281–293.",
    url: "https://doi.org/10.1044/1092-4388(2004/023)", kind: "study"
  },
  roy2002: {
    cite: "Roy, N., Weinrich, B., Gray, S. D., Tanner, K., et al. (2002). Voice amplification versus vocal hygiene instruction for teachers with voice disorders: A treatment outcomes study. Journal of Speech, Language, and Hearing Research, 45(4), 625–638.",
    url: "https://doi.org/10.1044/1092-4388(2002/050)", kind: "study"
  },
  ashaVoice: {
    cite: "American Speech-Language-Hearing Association (2025). Protect Your Voice This Back-to-School Season (news release).",
    url: "https://www.asha.org/news/2025/protect-your-voice-this-back-to-school-season/", kind: "organization"
  },
  behar2004: {
    cite: "Behar, A., MacDonald, E., Lee, J., Cui, J., Kunov, H., & Wong, W. (2004). Noise exposure of music teachers. Journal of Occupational and Environmental Hygiene, 1(4), 243–247.",
    url: "https://doi.org/10.1080/15459620490432178", kind: "study"
  },
  niosh: {
    cite: "CDC / NIOSH. Noise and Hearing Loss: Noise-Induced Hearing Loss (Recommended Exposure Limit of 85 dBA, 8-hour TWA).",
    url: "https://www.cdc.gov/niosh/noise/about/noise.html", kind: "government"
  },
  nasmHearing: {
    cite: "National Association of Schools of Music & Performing Arts Medicine Association. NASM-PAMA Advisories on Hearing Health.",
    url: "https://nasm.arts-accredit.org/publications/brochures-advisories/nasm-pama-hearing-health/", kind: "guideline"
  },
  nasmNms: {
    cite: "NASM & PAMA. Advisories on Neuromusculoskeletal and Vocal Health.",
    url: "https://nasm.arts-accredit.org/publications/brochures-advisories/nasm-pama-nms-vocal-health/", kind: "guideline"
  },
  chesky2008: {
    cite: "Chesky, K. (2008). Preventing music-induced hearing loss. Music Educators Journal, 94(3), 36–41.",
    url: "https://doi.org/10.1177/002743210809400308", kind: "article"
  },
  chesky2009: {
    cite: "Chesky, K., Pair, M., Yoshimura, E., & Landford, S. (2009). An evaluation of musician earplugs with college music students. International Journal of Audiology, 48(9), 661–670.",
    url: "https://doi.org/10.1080/14992020903019320", kind: "study"
  },

  // ---------- Students: wellbeing, motivation, crisis ----------
  roorda2011: {
    cite: "Roorda, D. L., Koomen, H. M. Y., Spilt, J. L., & Oort, F. J. (2011). The influence of affective teacher–student relationships on students' school engagement and achievement: A meta-analytic approach. Review of Educational Research, 81(4), 493–529.",
    url: "https://doi.org/10.3102/0034654311421793", kind: "meta-analysis"
  },
  nctsnPfa: {
    cite: "National Child Traumatic Stress Network. Psychological First Aid for Schools (PFA-S) Field Operations Guide.",
    url: "https://www.nctsn.org/resources/psychological-first-aid-for-schools-pfa-s-field-operations-guide", kind: "guideline"
  },
  nasp: {
    cite: "National Association of School Psychologists. School Safety and Crisis resources.",
    url: "https://www.nasponline.org/resources-and-publications/resources-and-podcasts/school-safety-and-crisis", kind: "organization"
  },
  lifeline988: {
    cite: "988 Suicide & Crisis Lifeline (call or text 988 in the U.S.).",
    url: "https://988lifeline.org/", kind: "resource"
  },
  crisistext: {
    cite: "Crisis Text Line (text HOME to 741741 in the U.S.).",
    url: "https://www.crisistextline.org/", kind: "resource"
  },
  trevor: {
    cite: "The Trevor Project. 24/7 crisis support for LGBTQ+ young people.",
    url: "https://www.thetrevorproject.org/get-help/", kind: "resource"
  },
  jed: {
    cite: "The Jed Foundation. Emotional health and suicide prevention for teens and young adults.",
    url: "https://jedfoundation.org/", kind: "organization"
  },
  mhfa: {
    cite: "Mental Health First Aid USA (training).",
    url: "https://www.mentalhealthfirstaid.org/", kind: "resource"
  },
  childwelfare: {
    cite: "Child Welfare Information Gateway. Mandatory Reporting of Child Abuse and Neglect (state statutes series).",
    url: "https://www.childwelfare.gov/resources/mandatory-reporting-child-abuse-and-neglect/", kind: "government"
  },
  cdcYso: {
    cite: "Saul, J., & Audage, N. C. (2007). Preventing Child Sexual Abuse Within Youth-serving Organizations: Getting Started on Policies and Procedures. CDC, National Center for Injury Prevention and Control.",
    url: "https://stacks.cdc.gov/view/cdc/7538", kind: "government"
  },
  kenny2005: {
    cite: "Kenny, D. T. (2005). A systematic review of treatments for music performance anxiety. Anxiety, Stress & Coping, 18(3), 183–208.",
    url: "https://doi.org/10.1080/10615800500167258", kind: "review"
  },
  kenny2011: {
    cite: "Kenny, D. T. (2011). Defining music performance anxiety. In The Psychology of Music Performance Anxiety. Oxford University Press.",
    url: "https://doi.org/10.1093/acprof:oso/9780199586141.003.0027", kind: "chapter"
  },
  ryan2000: {
    cite: "Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. American Psychologist, 55(1), 68–78.",
    url: "https://doi.org/10.1037/0003-066X.55.1.68", kind: "article"
  },
  evans2013: {
    cite: "Evans, P., McPherson, G. E., & Davidson, J. W. (2013). The role of psychological needs in ceasing music and music learning activities. Psychology of Music, 41(5), 600–619.",
    url: "https://doi.org/10.1177/0305735612441736", kind: "study"
  },

  // ---------- Classroom & inclusion ----------
  simonsen2008: {
    cite: "Simonsen, B., Fairbanks, S., Briesch, A., Myers, D., & Sugai, G. (2008). Evidence-based practices in classroom management: Considerations for research to practice. Education and Treatment of Children, 31(3), 351–380.",
    url: "https://doi.org/10.1353/etc.0.0007", kind: "review"
  },
  madsen1968: {
    cite: "Madsen, C. H., Becker, W. C., & Thomas, D. R. (1968). Rules, praise, and ignoring: Elements of elementary classroom control. Journal of Applied Behavior Analysis, 1(2), 139–150.",
    url: "https://doi.org/10.1901/jaba.1968.1-139", kind: "study"
  },
  idea: {
    cite: "U.S. Department of Education. Individuals with Disabilities Education Act (IDEA).",
    url: "https://sites.ed.gov/idea/", kind: "law"
  },
  sec504: {
    cite: "U.S. Department of Education, Office for Civil Rights. Frequently Asked Questions: Section 504 Free Appropriate Public Education (FAPE).",
    url: "https://www.ed.gov/laws-and-policy/civil-rights-laws/disability-discrimination/frequently-asked-questions-section-504-free-appropriate-public-education-fape", kind: "government"
  },
  cast: {
    cite: "CAST. Universal Design for Learning (UDL) Guidelines.",
    url: "https://udlguidelines.cast.org/", kind: "guideline"
  },
  darrow2003: {
    cite: "Darrow, A.-A. (2003). Dealing with diversity: The inclusion of students with disabilities in music. Research Studies in Music Education, 21(1), 45–57.",
    url: "https://doi.org/10.1177/1321103X030210010401", kind: "article"
  },

  // ---------- Families & advocacy ----------
  kraft2015: {
    cite: "Kraft, M. A., & Rogers, T. (2015). The underutilized potential of teacher-to-parent communication: Evidence from a field experiment. Economics of Education Review, 47, 49–63.",
    url: "https://doi.org/10.1016/j.econedurev.2015.04.001", kind: "study"
  },
  creech2003: {
    cite: "Creech, A., & Hallam, S. (2003). Parent–teacher–pupil interactions in instrumental music tuition: A literature review. British Journal of Music Education, 20(1), 29–44.",
    url: "https://doi.org/10.1017/S0265051702005272", kind: "review"
  },
  mcpherson2009: {
    cite: "McPherson, G. E. (2009). The role of parents in children's musical development. Psychology of Music, 37(1), 91–110.",
    url: "https://doi.org/10.1177/0305735607086049", kind: "article"
  },
  sala2020: {
    cite: "Sala, G., & Gobet, F. (2020). Cognitive and academic benefits of music training with children: A multilevel meta-analysis. Memory & Cognition, 48(8), 1429–1441.",
    url: "https://doi.org/10.3758/s13421-020-01060-2", kind: "meta-analysis"
  },
  pietschnig2010: {
    cite: "Pietschnig, J., Voracek, M., & Formann, A. K. (2010). Mozart effect–Shmozart effect: A meta-analysis. Intelligence, 38(3), 314–323.",
    url: "https://doi.org/10.1016/j.intell.2010.03.001", kind: "meta-analysis"
  },
  elpus2013: {
    cite: "Elpus, K. (2013). Is it the music or is it selection bias? A nationwide analysis of music and non-music students' SAT scores. Journal of Research in Music Education, 61(2), 175–194.",
    url: "https://doi.org/10.1177/0022429413485601", kind: "study"
  },
  guhn2020: {
    cite: "Guhn, M., Emerson, S. D., & Gouzouasis, P. (2020). A population-level analysis of associations between school music participation and academic achievement. Journal of Educational Psychology, 112(2), 308–328.",
    url: "https://doi.org/10.1037/edu0000376", kind: "study"
  },
  artsed: {
    cite: "Arts Education Data Project (Quadrant Research / State Education Agency Directors of Arts Education).",
    url: "https://artseddata.org/", kind: "resource"
  },

  // ---------- Assessment, auditions, evaluation ----------
  goldin2000: {
    cite: "Goldin, C., & Rouse, C. (2000). Orchestrating impartiality: The impact of \"blind\" auditions on female musicians. American Economic Review, 90(4), 715–741.",
    url: "https://doi.org/10.1257/aer.90.4.715", kind: "study"
  },
  gelman2019: {
    cite: "Gelman, A. (2019, May 11). Did blind orchestra auditions really benefit women? Statistical Modeling, Causal Inference, and Social Science (blog).",
    url: "https://statmodeling.stat.columbia.edu/2019/05/11/did-blind-orchestra-auditions-really-benefit-women/", kind: "critique"
  },
  tsay2013: {
    cite: "Tsay, C.-J. (2013). Sight over sound in the judgment of music performance. PNAS, 110(36), 14580–14585.",
    url: "https://doi.org/10.1073/pnas.1221454110", kind: "study"
  },
  bruine2005: {
    cite: "Bruine de Bruin, W. (2005). Save the last dance for me: Unwanted serial position effects in jury evaluations. Acta Psychologica, 118(3), 245–260.",
    url: "https://doi.org/10.1016/j.actpsy.2004.08.005", kind: "study"
  },
  wesolowski2016: {
    cite: "Wesolowski, B. C., Wind, S. A., & Engelhard, G. (2016). Examining rater precision in music performance assessment: An analysis of rating scale structure using the multifaceted Rasch partial credit model. Music Perception, 33(5), 662–678.",
    url: "https://doi.org/10.1525/mp.2016.33.5.662", kind: "study"
  },
  russell2010: {
    cite: "Russell, J. A., & Austin, J. R. (2010). Assessment practices of secondary music teachers. Journal of Research in Music Education, 58(1), 37–54.",
    url: "https://doi.org/10.1177/0022429409360062", kind: "study"
  },
  boring2016: {
    cite: "Boring, A., Ottoboni, K., & Stark, P. B. (2016). Student evaluations of teaching (mostly) do not measure teaching effectiveness. ScienceOpen Research.",
    url: "https://doi.org/10.14293/S2199-1006.1.SOR-EDU.AETBZC.v1", kind: "study"
  },
  uttl2017: {
    cite: "Uttl, B., White, C. A., & Gonzalez, D. W. (2017). Meta-analysis of faculty's teaching effectiveness: Student evaluation of teaching ratings and student learning are not related. Studies in Educational Evaluation, 54, 22–42.",
    url: "https://doi.org/10.1016/j.stueduc.2016.08.007", kind: "meta-analysis"
  },
  madera2009: {
    cite: "Madera, J. M., Hebl, M. R., & Martin, R. C. (2009). Gender and letters of recommendation for academia: Agentic and communal differences. Journal of Applied Psychology, 94(6), 1591–1599.",
    url: "https://doi.org/10.1037/a0016539", kind: "study"
  },
  trix2003: {
    cite: "Trix, F., & Psenka, C. (2003). Exploring the color of glass: Letters of recommendation for female and male medical faculty. Discourse & Society, 14(2), 191–220.",
    url: "https://doi.org/10.1177/0957926503014002277", kind: "study"
  },
  schmidt1998: {
    cite: "Schmidt, F. L., & Hunter, J. E. (1998). The validity and utility of selection methods in personnel psychology. Psychological Bulletin, 124(2), 262–274.",
    url: "https://doi.org/10.1037/0033-2909.124.2.262", kind: "meta-analysis"
  },
  sackett2022: {
    cite: "Sackett, P. R., Zhang, C., Berry, C. M., & Lievens, F. (2022). Revisiting meta-analytic estimates of validity in personnel selection. Journal of Applied Psychology, 107(11), 2040–2068.",
    url: "https://doi.org/10.1037/apl0000994", kind: "meta-analysis"
  },
  levashina2014: {
    cite: "Levashina, J., Hartwell, C. J., Morgeson, F. P., & Campion, M. A. (2014). The structured employment interview: Narrative and quantitative review of the research literature. Personnel Psychology, 67(1), 241–293.",
    url: "https://doi.org/10.1111/peps.12052", kind: "review"
  },
  freeman2014: {
    cite: "Freeman, S., Eddy, S. L., McDonough, M., Smith, M. K., Okoroafor, N., Jordt, H., & Wenderoth, M. P. (2014). Active learning increases student performance in science, engineering, and mathematics. PNAS, 111(23), 8410–8415.",
    url: "https://doi.org/10.1073/pnas.1319030111", kind: "meta-analysis"
  },

  // ---------- Law & policy (U.S.) ----------
  ferpa: {
    cite: "U.S. Department of Education, Student Privacy Policy Office. FERPA.",
    url: "https://studentprivacy.ed.gov/ferpa", kind: "law"
  },
  titleix: {
    cite: "U.S. Department of Education, Office for Civil Rights. Title IX: Key Issues.",
    url: "https://www.ed.gov/laws-and-policy/civil-rights-laws/title-ix-and-sex-discrimination/title-ix-key-issues", kind: "government"
  },
  aaup1940: {
    cite: "American Association of University Professors. 1940 Statement of Principles on Academic Freedom and Tenure, with 1970 Interpretive Comments.",
    url: "https://www.aaup.org/reports-publications/aaup-policies-reports/policy-statements/1940-statement-principles-academic", kind: "guideline"
  },
  nasmHandbook: {
    cite: "National Association of Schools of Music. NASM Handbook (accreditation standards).",
    url: "https://nasm.arts-accredit.org/accreditation/standards-guidelines/handbook/", kind: "guideline"
  },

  // ---------- Private studio ----------
  mtnaEthics: {
    cite: "Music Teachers National Association. Code of Ethics.",
    url: "https://www.mtna.org/Code_of_Ethics.html", kind: "organization"
  },
  irsSelf: {
    cite: "Internal Revenue Service. Self-Employed Individuals Tax Center.",
    url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center", kind: "government"
  },
  // ---------- Added 2026-10-23: NASM & accreditation ----------
  nasmHandbookNotice: {
    cite: "National Association of Schools of Music. Current Notice: NASM Handbook 2025-26 Published (supersedes all previous editions).",
    url: "https://nasm.arts-accredit.org/about/current-notices/current-notice-nasm-handbook-published/", kind: "organization"
  },
  nasmVisitors: {
    cite: "National Association of Schools of Music. Procedures for Comprehensive Review: Procedures for Visiting Evaluators.",
    url: "https://nasm.arts-accredit.org/accreditation/procedures-for-comprehensive-review/procedures-for-visiting-evaluators/", kind: "guideline"
  },
  nasmHeads: {
    cite: "National Association of Schools of Music. Annual Reporting Requirements: HEADS Data Survey (launched November 1, due January 31).",
    url: "https://nasm.arts-accredit.org/accreditation/responsibilities/annual-reporting-requirements/heads", kind: "guideline"
  },

  // ---------- Added 2026-10-23: health & wellness ----------
  kok2016: {
    cite: "Kok, L. M., Huisstede, B. M. A., Voorn, V. M. A., Schoones, J. W., & Nelissen, R. G. H. H. (2016). The occurrence of musculoskeletal complaints among professional musicians: A systematic review. International Archives of Occupational and Environmental Health, 89(3), 373–396.",
    url: "https://doi.org/10.1007/s00420-015-1090-6", kind: "review"
  },
  zaza1998: {
    cite: "Zaza, C. (1998). Playing-related musculoskeletal disorders in musicians: A systematic review of incidence and prevalence. CMAJ, 158(8), 1019–1025.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1229223/", kind: "review"
  },
  perkins2017: {
    cite: "Perkins, R., Reid, H., Araújo, L. S., Clark, T., & Williamon, A. (2017). Perceived enablers and barriers to optimal health among music students: A qualitative study in the music conservatoire setting. Frontiers in Psychology, 8, 968.",
    url: "https://doi.org/10.3389/fpsyg.2017.00968", kind: "study"
  },
  paruthi2016: {
    // DOI not seen in search; citation details were.
    cite: "Paruthi, S., Brooks, L. J., D'Ambrosio, C., et al. (2016). Recommended amount of sleep for pediatric populations: A consensus statement of the American Academy of Sleep Medicine. Journal of Clinical Sleep Medicine, 12(6), 785–786.",
    url: "https://doi.org/10.5664/jcsm.5866", kind: "guideline"
  },
  pag2018: {
    cite: "U.S. Department of Health and Human Services (2018). Physical Activity Guidelines for Americans, 2nd edition: Executive Summary.",
    url: "https://health.gov/sites/default/files/2019-10/PAG_ExecutiveSummary.pdf", kind: "government"
  },
  casa2015: {
    cite: "Casa, D. J., DeMartini, J. K., Bergeron, M. F., et al. (2015). National Athletic Trainers' Association position statement: Exertional heat illnesses. Journal of Athletic Training, 50(9), 986–1000.",
    url: "https://doi.org/10.4085/1062-6050-50.9.07", kind: "guideline"
  },
  ksiCooling: {
    cite: "Korey Stringer Institute, University of Connecticut. Cold Water Immersion Guide (\"cool first, transport second\").",
    url: "https://koreystringer-institute.media.uconn.edu/wp-content/uploads/sites/3814/2024/08/ColdWaterImmersionGuide_ResourceUpdate_8.pdf", kind: "guideline"
  },
  rand2025: {
    cite: "RAND Corporation. Teacher Well-Being, Pay, and Intentions to Leave in 2025: Findings from the State of the American Teacher Survey.",
    url: "https://www.rand.org/education-employment-infrastructure/survey-panels/aep/surveys/items/state-of-the-american-teacher-survey-winter-2025.html", kind: "study"
  },
  grieving: {
    cite: "Coalition to Support Grieving Students. Free training modules for educators (conversation and support, what not to say, support over time, self-care).",
    url: "https://grievingstudents.org/modules/", kind: "organization"
  },
  henderlong2002: {
    cite: "Henderlong, J., & Lepper, M. R. (2002). The effects of praise on children's intrinsic motivation: A review and synthesis. Psychological Bulletin, 128(5), 774–795.",
    url: "https://doi.org/10.1037/0033-2909.128.5.774", kind: "review"
  },
  mueller1998: {
    cite: "Mueller, C. M., & Dweck, C. S. (1998). Praise for intelligence can undermine children's motivation and performance. Journal of Personality and Social Psychology, 75(1), 33–52.",
    url: "https://doi.org/10.1037/0022-3514.75.1.33", kind: "study"
  },
  li2019: {
    cite: "Li, Y., & Bates, T. C. (2019). You can't change your basic ability, but you work at things, and that's how we get hard things done: Testing the role of growth mindset on response to setbacks, educational attainment, and cognitive ability. Journal of Experimental Psychology: General, 148(9), 1640–1655.",
    url: "https://doi.org/10.1037/xge0000669", kind: "replication"
  },

  // ---------- Added 2026-10-23: new faculty & first-year students ----------
  boice1989: {
    // DOI not seen in search; citation details and abstract were.
    cite: "Boice, R. (1989). Procrastination, busyness and bingeing. Behaviour Research and Therapy, 27(6), 605–611.",
    url: "https://doi.org/10.1016/0005-7967(89)90144-7", kind: "study"
  },
  eby2008: {
    cite: "Eby, L. T., Allen, T. D., Evans, S. C., Ng, T., & DuBois, D. L. (2008). Does mentoring matter? A multidisciplinary meta-analysis comparing mentored and non-mentored individuals. Journal of Vocational Behavior, 72(2), 254–267.",
    url: "https://doi.org/10.1016/j.jvb.2007.04.005", kind: "meta-analysis"
  },
  walton2011: {
    cite: "Walton, G. M., & Cohen, G. L. (2011). A brief social-belonging intervention improves academic and health outcomes of minority students. Science, 331(6023), 1447–1451.",
    url: "https://doi.org/10.1126/science.1198364", kind: "study"
  },
  yeager2016: {
    cite: "Yeager, D. S., Walton, G. M., Brady, S. T., et al. (2016). Teaching a lay theory before college narrows achievement gaps at scale. PNAS, 113(24), E3341–E3348.",
    url: "https://doi.org/10.1073/pnas.1524360113", kind: "study"
  },

  // ---------- Added 2026-10-23: autistic students & sensory access ----------
  hume2021: {
    cite: "Hume, K., Steinbrenner, J. R., Odom, S. L., et al. (2021). Evidence-based practices for children, youth, and young adults with autism: Third generation review. Journal of Autism and Developmental Disorders, 51(11), 4013–4032.",
    url: "https://doi.org/10.1007/s10803-020-04844-2", kind: "review"
  },
  kenny2016: {
    cite: "Kenny, L., Hattersley, C., Molins, B., Buckley, C., Povey, C., & Pellicano, E. (2016). Which terms should be used to describe autism? Perspectives from the UK autism community. Autism, 20(4), 442–462.",
    url: "https://doi.org/10.1177/1362361315588200", kind: "study"
  },
  milton2012: {
    // DOI not seen in search; citation details were.
    cite: "Milton, D. E. M. (2012). On the ontological status of autism: The 'double empathy problem'. Disability & Society, 27(6), 883–887.",
    url: "https://doi.org/10.1080/09687599.2012.710008", kind: "article"
  },
  hull2017: {
    cite: "Hull, L., Petrides, K. V., Allison, C., Smith, P., Baron-Cohen, S., Lai, M.-C., & Mandy, W. (2017). \"Putting on my best normal\": Social camouflaging in adults with autism spectrum conditions. Journal of Autism and Developmental Disorders, 47(8), 2519–2534.",
    url: "https://doi.org/10.1007/s10803-017-3166-5", kind: "study"
  },
  williams2021: {
    cite: "Williams, Z. J., Suzman, E., & Woynaroski, T. G. (2021). Prevalence of decreased sound tolerance (hyperacusis) in individuals with autism spectrum disorder: A meta-analysis. Ear and Hearing, 42(5), 1137–1150.",
    url: "https://doi.org/10.1097/AUD.0000000000001005", kind: "meta-analysis"
  },
  geretsegger2022: {
    cite: "Geretsegger, M., Fusar-Poli, L., Elefant, C., Mössler, K. A., Vitale, G., & Gold, C. (2022). Music therapy for autistic people. Cochrane Database of Systematic Reviews, 2022(5), CD004381.",
    url: "https://doi.org/10.1002/14651858.CD004381.pub4", kind: "review"
  },
  hammel2020: {
    cite: "Hammel, A. M., & Hourigan, R. M. (2020). Teaching Music to Students with Autism (2nd ed.). Oxford University Press.",
    url: "https://global.oup.com/academic/product/teaching-music-to-students-with-autism-9780190063177", kind: "book"
  },
  pittsburghSensory: {
    cite: "Pittsburgh Symphony Orchestra. Sensory-friendly concerts (pre-visit story, playlist, and introductory videos).",
    url: "https://pittsburghsymphony.org/accessibility/sensory_friendly", kind: "resource"
  },
  mnorchSensory: {
    cite: "Minnesota Orchestra. Making Space for Neurodiversity: Exploring Relaxed and Sensory-Friendly Programming.",
    url: "https://www.minnesotaorchestra.org/stories/making-space-for-neurodiversity-exploring-relaxed-and-sensory-friendly-programming", kind: "resource"
  },

  // ---------- Added 2026-10-23: stalking & student safety ----------
  sparc: {
    cite: "Stalking Prevention, Awareness, and Resource Center (SPARC), funded by the U.S. DOJ Office on Violence Against Women.",
    url: "https://www.stalkingawareness.org/", kind: "organization"
  },
  sparcLog: {
    cite: "SPARC (2018). Stalking Incident and Behavior Log, with instructions.",
    url: "https://www.stalkingawareness.org/wp-content/uploads/2018/07/SPARC_StalkingLogInstructions_2018_FINAL.pdf", kind: "resource"
  },
  logan2017: {
    cite: "Logan, T. K., & Walker, R. (2017). Stalking: A multidimensional framework for assessment and safety planning. Trauma, Violence, & Abuse, 18(2), 200–222.",
    url: "https://doi.org/10.1177/1524838015603210", kind: "review"
  },
  victimconnect: {
    cite: "VictimConnect Resource Center (call or text 1-855-484-2846; weekdays; English and Spanish, interpreters for 200+ languages).",
    url: "https://victimconnect.org/", kind: "resource"
  },
  loveisrespect: {
    cite: "love is respect: dating-abuse support for young people (text LOVEIS to 22522, or call 1-866-331-9474).",
    url: "https://www.loveisrespect.org/", kind: "resource"
  },
  womenslaw: {
    cite: "WomensLaw.org (National Network to End Domestic Violence). State-by-state legal information, including protective and stalking orders.",
    url: "https://www.womenslaw.org/", kind: "resource"
  },
  clery: {
    cite: "Clery Center. Policy history: VAWA amendments added stalking, dating violence, and domestic violence to the Clery Act.",
    url: "https://clerycenter.org/policy-history", kind: "organization"
  },

  // ---------- Added 2026-10-23: English learners & multilingual families ----------
  wida2020: {
    cite: "WIDA (2020). WIDA English Language Development Standards Framework, 2020 Edition (six proficiency levels).",
    url: "https://wida.wisc.edu/2020standards", kind: "guideline"
  },
  hakuta2000: {
    cite: "Hakuta, K., Butler, Y. G., & Witt, D. (2000). How long does it take English learners to attain proficiency? University of California Linguistic Minority Research Institute, Policy Report 2000-1.",
    url: "https://web.stanford.edu/~hakuta/Publications/(2000)%20-%20HOW%20LONG%20DOES%20IT%20TAKE%20ENGLISH%20LEARNERS%20TO%20ATTAIN%20PR.pdf", kind: "study"
  },
  ludke2014: {
    cite: "Ludke, K. M., Ferreira, F., & Overy, K. (2014). Singing can facilitate foreign language learning. Memory & Cognition, 42(1), 41–52.",
    url: "https://doi.org/10.3758/s13421-013-0342-5", kind: "study"
  },
  abril2003: {
    cite: "Abril, C. R. (2003). No hablo inglés: Breaking the language barrier in music instruction. Music Educators Journal, 89(5), 38–43.",
    url: "https://doi.org/10.2307/3399918", kind: "article"
  },
  colorinMusic: {
    cite: "Colorín Colorado. Tips for Music Educators: Teaching English Language Learners.",
    url: "https://www.colorincolorado.org/node/70240", kind: "resource"
  },
  nafmeEll: {
    cite: "National Association for Music Education. Rethinking Practices to Better Aid English (as a New Language) Learners in the Elementary General Music Classroom.",
    url: "https://nafme.org/blog/rethinking-practices-to-better-aid-english-as-a-new-language-learners-in-the-elementary-general-music-classroom", kind: "article"
  },
  lau1974: {
    cite: "Lau v. Nichols, 414 U.S. 563 (1974).",
    url: "https://supreme.justia.com/cases/federal/us/414/563/", kind: "law"
  },
  dcl2015: {
    cite: "U.S. Department of Justice & U.S. Department of Education (2015, January 7). Dear Colleague Letter: English Learner Students and Limited English Proficient Parents. (Rescinded by the Department of Education in August 2025.)",
    url: "https://www.colorincolorado.org/node/62379", kind: "government"
  },
  idra2025: {
    cite: "Craven, M. (2025, October 9). Still Required: Protecting English Learners in Our Schools. IDRA (on the August 2025 rescission of the 2015 federal EL guidance, and the obligations under Title VI, Lau, and the EEOA that remain).",
    url: "https://www.idra.org/resource-center/still-required-protecting-english-learners-in-our-schools/", kind: "article"
  }
};
