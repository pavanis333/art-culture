// Indian Art & Culture - UPSC Preparation App
// Phase 1: Vedic Literature - ONLY data from provided image
// Source: Table showing Vedas with associated Brahmanas, Aranyakas, and Upanishads

export const artCultureData = [
  // VEDIC LITERATURE CATEGORY
  {
    id: 1,
    category: "Vedic Literature",
    subcategory: "Vedas",
    name: "Rigveda",
    
    associatedTexts: {
      brahmanas: ["Aitareya Brahmana", "Kaushitaki Brahmana"],
      aranyakas: ["Aitareya Aranyaka", "Kaushitaki Aranyaka"],
      upanishads: ["Aitareya Upanishad", "Kaushitaki Upanishad"]
    },
    
    importance: "HIGH"
  },
  
  {
    id: 2,
    category: "Vedic Literature",
    subcategory: "Vedas",
    name: "Yajurveda",
    
    associatedTexts: {
      brahmanas: ["Taittiriya Brahmana", "Satapatha Brahmana"],
      aranyakas: ["Taittiriya Aranyaka", "Brihadaranyaka Aranyaka"],
      upanishads: ["Brihadaranyaka Upanishad", "Taittiriya Upanishad"]
    },
    
    importance: "HIGH"
  },
  
  {
    id: 3,
    category: "Vedic Literature",
    subcategory: "Vedas",
    name: "Samaveda",
    
    associatedTexts: {
      brahmanas: ["Jaiminiya Brahmana", "Kauthuma Brahmana"],
      aranyakas: ["Aranyaka (of the Samaveda)"],
      upanishads: ["Chandogya Upanishad", "Kena Upanishad"]
    },
    
    importance: "HIGH"
  },
  
  {
    id: 4,
    category: "Vedic Literature",
    subcategory: "Vedas",
    name: "Atharvaveda",
    
    associatedTexts: {
      brahmanas: ["Gopatha Brahmana"],
      aranyakas: ["Aranyaka (of the Atharvaveda)"],
      upanishads: ["Prashna Upanishad", "Mundaka Upanishad", "Mandukya Upanishad"]
    },
    
    importance: "HIGH"
  }
,
  
  // SANSKRIT DRAMA CATEGORY - Phase 2
  {
    id: 5,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Swapnavasavadatta",
    period: "2nd-3rd century",
    author: "Bhasa",
    description: "Most popular work by Bhasa showing romantic narratives about Kaushambi king Udayana and Vasavadatta (Avanti Princess). Part of his 13 plays discovered at beginning of 20th century. Also wrote Madhyama-vyayoga.",
    upscRelevance: "[UPSC 2024]",
    importance: "HIGH"
  },
  {
    id: 6,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Urubhanga",
    period: "2nd-3rd century",
    author: "Bhasa",
    description: "Tragedy showing story of Duryodhana during and after his fight with Bhima. Part of Bhasa's 13 plays.",
    importance: "MEDIUM"
  },
  {
    id: 7,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Mudrarakshasa",
    period: "4th century",
    author: "Vishakhadatta",
    description: "Sanskrit play narrating ascent of king Chandragupta Maurya to power with aid of Chanakya. Written by Vishakhadatta (4th century AD).",
    importance: "HIGH"
  },
  {
    id: 8,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Devi Chandraguptam",
    period: "4th century",
    author: "Vishakhadatta",
    description: "Political drama about King Ramagupta's decision to surrender his queen Dhruvadevi to encroaching Shaka enemy during siege. A Persian play taken directly from this is found in 11th-century manuscript Majmal-ut-Tawarikh.",
    importance: "MEDIUM"
  },
  {
    id: 9,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Mrichchhakatika",
    period: "5th century",
    author: "Shudraka",
    description: "Sanskrit social drama about merchant Charudatta who fell in love with rich courtesan Vasantsena. First four acts virtually copy Bhasa's unfinished play Charudattam. [UPSC 2003] Shudraka also composed Vinavasavadatta and a Bhana (short one-act monologue).",
    upscRelevance: "[UPSC 2013]",
    importance: "HIGH"
  },
  {
    id: 10,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Uttara-Ramacharit",
    period: "7th century",
    author: "Bhavabhuti",
    description: "Seven-act Sanskrit play depicting later life of Lord Rama after Rama's return from exile. Written by Bhavabhuti.",
    importance: "MEDIUM"
  },
  {
    id: 11,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Ratnavali",
    period: "7th century",
    author: "Harsha",
    description: "Sanskrit drama centered around Princess Ratnavali and King Udayana. Contains one of earliest documented references to Holi festival celebration.",
    importance: "MEDIUM"
  },
  {
    id: 12,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Nagananda",
    period: "7th century",
    author: "Harsha",
    description: "Narrates story of Prince Jimūtavāhana, a divine magician, and his selfless act to protect the Nagas. Text includes invocation to Buddha within Nandi verse.",
    importance: "MEDIUM"
  },
  {
    id: 13,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Priyadarsika",
    period: "7th century",
    author: "Harsha",
    description: "Sanskrit play mentioning union of King Udayana and Priyadarshini, daughter of Emperor Dridhavarman.",
    importance: "MEDIUM"
  },
  {
    id: 14,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Kathasaritsagara",
    period: "11th century",
    author: "Somadeva",
    description: "Ocean of the Streams of Stories, a collection of tales showcasing Kashmir's tragic history",
    importance: "HIGH"
  },
  {
    id: 15,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Gita Govinda",
    period: "12th century",
    author: "Jayadeva",
    description: "Describes the love between Krishna and Radha",
    importance: "HIGH"
  },
  {
    id: 16,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Rajatarangini",
    period: "12th century",
    author: "Kalhana",
    description: "Chronicles of Kashmir kings, covering the Karkota, Varman, and Yashaskara dynasties",
    importance: "HIGH"
  },
  
  // KALIDASA'S WORKS (380-415 AD, Gupta period, contemporary of Chandragupta II)
  {
    id: 17,
    category: "Sanskrit Drama",
    subcategory: "Kalidasa's Works",
    name: "Abhijnanashakuntala",
    period: "380-415 AD (Gupta period)",
    author: "Kalidasa",
    description: "Contains story of Shakuntala and King Dushyanta. Kalidasa was a renowned Sanskrit poet and dramatist, contemporary of Chandragupta II.",
    importance: "HIGH"
  },
  {
    id: 18,
    category: "Sanskrit Drama",
    subcategory: "Kalidasa's Works",
    name: "Vikramorvashi",
    period: "380-415 AD (Gupta period)",
    author: "Kalidasa",
    description: "Contains tale of Urvashi and her union with King Vikram.",
    importance: "HIGH"
  },
  {
    id: 19,
    category: "Sanskrit Drama",
    subcategory: "Kalidasa's Works",
    name: "Malavikagnimitra",
    period: "380-415 AD (Gupta period)",
    author: "Kalidasa",
    description: "Love story of Sunga king Agnimitra and Malvika, a maid. Provides accounts for Rajasuya Yajna performed by Pushyamitra Sunga.",
    importance: "HIGH"
  },
  {
    id: 20,
    category: "Sanskrit Drama",
    subcategory: "Kalidasa's Works",
    name: "Raghuvamsha",
    period: "380-415 AD (Gupta period)",
    author: "Kalidasa",
    description: "Narrates ancestry of Lord Rama's Raghu Vamsa.",
    importance: "MEDIUM"
  },
  {
    id: 21,
    category: "Sanskrit Drama",
    subcategory: "Kalidasa's Works",
    name: "Kumarasambhava",
    period: "380-415 AD (Gupta period)",
    author: "Kalidasa",
    description: "Depicts birth of Kartikeya, son of Shiva and Parvati.",
    importance: "MEDIUM"
  },
  {
    id: 22,
    category: "Sanskrit Drama",
    subcategory: "Kalidasa's Works",
    name: "Meghaduta",
    period: "380-415 AD (Gupta period)",
    author: "Kalidasa",
    description: "Focuses on a cloud messenger's journey.",
    importance: "MEDIUM"
  },
  
  // BUDDHIST CANONICAL LITERATURE (Tripitak/Tipitaka in Pali)
  {
    id: 23,
    category: "Sanskrit Drama",
    subcategory: "Buddhist Literature",
    name: "Vinaya Pitaka",
    period: "Ancient (Pali)",
    author: "Canonical Buddhist text",
    description: "Contains monastic rules of the Order of Buddhist monks. Part of Tripitak/Tipitaka written in Pali and divided into three parts.",
    importance: "HIGH"
  },
  {
    id: 24,
    category: "Sanskrit Drama",
    subcategory: "Buddhist Literature",
    name: "Sutta Pitaka",
    period: "Ancient (Pali)",
    author: "Canonical Buddhist text",
    description: "Collection of the teachings of the Buddha. Part of Tripitak/Tipitaka written in Pali and divided into three parts.",
    importance: "HIGH"
  },
  {
    id: 25,
    category: "Sanskrit Drama",
    subcategory: "Buddhist Literature",
    name: "Abhidhamma Pitaka",
    period: "Ancient (Pali)",
    author: "Canonical Buddhist text",
    description: "Elucidates various topics dealing with ethics, psychology or theory of knowledge. Part of Tripitak/Tipitaka written in Pali and divided into three parts.",
    importance: "HIGH"
  },
  {
    id: 26,
    category: "Sanskrit Drama",
    subcategory: "Buddhist Non-Canonical Literature",
    name: "Jatakas",
    period: "Ancient",
    author: "Buddhist non-canonical",
    description: "Prime example of Buddhist non-canonical literature. The Jataka stories narrate the previous births of the Buddha.",
    importance: "HIGH"
  },
  
  // BUDDHIST TEXTS - NEW TOPIC CATEGORY
  {
    id: 27,
    category: "Buddhist Texts",
    subcategory: "Historical Texts",
    name: "Dipavamsa",
    period: "3rd-4th centuries BC",
    location: "Anuradhapura (Sri Lanka)",
    description: "Written in Anuradhapura, Sri Lanka. Provides historical account of Buddhism in Sri Lanka and narrates Buddha's visit to Sri Lanka and the relics of Buddha.",
    importance: "HIGH"
  },
  {
    id: 28,
    category: "Buddhist Texts",
    subcategory: "Dialogue Texts",
    name: "Milinda Panho",
    period: "Ancient",
    location: "India",
    description: "The book mentions the dialogue between King Meander (or Milinda) and Buddhist monk Nagasena.",
    importance: "HIGH"
  },
  {
    id: 29,
    category: "Buddhist Texts",
    subcategory: "Historical Texts",
    name: "Mahavamsa",
    period: "3rd-4th centuries BC",
    location: "Sri Lanka",
    description: "Sri Lankan Pali account dating back to 3rd-4th centuries BC. Provides historical account of various kingdoms of South Asia.",
    importance: "HIGH"
  },
  {
    id: 30,
    category: "Buddhist Texts",
    subcategory: "Story Collections",
    name: "Mahavastu",
    period: "Ancient",
    location: "India",
    description: "Contains Jataka and Avadana tales written in Sanskrit, Pali, and Prakrit.",
    importance: "MEDIUM"
  },
  {
    id: 31,
    category: "Buddhist Texts",
    subcategory: "Mahayana Texts",
    name: "Lalitavistara Sutra (The Play in Full)",
    period: "Ancient",
    location: "India",
    description: "Mahayana text that narrates various stories related to the life of the Buddha until his first sermon at Sarnath.",
    importance: "HIGH"
  },
  {
    id: 32,
    category: "Buddhist Texts",
    subcategory: "Theravada Texts",
    name: "Udana",
    period: "Ancient",
    location: "India",
    description: "One of the oldest Theravada texts. Includes the story of the 'Blind Men and the Elephant.'",
    importance: "MEDIUM"
  },
  {
    id: 33,
    category: "Buddhist Texts",
    subcategory: "Poetry",
    name: "Bodhi Vamsa",
    period: "10th century AD",
    location: "Sri Lanka",
    author: "Upatissa",
    description: "Prose poem written in the 10th century AD by Upatissa in Pali, Sri Lanka.",
    importance: "MEDIUM"
  },
  {
    id: 34,
    category: "Buddhist Texts",
    subcategory: "Theravada Texts",
    name: "Visuddhimagga",
    period: "5th century AD",
    location: "Sri Lanka",
    author: "Buddhaghosa",
    description: "Theravada text written by Buddhaghosa in the 5th century AD in Sri Lanka. Includes discussions on various teachings of the Buddha.",
    importance: "HIGH"
  },
  {
    id: 35,
    category: "Buddhist Texts",
    subcategory: "Travel Records",
    name: "Sarvastivada Vinaya",
    period: "End of 4th century AD",
    location: "India to China",
    author: "Sanghabhuti",
    description: "By Sanghabhuti, an Indian Buddhist monk who travelled to China at the end of 4th century AD. [UPSC 2024]",
    upscRelevance: "[UPSC 2024]",
    importance: "HIGH"
  },
  
  // RELIGIOUS LITERATURE - JAIN, ZOROASTRIAN, SIKH
  
  // JAIN LITERATURE (Prakrit, Ardha Magadhi, Sanskrit)
  {
    id: 36,
    category: "Religious Literature",
    subcategory: "Jain Agamas",
    name: "Jain Agamas (46 texts)",
    period: "Ancient (compiled by Ganadharas, recompiled mid-5th century AD)",
    language: "Prakrit",
    description: "Canonical religious texts written in Prakrit containing teachings of Jain Tirthankaras. Consist of 12 Angas, 12 Upanga, 10 Prakirnakasutras, 4 Mulasutras, 6 Chedasutras, 2 Chulika­sutras. Recompiled by Svetambara sect at Vallabhi, Gujarat.",
    note: "Digambaras reject Agamas",
    importance: "HIGH"
  },
  {
    id: 37,
    category: "Religious Literature",
    subcategory: "Prakrit Jain Work",
    name: "Gatha Saptasati",
    period: "Ancient",
    language: "Prakrit",
    author: "King Hala (44 verses)",
    description: "Contains 700 verses with King Hala contributing 44 verses. Women poets wrote other verses. Often considered opposite of the 'Kamasutra'.",
    importance: "MEDIUM"
  },
  {
    id: 38,
    category: "Religious Literature",
    subcategory: "Prakrit Jain Work",
    name: "Uvasaggaharam Stotra",
    period: "Ancient",
    language: "Prakrit",
    author: "Acharya Bhadrabahu",
    description: "Composed by Acharya Bhadrabahu. An adoration of the twenty-third Tirthankara Parsvanatha.",
    importance: "MEDIUM"
  },
  {
    id: 39,
    category: "Religious Literature",
    subcategory: "Jain Scripture",
    name: "Kalpa Sutra",
    period: "Ancient",
    language: "Prakrit/Verse",
    description: "Svetambara canonical scripture written partly in prose and partly in verse.",
    importance: "MEDIUM"
  },
  {
    id: 40,
    category: "Religious Literature",
    subcategory: "Jain Literature",
    name: "Kalakacharya Katha",
    period: "Ancient",
    language: "Prakrit",
    description: "Tells story of Kalak, a great Jain muni of the Shwetambar school and his sister.",
    importance: "MEDIUM"
  },
  {
    id: 41,
    category: "Religious Literature",
    subcategory: "Acharya Kundkund's Work",
    name: "Samayasara",
    period: "Ancient",
    language: "Prakrit",
    author: "Acharya Kundkund",
    description: "Expounded Jain concepts like Karma, Asrava, Bandha, Samvara, Nirjara and Moksha.",
    importance: "MEDIUM"
  },
  {
    id: 42,
    category: "Religious Literature",
    subcategory: "Acharya Kundkund's Work",
    name: "Niyamasara",
    period: "Ancient",
    language: "Prakrit",
    author: "Acharya Kundkund",
    description: "Discusses the road to emancipation.",
    importance: "MEDIUM"
  },
  
  // ZOROASTRIAN LITERATURE
  {
    id: 43,
    category: "Religious Literature",
    subcategory: "Zoroastrian",
    name: "Avesta",
    period: "Ancient",
    language: "Avestan (extinct, related to Sanskrit)",
    description: "Compilation of diverse writings spanning religious beliefs, practices, and guidance. Written in Avestan language that is now extinct.",
    importance: "HIGH"
  },
  {
    id: 44,
    category: "Religious Literature",
    subcategory: "Zoroastrian",
    name: "Denkard",
    period: "10th century AD",
    language: "Middle Persian",
    description: "Compilation of books regarded as Encyclopedia of Zoroastrianism. Composed in 10th century AD.",
    importance: "MEDIUM"
  },
  {
    id: 45,
    category: "Religious Literature",
    subcategory: "Zoroastrian",
    name: "Bundahishn",
    period: "Ancient",
    language: "Middle Persian",
    description: "Text provides insight into the religion's creation theory.",
    importance: "MEDIUM"
  },
  
  // SIKH LITERATURE
  {
    id: 46,
    category: "Religious Literature",
    subcategory: "Sikh Scripture",
    name: "Adi Granth",
    period: "1604 AD",
    language: "Gurumukhi script",
    author: "Bhai Gurdas (under Guru Arjan Dev)",
    description: "Written in Gurumukhi script by Bhai Gurdas under aegis of fifth guru Guru Arjan Dev in 1604. Predecessor to Guru Granth Sahib. Contains teachings of Sikh Gurus and fifteen Bhagats of Bhakti and Sufi traditions.",
    importance: "HIGH"
  },
  {
    id: 47,
    category: "Religious Literature",
    subcategory: "Sikh Scripture",
    name: "Guru Granth Sahib",
    period: "1678 AD",
    language: "Gurumukhi script, Sant Bhasa",
    author: "Guru Gobind Singh (tenth guru)",
    description: "Expansion of Adi Granth under tenth guru Guru Gobind Singh in 1678. Regarded as eleventh and final spiritual authority of Sikhs. Written in Gurumukhi script and 'Sant Bhasa' language (Punjabi, Apabhramsa, Hindi, Braj Bhasa, Sanskrit, Khadiboli, Persian words). Contains teachings of thirteen Bhakti saints called 'Bhagats' like Ramananda, Namadev, Ravidas, Parmanand, Sain, Surdas, Kabir, Baba Farid.",
    importance: "HIGH"
  },
  {
    id: 48,
    category: "Religious Literature",
    subcategory: "Sikh Literature",
    name: "Dasam Granth",
    period: "Late 17th century",
    language: "Gurumukhi script",
    author: "Guru Gobind Singh",
    description: "Compilation of hymns written by Guru Gobind Singh. Includes fables and Puranic stories, with certain hymns being part of daily prayers known as 'Nitnem'.",
    importance: "MEDIUM"
  },
  {
    id: 49,
    category: "Religious Literature",
    subcategory: "Sikh Literature",
    name: "Janamsakhi",
    period: "Ancient",
    language: "Punjabi",
    description: "Books containing mythological stories about life of Guru Nanak (first guru).",
    importance: "MEDIUM"
  },
  {
    id: 50,
    category: "Religious Literature",
    subcategory: "Sikh Prayers",
    name: "Ardas",
    period: "Ancient",
    language: "Punjabi",
    description: "Prayers performed during daily rituals in Gurudwaras. Recited during opening and closing of Guru Granth Sahib.",
    importance: "MEDIUM"
  },
  
  // DRAVIDIAN LITERATURE - TAMIL SANGAM LITERATURE (Batch 1)
  {
    id: 51,
    category: "Dravidian Literature",
    subcategory: "Tamil - Sangam Overview",
    name: "Sangam Literature Overview",
    period: "Ancient (473 poets, 30 women)",
    language: "Tamil",
    description: "Early classical Tamil literature called Sangam literature. Comprises 18 works (8 anthologies of lyrics + 10 long poems) by 473 poets including 30 women. Two schools: Aham (subjective love poetry) and Puram (objective public poetry about valor, kings, good & evil). References Varna classification: Arashar (kings), Vaishiyar (traders), Velalar (farmers). [UPSC-2022]",
    note: "Categorized into Narrative (Melkannaku) and Didactic (Kilkannaku) groups",
    importance: "HIGH"
  },
  {
    id: 52,
    category: "Dravidian Literature",
    subcategory: "Tamil - Grammar Treatise",
    name: "Tolkappiyam",
    period: "Ancient (Earliest Tamil work)",
    language: "Tamil",
    author: "Tolkappiyar or Tolkappiyam Periyathar",
    description: "Earliest Tamil literary work, a grammar treatise to understand early Tamil poetry. Divided into three books: Eluttatikaram (Tamil script & phonology), Sollatikaram (Tamil grammar & morphology), Porulatikaram (subject matter/content of literature).",
    importance: "HIGH"
  },
  {
    id: 53,
    category: "Dravidian Literature",
    subcategory: "Tamil - Narrative (Melkannaku)",
    name: "Ettuthogai (Eight Anthologies)",
    period: "Ancient (Sangam)",
    language: "Tamil",
    description: "Collection of classical Tamil poetry, 'Ettuthogai' translates to 'Eight Anthologies'. The eight anthologies are: Aingurunooru, Narrinai, Aganaanooru, Purananooru, Kurunthogai, Kalithogai, Paripadal, Padirruppattu.",
    note: "Part of Narrative texts focusing on heroic poetry, glorifying heroes and wars, insights into state formation in South India",
    importance: "HIGH"
  },
  {
    id: 54,
    category: "Dravidian Literature",
    subcategory: "Tamil - Narrative (Melkannaku)",
    name: "Pattuppattu (Ten Long Poems)",
    period: "Ancient (Sangam)",
    language: "Tamil",
    description: "Collection of ten long poems including: Kurincippattu, Porunararruppatai, Cirupanarruppat ai, Perumpanarruppat ai, Maturaikkanci, Malaipatukadam, Pattinappalai, Mullai­ppattu, Netunalvatai, Tirumurukarruppatai.",
    note: "Part of Narrative texts, essential work in Sangam literary collection",
    importance: "HIGH"
  },
  {
    id: 55,
    category: "Dravidian Literature",
    subcategory: "Tamil - Didactic Literature",
    name: "Pathinenkilkanakku (18 Minor Works)",
    period: "Ancient (Sangam)",
    language: "Tamil",
    description: "Contains eighteen texts encompassing themes including love, ethics, war, and ancient Tamil society's general way of life. Includes Tirukural and Naladiyar.",
    note: "Didactic texts prescribing code of conduct for kings and society, shedding light on social groups and occupations",
    importance: "HIGH"
  },
  {
    id: 56,
    category: "Dravidian Literature",
    subcategory: "Tamil - Epic",
    name: "Silappatikaram/Cilappatikaran",
    period: "Ancient (Sangam)",
    language: "Tamil",
    author: "Ilango Adigal",
    description: "Composed by Ilango Adigal. Tale of love (story of Kovalan and Kannagi), betrayal, and justice that unfolds in three Kantams or books. Text contains overtones of Jain philosophy. One of the five great epics of Tamil literature.",
    importance: "HIGH"
  },
  {
    id: 57,
    category: "Dravidian Literature",
    subcategory: "Tamil - Epic",
    name: "Manimegalai",
    period: "Ancient (Sangam)",
    language: "Tamil",
    author: "Sattanar",
    description: "Classical Tamil epic poem counted among the five great epics of Tamil literature. Composed by poet Sattanar, sequel to renowned Tamil epic Silappatikaram. Prominently features themes related to Buddhism.",
    importance: "HIGH"
  }
];

// Key Facts - ONLY from the provided image
export const vedicFacts = [
  {
    fact: "Rigveda has associated texts: Aitareya Brahmana, Kaushitaki Brahmana, Aitareya Aranyaka, Kaushitaki Aranyaka, Aitareya Upanishad, Kaushitaki Upanishad",
    category: "Rigveda"
  },
  {
    fact: "Yajurveda has associated texts: Taittiriya Brahmana, Satapatha Brahmana, Taittiriya Aranyaka, Brihadaranyaka Aranyaka, Brihadaranyaka Upanishad, Taittiriya Upanishad",
    category: "Yajurveda"
  },
  {
    fact: "Samaveda has associated texts: Jaiminiya Brahmana, Kauthuma Brahmana, Aranyaka (of Samaveda), Chandogya Upanishad, Kena Upanishad",
    category: "Samaveda"
  },
  {
    fact: "Atharvaveda has associated texts: Gopatha Brahmana, Aranyaka (of Atharvaveda), Prashna Upanishad, Mundaka Upanishad, Mandukya Upanishad",
    category: "Atharvaveda"
  }
  ,
  {
    fact: "Bhasa (2nd-3rd century) wrote 13 plays including Swapnavasavadatta [UPSC 2024] and Urubhanga",
    category: "Sanskrit Drama"
  },
  {
    fact: "Vishakhadatta (4th century) wrote Mudrarakshasa about Chandragupta Maurya",
    category: "Sanskrit Drama"
  },
  {
    fact: "Shudraka (5th century) wrote Mrichchhakatika (Little Clay Cart) [UPSC 2013]",
    category: "Sanskrit Drama"
  },
  {
    fact: "King Harsha (7th century) wrote Ratnavali, Nagananda, and Priyadarsika",
    category: "Sanskrit Drama"
  },
  {
    fact: "Gita Govinda by Jayadeva describes Krishna-Radha love",
    category: "Sanskrit Drama"
  },
  {
    fact: "Rajatarangini by Kalhana chronicles Kashmir kings",
    category: "Sanskrit Drama"
  }
  ,
  {
    fact: "Kalidasa (380-415 AD) was a renowned Sanskrit poet and dramatist of the Gupta period, contemporary of Chandragupta II",
    category: "Sanskrit Drama"
  },
  {
    fact: "Kalidasa wrote 6 major works: Abhijnanashakuntala, Vikramorvashi, Malavikagnimitra (plays); Raghuvamsha, Kumarasambhava, Meghaduta (poems)",
    category: "Sanskrit Drama"
  },
  {
    fact: "Bhasa wrote 13 plays discovered at beginning of 20th century, including Swapnavasavadatta [UPSC 2024] and Madhyama-vyayoga",
    category: "Sanskrit Drama"
  },
  {
    fact: "Mrichchhakatika's first four acts virtually copy Bhasa's unfinished play Charudattam [UPSC 2003]",
    category: "Sanskrit Drama"
  },
  {
    fact: "Devi Chandraguptam inspired a Persian play found in 11th-century manuscript Majmal-ut-Tawarikh",
    category: "Sanskrit Drama"
  },
  {
    fact: "Nagananda includes invocation to Buddha within the Nandi verse",
    category: "Sanskrit Drama"
  }
  ,
  {
    fact: "Buddhist canonical literature Tripitak/Tipitaka is written in Pali and divided into three parts: Vinaya, Sutta, Abhidhamma",
    category: "Sanskrit Drama"
  },
  {
    fact: "Vinaya Pitaka contains monastic rules, Sutta Pitaka has Buddha's teachings, Abhidhamma Pitaka covers ethics & psychology",
    category: "Sanskrit Drama"
  },
  {
    fact: "The Jatakas are Buddhist non-canonical literature narrating the previous births of Buddha",
    category: "Sanskrit Drama"
  }
  ,
  {
    fact: "Dipavamsa & Mahavamsa are Sri Lankan Pali accounts (3rd-4th centuries BC) providing historical accounts of Buddhism and South Asian kingdoms",
    category: "Buddhist Texts"
  },
  {
    fact: "Milinda Panho records dialogue between King Meander (Milinda) and Buddhist monk Nagasena",
    category: "Buddhist Texts"
  },
  {
    fact: "Lalitavistara Sutra is a Mahayana text narrating Buddha's life until first sermon at Sarnath",
    category: "Buddhist Texts"
  },
  {
    fact: "Sarvastivada Vinaya by Sanghabhuti - Indian monk who travelled to China (end of 4th century AD) [UPSC 2024]",
    category: "Buddhist Texts"
  }
  ,
  {
    fact: "Jain Agamas: 46 texts in Prakrit, recompiled by Svetambara sect at Vallabhi (mid-5th century AD). Digambaras reject Agamas",
    category: "Religious Literature"
  },
  {
    fact: "Gatha Saptasati has 700 verses, King Hala contributed 44, women poets wrote others. Opposite of Kamasutra",
    category: "Religious Literature"
  },
  {
    fact: "Avesta written in extinct Avestan language (related to Sanskrit). Denkard is Encyclopedia of Zoroastrianism (10th century AD)",
    category: "Religious Literature"
  },
  {
    fact: "Adi Granth (1604) by Bhai Gurdas under Guru Arjan Dev. Guru Granth Sahib (1678) by Guru Gobind Singh - eleventh & final Sikh authority",
    category: "Religious Literature"
  },
  {
    fact: "Guru Granth Sahib in Gurumukhi script, Sant Bhasa. Contains teachings of 13 Bhakti saints (Bhagats) like Kabir, Ramananda, Namadev",
    category: "Religious Literature"
  }
];

// Quiz Questions - ONLY based on the table data
export const allQuizQuestions = [
  {
    question: "Which Brahmanas are associated with Rigveda?",
    options: ["Taittiriya and Satapatha", "Aitareya and Kaushitaki", "Jaiminiya and Kauthuma", "Only Gopatha"],
    correct: 1,
    explanation: "Rigveda is associated with Aitareya Brahmana and Kaushitaki Brahmana."
  ,
    category: "Vedic Literature"
  },
  {
    question: "Which Aranyakas are associated with Rigveda?",
    options: ["Taittiriya and Brihadaranyaka", "Aitareya and Kaushitaki", "Only Samaveda Aranyaka", "Only Atharvaveda Aranyaka"],
    correct: 1,
    explanation: "Rigveda is associated with Aitareya Aranyaka and Kaushitaki Aranyaka."
  ,
    category: "Vedic Literature"
  },
  {
    question: "Which Upanishads are associated with Rigveda?",
    options: ["Brihadaranyaka and Taittiriya", "Chandogya and Kena", "Aitareya and Kaushitaki", "Prashna and Mundaka"],
    correct: 2,
    explanation: "Rigveda is associated with Aitareya Upanishad and Kaushitaki Upanishad."
  ,
    category: "Vedic Literature"
  },
  {
    question: "Satapatha Brahmana is associated with which Veda?",
    options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
    correct: 1,
    explanation: "Satapatha Brahmana is associated with Yajurveda, along with Taittiriya Brahmana."
  ,
    category: "Vedic Literature"
  },
  {
    question: "Brihadaranyaka Aranyaka is associated with which Veda?",
    options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
    correct: 1,
    explanation: "Brihadaranyaka Aranyaka is associated with Yajurveda."
  ,
    category: "Vedic Literature"
  },
  {
    question: "Which Upanishads are associated with Yajurveda?",
    options: ["Aitareya and Kaushitaki", "Brihadaranyaka and Taittiriya", "Chandogya and Kena", "Prashna and Mundaka"],
    correct: 1,
    explanation: "Yajurveda is associated with Brihadaranyaka Upanishad and Taittiriya Upanishad."
  ,
    category: "Vedic Literature"
  },
  {
    question: "Jaiminiya Brahmana is associated with which Veda?",
    options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
    correct: 2,
    explanation: "Jaiminiya Brahmana is associated with Samaveda, along with Kauthuma Brahmana."
  ,
    category: "Vedic Literature"
  },
  {
    question: "Chandogya Upanishad is associated with which Veda?",
    options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
    correct: 2,
    explanation: "Chandogya Upanishad is associated with Samaveda."
  ,
    category: "Vedic Literature"
  },
  {
    question: "Kena Upanishad is associated with which Veda?",
    options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
    correct: 2,
    explanation: "Kena Upanishad is associated with Samaveda, along with Chandogya Upanishad."
  ,
    category: "Vedic Literature"
  },
  {
    question: "Gopatha Brahmana is associated with which Veda?",
    options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
    correct: 3,
    explanation: "Gopatha Brahmana is the only Brahmana associated with Atharvaveda."
  ,
    category: "Vedic Literature"
  },
  {
    question: "Which three Upanishads are associated with Atharvaveda?",
    options: ["Aitareya, Kaushitaki, Brihadaranyaka", "Chandogya, Kena, Taittiriya", "Prashna, Mundaka, Mandukya", "None of these"],
    correct: 2,
    explanation: "Atharvaveda is associated with Prashna Upanishad, Mundaka Upanishad, and Mandukya Upanishad."
  ,
    category: "Vedic Literature"
  },
  {
    question: "Mandukya Upanishad is associated with which Veda?",
    options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
    correct: 3,
    explanation: "Mandukya Upanishad is associated with Atharvaveda."
  ,
    category: "Vedic Literature"
  },
  {
    question: "How many Brahmanas are associated with Rigveda?",
    options: ["One", "Two", "Three", "Four"],
    correct: 1,
    explanation: "Two Brahmanas are associated with Rigveda: Aitareya Brahmana and Kaushitaki Brahmana."
  ,
    category: "Vedic Literature"
  },
  {
    question: "How many Upanishads are associated with Atharvaveda?",
    options: ["One", "Two", "Three", "Four"],
    correct: 2,
    explanation: "Three Upanishads are associated with Atharvaveda: Prashna, Mundaka, and Mandukya Upanishads."
  ,
    category: "Vedic Literature"
  },
  {
    question: "Taittiriya Brahmana is associated with which Veda?",
    options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
    correct: 1,
    explanation: "Taittiriya Brahmana is associated with Yajurveda."
  ,
    category: "Vedic Literature"
  },
  {
    question: "Who is the author of 'Swapnavasavadatta'?",
    options: ["Vishakhadatta", "Bhasa", "Shudraka", "Harsha"],
    correct: 1,
    explanation: "Swapnavasavadatta was written by Bhasa (2nd-3rd century). [UPSC 2024]"
  ,
    category: "Sanskrit Drama"
  },
  {
    question: "Who wrote 'Mudrarakshasa'?",
    options: ["Bhasa", "Vishakhadatta", "Kalidasa", "Bhavabhuti"],
    correct: 1,
    explanation: "Mudrarakshasa by Vishakhadatta is about Chandragupta Maurya's rise with Chanakya's help."
  ,
    category: "Sanskrit Drama"
  },
  {
    question: "'Mrichchhakatika' was written by which author?",
    options: ["Bhasa", "Shudraka", "Harsha", "Somadeva"],
    correct: 1,
    explanation: "Mrichchhakatika by Shudraka (5th century) is a social drama. [UPSC 2013]"
  ,
    category: "Sanskrit Drama"
  },
  {
    question: "Who wrote three plays: Ratnavali, Nagananda, and Priyadarsika?",
    options: ["Bhasa", "Kalidasa", "Harsha", "Bhavabhuti"],
    correct: 2,
    explanation: "King Harsha (7th century) wrote these three Sanskrit dramas."
  ,
    category: "Sanskrit Drama"
  },
  {
    question: "'Gita Govinda' describes the love between which two figures?",
    options: ["Rama and Sita", "Krishna and Radha", "Shiva and Parvati", "Vishnu and Lakshmi"],
    correct: 1,
    explanation: "Gita Govinda by Jayadeva describes Krishna and Radha's love."
  ,
    category: "Sanskrit Drama"
  },
  {
    question: "Who wrote 'Rajatarangini', the chronicles of Kashmir kings?",
    options: ["Somadeva", "Jayadeva", "Kalhana", "Bilhana"],
    correct: 2,
    explanation: "Rajatarangini by Kalhana chronicles Kashmir's Karkota, Varman, Yashaskara dynasties."
  ,
    category: "Sanskrit Drama"
  }
  ,
  {
    question: "'Urubhanga' is a tragedy about which character's conflict with Bhima?",
    options: ["Arjuna", "Duryodhana", "Karna", "Shakuni"],
    correct: 1,
    explanation: "Urubhanga by Bhasa is a tragedy about Duryodhana's conflict with Bhima.",
    category: "Sanskrit Drama"
  },
  {
    question: "Which play depicts Lord Rama's life after returning from exile?",
    options: ["Ramacharit", "Uttara-Ramacharit", "Rama Katha", "Ramayana Nataka"],
    correct: 1,
    explanation: "Uttara-Ramacharit by Bhavabhuti (7th century) depicts Lord Rama's life after returning from exile.",
    category: "Sanskrit Drama"
  },
  {
    question: "King Harsha wrote all of the following plays EXCEPT:",
    options: ["Ratnavali", "Nagananda", "Mudrarakshasa", "Priyadarsika"],
    correct: 2,
    explanation: "Mudrarakshasa was written by Vishakhadatta, not Harsha. Harsha wrote Ratnavali, Nagananda, and Priyadarsika.",
    category: "Sanskrit Drama"
  },
  {
    question: "'Nagananda' is about Prince Jimūtavāhana's act to protect which creatures?",
    options: ["Tigers", "Elephants", "Nagas (serpents)", "Birds"],
    correct: 2,
    explanation: "Nagananda by Harsha tells the story of Prince Jimūtavāhana protecting the Nagas (serpents).",
    category: "Sanskrit Drama"
  },
  {
    question: "Which play is about the union of King Udayana and Priyadarshini?",
    options: ["Ratnavali", "Priyadarsika", "Swapnavasavadatta", "Nagananda"],
    correct: 1,
    explanation: "Priyadarsika by Harsha is about the union of King Udayana and Priyadarshini.",
    category: "Sanskrit Drama"
  },
  {
    question: "'Kathasaritsagara' means:",
    options: ["River of Stories", "Ocean of the Streams of Stories", "Collection of Tales", "Book of Stories"],
    correct: 1,
    explanation: "Kathasaritsagara literally means 'Ocean of the Streams of Stories', written by Somadeva (11th century).",
    category: "Sanskrit Drama"
  },
  {
    question: "Which work showcases Kashmir's tragic history?",
    options: ["Rajatarangini", "Kathasaritsagara", "Both A and B", "None"],
    correct: 2,
    explanation: "Both Rajatarangini (by Kalhana) and Kathasaritsagara (by Somadeva) showcase Kashmir's history.",
    category: "Sanskrit Drama"
  },
  {
    question: "'Devi Chandraguptam' is about which king's decision?",
    options: ["Chandragupta Maurya", "Ramagupta", "Samudragupta", "Chandragupta II"],
    correct: 1,
    explanation: "Devi Chandraguptam by Vishakhadatta is about King Ramagupta's decision to surrender his queen.",
    category: "Sanskrit Drama"
  },
  {
    question: "How many plays did Bhasa write in total?",
    options: ["7 plays", "10 plays", "13 plays", "15 plays"],
    correct: 2,
    explanation: "Bhasa wrote 13 plays in total, including Swapnavasavadatta and Urubhanga.",
    category: "Sanskrit Drama"
  }
  ,
  {
    question: "Kalidasa was a contemporary of which Gupta emperor?",
    options: ["Chandragupta I", "Chandragupta II", "Samudragupta", "Kumaragupta"],
    correct: 1,
    explanation: "Kalidasa (380-415 AD) was contemporary of Chandragupta II during the Gupta period.",
    category: "Sanskrit Drama"
  },
  {
    question: "Which Kalidasa work contains the story of Shakuntala and King Dushyanta?",
    options: ["Vikramorvashi", "Abhijnanashakuntala", "Malavikagnimitra", "Raghuvamsha"],
    correct: 1,
    explanation: "Abhijnanashakuntala by Kalidasa contains the story of Shakuntala and King Dushyanta.",
    category: "Sanskrit Drama"
  },
  {
    question: "'Vikramorvashi' is about the tale of Urvashi and which king?",
    options: ["King Vikram", "King Dushyanta", "King Agnimitra", "King Udayana"],
    correct: 0,
    explanation: "Vikramorvashi by Kalidasa contains the tale of Urvashi and her union with King Vikram.",
    category: "Sanskrit Drama"
  },
  {
    question: "Which Kalidasa work provides accounts of Rajasuya Yajna performed by Pushyamitra Sunga?",
    options: ["Raghuvamsha", "Kumarasambhava", "Malavikagnimitra", "Meghaduta"],
    correct: 2,
    explanation: "Malavikagnimitra provides accounts for Rajasuya Yajna performed by Pushyamitra Sunga. It's about Sunga king Agnimitra and Malvika.",
    category: "Sanskrit Drama"
  },
  {
    question: "'Raghuvamsha' narrates the ancestry of which deity?",
    options: ["Lord Krishna", "Lord Rama", "Lord Vishnu", "Lord Shiva"],
    correct: 1,
    explanation: "Raghuvamsha by Kalidasa narrates the ancestry of Lord Rama's Raghu Vamsa.",
    category: "Sanskrit Drama"
  },
  {
    question: "Which Kalidasa work depicts the birth of Kartikeya?",
    options: ["Raghuvamsha", "Kumarasambhava", "Meghaduta", "Abhijnanashakuntala"],
    correct: 1,
    explanation: "Kumarasambhava by Kalidasa depicts the birth of Kartikeya, son of Shiva and Parvati.",
    category: "Sanskrit Drama"
  },
  {
    question: "'Meghaduta' focuses on:",
    options: ["A cloud messenger's journey", "A king's love story", "Birth of a deity", "War chronicles"],
    correct: 0,
    explanation: "Meghaduta by Kalidasa focuses on a cloud messenger's journey.",
    category: "Sanskrit Drama"
  },
  {
    question: "How many major works did Kalidasa compose that are mentioned?",
    options: ["4 works", "5 works", "6 works", "7 works"],
    correct: 2,
    explanation: "Kalidasa composed 6 major works: Abhijnanashakuntala, Vikramorvashi, Malavikagnimitra, Raghuvamsha, Kumarasambhava, and Meghaduta.",
    category: "Sanskrit Drama"
  }
  ,
  {
    question: "Tripitak/Tipitaka is written in which language?",
    options: ["Sanskrit", "Pali", "Prakrit", "Tamil"],
    correct: 1,
    explanation: "Buddhist canonical literature Tripitak/Tipitaka is written in Pali and divided into three parts.",
    category: "Sanskrit Drama"
  },
  {
    question: "Which Pitaka contains the monastic rules of the Order of Buddhist monks?",
    options: ["Sutta Pitaka", "Vinaya Pitaka", "Abhidhamma Pitaka", "Jataka"],
    correct: 1,
    explanation: "Vinaya Pitaka contains the monastic rules of the Order of Buddhist monks.",
    category: "Sanskrit Drama"
  },
  {
    question: "Sutta Pitaka is:",
    options: ["Collection of the Buddha's teachings", "Monastic rules", "Ethics and psychology", "Stories of Buddha's past lives"],
    correct: 0,
    explanation: "Sutta Pitaka is the collection of the teachings of the Buddha.",
    category: "Sanskrit Drama"
  },
  {
    question: "Abhidhamma Pitaka deals with:",
    options: ["Monastic rules", "Buddha's sermons", "Ethics, psychology and theory of knowledge", "Past life stories"],
    correct: 2,
    explanation: "Abhidhamma Pitaka elucidates various topics dealing with ethics, psychology or theory of knowledge.",
    category: "Sanskrit Drama"
  },
  {
    question: "The Jatakas are:",
    options: ["Canonical Buddhist texts", "Non-canonical Buddhist literature", "Vedic texts", "Jain scriptures"],
    correct: 1,
    explanation: "The Jatakas are a prime example of Buddhist non-canonical literature, narrating the previous births of the Buddha.",
    category: "Sanskrit Drama"
  },
  {
    question: "What do the Jataka stories narrate?",
    options: ["Buddha's teachings", "Monastic rules", "Previous births of Buddha", "Buddhist philosophy"],
    correct: 2,
    explanation: "The Jataka stories narrate the previous births of the Buddha.",
    category: "Sanskrit Drama"
  }
  ,
  {
    question: "Dipavamsa was written in which location?",
    options: ["India", "China", "Anuradhapura (Sri Lanka)", "Tibet"],
    correct: 2,
    explanation: "Dipavamsa was written in the 3rd-4th centuries BC in Anuradhapura, Sri Lanka. It provides historical account of Buddhism in Sri Lanka.",
    category: "Buddhist Texts"
  },
  {
    question: "Which Buddhist text mentions dialogue between King Meander and monk Nagasena?",
    options: ["Dipavamsa", "Milinda Panho", "Mahavamsa", "Udana"],
    correct: 1,
    explanation: "Milinda Panho mentions the dialogue between King Meander (or Milinda) and Buddhist monk Nagasena.",
    category: "Buddhist Texts"
  },
  {
    question: "Mahavamsa is a historical account in which language?",
    options: ["Sanskrit", "Pali", "Prakrit", "Tamil"],
    correct: 1,
    explanation: "Mahavamsa is a Sri Lankan Pali account dating back to 3rd-4th centuries BC, providing historical account of kingdoms of South Asia.",
    category: "Buddhist Texts"
  },
  {
    question: "Mahavastu contains tales written in:",
    options: ["Only Sanskrit", "Only Pali", "Sanskrit, Pali, and Prakrit", "Only Prakrit"],
    correct: 2,
    explanation: "Mahavastu contains Jataka and Avadana tales written in Sanskrit, Pali, and Prakrit.",
    category: "Buddhist Texts"
  },
  {
    question: "Lalitavistara Sutra is a text of which Buddhist tradition?",
    options: ["Theravada", "Mahayana", "Vajrayana", "Zen"],
    correct: 1,
    explanation: "Lalitavistara Sutra ('The Play in Full') is a Mahayana text narrating stories of Buddha's life until his first sermon at Sarnath.",
    category: "Buddhist Texts"
  },
  {
    question: "Which text includes the story of 'Blind Men and the Elephant'?",
    options: ["Mahavastu", "Udana", "Bodhi Vamsa", "Dipavamsa"],
    correct: 1,
    explanation: "Udana, one of the oldest Theravada texts, includes the story of the 'Blind Men and the Elephant.'",
    category: "Buddhist Texts"
  },
  {
    question: "Bodhi Vamsa was written by which author?",
    options: ["Buddhaghosa", "Upatissa", "Nagasena", "Sanghabhuti"],
    correct: 1,
    explanation: "Bodhi Vamsa is a prose poem written in the 10th century AD by Upatissa in Pali, Sri Lanka.",
    category: "Buddhist Texts"
  },
  {
    question: "Visuddhimagga was written by Buddhaghosa in which century?",
    options: ["3rd century AD", "5th century AD", "7th century AD", "10th century AD"],
    correct: 1,
    explanation: "Visuddhimagga is a Theravada text written by Buddhaghosa in the 5th century AD in Sri Lanka.",
    category: "Buddhist Texts"
  },
  {
    question: "Sarvastivada Vinaya was written by which Indian Buddhist monk? [UPSC 2024]",
    options: ["Buddhaghosa", "Upatissa", "Sanghabhuti", "Nagasena"],
    correct: 2,
    explanation: "Sarvastivada Vinaya was written by Sanghabhuti, an Indian Buddhist monk who travelled to China at the end of 4th century AD. [UPSC 2024]",
    category: "Buddhist Texts"
  }
  ,
  {
    question: "Jain Agamas are written in which language?",
    options: ["Sanskrit", "Prakrit", "Pali", "Ardha Magadhi"],
    correct: 1,
    explanation: "Jain Agamas are canonical religious texts written in Prakrit containing teachings of Jain Tirthankaras.",
    category: "Religious Literature"
  },
  {
    question: "How many texts are in the Jain Agamas?",
    options: ["36 texts", "46 texts", "56 texts", "66 texts"],
    correct: 1,
    explanation: "Jain Agamas consist of 46 texts: 12 Angas, 12 Upanga, 10 Prakirnakasutras, 4 Mulasutras, 6 Chedasutras, 2 Chulika­sutras.",
    category: "Religious Literature"
  },
  {
    question: "Which Jain sect recompiled the Angas at Vallabhi, Gujarat?",
    options: ["Digambara", "Svetambara", "Both", "Neither"],
    correct: 1,
    explanation: "The present Angas were recompiled by Svetambara sect at Vallabhi, Gujarat during mid-5th century AD. Digambaras reject Agamas.",
    category: "Religious Literature"
  },
  {
    question: "Gatha Saptasati is often considered opposite of which text?",
    options: ["Vedas", "Kamasutra", "Arthashastra", "Manusmriti"],
    correct: 1,
    explanation: "Gatha Saptasati containing 700 verses is often considered the opposite of the 'Kamasutra'.",
    category: "Religious Literature"
  },
  {
    question: "Avesta is written in which language?",
    options: ["Sanskrit", "Persian", "Avestan", "Arabic"],
    correct: 2,
    explanation: "Avesta is written in Avestan, a language related to Sanskrit that is now extinct.",
    category: "Religious Literature"
  },
  {
    question: "Denkard is regarded as:",
    options: ["Encyclopedia of Zoroastrianism", "Jain scripture", "Buddhist text", "Sikh prayer"],
    correct: 0,
    explanation: "Denkard is a compilation of books regarded as the Encyclopedia of Zoroastrianism, composed in 10th century AD.",
    category: "Religious Literature"
  },
  {
    question: "Adi Granth was written in which year?",
    options: ["1504 AD", "1604 AD", "1678 AD", "1704 AD"],
    correct: 1,
    explanation: "Adi Granth was written in 1604 AD by Bhai Gurdas under the aegis of the fifth guru, Guru Arjan Dev.",
    category: "Religious Literature"
  },
  {
    question: "Guru Granth Sahib was compiled by which guru?",
    options: ["Guru Nanak", "Guru Arjan Dev", "Guru Gobind Singh", "Guru Tegh Bahadur"],
    correct: 2,
    explanation: "Guru Granth Sahib is an expansion of Adi Granth under the tenth guru, Guru Gobind Singh, in 1678.",
    category: "Religious Literature"
  },
  {
    question: "Guru Granth Sahib is written in which script?",
    options: ["Devanagari", "Gurumukhi", "Persian", "Tamil"],
    correct: 1,
    explanation: "Guru Granth Sahib is written in Gurumukhi script and 'Sant Bhasa' language.",
    category: "Religious Literature"
  },
  {
    question: "How many Bhakti saints' teachings are in Guru Granth Sahib?",
    options: ["Ten", "Thirteen", "Fifteen", "Twenty"],
    correct: 1,
    explanation: "Guru Granth Sahib contains teachings of thirteen Bhakti saints called 'Bhagats' like Kabir, Ramananda, Namadev, Ravidas, etc.",
    category: "Religious Literature"
  },
  {
    question: "Janamsakhi contains stories about which Guru?",
    options: ["Guru Nanak", "Guru Arjan Dev", "Guru Gobind Singh", "Guru Angad"],
    correct: 0,
    explanation: "Janamsakhi contains mythological stories about the life of Guru Nanak (first guru).",
    category: "Religious Literature"
  },
  {
    question: "Ardas prayers are recited during:",
    options: ["Morning prayers only", "Evening prayers only", "Opening and closing of Guru Granth Sahib", "Only on festivals"],
    correct: 2,
    explanation: "Ardas are prayers performed during daily rituals in Gurudwaras, recited during opening and closing of Guru Granth Sahib.",
    category: "Religious Literature"
  }
];

export const quizQuestions = allQuizQuestions;

export default {
  artCultureData,
  vedicFacts,
  quizQuestions: allQuizQuestions
};
