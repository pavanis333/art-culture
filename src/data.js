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
  },
  
  // DRAVIDIAN LITERATURE - MALAYALAM (Batch 2)
  {
    id: 58,
    category: "Dravidian Literature",
    subcategory: "Malayalam",
    name: "Ezhuthachan - Father of Malayalam",
    period: "Ancient",
    language: "Malayalam",
    author: "Ezhuthachan",
    description: "Ezhuthachan, a proponent of the Bhakti movement, is the father of Malayalam literature.",
    importance: "HIGH"
  },
  {
    id: 59,
    category: "Dravidian Literature",
    subcategory: "Malayalam",
    name: "Kokasandisan",
    period: "Ancient",
    language: "Malayalam",
    description: "A significant work in Malayalam literature.",
    importance: "MEDIUM"
  },
  {
    id: 60,
    category: "Dravidian Literature",
    subcategory: "Malayalam",
    name: "Bhasa Kautilya",
    period: "Ancient",
    language: "Malayalam",
    description: "A commentary on the ancient Indian treatise on statecraft and economics, the Arthashastra.",
    importance: "MEDIUM"
  },
  {
    id: 61,
    category: "Dravidian Literature",
    subcategory: "Malayalam",
    name: "Ramacharitam",
    period: "13th Century",
    language: "Malayalam",
    author: "Cheeraman",
    description: "Composed by ancient Malayalam poet Cheeraman in the 13th Century. The poem narrates the story of Lord Rama and his adventures.",
    importance: "HIGH"
  },
  
  // DRAVIDIAN LITERATURE - TELUGU (Batch 2)
  {
    id: 62,
    category: "Dravidian Literature",
    subcategory: "Telugu - Overview",
    name: "Telugu Literature Overview",
    period: "11th century onwards",
    language: "Telugu",
    description: "Nannaya (11th century) was considered the first poet in Telugu. Telugu literature reached its zenith during the Vijayanagara period.",
    importance: "HIGH"
  },
  {
    id: 63,
    category: "Dravidian Literature",
    subcategory: "Telugu",
    name: "Uttaraharivamsam",
    period: "Ancient",
    language: "Telugu",
    author: "Nachana Somanatha (King Bukka I's court poet)",
    description: "Written by King Bukka I's famous court poet, Nachana Somanatha.",
    importance: "MEDIUM"
  },
  {
    id: 64,
    category: "Dravidian Literature",
    subcategory: "Telugu",
    name: "Manu Charitra",
    period: "Ancient",
    language: "Telugu",
    author: "Allasani Peddana (Andhra Kavita Pitamahudu)",
    description: "Written by Allasani Peddana, also known as Andhra Kavita Pitamahudu.",
    importance: "MEDIUM"
  },
  {
    id: 65,
    category: "Dravidian Literature",
    subcategory: "Telugu",
    name: "Parijatapaharanamu",
    period: "Ancient",
    language: "Telugu",
    author: "Nandi Thimmana",
    description: "Written by Nandi Thimmana.",
    importance: "MEDIUM"
  },
  {
    id: 66,
    category: "Dravidian Literature",
    subcategory: "Telugu",
    name: "Panduranga Mahatmyam",
    period: "Ancient",
    language: "Telugu",
    author: "Tenali Ramakrishna",
    description: "Written by Tenali Ramakrishna, a court jester and poet who was said to have a close association with king Krishna Devaraya.",
    importance: "MEDIUM"
  },
  {
    id: 67,
    category: "Dravidian Literature",
    subcategory: "Telugu",
    name: "Vasucharitram and Narasabhupaleeyamu",
    period: "Ancient",
    language: "Telugu",
    author: "Ramaraja Bhushanudu (also known as Bhattumurti)",
    description: "Written by Ramaraja Bhushanudu, also known as Bhattumurti.",
    importance: "MEDIUM"
  },
  {
    id: 68,
    category: "Dravidian Literature",
    subcategory: "Telugu",
    name: "Nalopakhyanamu",
    period: "Ancient",
    language: "Telugu",
    author: "Harishchandra",
    description: "Written by Harishchandra.",
    importance: "MEDIUM"
  },
  {
    id: 69,
    category: "Dravidian Literature",
    subcategory: "Telugu",
    name: "Rajasekaracharitra",
    period: "Ancient",
    language: "Telugu",
    author: "Madayyagari Mallana",
    description: "Written by Madayyagari Mallana. The text narrates the love and war of King Rajasekara of the Avanti kingdom.",
    importance: "MEDIUM"
  },
  {
    id: 70,
    category: "Dravidian Literature",
    subcategory: "Telugu",
    name: "Ramabhudayamu",
    period: "Ancient",
    language: "Telugu",
    author: "Ayyalaraju Ramabhadrudu",
    description: "Written by Ayyalaraju Ramabhadrudu.",
    importance: "MEDIUM"
  },
  
  // KRISHNADEVARAYA - PATRON OF LITERATURE
  {
    id: 71,
    category: "Dravidian Literature",
    subcategory: "Patron - Krishnadevaraya",
    name: "Krishnadevaraya - Literary Patron",
    period: "Vijayanagara period",
    language: "Telugu, Tamil, Kannada, Sanskrit",
    description: "Great scholar and patron of literature. His court housed eight accomplished Telugu poets, collectively known as 'Ashtadiggajas'. He patronised Haridasa (Tamil poet) and Kannada poets such as Mallanarya, Chatu Vittalanatha, and Thimmana. During his Kalinga campaign, he composed Amuktamalyada, a treatise recounting the instance of Lord Vishnu in his dream. He also authored Krishna Deva Rayana Dinachari (in Kannada) and Sanskrit treatises, including Madalasa Charita, Satyavadu Parinaya, Rasamanjari, and Jambavati Kalyana.",
    importance: "HIGH"
  },
  
  // DRAVIDIAN LITERATURE - KANNADA (Batch 3)
  {
    id: 72,
    category: "Dravidian Literature",
    subcategory: "Kannada - Overview",
    name: "Kannada Literature Overview",
    period: "Ancient",
    language: "Kannada",
    description: "The Jain scholars played a major role in Kannada literature. The 'Ratnatraya' or 'three gems' of Kannada language includes Pampa (9th-10th century), Ponna (9th-10th century), and Ranna (10th-11th century).",
    importance: "HIGH"
  },
  {
    id: 73,
    category: "Dravidian Literature",
    subcategory: "Kannada",
    name: "Dharmanath Purana",
    period: "Ancient",
    language: "Kannada",
    author: "Madhava",
    description: "Written by Madhava on the life of the fifteenth Tirthankara.",
    importance: "MEDIUM"
  },
  {
    id: 74,
    category: "Dravidian Literature",
    subcategory: "Kannada",
    name: "Dharma Parikshe",
    period: "Ancient",
    language: "Kannada",
    author: "Uritta Vilasa",
    description: "Uritta Vilasa wrote it on the Jain teachings.",
    importance: "MEDIUM"
  },
  {
    id: 75,
    category: "Dravidian Literature",
    subcategory: "Kannada",
    name: "Kavirajamarga",
    period: "Ancient",
    language: "Kannada",
    author: "Nripatunga Amoghavarsha I (Rashtrakuta king)",
    description: "Written by Nripatunga Amoghavarsha I, a powerful Rashtrakuta king.",
    importance: "HIGH"
  },
  {
    id: 76,
    category: "Dravidian Literature",
    subcategory: "Kannada",
    name: "Harishchandra Kavya and Somanatha Charita",
    period: "Ancient",
    language: "Kannada",
    author: "Harishvara",
    description: "These were written by Harishvara.",
    importance: "MEDIUM"
  },
  {
    id: 77,
    category: "Dravidian Literature",
    subcategory: "Kannada",
    name: "Harivamshabhyudaya and Jiva Sambodhana",
    period: "Ancient",
    language: "Kannada",
    author: "Bandhuvarma",
    description: "These were written by Bandhuvarma.",
    importance: "MEDIUM"
  },
  {
    id: 78,
    category: "Dravidian Literature",
    subcategory: "Kannada",
    name: "Jagannathavijaya",
    period: "Ancient",
    language: "Kannada",
    author: "Rudra Bhata",
    description: "Written by Rudra Bhata.",
    importance: "MEDIUM"
  },
  {
    id: 79,
    category: "Dravidian Literature",
    subcategory: "Kannada",
    name: "Madana Vijaya or Kabbigara Kava",
    period: "Ancient",
    language: "Kannada",
    author: "Andayya",
    description: "Written by Andayya. The text was celebrated as it was the first pure Kannada text, that did not have any Sanskrit words.",
    importance: "HIGH"
  },
  {
    id: 80,
    category: "Dravidian Literature",
    subcategory: "Kannada",
    name: "Shabdamanidarpana",
    period: "Ancient",
    language: "Kannada",
    author: "Kesirja",
    description: "A grammar book composed by Kesirja.",
    importance: "MEDIUM"
  },
  {
    id: 81,
    category: "Dravidian Literature",
    subcategory: "Kannada",
    name: "Suktisudharnava",
    period: "Ancient",
    language: "Kannada",
    author: "Mallikarjuna",
    description: "A collection of poems written by Mallikarjuna.",
    importance: "MEDIUM"
  },
  {
    id: 82,
    category: "Dravidian Literature",
    subcategory: "Kannada",
    name: "Tarave Ramayana",
    period: "Ancient",
    language: "Kannada",
    author: "Narahari",
    description: "Composed by Narahari and written entirely in Kannada. It was the first story on Rama inspired by the Valmiki Ramayana.",
    importance: "HIGH"
  },
  {
    id: 83,
    category: "Dravidian Literature",
    subcategory: "Kannada",
    name: "Jaimini Bharata",
    period: "Ancient",
    language: "Kannada",
    author: "Lakshamisha",
    description: "Written by Lakshamisha. Also called the Kamata-Karicutavana-Chaitra (the spring of the Karnataka mango grove).",
    importance: "MEDIUM"
  },
  {
    id: 84,
    category: "Dravidian Literature",
    subcategory: "Kannada",
    name: "Hadibadeya Dharma (Duty of a devout wife)",
    period: "Ancient",
    language: "Kannada",
    author: "Honnamma (female Kannada poet)",
    description: "Written by Honnamma, a female Kannada poet.",
    importance: "MEDIUM"
  },
  
  // KANNADA RATNATRAYA (THREE GEMS)
  {
    id: 85,
    category: "Dravidian Literature",
    subcategory: "Kannada - Ratnatraya",
    name: "Pampa (Father of Kannada)",
    period: "9th-10th century AD",
    language: "Kannada",
    author: "Pampa",
    description: "Father of Kannada language. Two of his most renowned poetic works include Adipurana (written in Champu style) and Vikramarjuna Vijaya. Known for mastery of rasa in poetry and served at the court of Chalukya Arikesari.",
    importance: "HIGH"
  },
  {
    id: 86,
    category: "Dravidian Literature",
    subcategory: "Kannada - Ratnatraya",
    name: "Ponna",
    period: "9th-10th century AD",
    language: "Kannada",
    author: "Ponna",
    description: "Authored the famous treatise Shanti Purana.",
    importance: "HIGH"
  },
  {
    id: 87,
    category: "Dravidian Literature",
    subcategory: "Kannada - Ratnatraya",
    name: "Ranna",
    period: "10th-11th century AD",
    language: "Kannada",
    author: "Ranna",
    description: "Authored the famous treatise Ajitha Purana.",
    importance: "HIGH"
  },
  
  // URDU LITERATURE NOTE
  {
    id: 88,
    category: "Dravidian Literature",
    subcategory: "Urdu - Context Note",
    name: "Urdu Language Context",
    period: "Medieval",
    language: "Urdu",
    description: "Urdu emerged as a contact language enriched by vocabulary from Turkish, Persian, Arabic, Sanskrit, and Prakrits making it a rare five-tradition fusion in world linguistics.",
    note: "PW Plus info - included for cultural completeness",
    importance: "MEDIUM"
  },
  
  // MEDIEVAL LITERATURE - PERSIAN (New Topic Category)
  {
    id: 89,
    category: "Medieval Literature",
    subcategory: "Persian Literature",
    name: "Divan, Nuh Sipihr, Duval Rani-Khizr Khan",
    period: "Medieval",
    language: "Persian",
    author: "Amir Khusrau Dehlavi",
    description: "Divan (collection of Persian poetry), Nuh Sipihr, and Duval Rani-Khizr Khan (tragic love poem). Written by Amir Khusrau Dehlavi.",
    importance: "HIGH"
  },
  {
    id: 90,
    category: "Medieval Literature",
    subcategory: "Persian Literature",
    name: "Tarikh-e-Firuz Shahi",
    period: "Medieval",
    language: "Persian",
    author: "Zia-ud din Barani",
    description: "Written by Zia-ud din Barani.",
    importance: "MEDIUM"
  },
  {
    id: 91,
    category: "Medieval Literature",
    subcategory: "Persian Literature",
    name: "Tuzuk-I-Babari (Babarnama)",
    period: "Medieval (Mughal)",
    language: "Persian",
    author: "Babar",
    description: "Written by Babar, autobiography of the Mughal emperor.",
    importance: "HIGH"
  },
  {
    id: 92,
    category: "Medieval Literature",
    subcategory: "Persian Literature",
    name: "Humayun-nama",
    period: "Medieval (Mughal)",
    language: "Persian",
    author: "Gulbadan Begum (half sister of Humayun)",
    description: "Written by Gulbadan Begum, half sister of Humayun.",
    importance: "MEDIUM"
  },
  {
    id: 93,
    category: "Medieval Literature",
    subcategory: "Persian Literature",
    name: "Ain-e Akbari and Akbarnama",
    period: "Medieval (Mughal)",
    language: "Persian",
    author: "Abul Fazl (court historian)",
    description: "Written by court historian Abul Fazl.",
    importance: "HIGH"
  },
  {
    id: 94,
    category: "Medieval Literature",
    subcategory: "Persian Literature",
    name: "Padmavat",
    period: "Medieval",
    language: "Persian",
    author: "Malik Muhammad Jayasi",
    description: "Written by Malik Muhammad Jayasi.",
    importance: "MEDIUM"
  },
  {
    id: 95,
    category: "Medieval Literature",
    subcategory: "Persian Literature",
    name: "Shah Jahan-nama",
    period: "Medieval (Mughal)",
    language: "Persian",
    author: "Inayat Khan",
    description: "Written by Inayat Khan.",
    importance: "MEDIUM"
  },
  {
    id: 96,
    category: "Medieval Literature",
    subcategory: "Persian Literature",
    name: "Kulliyat (collection of verses)",
    period: "Medieval",
    language: "Persian",
    author: "Mir Jafar Zatalli",
    description: "Written by Mir Jafar Zatalli.",
    importance: "MEDIUM"
  },
  {
    id: 97,
    category: "Medieval Literature",
    subcategory: "Persian Literature",
    name: "Padshahnama",
    period: "Medieval (Mughal)",
    language: "Persian",
    author: "Abdul Hamid Lahori",
    description: "Written by Abdul Hamid Lahori.",
    importance: "MEDIUM"
  },
  {
    id: 98,
    category: "Medieval Literature",
    subcategory: "Persian Literature",
    name: "Razmanama (Book of War)",
    period: "Medieval (Mughal - Akbar's reign)",
    language: "Persian",
    author: "Translation under Emperor Akbar",
    description: "It was the first-ever Persian translation of the Mahabharata under the order of Emperor Akbar.",
    importance: "HIGH"
  },
  {
    id: 99,
    category: "Medieval Literature",
    subcategory: "Persian Literature",
    name: "Yoga Vasistha (Persian translation)",
    period: "Medieval (Mughal - Akbar's reign)",
    language: "Persian",
    author: "Nizamuddin Panipati",
    description: "Translated into Persian by Nizamuddin Panipati during the reign of Akbar. [UPSC 2022]",
    upscRelevance: "[UPSC 2022]",
    importance: "HIGH"
  },
  
  // MEDIEVAL LITERATURE - URDU & HINDI
  {
    id: 100,
    category: "Medieval Literature",
    subcategory: "Urdu Literature",
    name: "Urdu Literature Overview",
    period: "Medieval",
    language: "Urdu",
    description: "Urdu evolved through the interaction of Persian and Hindi. Amir Khusrau had contributed to the development of Urdu in its nascent stage. Urdu primarily follows Hindi grammar and Persian script. Initially referred to as Dakkani (Southern) due to its use in the Bahmani States of Ahmadnagar, Golconda, Bijapur, and Berar. Eminent Urdu poets include Mirza Ghalib, Sauda, Dard, and Mir Taqi Mir. In the 20th century, Iqbal, known for 'Saare jahan se achcha,' became a significant figure in Urdu literary writing.",
    importance: "HIGH"
  },
  {
    id: 101,
    category: "Medieval Literature",
    subcategory: "Hindi Literature",
    name: "Prithviraj Raso",
    period: "Medieval",
    language: "Hindi",
    author: "Chand Bardai",
    description: "It was the first Hindi book and it documents the life and challenges faced by Prithviraj Chauhan.",
    importance: "HIGH"
  },
  {
    id: 102,
    category: "Medieval Literature",
    subcategory: "Hindi Literature",
    name: "Ramcharitmanas, Dohavali, Gitavali, and Vinaya Patrika",
    period: "Medieval",
    language: "Hindi",
    author: "Tulsidas",
    description: "These were written by Tulsidas.",
    importance: "HIGH"
  },
  {
    id: 103,
    category: "Medieval Literature",
    subcategory: "Hindi Literature",
    name: "Sur Sagar",
    period: "Medieval",
    language: "Hindi",
    author: "Surdas",
    description: "Surdas wrote it, and the book is about Krishna's infancy and adolescent affairs with the Gopis.",
    importance: "HIGH"
  },
  
  // MODERN LITERATURE (New Topic Category)
  
  // MODERN HINDI LITERATURE
  {
    id: 104,
    category: "Modern Literature",
    subcategory: "Modern Hindi",
    name: "Andher Nagari (City of Darkness)",
    period: "Modern",
    language: "Hindi",
    author: "Bharatendu Harishchandra (Father of Modern Hindu Literature)",
    description: "A political satire by Bharatendu Harishchandra, known as the Father of Modern Hindu Literature.",
    importance: "HIGH"
  },
  {
    id: 105,
    category: "Modern Literature",
    subcategory: "Modern Hindi",
    name: "Bharat Durdasha",
    period: "Modern",
    language: "Hindi",
    author: "Bharatendu Harishchandra",
    description: "A renowned nationalist piece written by Bharatendu Harishchandra.",
    importance: "HIGH"
  },
  {
    id: 106,
    category: "Modern Literature",
    subcategory: "Modern Hindi",
    name: "Satyartha Prakash (1875)",
    period: "1875",
    language: "Hindi",
    author: "Swami Dayanand",
    description: "Written by Swami Dayanand in 1875.",
    importance: "MEDIUM"
  },
  {
    id: 107,
    category: "Modern Literature",
    subcategory: "Modern Hindi",
    name: "Godan and Bade Bbhaiya",
    period: "Modern",
    language: "Hindi",
    author: "Munshi Premchand",
    description: "Written by Munshi Premchand.",
    importance: "HIGH"
  },
  {
    id: 108,
    category: "Modern Literature",
    subcategory: "Modern Hindi",
    name: "Ateet Ke Chalchitr, Smriti ki Rekhaye and Patha Ke Sathi",
    period: "Modern",
    language: "Hindi",
    author: "Mahadevi Varma",
    description: "Written by Mahadevi Varma.",
    importance: "MEDIUM"
  },
  
  // BENGALI LITERATURE
  {
    id: 109,
    category: "Modern Literature",
    subcategory: "Bengali",
    name: "Bengali Literature Overview",
    period: "Ancient to Modern",
    language: "Bengali",
    description: "Many ancient and medieval literature in Bengali, like the Mangal Kavyas, existed before the nineteenth century, but it had not been widely published.",
    importance: "MEDIUM"
  },
  {
    id: 110,
    category: "Modern Literature",
    subcategory: "Bengali",
    name: "Durgesh Nandini (1965)",
    period: "1965",
    language: "Bengali",
    author: "Bankim Chandra Chatterjee",
    description: "Written by Bankim Chandra Chatterjee.",
    importance: "MEDIUM"
  },
  {
    id: 111,
    category: "Modern Literature",
    subcategory: "Bengali",
    name: "Anand Math (1882)",
    period: "1882",
    language: "Bengali",
    author: "Bankim Chandra Chatterjee",
    description: "Written by Bankim Chandra Chatterjee. Our national song (Vande Mataram) is taken from this novel.",
    importance: "HIGH"
  },
  {
    id: 112,
    category: "Modern Literature",
    subcategory: "Bengali",
    name: "Geetanjali",
    period: "Modern",
    language: "Bengali",
    author: "Rabindranath Tagore",
    description: "Composed by Rabindranath Tagore.",
    importance: "HIGH"
  },
  
  // RAJASTHANI LITERATURE
  {
    id: 113,
    category: "Modern Literature",
    subcategory: "Rajasthani",
    name: "Rajasthani Literature Overview",
    period: "Medieval",
    language: "Rajasthani dialects",
    description: "Various dialects characterised medieval Rajasthani literature and have two primary forms of fictional writing: Dingal and Pingal. Rajasthani tales were frequently transmitted orally and by bards performing Virkavya, or triumphant poetry songs.",
    importance: "MEDIUM"
  },
  
  // KASHMIRI LITERATURE
  {
    id: 114,
    category: "Modern Literature",
    subcategory: "Kashmiri",
    name: "Kashmiri Literature Overview",
    period: "Medieval (Bhakti movement)",
    language: "Kashmiri",
    author: "Lal Ded (first female poetess)",
    description: "During the early medieval period, as the Bhakti movement thrived, the Kashmiri language saw the emergence of its first female poetess, Lal Ded, a Shaivite mystic.",
    importance: "HIGH"
  },
  
  // MODERN LITERATURE - PUNJABI & MARATHI
  {
    id: 115,
    category: "Modern Literature",
    subcategory: "Punjabi",
    name: "Punjabi Literature Overview",
    period: "Medieval to Modern",
    language: "Punjabi",
    description: "Punjabi literature was primarily composed in two major scripts: Persian and Gurmukhi. Guru Gobind Singh had written poetry in Punjabi called Savaye. Local Punjabi literature focused on love stories and epics, such as Sohni-Mahiwal, Sassi-Punnu by Hashim Shah, and Heer-Ranjha by Waris Shah. Baba Farid and Bulley Shah's Sufi poetry, known as Kafis, became well-liked by the populace and rulers through popular singing. Modern Punjabi literature was influenced by nationalist writing, exemplified by Bhagat Singh's legendary work Rang de Basanti Chola.",
    importance: "HIGH"
  },
  {
    id: 116,
    category: "Modern Literature",
    subcategory: "Marathi",
    name: "Marathi Literature Overview",
    period: "13th century onwards",
    language: "Marathi",
    description: "The oldest known Marathi work dates back to the 13th century, by Saint Jnaneshwar, who had initiated Kirtan and written a detailed commentary on the Bhagvata Gita. Janabai, a female writer from the 13th-14th century, is the earliest known female Marathi writer. Eknath, a famous saint from the 16th century, wrote commentaries on Bhagwata Purana and Ramayana and composed famous vernacular works. During the nationalist movement, Bal Gangadhar Tilak published the regional newspaper Kesari in Marathi.",
    importance: "HIGH"
  },
  
  // LANGUAGES IN INDIA - INFORMATIONAL ENTRIES
  {
    id: 117,
    category: "Modern Literature",
    subcategory: "Languages Context",
    name: "Hindi Language Context",
    period: "Modern",
    language: "Hindi",
    description: "Hindi is the most spoken language in India. According to the 2011 census, ~44% of the people speak Hindi as their mother tongue. After English and Mandarin, Hindi is also the third most spoken language in the world. India's second most spoken language is Bengali.",
    importance: "MEDIUM"
  },
  {
    id: 118,
    category: "Modern Literature",
    subcategory: "Languages Context",
    name: "Eighth Schedule Languages",
    period: "Constitutional",
    language: "Multiple",
    description: "Currently, there are 22 languages listed in the Eighth Schedule of the Indian Constitution. Initially, 14 languages were included: Assamese, Hindi, Malayalam, Punjabi, Telugu, Bengali, Kannada, Marathi, Sanskrit, Urdu, Gujarati, Kashmiri, Odia, and Tamil. 21st Constitutional Amendment Act of 1967 added Sindhi. 71st Amendment Act of 1992 added Konkani, Manipuri, and Nepali. 92nd Amendment Act of 2003 added Bodo, Maithili, Dogri, and Santhali.",
    importance: "HIGH"
  },
  {
    id: 119,
    category: "Modern Literature",
    subcategory: "Languages Context",
    name: "Official Languages of India",
    period: "Constitutional",
    language: "Hindi, English",
    description: "Article 343 (1) mentions 'The Official Language of the Union Government shall be Hindi in Devanagari script.' Unless Parliament decided otherwise, the use of English for official purposes was to cease 15 years after the Constitution came into effect (26 January 1965). The Official Language Act of 1963 declared Hindi in Devanagari script as the official language of the Union, while English retained the status of a subsidiary official language. The Indian Constitution allows each state to choose its official language for state-level communication.",
    note: "No national language of India is defined by Constitution or any Act",
    importance: "HIGH"
  },
  {
    id: 120,
    category: "Modern Literature",
    subcategory: "Languages Context",
    name: "Classical Languages in India",
    period: "2004-2024",
    language: "Multiple",
    description: "In 2004, the Indian government established criteria for classifying languages as 'Classical Languages in India.' Criteria include: High Antiquity (early texts/recorded history spanning 1500-2000 years), Ancient Literature (valued by generations of speakers), Originality (literary tradition not borrowed from another speech community), Distinctiveness (distinct from modern forms, possibly showing discontinuity). Classical Languages: Tamil (2004), Sanskrit (2005), Telugu (2008), Kannada (2008), Malayalam (2013), Odia (2014). In 2024, 5 new languages were approved for inclusion: Marathi, Pali, Prakrit, Assamese and Bengali.",
    note: "Benefits: International Awards (scholars receive two major awards annually), Centre of Excellence (for Studies in Classical Languages), Academic Chairs (University Grants Commission creates Professional Chairs)",
    importance: "HIGH"
  },
  
  // UNESCO WORLD HERITAGE SITES (TANGIBLE - CULTURAL SITES) - New Topic
  
  // 2025-2021
  {
    id: 121,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Maratha Military Landscapes of India",
    year: 2025,
    location: "Maharashtra & Tamil Nadu",
    description: "A serial site of 12 forts representing Maratha military architecture & defence across varied topography in Maharashtra & Tamil Nadu.",
    importance: "HIGH"
  },
  {
    id: 122,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Moidams of the Ahom Kingdom (Assam)",
    year: 2024,
    location: "Assam",
    description: "Royal burial mounds of the Ahom dynasty, showcasing unique burial practices and architecture.",
    importance: "HIGH"
  },
  {
    id: 123,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Sacred Ensembles of the Hoysalas (Karnataka)",
    year: 2023,
    location: "Karnataka",
    description: "It encompasses the three most representative examples of Hoysala-style temple complexes in southern India dating from the 12th to 13th centuries AD.",
    upscRelevance: "[UPSC 2024]",
    importance: "HIGH"
  },
  {
    id: 124,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Shantiniketan (West Bengal)",
    year: 2023,
    location: "West Bengal",
    description: "It was a residential school and centre for art based on ancient Indian traditions and a vision of the unity of humanity. It was established in 1901 by the renowned poet and philosopher Rabindranath Tagore.",
    upscRelevance: "[UPSC 2024]",
    importance: "HIGH"
  },
  {
    id: 125,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Dholavira: a Harappan City (Gujarat)",
    year: 2021,
    location: "Gujarat",
    description: "It comprises a fortified city, cemetery and a sophisticated water management system. It was also an important trading and commercial hub.",
    importance: "HIGH"
  },
  {
    id: 126,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Kakatiya Rudreshwara (Ramappa) Temple (Telangana)",
    year: 2021,
    location: "Telangana",
    description: "It is the main Shiva temple built during the Kakatiyan period (1123-1323 CE) under rulers Rudradeva and Recharla Rudra. The building features decorated beams and pillars of carved granite and dolerite with a distinctive and pyramidal Vimana made of lightweight porous bricks, so-called 'floating bricks', which reduced the weight of the roof structures.",
    importance: "HIGH"
  },
  
  // 2019-1989 batch
  {
    id: 127,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Jaipur City (Rajasthan)",
    year: 2019,
    location: "Rajasthan",
    description: "Sawai Jai Singh II founded the city in 1727.",
    importance: "MEDIUM"
  },
  {
    id: 128,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Victorian and Art Deco Ensemble of Mumbai",
    year: 2018,
    location: "Maharashtra",
    description: "The ensembles exhibit an essential exchange of European and Indian human values over a period of time.",
    importance: "MEDIUM"
  },
  {
    id: 129,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Historic City of Ahmedabad (Gujarat)",
    year: 2017,
    location: "Gujarat",
    description: "Sultan Ahmad Shah founded the walled city in the 15th century, on the eastern bank of the Sabarmati river.",
    importance: "MEDIUM"
  },
  {
    id: 130,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "The Architectural Work of Le Corbusier, an Outstanding Contribution to the Modern Movement (Chandigarh)",
    year: 2016,
    location: "Chandigarh",
    description: "There are 17 sites on three continents and Complex du Capitole in Chandigarh is part of this.",
    importance: "MEDIUM"
  },
  {
    id: 131,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Archaeological Site of Nalanda Mahavihara (Nalanda University) (Bihar)",
    year: 2016,
    location: "Bihar",
    description: "It is the most ancient university in India. It comprises the archaeological remains of a monastic and scholastic institution dating from the 3rd century BC to the 13th century AD. It includes stupas, shrines, viharas (residential and educational buildings), and important artworks in stucco, stone and metal.",
    importance: "HIGH"
  },
  {
    id: 132,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Rani-Ki-Vav (Gujarat)",
    year: 2014,
    location: "Gujarat",
    description: "It is situated on the bank of the Saraswati River and was built as a memorial to an 11th-century AD king, Bhimdev I.",
    upscRelevance: "[UPSC 2024]",
    importance: "HIGH"
  },
  {
    id: 133,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Hill Forts of Rajasthan",
    year: 2013,
    location: "Rajasthan",
    description: "It includes six majestic forts in Chittorgarh; Kumbhalgarh; Sawai Madhopur; Jhalawar; Jaipur, and Jaisalmer.",
    importance: "HIGH"
  },
  {
    id: 134,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "The Jantar Mantar (Rajasthan)",
    year: 2010,
    location: "Rajasthan",
    description: "It is an astronomical observation site built in the early 18th century. It includes a set of some 20 main fixed instruments.",
    importance: "MEDIUM"
  },
  {
    id: 135,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Red Fort Complex (Delhi)",
    year: 2007,
    location: "Delhi",
    description: "It was built as the palace fort of Shah Jahan's capital, Shahjahanabad.",
    importance: "HIGH"
  },
  {
    id: 136,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Champaner-Pavagadh Archaeological Park (Gujarat)",
    year: 2004,
    location: "Gujarat",
    description: "It is an unexcavated archaeological, historic and living cultural heritage which includes prehistoric (chalcolithic) sites, a hill fortress of an early Hindu capital, and remains of the 16th-century capital of the state of Gujarat.",
    importance: "MEDIUM"
  },
  {
    id: 137,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Chhatrapati Shivaji Terminus (Maharashtra)",
    year: 2004,
    location: "Maharashtra",
    description: "It represents Victorian Gothic revival architecture in India and was built by British architect F.W.Stevens.",
    importance: "MEDIUM"
  },
  {
    id: 138,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Rock Shelters of Bhimbetka (Madhya Pradesh)",
    year: 2003,
    location: "Madhya Pradesh",
    description: "They were built on the foothills of the Vindhyan Mountains. It contains five clusters of natural rock shelters displaying paintings dating from the Mesolithic Period to the historical period.",
    importance: "MEDIUM"
  },
  {
    id: 139,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Mahabodhi Temple Complex at Bodh Gaya (Bihar)",
    year: 2002,
    location: "Bihar",
    description: "It is one of the four holy sites related to Lord Buddha's life, particularly to the attainment of enlightenment. The first temple was built by Emperor Asoka in the 3rd century BC, and the present temple dates from the 5th or 6th centuries.",
    upscRelevance: "[UPSC 2024]",
    importance: "HIGH"
  },
  {
    id: 140,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Mountain Railways of India (West Bengal; Tamil Nadu; Himachal Pradesh)",
    year: 1999,
    location: "West Bengal; Tamil Nadu; Himachal Pradesh",
    description: "This site includes the Darjeeling Himalayan Railway, Nilgiri Mountain Railway, and the Kalka Shimla Railway.",
    importance: "MEDIUM"
  },
  {
    id: 141,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Humayun's Tomb (Delhi)",
    year: 1993,
    location: "Delhi",
    description: "It was built in 1570, the first garden-tomb in the Indian subcontinent.",
    importance: "MEDIUM"
  },
  {
    id: 142,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Qutb Minar and its Monuments (Delhi)",
    year: 1993,
    location: "Delhi",
    description: "It was built in the 13th century under Sultanate rule. The surrounding archaeological area contains the Alai-Darwaza Gate, (built in 1311), and two mosques, including the Quwwatu'l-Islam mosque.",
    importance: "HIGH"
  },
  {
    id: 143,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Buddhist Monuments at Sanchi (Madhya Pradesh)",
    year: 1989,
    location: "Madhya Pradesh",
    description: "The site of Sanchi comprises a group of Buddhist monuments (monolithic pillars, palaces, temples and monasteries), all in different states of conservation, most of which date back to the 2nd and 1st centuries BC.",
    importance: "HIGH"
  },
  
  // 1987-1983 batch
  {
    id: 144,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Elephanta Caves (Maharashtra)",
    year: 1987,
    location: "Maharashtra",
    description: "These are seven caves with the local name Gharapuri caves. The 'City of Caves', on an island close to Mumbai, contains a collection of rock art linked to the cult of Shiva.",
    importance: "MEDIUM"
  },
  {
    id: 145,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Great Living Chola Temples (Tamil Nadu)",
    year: 1987,
    location: "Tamil Nadu",
    description: "It includes temples like the Brihadisvara Temple at Thanjavur, the Brihadisvara Temple at Gangaikondacholisvaram (built by Rajendra Chola I, completed in 1035) and the Airavatеsvara Temple at Darasuram (built by Rajaraja II).",
    importance: "HIGH"
  },
  {
    id: 146,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Group of Monuments at Pattadakal (Karnataka)",
    year: 1987,
    location: "Karnataka",
    description: "Built in the 7th and 8th centuries AD under the Chalukya dynasty, it includes a series of nine Hindu temples (including Virupaksha temple), as well as a Jain sanctuary.",
    importance: "MEDIUM"
  },
  {
    id: 147,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Churches and Convents of Goa",
    year: 1986,
    location: "Goa",
    description: "It includes the Church of Bom Jesus, which contains the tomb of St Francis-Xavier.",
    importance: "MEDIUM"
  },
  {
    id: 148,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Fatehpur Sikri (Uttar Pradesh)",
    year: 1986,
    location: "Uttar Pradesh",
    description: "It was the first planned city of the Mughals to be marked by magnificent administrative, residential, and religious buildings.",
    importance: "MEDIUM"
  },
  {
    id: 149,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Group of Monuments at Hampi (Karnataka)",
    year: 1986,
    location: "Karnataka",
    description: "It comprises mainly the remnants of the capital city of the Vijayanagara Empire.",
    importance: "HIGH"
  },
  {
    id: 150,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Khajuraho Group of Monuments (Madhya Pradesh)",
    year: 1986,
    location: "Madhya Pradesh",
    description: "It contains Hindu and Jain temples built during the reign of Chandella dynasty rulers between 950 and 1050 AD.",
    importance: "HIGH"
  },
  {
    id: 151,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Group of Monuments at Mahabalipuram (Tamil Nadu)",
    year: 1984,
    location: "Tamil Nadu",
    description: "Founded by the Pallava kings (in the 7th and 8th centuries AD), the group is best known for Rathas, Madapas, Giant open-air reliefs such as the famous 'Descent of the Ganges', and the temple of Rivage.",
    importance: "HIGH"
  },
  {
    id: 152,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Sun Temple, Konarak (Odisha)",
    year: 1984,
    location: "Odisha",
    description: "It represents Kalinga architecture and was built in the 13th century, by King Narasimha Deva.",
    importance: "HIGH"
  },
  {
    id: 153,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Agra Fort (Uttar Pradesh)",
    year: 1983,
    location: "Uttar Pradesh",
    description: "It is a 16th-century Mughal monument known as the Red Fort of Agra. It comprises palaces, such as the Jahangir Palace and the Khas Mahal, built by Shah Jahan; and the Diwan-i-Khas (audience hall).",
    importance: "HIGH"
  },
  {
    id: 154,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Ajanta Caves (Maharashtra)",
    year: 1983,
    location: "Maharashtra",
    description: "There are a total of 29 rock-cut caves. The first Buddhist cave monuments at Ajanta date from the 2nd and 1st centuries BC. During the Gupta period (5th and 6th centuries AD), many more richly decorated caves were added to the original group.",
    importance: "HIGH"
  },
  {
    id: 155,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Ellora Caves (Maharashtra)",
    year: 1983,
    location: "Maharashtra",
    description: "There are 34 monasteries and temples. The architectural activities were carried out by the followers of Buddhism, Brahmanism, and Jainism.",
    importance: "HIGH"
  },
  {
    id: 156,
    category: "UNESCO Heritage",
    subcategory: "Cultural Site",
    name: "Taj Mahal (Uttar Pradesh)",
    year: 1983,
    location: "Uttar Pradesh",
    description: "It was built by Shah Jahan, situated on the banks of Yamuna.",
    importance: "HIGH"
  },
  
  // UNESCO WORLD HERITAGE SITES - NATURAL SITES
  
  {
    id: 157,
    category: "UNESCO Heritage",
    subcategory: "Natural Site",
    name: "Great Himalayan National Park (Himachal Pradesh)",
    year: 2014,
    location: "Himachal Pradesh",
    description: "It is situated in the western part of the Himalayan Mountains and is characterised by high alpine peaks, alpine meadows and riverine forests.",
    importance: "HIGH"
  },
  {
    id: 158,
    category: "UNESCO Heritage",
    subcategory: "Natural Site",
    name: "Western Ghats (Kerala, Tamil Nadu, Karnataka, Maharashtra, Goa, and Gujarat)",
    year: 2012,
    location: "Kerala, Tamil Nadu, Karnataka, Maharashtra, Goa, Gujarat",
    description: "The Sub-clusters include Agasthyamalai, Periyar, Anamalai, Nilgiri, Talakaveri, Kudremukh, and Sahyadri.",
    importance: "HIGH"
  },
  {
    id: 159,
    category: "UNESCO Heritage",
    subcategory: "Natural Site",
    name: "Nanda Devi and Valley of Flowers National Park (Uttarakhand)",
    year: 1988,
    location: "Uttarakhand",
    description: "It is home to rare animals, including the Asiatic black bear, Snow leopard, Brown bear and Blue sheep. It encompasses a unique transition zone between the Zanskar mountain range and the Great Himalayas.",
    importance: "HIGH"
  },
  {
    id: 160,
    category: "UNESCO Heritage",
    subcategory: "Natural Site",
    name: "Sundarban National Park (West Bengal)",
    year: 1987,
    location: "West Bengal",
    description: "It is located at the mouth of the Ganges and Brahmaputra Rivers between India and Bangladesh and contains the world's largest mangrove forests.",
    importance: "HIGH"
  },
  {
    id: 161,
    category: "UNESCO Heritage",
    subcategory: "Natural Site",
    name: "Keoladeo National Park (Rajasthan)",
    year: 1985,
    location: "Rajasthan",
    description: "It is an important wintering ground of Palaearctic migratory waterfowl and is renowned for its large congregation of non-migratory resident breeding birds.",
    importance: "MEDIUM"
  },
  {
    id: 162,
    category: "UNESCO Heritage",
    subcategory: "Natural Site",
    name: "Kaziranga National Park (Assam)",
    year: 1985,
    location: "Assam",
    description: "It is inhabited by the world's largest population of one-horned rhinoceroses. It is situated on the banks of the Brahmaputra river.",
    importance: "HIGH"
  },
  {
    id: 163,
    category: "UNESCO Heritage",
    subcategory: "Natural Site",
    name: "Manas Wildlife Sanctuary (Assam)",
    year: 1985,
    location: "Assam",
    description: "It is a biodiversity hotspot that includes a range of forested hills, alluvial grasslands and tropical evergreen forests. The Manas Wildlife Sanctuary is part of the core zone of Manas Tiger Reserve and lies alongside the shifting river channels of the Manas River.",
    importance: "HIGH"
  },
  
  // UNESCO WORLD HERITAGE SITES - MIXED CATEGORY
  
  {
    id: 164,
    category: "UNESCO Heritage",
    subcategory: "Mixed Site",
    name: "Khangchendzonga National Park (Sikkim)",
    year: 2016,
    location: "Sikkim",
    description: "It includes a unique diversity of plains, valleys, lakes, glaciers and spectacular, snow-capped mountains covered with ancient forests, including the world's third highest peak.",
    importance: "HIGH"
  },
  
  // UNESCO INTANGIBLE CULTURAL HERITAGE
  
  {
    id: 165,
    category: "UNESCO Heritage",
    subcategory: "Intangible Heritage",
    name: "Garba of Gujarat",
    year: 2023,
    location: "Gujarat",
    description: "Garba is a ritualistic and devotional dance that is performed on the occasion of the Hindu festival of Navaratri. It marks the ten-day worship of the Goddess Durga. The festival is characterised by large-scale installations and pavilions in urban areas, as well as by traditional Bengali drumming and veneration of the goddess.",
    upscRelevance: "[UPSC 2024]",
    importance: "HIGH"
  },
  {
    id: 166,
    category: "UNESCO Heritage",
    subcategory: "Intangible Heritage",
    name: "Durga Puja in Kolkata",
    year: 2021,
    location: "West Bengal",
    description: "It marks the ten-day worship of the Goddess Durga. The festival is characterised by large-scale installations and pavilions in urban areas, as well as by traditional Bengali drumming and veneration of the goddess.",
    importance: "HIGH"
  },
  {
    id: 167,
    category: "UNESCO Heritage",
    subcategory: "Intangible Heritage",
    name: "Kumbh Mela (festival of the sacred Pitcher)",
    year: 2017,
    location: "Allahabad, Haridwar, Ujjain, Nasik",
    description: "It is the largest peaceful congregation of pilgrims on earth, during which participants bathe or take a dip in a sacred river. The festival is held at Allahabad, Haridwar, Ujjain and Nasik every four years by rotation.",
    importance: "HIGH"
  },
  {
    id: 168,
    category: "UNESCO Heritage",
    subcategory: "Intangible Heritage",
    name: "Yoga",
    year: 2016,
    location: "India",
    description: "A practise involving poses, meditation, controlled breathing, chanting, and techniques to achieve self-realisation. Traditionally, it is transmitted through the Guru-Shishya parampara (teacher-disciple tradition).",
    importance: "HIGH"
  },
  {
    id: 169,
    category: "UNESCO Heritage",
    subcategory: "Intangible Heritage",
    name: "Nuvroz",
    year: 2016,
    location: "India",
    description: "It is celebrated as the Parsis New Year. An important tradition practised during this time is the gathering around 'the Table', decorated with objects that symbolise purity, brightness, livelihood and wealth, to enjoy a special meal with loved ones.",
    importance: "MEDIUM"
  },
  {
    id: 170,
    category: "UNESCO Heritage",
    subcategory: "Intangible Heritage",
    name: "Traditional Brass and Copper Craft of Utensil Making among the Thatheras of Jandiala Guru in Punjab",
    year: 2014,
    location: "Punjab",
    description: "An oral tradition passed through generations of the Thathera community. It involves heating and moulding metals like brass, copper, and Kansa into functional and ritualistic utensils. Recommended in Ayurveda texts for medicinal purposes. Patronised by Maharaja Ranjit Singh in the 19th century.",
    importance: "MEDIUM"
  },
  {
    id: 171,
    category: "UNESCO Heritage",
    subcategory: "Intangible Heritage",
    name: "Sankirtana, ritual singing, drumming and dancing of Manipur",
    year: 2013,
    location: "Manipur",
    description: "It is a Manipuri ritual art form that combines singing, drumming, and dancing to mark religious occasions and stages in the lives of Manipuri Vaishnavites. It is performed at temples, narrating the life and deeds of Lord Krishna.",
    importance: "MEDIUM"
  },
  {
    id: 172,
    category: "UNESCO Heritage",
    subcategory: "Intangible Heritage",
    name: "Buddhist chanting of Ladakh",
    year: 2012,
    location: "Ladakh",
    description: "Buddhist lamas (priests) chant sacred texts representing the spirit, philosophy and teachings of the Buddha. Chanting is undertaken for the spiritual and moral well-being of the people, for purification and peace of mind, to appease the wrath of evil spirits or to invoke the blessing of various Buddhas, Bodhisattvas, deities and rinopoches. Two forms of Buddhism are practised in Ladakh – Mahayana and Vajrayana – and there are four major sects, namely Nyngma, Kagyud, Shakya and Geluk. Each sect has several forms of chanting, practised during life-cycle rituals and on important days in the Buddhist and agrarian calendars.",
    importance: "MEDIUM"
  },
  {
    id: 173,
    category: "UNESCO Heritage",
    subcategory: "Intangible Heritage",
    name: "Chhau dance",
    year: 2010,
    location: "West Bengal, Jharkhand, Odisha",
    description: "The Tribal martial art dance has three subgenres: Purulia Chhau (West Bengal), Seraikella Chhau (Jharkhand), and Mayurbhanj Chhau (Odisha). Primarily during the spring festival, lasting 13 days, with community-wide participation. Performed by male dancers at night, enacting episodes from epics including the Mahabharata and Ramayana and local folklore. Dancers wear masks, except for Mayurbhanj Chhau.",
    importance: "MEDIUM"
  },
  {
    id: 174,
    category: "UNESCO Heritage",
    subcategory: "Intangible Heritage",
    name: "Kalbelia folk songs and dances of Rajasthan",
    year: 2010,
    location: "Rajasthan",
    description: "It is performed by the Kalbelia tribe in Rajasthan, known for their snake-catching and trading occupations. Songs and dances are expressions of the Kalbelia community's traditional way of life. Women in flowing black skirts dance and swirl, replicating the movements of a serpent, while men accompany them on the Khanjari percussion instrument and the Poongi, a woodwind instrument traditionally played to capture snakes.",
    importance: "MEDIUM"
  },
  {
    id: 175,
    category: "UNESCO Heritage",
    subcategory: "Intangible Heritage",
    name: "Mudiyettuu",
    year: 2010,
    location: "Kerala",
    description: "It is traditional ritual theatre, folk dance, and drama in Kerala depicting the battle between Goddess Kali and the demon Darika. Performed in village temples (Bhagavati shrines) from February to May, post-harvest. Performers wear heavy makeup, gorgeous attire, facial painting, and tall headgear, embodying the supernatural.",
    importance: "MEDIUM"
  },
  {
    id: 176,
    category: "UNESCO Heritage",
    subcategory: "Intangible Heritage",
    name: "Ramman",
    year: 2009,
    location: "Uttarakhand",
    description: "It is a religious festival and ritual theatre celebrated in Saloor-Dungra villages, Chamoli district, Uttarakhand, to honour the village deity Bhumiyal Devta with offerings in the village temple courtyard. Key aspects include the singing of Jagar, and narrating local legends.",
    importance: "MEDIUM"
  },
  {
    id: 177,
    category: "UNESCO Heritage",
    subcategory: "Intangible Heritage",
    name: "The Tradition in Vedic Chanting",
    year: 2008,
    location: "India",
    description: "It is among the oldest unbroken oral traditions, involving several pathas (recitations) or ways of chanting Vedic mantras.",
    importance: "HIGH"
  },
  {
    id: 178,
    category: "UNESCO Heritage",
    subcategory: "Intangible Heritage",
    name: "Ramlila",
    year: 2008,
    location: "North India",
    description: "Ramlila, literally 'Rama's play', is a performance of epic Ramayana in a series of scenes that include song, narration, recital and dialogue. It is performed across northern India during the festival of Dussehra.",
    importance: "MEDIUM"
  },
  {
    id: 179,
    category: "UNESCO Heritage",
    subcategory: "Intangible Heritage",
    name: "Kutiyattam (Sanskrit Theatre)",
    year: 2008,
    location: "Kerala",
    description: "Kutiyattam represents a synthesis of Sanskrit classicism and reflects the local traditions of Kerala. It is traditionally performed in theatres called Kuttampalams, which are located in Hindu temples. The actor's art lies in elaborating a situation or episode in all its detail. Therefore, a single act may take days to perform and a complete performance may last up to 40 days.",
    importance: "MEDIUM"
  },
  
  // UNESCO CREATIVE CITIES NETWORK
  
  {
    id: 180,
    category: "UNESCO Heritage",
    subcategory: "Creative City",
    name: "Jaipur",
    year: 2015,
    location: "Rajasthan",
    creativeField: "Crafts and Folk Art",
    description: "Established 2004 by UNESCO to promote cooperation among cities that have identified creativity as a strategic factor for sustainable urban development. Fields: Crafts and Folk Art, Design, Film, Gastronomy, Literature, Media Arts, and Music. Jaipur: Renowned for traditional crafts like blue pottery, block printing, and jewelry, alongside vibrant folk traditions.",
    importance: "MEDIUM"
  },
  {
    id: 181,
    category: "UNESCO Heritage",
    subcategory: "Creative City",
    name: "Varanasi",
    year: 2015,
    location: "Uttar Pradesh",
    creativeField: "Music",
    description: "A cultural hub of Hindustani classical music, home to the iconic Banaras gharana.",
    importance: "MEDIUM"
  },
  {
    id: 182,
    category: "UNESCO Heritage",
    subcategory: "Creative City",
    name: "Chennai",
    year: 2017,
    location: "Tamil Nadu",
    creativeField: "Music",
    description: "Celebrated for its rich Carnatic music tradition, hosting the world-renowned December Music Season.",
    importance: "MEDIUM"
  },
  {
    id: 183,
    category: "UNESCO Heritage",
    subcategory: "Creative City",
    name: "Mumbai",
    year: 2019,
    location: "Maharashtra",
    creativeField: "Film",
    description: "The heart of India's film industry, Bollywood, and a center for cinematic art and cultural expression.",
    importance: "HIGH"
  },
  {
    id: 184,
    category: "UNESCO Heritage",
    subcategory: "Creative City",
    name: "Hyderabad",
    year: 2019,
    location: "Telangana",
    creativeField: "Gastronomy",
    description: "Famous for its rich culinary heritage, particularly biryani, haleem, and other Hyderabadi delicacies.",
    importance: "MEDIUM"
  },
  {
    id: 185,
    category: "UNESCO Heritage",
    subcategory: "Creative City",
    name: "Kolkata",
    year: 2019,
    location: "West Bengal",
    creativeField: "Literature",
    description: "A literary hub with a history of influential authors, poets, and publishers, including Rabindranath Tagore.",
    importance: "MEDIUM"
  },
  {
    id: 186,
    category: "UNESCO Heritage",
    subcategory: "Creative City",
    name: "Srinagar",
    year: 2021,
    location: "Jammu & Kashmir",
    creativeField: "Crafts and Folk Art",
    description: "Celebrated for exceptional traditional crafts, including Pashmina shawls, papier-mâché, and Kashmiri carpets.",
    importance: "MEDIUM"
  },
  {
    id: 187,
    category: "UNESCO Heritage",
    subcategory: "Creative City",
    name: "Gwalior",
    year: 2023,
    location: "Madhya Pradesh",
    creativeField: "Music",
    description: "Renowned for the Gwalior gharana, a prominent school of Hindustani classical music, contributing significantly to Dhrupad and Khayal styles.",
    importance: "MEDIUM"
  },
  {
    id: 188,
    category: "UNESCO Heritage",
    subcategory: "Creative City",
    name: "Kozhikode",
    year: 2023,
    location: "Kerala",
    creativeField: "Literature",
    description: "Recognized as India's first UNESCO City of Literature, with a vibrant literary heritage and a thriving community of writers and scholars.",
    importance: "MEDIUM"
  },
  {
    id: 189,
    category: "UNESCO Heritage",
    subcategory: "Creative City",
    name: "Lucknow",
    year: 2025,
    location: "Uttar Pradesh",
    creativeField: "Gastronomy",
    description: "Second city after Hyderabad in India to be recognized for its culinary heritage, particularly for its Awadhi cuisine.",
    importance: "MEDIUM"
  },
  
  // UNESCO MEMORY OF THE WORLD REGISTER
  
  {
    id: 190,
    category: "UNESCO Heritage",
    subcategory: "Memory of the World",
    name: "I.A.S. Tamil Medical Manuscript Collection",
    year: 1997,
    location: "India",
    description: "Manuscripts related to traditional Tamil medicine, providing insights into ancient medical practices.",
    importance: "MEDIUM"
  },
  {
    id: 191,
    category: "UNESCO Heritage",
    subcategory: "Memory of the World",
    name: "Saiva Manuscripts in Pondicherry",
    year: 2005,
    location: "Pondicherry",
    description: "Saiva texts preserved in Pondicherry, significant in the study of Tamil religious literature.",
    importance: "MEDIUM"
  },
  {
    id: 192,
    category: "UNESCO Heritage",
    subcategory: "Memory of the World",
    name: "Rigveda Manuscripts",
    year: 2007,
    location: "India",
    description: "One of the oldest known texts, foundational to Vedic knowledge and culture.",
    importance: "HIGH"
  },
  {
    id: 193,
    category: "UNESCO Heritage",
    subcategory: "Memory of the World",
    name: "Tarikh-E-Khandan-ETimuriyah",
    year: 2011,
    location: "India",
    description: "Historical record detailing the Timurids' dynasty, crucial for understanding India's Mughal era.",
    importance: "MEDIUM"
  },
  {
    id: 194,
    category: "UNESCO Heritage",
    subcategory: "Memory of the World",
    name: "Laghukālacakratantrarājațīkā (Vimalaprabhā)",
    year: 2011,
    location: "India",
    description: "Important tantric texts related to Buddhist teachings.",
    importance: "MEDIUM"
  },
  {
    id: 195,
    category: "UNESCO Heritage",
    subcategory: "Memory of the World",
    name: "Shāntinātha Charitra",
    year: 2013,
    location: "India",
    description: "14th-century Sanskrit text with illustrations, detailing the life of the Jain Tirthankara Shantinatha.",
    importance: "MEDIUM"
  },
  {
    id: 196,
    category: "UNESCO Heritage",
    subcategory: "Memory of the World",
    name: "Gilgit Manuscripts",
    year: 2017,
    location: "India",
    description: "Ancient Buddhist texts discovered in Gilgit, showcasing the spread of Buddhism and the region's history.",
    importance: "MEDIUM"
  },
  {
    id: 197,
    category: "UNESCO Heritage",
    subcategory: "Memory of the World",
    name: "Maitreyavyakarana",
    year: 2017,
    location: "India",
    description: "A text from ancient India that deals with philosophical and spiritual teachings.",
    importance: "MEDIUM"
  },
  {
    id: 198,
    category: "UNESCO Heritage",
    subcategory: "Memory of the World",
    name: "Abhinavagupta Manuscripts",
    year: 2023,
    location: "India",
    description: "Works of the philosopher and scholar Abhinavagupta, focusing on aesthetics, aesthetics, and tantra. Note: Recently 3 Indian literary works were inscribed into the Asia-Pacific Regional Register of the UNESCO Memory of the World Programme.",
    importance: "MEDIUM"
  },
  
  // IMPORTANT BOOKS AND AUTHORS - New Topic
  
  {
    id: 199,
    category: "Books & Authors",
    name: "Valmiki",
    work: "Ramayana",
    description: "Ancient Sanskrit epic, life story of Lord Rama.",
    importance: "HIGH"
  },
  {
    id: 200,
    category: "Books & Authors",
    name: "Ved Vyas",
    work: "Mahabharata",
    description: "Ancient Sanskrit epic, Kurukshetra war and Bhagavad Gita.",
    importance: "HIGH"
  },
  {
    id: 201,
    category: "Books & Authors",
    name: "Panini",
    work: "Ashtadhyayi",
    description: "Ancient Sanskrit grammar treatise, foundational work on linguistics.",
    importance: "HIGH"
  },
  {
    id: 202,
    category: "Books & Authors",
    name: "Patanjali",
    work: "Mahabhasya",
    description: "Commentary on Panini's Ashtadhyayi, Sanskrit grammar.",
    importance: "MEDIUM"
  },
  {
    id: 203,
    category: "Books & Authors",
    name: "Nagarjuna",
    work: "Madhyamika karika, Prajnaparamita karika",
    description: "Buddhist philosopher, Madhyamika school founder.",
    importance: "MEDIUM"
  },
  {
    id: 204,
    category: "Books & Authors",
    name: "Asvaghosha",
    work: "Buddhacharita, Vajrasuchi, Suandananda",
    description: "Buddhist poet and philosopher, life of Buddha.",
    importance: "MEDIUM"
  },
  {
    id: 205,
    category: "Books & Authors",
    name: "Charaka",
    work: "Charaka Samhita (Book on medicine)",
    description: "Ancient Ayurvedic text on medicine and health.",
    importance: "HIGH"
  },
  {
    id: 206,
    category: "Books & Authors",
    name: "Kalidasa",
    work: "Malavikagnimitram (Love story of Agnimitra Sunga and Malavika), Meghaduta",
    description: "Classical Sanskrit poet and dramatist, considered greatest.",
    importance: "HIGH"
  },
  {
    id: 207,
    category: "Books & Authors",
    name: "Sushruta",
    work: "Sushruta Samhita (Book on surgery)",
    description: "Ancient Ayurvedic text on surgery and medicine.",
    importance: "HIGH"
  },
  {
    id: 208,
    category: "Books & Authors",
    name: "Vishakhadatta",
    work: "Mudrarakshasa (Chandragupta Maurya defeating the Nandas), Devichandraguptham",
    description: "Sanskrit dramatist, political intrigue plays.",
    importance: "MEDIUM"
  },
  {
    id: 209,
    category: "Books & Authors",
    name: "Sudraka",
    work: "Mricchakatika (Drama)",
    description: "Sanskrit play 'The Little Clay Cart', social drama.",
    importance: "MEDIUM"
  },
  {
    id: 210,
    category: "Books & Authors",
    name: "Bharata Muni",
    work: "Natyasastra",
    description: "Ancient treatise on performing arts, drama theory.",
    importance: "HIGH"
  },
  {
    id: 211,
    category: "Books & Authors",
    name: "Bhaskaracharya",
    work: "Siddhanta Shiromani (4 parts - Lilavati, Bijaganita, Grahaganita & Gola on Astronomy)",
    description: "12th-century mathematician and astronomer.",
    importance: "HIGH"
  },
  {
    id: 212,
    category: "Books & Authors",
    name: "Dandin",
    work: "Dasakumaracharita and Kvyadarsha",
    description: "Sanskrit prose writer and poetician.",
    importance: "MEDIUM"
  },
  {
    id: 213,
    category: "Books & Authors",
    name: "Bhavabhuti",
    work: "Uttarama-Charita (Continuation to Valmiki Ramayana), Malati Madhava",
    description: "8th-century Sanskrit dramatist.",
    importance: "MEDIUM"
  },
  {
    id: 214,
    category: "Books & Authors",
    name: "Devachandra",
    work: "Shantinathacharita (Jaina Narrative)",
    description: "Jain literary work on Tirthankara Shantinatha.",
    importance: "MEDIUM"
  },
  {
    id: 215,
    category: "Books & Authors",
    name: "Hemchandra",
    work: "Dvyashraya Mahakavya, Sapta Sadhana",
    description: "Jain scholar, grammarian and polymath.",
    importance: "MEDIUM"
  },
  {
    id: 216,
    category: "Books & Authors",
    name: "Bilhana",
    work: "Vikramankadevacharita (Chalukya king Vikramaditya) and Karnasundari",
    description: "11th-century Kashmiri poet.",
    importance: "MEDIUM"
  },
  {
    id: 217,
    category: "Books & Authors",
    name: "Jayanka",
    work: "Prithviraja Vijaya",
    description: "Sanskrit poem on Prithviraj Chauhan.",
    importance: "MEDIUM"
  },
  {
    id: 218,
    category: "Books & Authors",
    name: "Jayasinha",
    work: "Kumarapalacharita",
    description: "Gujarati literary work.",
    importance: "MEDIUM"
  },
  {
    id: 219,
    category: "Books & Authors",
    name: "Lagdhacharya",
    work: "Book on astrology",
    description: "Ancient astronomer and astrologer.",
    importance: "MEDIUM"
  },
  {
    id: 220,
    category: "Books & Authors",
    name: "Mathara",
    work: "Nitishastra (On Polity)",
    description: "Ancient political treatise.",
    importance: "MEDIUM"
  },
  {
    id: 221,
    category: "Books & Authors",
    name: "Nyayachandra",
    work: "Hammirakavyam",
    description: "Sanskrit literary work.",
    importance: "MEDIUM"
  },
  {
    id: 222,
    category: "Books & Authors",
    name: "Padmagupta",
    work: "Navasahasankacharita",
    description: "Sanskrit narrative work.",
    importance: "MEDIUM"
  },
  {
    id: 223,
    category: "Books & Authors",
    name: "Rajasekhara",
    work: "Karpuramanjari, Bala Ramayana, Bala Bharata, Kavyamimamsa, Bhuvana Kosha, Haravilasa",
    description: "9th-10th century Sanskrit poet and dramatist.",
    importance: "MEDIUM"
  },
  {
    id: 224,
    category: "Books & Authors",
    name: "Vijnaneshwara",
    work: "Mitakshara",
    description: "Commentary on Hindu law, Yajnavalkya Smriti.",
    importance: "MEDIUM"
  },
  {
    id: 225,
    category: "Books & Authors",
    name: "Jayadeva",
    work: "Prasannaraghava and Gita govinda",
    description: "12th-century Sanskrit poet, devotional lyrics.",
    importance: "MEDIUM"
  },
  {
    id: 226,
    category: "Books & Authors",
    name: "Jimutavahana",
    work: "Dayabhaga",
    description: "Hindu law treatise on inheritance.",
    importance: "MEDIUM"
  },
  {
    id: 227,
    category: "Books & Authors",
    name: "Vagabhatta",
    work: "Astanga-Sangraha, Astanga-Hridaya-Samhita",
    description: "Classical Ayurvedic texts.",
    importance: "MEDIUM"
  },
  {
    id: 228,
    category: "Books & Authors",
    name: "Vakpati",
    work: "Gudavaho (Yasovarman of Kannauj)",
    description: "8th-century Sanskrit poet.",
    importance: "MEDIUM"
  },
  {
    id: 229,
    category: "Books & Authors",
    name: "Varahamihira",
    work: "Panchsiddhantika (Book on Astrology), Suryasiddhanta, Brihatsamhita",
    description: "6th-century astronomer, mathematician and astrologer.",
    importance: "HIGH"
  },
  {
    id: 230,
    category: "Books & Authors",
    name: "Vardhamana",
    work: "Adinathacharita (Jaina Narrative)",
    description: "Jain literary work.",
    importance: "MEDIUM"
  },
  {
    id: 231,
    category: "Books & Authors",
    name: "Visaladeva",
    work: "Harikeli Nataka",
    description: "Sanskrit drama.",
    importance: "MEDIUM"
  },
  {
    id: 232,
    category: "Books & Authors",
    name: "Chandbardai",
    work: "Prithvirajacharita",
    description: "Medieval Hindi epic on Prithviraj Chauhan.",
    importance: "MEDIUM"
  },
  
  // FOREIGN TRAVELLERS AND THEIR OBSERVATIONS - New Topic
  
  {
    id: 233,
    category: "Foreign Travellers",
    name: "Megasthenes",
    nationality: "Greek Ambassador of Seleucus Nikator",
    duration: "302-298 BCE",
    reign: "Chandragupta Maurya",
    observation: "Wrote a book named 'Indica'",
    importance: "HIGH"
  },
  {
    id: 234,
    category: "Foreign Travellers",
    name: "Deimachos",
    nationality: "Greek Ambassador",
    duration: "320-273 BCE",
    reign: "Bindusara",
    observation: "Greek diplomatic mission to Mauryan court",
    importance: "MEDIUM"
  },
  {
    id: 235,
    category: "Foreign Travellers",
    name: "Fa-Hien",
    nationality: "Chinese traveller",
    duration: "405-411 CE",
    reign: "Chandragupta II",
    observation: "In his travelogue The records of Buddhist Kingdoms ('Fo-Kyo-Ki') he described his journey. He deduced from his journey to patliputra that there were distinct sangha of both the Hinayana and Mahayana sects that gave education to students from all across india.",
    importance: "HIGH"
  },
  {
    id: 236,
    category: "Foreign Travellers",
    name: "Hiuen Tsang",
    nationality: "Chinese traveller",
    duration: "630-645 CE",
    reign: "Harshavardhana",
    observation: "Wrote a travelogue 'Si-Yu-Ki' (Travel to the Western World). He studied for around five years at Nalanda. Also described about Harsha reign.",
    importance: "HIGH"
  },
  {
    id: 237,
    category: "Foreign Travellers",
    name: "I-tsing",
    nationality: "Chinese Traveller",
    duration: "671-695 CE",
    reign: "",
    observation: "Wrote records of his 25-year travels, contributing to the knowledge of Srivijaya and kingdoms en route.",
    importance: "MEDIUM"
  },
  {
    id: 238,
    category: "Foreign Travellers",
    name: "Al-Masudi",
    nationality: "Arab Traveller",
    duration: "957 CE",
    reign: "",
    observation: "Gave an extensive account of India in 'Muruj-ul-Zahab'.",
    importance: "MEDIUM"
  },
  {
    id: 239,
    category: "Foreign Travellers",
    name: "Al-Biruni",
    nationality: "Persian scholar",
    duration: "1024-1030 CE",
    reign: "",
    observation: "Wrote 'Tahqiq-i-Hind/Kitab-ul-Hind'. He tried to explain the caste system.",
    importance: "HIGH"
  },
  {
    id: 240,
    category: "Foreign Travellers",
    name: "Marco Polo",
    nationality: "Italian Traveller",
    duration: "1292-1294 CE",
    reign: "Visited south india during the reign of Rudramadevi of Kakatiyas",
    observation: "Wrote 'The Book of Sir Marco Polo' on the economic history of India.",
    importance: "MEDIUM"
  },
  {
    id: 241,
    category: "Foreign Travellers",
    name: "Ibn Batuta",
    nationality: "Morocco Traveller",
    duration: "1333-1347 CE",
    reign: "Muhammad-bin-Tughlaq",
    observation: "Wrote a travelogue 'Rihla'. Muhammad-bin-Tughlaq appointed him as Qazi/judge of Delhi. Tells about the Postal system during Muhammad-bin-Tughlaq reign(Uluq-Horse post and Dawa-Foot post). He says travelling was insecure and mentioned about robbery during travelling. He also mentioned about coconut and paan.",
    importance: "HIGH"
  },
  {
    id: 242,
    category: "Foreign Travellers",
    name: "Nicolo Conti",
    nationality: "Italian Merchant",
    duration: "1420-1421 CE",
    reign: "Devaraya I of Vijayanagar Empire",
    observation: "Gave a graphic account of Vijayanagara. Referred 'Telugu' as 'Italian of the East'.",
    importance: "MEDIUM"
  },
  {
    id: 243,
    category: "Foreign Travellers",
    name: "Abdur Razzaq Samarqandi",
    nationality: "Persian scholar, Ambassador of Shahrukh of Timurid dynasty",
    duration: "1443-1444 CE",
    reign: "Devaraya II of Vijayanagar Empire",
    observation: "Stayed at the court of Zamorin of Calicut. Gave a brief account of Calicut and Vijayanagara in his 'Matla us Saddin wa Majuma ul Bahrain'.",
    importance: "MEDIUM"
  },
  {
    id: 244,
    category: "Foreign Travellers",
    name: "Athanasius Nikitin",
    nationality: "Russian Merchant",
    duration: "1470-1474 CE",
    reign: "Muhammad shah III",
    observation: "Visited South india in 1470 described the condition of the Bahmani kingdom under Muhammad III. His work includes 'The journey beyond 3 seas'.",
    importance: "MEDIUM"
  },
  {
    id: 245,
    category: "Foreign Travellers",
    name: "Duarte Barbosa",
    nationality: "Portuguese Traveller",
    duration: "1500-1516 CE",
    reign: "Deva Raya I",
    observation: "Gave a brief description of the government and the people of Vijayanagar Empire.",
    importance: "MEDIUM"
  },
  {
    id: 246,
    category: "Foreign Travellers",
    name: "Domingo Paes",
    nationality: "Portuguese Traveller",
    duration: "1520-1522 CE",
    reign: "Krishnadeva Raya (Vijayanagar Empire)",
    observation: "Gave a brief description of the government and the people of Vijayanagar Empire.",
    importance: "HIGH"
  },
  {
    id: 247,
    category: "Foreign Travellers",
    name: "Fernao Nuniz",
    nationality: "Portuguese Merchant",
    duration: "1535-1537 CE",
    reign: "Achyutdeva raya of Tuluva Dynasty",
    observation: "Wrote history of Vijayanagar Empire during the time of Achyuta Raya's reign.",
    importance: "MEDIUM"
  },
  {
    id: 248,
    category: "Foreign Travellers",
    name: "William Hawkins",
    nationality: "Ambassador of British King James I",
    duration: "1608-1611 CE",
    reign: "Jahangir",
    observation: "British diplomatic mission to Mughal court.",
    importance: "MEDIUM"
  },
  {
    id: 249,
    category: "Foreign Travellers",
    name: "Sir Thomas Roe",
    nationality: "Ambassador of British King James I",
    duration: "1615-1619 CE",
    reign: "Jahangir",
    observation: "British diplomatic mission to Mughal court.",
    importance: "MEDIUM"
  },
  {
    id: 250,
    category: "Foreign Travellers",
    name: "Edward Terry",
    nationality: "Ambassador of Sir Thomas Roe",
    duration: "1616 CE",
    reign: "",
    observation: "Wrote 'A Voyage to East-India'",
    importance: "MEDIUM"
  },
  {
    id: 251,
    category: "Foreign Travellers",
    name: "Francisco Pelsaert",
    nationality: "Dutch Traveller",
    duration: "1620-1627 CE",
    reign: "",
    observation: "Gave valuable information about the living standard of the common people in the Mughal Empire. Like Bernier he was shocked to see widespread poverty.",
    importance: "MEDIUM"
  },
  {
    id: 252,
    category: "Foreign Travellers",
    name: "Peter Mundy",
    nationality: "Italian Traveller",
    duration: "1628-1634 CE",
    reign: "Shah Jahan",
    observation: "Visited India 6 times. Account covers the reign of Shahjahan and Aurangzeb.",
    importance: "MEDIUM"
  },
  {
    id: 253,
    category: "Foreign Travellers",
    name: "Jean Baptiste Tavernier (Jeweller)",
    nationality: "French Traveller",
    duration: "1638-1663 CE",
    reign: "Shah Jahan",
    observation: "He wrote 'Travels in India'. Tells about trade with the ottoman empire. He visited India six times.",
    importance: "MEDIUM"
  },
  {
    id: 254,
    category: "Foreign Travellers",
    name: "Niccolao Manucci",
    nationality: "Italian Physician and Philosopher",
    duration: "1653-1708 CE",
    reign: "Mughal Empire",
    observation: "His work includes 'Storia do Mogor' is considered to be the most detailed account of the Mughal court.",
    importance: "MEDIUM"
  },
  {
    id: 255,
    category: "Foreign Travellers",
    name: "Francois Bernier",
    nationality: "French Physician and Philosopher",
    duration: "1656-1668 CE",
    reign: "Mughal Empire",
    observation: "He was closely associated with the Mughal court as a physician to prince Dara shukoh and he was installed as a Medical Doctor at the court of Aurangzeb.",
    importance: "MEDIUM"
  },
  {
    id: 256,
    category: "Foreign Travellers",
    name: "Jean de Thevenot",
    nationality: "French Traveller",
    duration: "1666 CE",
    reign: "Mughal Empire",
    observation: "Gave an account of cities like Ahmadabad, Cambay, Aurangabad and Golconda.",
    importance: "MEDIUM"
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
,
  
  // DRAVIDIAN LITERATURE QUIZ (25 questions)
  {
    id: 66,
    category: "Dravidian Literature",
    question: "Which text is considered the oldest Tamil grammar work?",
    options: ["Silappatikaram", "Tolkappiyam", "Tirukkural", "Manimegalai"],
    correct: 1,
    explanation: "Tolkappiyam is the oldest extant Tamil grammar text, predating other major works."
  },
  {
    id: 67,
    category: "Dravidian Literature",
    question: "The Tamil Sangam literature consists of how many major anthologies?",
    options: ["Eight (Ettuthogai)", "Ten (Pattuppattu)", "Both Ettuthogai and Pattuppattu", "Eighteen (Pathinenkilkanakku)"],
    correct: 2,
    explanation: "Tamil Sangam includes both Ettuthogai (Eight Anthologies) and Pattuppattu (Ten Idylls)."
  },
  {
    id: 68,
    category: "Dravidian Literature",
    question: "Who is known as the 'Father of Malayalam Literature'?",
    options: ["Tunchaththu Ezhuthachan", "Cherusseri", "Ramacharitam author", "Niranam poets"],
    correct: 0,
    explanation: "Tunchaththu Ezhuthachan is revered as the father of Malayalam literature."
  },
  {
    id: 69,
    category: "Dravidian Literature",
    question: "Which Telugu poet is known as the 'Adi Kavi' (first poet) of Telugu?",
    options: ["Peddana", "Nannaya", "Tikkana", "Errana"],
    correct: 1,
    explanation: "Nannaya is considered the first great Telugu poet (Adi Kavi) who began translating Mahabharata."
  },
  {
    id: 70,
    category: "Dravidian Literature",
    question: "The Ashtadiggajas were eight poets in the court of which ruler?",
    options: ["Krishnadevaraya", "Achyutaraya", "Sadasiva Raya", "Tirumala Deva Raya"],
    correct: 0,
    explanation: "Ashtadiggajas (eight elephants) were the eight great Telugu poets in Krishnadevaraya's court."
  },
  {
    id: 71,
    category: "Dravidian Literature",
    question: "Which are the three gems (Ratnatraya) of Kannada literature?",
    options: ["Pampa, Ponna, Ranna", "Basava, Akka Mahadevi, Allama Prabhu", "Kumara Vyasa, Sarvajna, Kanakadasa", "Harihara, Raghavanka, Rudra Bhatta"],
    correct: 0,
    explanation: "Pampa, Ponna, and Ranna are known as the Ratnatraya (three gems) of Kannada literature."
  },
  {
    id: 72,
    category: "Dravidian Literature",
    question: "Silappatikaram, a Tamil epic, tells the story of which character?",
    options: ["Kovalan and Kannagi", "Madhavi and Kovalan", "Kannagi's revenge", "All of the above"],
    correct: 3,
    explanation: "Silappatikaram narrates the story of Kovalan, Kannagi, and Madhavi, focusing on Kannagi's quest for justice."
  },
  {
    id: 73,
    category: "Dravidian Literature",
    question: "Which Malayalam work is considered the first Malayalam prose?",
    options: ["Ramacharitam", "Adhyatma Ramayanam Kilippattu", "Bhasha Kautaliyam", "Krishnagatha"],
    correct: 0,
    explanation: "Ramacharitam (12th century) is among the earliest Malayalam prose works."
  },
  {
    id: 74,
    category: "Dravidian Literature",
    question: "Who completed the Telugu Mahabharata translation begun by Nannaya?",
    options: ["Tikkana and Errana", "Peddana", "Srinatha", "Potana"],
    correct: 0,
    explanation: "Nannaya began the Telugu Mahabharata; Tikkana continued it, and Errana completed it."
  },
  {
    id: 75,
    category: "Dravidian Literature",
    question: "Pampa's Adipurana is written in which language?",
    options: ["Tamil", "Telugu", "Kannada", "Malayalam"],
    correct: 2,
    explanation: "Pampa (10th century) wrote Adipurana in Kannada, establishing literary standards."
  },
  {
    id: 76,
    category: "Dravidian Literature",
    question: "What is the theme of Manimegalai, sequel to Silappatikaram?",
    options: ["Love story", "Buddhist philosophy and social reform", "War and heroism", "Devotion to Shiva"],
    correct: 1,
    explanation: "Manimegalai, the sequel to Silappatikaram, focuses on Buddhist teachings and social issues."
  },
  {
    id: 77,
    category: "Dravidian Literature",
    question: "Which script did Tunchaththu Ezhuthachan help popularize for Malayalam?",
    options: ["Vatteluttu", "Grantha", "Malayalam script", "Tamil script"],
    correct: 2,
    explanation: "Ezhuthachan played a key role in popularizing the Malayalam script for literary use."
  },
  {
    id: 78,
    category: "Dravidian Literature",
    question: "Peddana, a member of Ashtadiggajas, wrote which famous work?",
    options: ["Manu Charitra", "Panduranga Mahatmyam", "Amukta Malyada", "Basava Purana"],
    correct: 0,
    explanation: "Allasani Peddana wrote Manu Charitra and was highly regarded by Krishnadevaraya."
  },
  {
    id: 79,
    category: "Dravidian Literature",
    question: "Kumara Vyasa wrote the Kannada version of which epic?",
    options: ["Ramayana", "Mahabharata", "Bhagavata", "Devi Mahatmya"],
    correct: 1,
    explanation: "Kumara Vyasa (15th century) wrote Karnata Bharata Kathamanjari, the Kannada Mahabharata."
  },
  {
    id: 80,
    category: "Dravidian Literature",
    question: "The Sangam period in Tamil literature is dated approximately to which period?",
    options: ["300 BCE - 300 CE", "500 BCE - 100 CE", "100 CE - 500 CE", "500 CE - 800 CE"],
    correct: 0,
    explanation: "The Sangam period is generally dated from around 300 BCE to 300 CE."
  },
  {
    id: 81,
    category: "Dravidian Literature",
    question: "Pathinenkilkanakku refers to how many minor Tamil literary works?",
    options: ["Eight", "Ten", "Eighteen", "Twenty-four"],
    correct: 2,
    explanation: "Pathinenkilkanakku means 'Eighteen Lesser Texts' in Tamil Sangam literature."
  },
  {
    id: 82,
    category: "Dravidian Literature",
    question: "Which Telugu poet wrote Amukta Malyada about Andal?",
    options: ["Krishnadevaraya", "Peddana", "Srinatha", "Bammera Potana"],
    correct: 0,
    explanation: "Krishnadevaraya himself composed Amukta Malyada in Telugu, about the Alvar saint Andal."
  },
  {
    id: 83,
    category: "Dravidian Literature",
    question: "Ranna, one of the Kannada Ratnatraya, wrote which famous work?",
    options: ["Adipurana", "Gadayuddha", "Vikramarjuna Vijaya", "Kavirajamarga"],
    correct: 1,
    explanation: "Ranna wrote Gadayuddha (Gadayuddham), also known as Sahasabhima Vijayam."
  },
  {
    id: 84,
    category: "Dravidian Literature",
    question: "Thiruvalluvar's Tirukkural contains how many couplets?",
    options: ["1,000", "1,330", "2,000", "365"],
    correct: 1,
    explanation: "Tirukkural consists of 1,330 couplets (kurals) divided into three sections."
  },
  {
    id: 85,
    category: "Dravidian Literature",
    question: "Which Kannada poet is associated with Vachana literature?",
    options: ["Basavanna", "Pampa", "Kumara Vyasa", "Purandara Dasa"],
    correct: 0,
    explanation: "Basavanna (12th century) pioneered Vachana sahitya, a form of rhythmic prose in Kannada."
  },
  {
    id: 86,
    category: "Dravidian Literature",
    question: "Nannaya's Telugu Mahabharata covers which parvas?",
    options: ["Adi Parva to Sabha Parva", "Adi Parva to Aranya Parva (first 2.5)", "Complete Mahabharata", "Only Adi Parva"],
    correct: 1,
    explanation: "Nannaya translated the first two and a half parvas before his death."
  },
  {
    id: 87,
    category: "Dravidian Literature",
    question: "Ezhuthachan's major Malayalam works are based on which Sanskrit epics?",
    options: ["Ramayana and Mahabharata", "Puranas only", "Vedas", "Upanishads"],
    correct: 0,
    explanation: "Ezhuthachan wrote Adhyatma Ramayanam Kilippattu and Mahabharatam in Malayalam."
  },
  {
    id: 88,
    category: "Dravidian Literature",
    question: "Ponna, second of the Kannada Ratnatraya, wrote which work?",
    options: ["Shanti Purana", "Adipurana", "Gadayuddha", "Vikramarjuna Vijaya"],
    correct: 0,
    explanation: "Ponna wrote Shanti Purana (Shantipurana) in the 10th century."
  },
  {
    id: 89,
    category: "Dravidian Literature",
    question: "Which language was NOT part of classical Dravidian literature?",
    options: ["Tamil", "Hindi", "Telugu", "Kannada"],
    correct: 1,
    explanation: "Hindi is an Indo-Aryan language, not Dravidian. Classical Dravidian includes Tamil, Telugu, Kannada, Malayalam."
  },
  {
    id: 90,
    category: "Dravidian Literature",
    question: "Bammera Potana wrote the Telugu Bhagavatam dedicated to which deity?",
    options: ["Rama", "Shiva", "Krishna", "Vishnu"],
    correct: 2,
    explanation: "Potana dedicated his Telugu Bhagavatam to Lord Rama but it focuses on Krishna's stories."
  },
  
  // MEDIEVAL LITERATURE QUIZ (20 questions)
  {
    id: 91,
    category: "Medieval Literature",
    question: "Amir Khusrau is credited with inventing which musical instrument?",
    options: ["Tabla", "Sitar", "Sarod", "Both Tabla and Sitar"],
    correct: 3,
    explanation: "Amir Khusrau is traditionally credited with inventing both the tabla and sitar, though this is debated."
  },
  {
    id: 92,
    category: "Medieval Literature",
    question: "Babarnama (Tuzuk-i-Baburi) was written in which language?",
    options: ["Persian", "Chagatai Turkish", "Arabic", "Hindi"],
    correct: 1,
    explanation: "Babur wrote his autobiography Babarnama in Chagatai Turkish, later translated to Persian."
  },
  {
    id: 93,
    category: "Medieval Literature",
    question: "Ain-e Akbari, documenting Akbar's administration, was written by:",
    options: ["Abul Fazl", "Badauni", "Nizamuddin Ahmad", "Ferishta"],
    correct: 0,
    explanation: "Abul Fazl wrote Ain-e Akbari as the third volume of Akbarnama."
  },
  {
    id: 94,
    category: "Medieval Literature",
    question: "Razmanama was the first Persian translation of which text?",
    options: ["Ramayana", "Mahabharata", "Bhagavad Gita", "Panchatantra"],
    correct: 1,
    explanation: "Razmanama was the first complete Persian translation of the Mahabharata, commissioned by Akbar."
  },
  {
    id: 95,
    category: "Medieval Literature",
    question: "Which UPSC 2022 question featured Yoga Vasistha?",
    options: ["Philosophy text", "Medical treatise", "Astronomical work", "Legal code"],
    correct: 0,
    explanation: "Yoga Vasistha is a philosophical text dialogue between Vasistha and Rama [UPSC 2022]."
  },
  {
    id: 96,
    category: "Medieval Literature",
    question: "Mirza Ghalib primarily wrote in which languages?",
    options: ["Urdu only", "Persian only", "Both Urdu and Persian", "Hindi and Urdu"],
    correct: 2,
    explanation: "Mirza Ghalib was a master of both Urdu and Persian poetry."
  },
  {
    id: 97,
    category: "Medieval Literature",
    question: "Allama Iqbal's poetry contributed significantly to which movement?",
    options: ["Bengal Renaissance", "Pakistan Movement", "Hindi literary movement", "Sufi revival"],
    correct: 1,
    explanation: "Allama Iqbal's poetry and philosophy played a crucial role in inspiring the Pakistan Movement."
  },
  {
    id: 98,
    category: "Medieval Literature",
    question: "Which is considered the first Hindi book?",
    options: ["Prithviraj Raso", "Ramcharitmanas", "Padmavat", "Prithvirajacharita"],
    correct: 0,
    explanation: "Prithviraj Raso by Chand Bardai is considered among the earliest Hindi literary works."
  },
  {
    id: 99,
    category: "Medieval Literature",
    question: "Tulsidas wrote Ramcharitmanas in which language?",
    options: ["Sanskrit", "Braj Bhasha", "Awadhi", "Khari Boli"],
    correct: 2,
    explanation: "Tulsidas composed Ramcharitmanas in Awadhi, making it accessible to common people."
  },
  {
    id: 100,
    category: "Medieval Literature",
    question: "Surdas is famous for his devotional poetry dedicated to:",
    options: ["Rama", "Krishna", "Shiva", "Devi"],
    correct: 1,
    explanation: "Surdas's poetry, particularly Sur Sagar, is devoted to Lord Krishna's childhood and youth."
  },
  {
    id: 101,
    category: "Medieval Literature",
    question: "Akbarnama, the official chronicle of Akbar's reign, was written by:",
    options: ["Abul Fazl", "Badauni", "Birbal", "Todar Mal"],
    correct: 0,
    explanation: "Abul Fazl authored Akbarnama, the comprehensive biography of Emperor Akbar."
  },
  {
    id: 102,
    category: "Medieval Literature",
    question: "Amir Khusrau served in the courts of how many Delhi Sultans?",
    options: ["Three", "Five", "Seven", "Ten"],
    correct: 2,
    explanation: "Amir Khusrau served under seven Delhi Sultans during his long career."
  },
  {
    id: 103,
    category: "Medieval Literature",
    question: "The evolution of Urdu language combined which two primary influences?",
    options: ["Arabic and Turkish", "Persian and Hindi", "Sanskrit and Arabic", "Turkish and Hindi"],
    correct: 1,
    explanation: "Urdu evolved from the interaction of Persian (court language) with local Hindi/Hindustani."
  },
  {
    id: 104,
    category: "Medieval Literature",
    question: "Which Persian work chronicles the Timurid dynasty's history?",
    options: ["Babarnama", "Tarikh-e-Khandan-e-Timuriyah", "Ain-e Akbari", "Tuzuk-i-Jahangiri"],
    correct: 1,
    explanation: "Tarikh-e-Khandan-e-Timuriyah details the Timurid dynasty history, crucial for understanding the Mughals."
  },
  {
    id: 105,
    category: "Medieval Literature",
    question: "Prithviraj Raso narrates the story of which Rajput king?",
    options: ["Rana Pratap", "Prithviraj Chauhan", "Rana Sanga", "Rana Kumbha"],
    correct: 1,
    explanation: "Prithviraj Raso by Chand Bardai chronicles the life of Prithviraj Chauhan."
  },
  {
    id: 106,
    category: "Medieval Literature",
    question: "Tulsidas's Ramcharitmanas is also known as:",
    options: ["Tulsi Ramayana", "Awadhi Ramayana", "Both of the above", "Hindi Valmiki"],
    correct: 2,
    explanation: "Ramcharitmanas is popularly called both Tulsi Ramayana and Awadhi Ramayana."
  },
  {
    id: 107,
    category: "Medieval Literature",
    question: "Which Sufi saint greatly influenced Amir Khusrau?",
    options: ["Khwaja Moinuddin Chishti", "Nizamuddin Auliya", "Baba Farid", "Sheikh Salim Chishti"],
    correct: 1,
    explanation: "Amir Khusrau was a devoted disciple of Sufi saint Nizamuddin Auliya."
  },
  {
    id: 108,
    category: "Medieval Literature",
    question: "Surdas is believed to have been:",
    options: ["Blind from birth", "Lost sight later", "Had normal vision", "Partially sighted"],
    correct: 0,
    explanation: "Traditional accounts describe Surdas as blind, though this is debated by scholars."
  },
  {
    id: 109,
    category: "Medieval Literature",
    question: "The Razmanama translation project involved how many scholars?",
    options: ["Only one", "A team of multiple scholars", "Two scholars", "Unknown"],
    correct: 1,
    explanation: "The Razmanama was a massive collaborative project involving multiple Persian scholars."
  },
  {
    id: 110,
    category: "Medieval Literature",
    question: "Which medieval poet is known as 'Tuti-e-Hind' (Parrot of India)?",
    options: ["Mirza Ghalib", "Amir Khusrau", "Allama Iqbal", "Mir Taqi Mir"],
    correct: 1,
    explanation: "Amir Khusrau is called 'Tuti-e-Hind' for his melodious poetry and musical innovations."
  },
  
  // MODERN LITERATURE QUIZ (15 questions)
  {
    id: 111,
    category: "Modern Literature",
    question: "Who is known as the 'Father of Modern Hindi Literature'?",
    options: ["Munshi Premchand", "Bharatendu Harishchandra", "Mahadevi Varma", "Jaishankar Prasad"],
    correct: 1,
    explanation: "Bharatendu Harishchandra is credited as the father of modern Hindi literature and journalism."
  },
  {
    id: 112,
    category: "Modern Literature",
    question: "Munshi Premchand is best known for writing in which genre?",
    options: ["Poetry", "Realistic fiction", "Historical novels", "Mythology"],
    correct: 1,
    explanation: "Munshi Premchand pioneered realistic fiction in Hindi-Urdu, depicting rural Indian life."
  },
  {
    id: 113,
    category: "Modern Literature",
    question: "Mahadevi Varma was a leading poet of which Hindi literary movement?",
    options: ["Bhakti movement", "Chhayavad (Romanticism)", "Pragativad (Progressivism)", "Prayogvad (Experimentalism)"],
    correct: 1,
    explanation: "Mahadevi Varma was a prominent Chhayavadi poet, known for her mystical and romantic poetry."
  },
  {
    id: 114,
    category: "Modern Literature",
    question: "'Anand Math' which contains 'Vande Mataram' was written by:",
    options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Bharatendu Harishchandra", "Swami Vivekananda"],
    correct: 1,
    explanation: "Bankim Chandra Chatterjee wrote Anand Math (1882), containing the song Vande Mataram."
  },
  {
    id: 115,
    category: "Modern Literature",
    question: "Rabindranath Tagore won the Nobel Prize for which work?",
    options: ["Gitanjali", "Gora", "The Home and the World", "Kabuliwala"],
    correct: 0,
    explanation: "Tagore won the 1913 Nobel Prize in Literature for Gitanjali (Song Offerings)."
  },
  {
    id: 116,
    category: "Modern Literature",
    question: "Lal Ded, the first female poetess in Kashmir, belonged to which tradition?",
    options: ["Sufi", "Shaivite mystic", "Buddhist", "Vaishnav"],
    correct: 1,
    explanation: "Lal Ded (Lalleshwari) was a 14th-century Kashmiri Shaivite mystic poetess."
  },
  {
    id: 117,
    category: "Modern Literature",
    question: "Which language is the most spoken in India according to the 2011 census?",
    options: ["Bengali", "Hindi", "Telugu", "Marathi"],
    correct: 1,
    explanation: "Hindi is the most spoken language in India (44% of population, 2011 census)."
  },
  {
    id: 118,
    category: "Modern Literature",
    question: "How many languages were originally in the Eighth Schedule of the Constitution?",
    options: ["14", "18", "22", "24"],
    correct: 0,
    explanation: "The Eighth Schedule originally had 14 languages in 1950; now it has 22."
  },
  {
    id: 119,
    category: "Modern Literature",
    question: "Which amendment added Sindhi to the Eighth Schedule?",
    options: ["21st Amendment (1967)", "61st Amendment", "71st Amendment", "92nd Amendment"],
    correct: 0,
    explanation: "The 21st Amendment (1967) added Sindhi to the Eighth Schedule."
  },
  {
    id: 120,
    category: "Modern Literature",
    question: "How many classical languages were added to the Classical Languages list in 2024?",
    options: ["Three", "Four", "Five", "Six"],
    correct: 2,
    explanation: "In 2024, five languages were added: Marathi, Pali, Prakrit, Assamese, and Bengali."
  },
  {
    id: 121,
    category: "Modern Literature",
    question: "Premchand's famous novel 'Godan' deals with:",
    options: ["Urban middle class", "Rural poverty and farmers", "Independence struggle", "Historical events"],
    correct: 1,
    explanation: "Godan depicts the tragic life of a poor Indian farmer and rural social issues."
  },
  {
    id: 122,
    category: "Modern Literature",
    question: "Bharatendu Harishchandra pioneered which form of Hindi theatre?",
    options: ["Classical Sanskrit drama", "Modern Hindi drama", "Folk theatre", "Nautanki"],
    correct: 1,
    explanation: "Bharatendu established modern Hindi drama and theatre in the late 19th century."
  },
  {
    id: 123,
    category: "Modern Literature",
    question: "Which classical language status was given FIRST in 2004?",
    options: ["Sanskrit", "Tamil", "Telugu", "Kannada"],
    correct: 1,
    explanation: "Tamil was the first language to receive classical status in 2004."
  },
  {
    id: 124,
    category: "Modern Literature",
    question: "Bankim Chandra's Anand Math is set during which period?",
    options: ["Mughal era", "British Raj", "Sannyasi Rebellion", "1857 Revolt"],
    correct: 2,
    explanation: "Anand Math is set against the backdrop of the Sannyasi Rebellion in Bengal."
  },
  {
    id: 125,
    category: "Modern Literature",
    question: "The Constitution defines Hindi in which script as the official language?",
    options: ["Any script", "Devanagari", "Persian", "Roman"],
    correct: 1,
    explanation: "Article 343(1) specifies Hindi in Devanagari script as the official language of the Union."
  },
  
  // UNESCO HERITAGE QUIZ (30 questions)
  {
    id: 126,
    category: "UNESCO Heritage",
    question: "Which was India's first UNESCO World Heritage Site (1983)?",
    options: ["Taj Mahal", "Ajanta Caves", "Red Fort", "Qutb Minar"],
    correct: 0,
    explanation: "Taj Mahal was inscribed as a UNESCO World Heritage Site in 1983."
  },
  {
    id: 127,
    category: "UNESCO Heritage",
    question: "Shantiniketan, a 2023 UNESCO site, was established by:",
    options: ["Mahatma Gandhi", "Rabindranath Tagore", "Swami Vivekananda", "Raja Ram Mohan Roy"],
    correct: 1,
    explanation: "Rabindranath Tagore established Shantiniketan in 1901 [UPSC 2024]."
  },
  {
    id: 128,
    category: "UNESCO Heritage",
    question: "The Sacred Ensembles of Hoysalas date from which centuries?",
    options: ["8th-9th", "10th-11th", "12th-13th", "14th-15th"],
    correct: 2,
    explanation: "Hoysala temples date from the 12th to 13th centuries AD [UPSC 2024]."
  },
  {
    id: 129,
    category: "UNESCO Heritage",
    question: "Moidams of Ahom Kingdom are located in which state?",
    options: ["Arunachal Pradesh", "Assam", "Meghalaya", "Manipur"],
    correct: 1,
    explanation: "Moidams (royal burial mounds) are in Assam, inscribed in 2024."
  },
  {
    id: 130,
    category: "UNESCO Heritage",
    question: "Kaziranga National Park is famous for which animal?",
    options: ["Bengal Tiger", "Asiatic Lion", "One-horned Rhinoceros", "Snow Leopard"],
    correct: 2,
    explanation: "Kaziranga has the world's largest population of one-horned rhinoceroses."
  },
  {
    id: 131,
    category: "UNESCO Heritage",
    question: "Western Ghats spans across how many states?",
    options: ["Four", "Five", "Six", "Seven"],
    correct: 2,
    explanation: "Western Ghats covers Kerala, Tamil Nadu, Karnataka, Maharashtra, Goa, and Gujarat."
  },
  {
    id: 132,
    category: "UNESCO Heritage",
    question: "Garba of Gujarat was inscribed as Intangible Heritage in:",
    options: ["2021", "2022", "2023", "2024"],
    correct: 2,
    explanation: "Garba was inscribed in 2023 [UPSC 2024]."
  },
  {
    id: 133,
    category: "UNESCO Heritage",
    question: "Yoga was recognized by UNESCO in which year?",
    options: ["2014", "2015", "2016", "2017"],
    correct: 2,
    explanation: "Yoga was inscribed as Intangible Cultural Heritage in 2016."
  },
  {
    id: 134,
    category: "UNESCO Heritage",
    question: "Kumbh Mela is held at how many locations in rotation?",
    options: ["Two", "Three", "Four", "Five"],
    correct: 2,
    explanation: "Kumbh Mela rotates among Allahabad, Haridwar, Ujjain, and Nasik every four years."
  },
  {
    id: 135,
    category: "UNESCO Heritage",
    question: "Mumbai was recognized as a UNESCO Creative City for:",
    options: ["Literature", "Music", "Film", "Design"],
    correct: 2,
    explanation: "Mumbai (Bollywood) is a UNESCO Creative City of Film (2019)."
  },
  {
    id: 136,
    category: "UNESCO Heritage",
    question: "Kozhikode became India's first UNESCO City of:",
    options: ["Music", "Literature", "Gastronomy", "Design"],
    correct: 1,
    explanation: "Kozhikode is India's first UNESCO City of Literature (2023)."
  },
  {
    id: 137,
    category: "UNESCO Heritage",
    question: "The Rigveda Manuscripts were inscribed in the Memory of the World Register in:",
    options: ["2005", "2007", "2009", "2011"],
    correct: 1,
    explanation: "Rigveda Manuscripts were inscribed in 2007 as foundational Vedic texts."
  },
  {
    id: 138,
    category: "UNESCO Heritage",
    question: "Dholavira, a Harappan site, is located in:",
    options: ["Rajasthan", "Punjab", "Gujarat", "Haryana"],
    correct: 2,
    explanation: "Dholavira in Gujarat showcases sophisticated Harappan water management."
  },
  {
    id: 139,
    category: "UNESCO Heritage",
    question: "Ramappa Temple is known for its:",
    options: ["Size", "Gold coating", "Floating bricks", "Underground chambers"],
    correct: 2,
    explanation: "Ramappa Temple features lightweight 'floating bricks' that reduced roof weight."
  },
  {
    id: 140,
    category: "UNESCO Heritage",
    question: "Sundarban mangrove forests are shared between India and:",
    options: ["Nepal", "Bangladesh", "Myanmar", "Bhutan"],
    correct: 1,
    explanation: "Sundarbans straddle India (West Bengal) and Bangladesh."
  },
  {
    id: 141,
    category: "UNESCO Heritage",
    question: "Rani-Ki-Vav is which type of structure?",
    options: ["Palace", "Stepwell", "Temple", "Fort"],
    correct: 1,
    explanation: "Rani-Ki-Vav is an intricately designed stepwell in Gujarat [UPSC 2024]."
  },
  {
    id: 142,
    category: "UNESCO Heritage",
    question: "Mahabodhi Temple at Bodh Gaya marks the site of Buddha's:",
    options: ["Birth", "Enlightenment", "First Sermon", "Death"],
    correct: 1,
    explanation: "Mahabodhi Temple commemorates Buddha's enlightenment [UPSC 2024]."
  },
  {
    id: 143,
    category: "UNESCO Heritage",
    question: "Khajuraho temples were built by which dynasty?",
    options: ["Gupta", "Chandella", "Pallava", "Chalukya"],
    correct: 1,
    explanation: "Chandella dynasty built Khajuraho temples between 950-1050 AD."
  },
  {
    id: 144,
    category: "UNESCO Heritage",
    question: "Great Living Chola Temples include how many temples?",
    options: ["Two", "Three", "Four", "Five"],
    correct: 1,
    explanation: "Three temples: Brihadisvara at Thanjavur, Brihadisvara at Gangaikondacholisvaram, Airavatesvara at Darasuram."
  },
  {
    id: 145,
    category: "UNESCO Heritage",
    question: "Buddhist chanting of Ladakh includes how many major Buddhist sects?",
    options: ["Two", "Three", "Four", "Five"],
    correct: 2,
    explanation: "Four major sects: Nyngma, Kagyud, Shakya, and Geluk."
  },
  {
    id: 146,
    category: "UNESCO Heritage",
    question: "Chhau dance has how many regional variations?",
    options: ["Two", "Three", "Four", "Five"],
    correct: 1,
    explanation: "Three variations: Purulia (West Bengal), Seraikella (Jharkhand), Mayurbhanj (Odisha)."
  },
  {
    id: 147,
    category: "UNESCO Heritage",
    question: "Kumbh Mela is recognized as:",
    options: ["Natural Heritage", "Cultural Heritage Site", "Intangible Cultural Heritage", "Mixed Heritage"],
    correct: 2,
    explanation: "Kumbh Mela (2017) is an Intangible Cultural Heritage for its peaceful congregation."
  },
  {
    id: 148,
    category: "UNESCO Heritage",
    question: "Hill Forts of Rajasthan includes how many forts?",
    options: ["Four", "Six", "Eight", "Ten"],
    correct: 1,
    explanation: "Six forts: Chittorgarh, Kumbhalgarh, Sawai Madhopur, Jhalawar, Jaipur, Jaisalmer."
  },
  {
    id: 149,
    category: "UNESCO Heritage",
    question: "Nalanda University flourished from which period?",
    options: ["1st-5th century", "3rd-13th century", "5th-10th century", "8th-15th century"],
    correct: 1,
    explanation: "Nalanda Mahavihara operated from 3rd century BC to 13th century AD."
  },
  {
    id: 150,
    category: "UNESCO Heritage",
    question: "Ajanta Caves contain paintings from which periods?",
    options: ["Only Buddhist period", "2nd-1st century BC and 5th-6th century AD", "Only Gupta period", "Medieval period"],
    correct: 1,
    explanation: "Ajanta has two phases: 2nd-1st century BC and Gupta period (5th-6th century AD)."
  },
  {
    id: 151,
    category: "UNESCO Heritage",
    question: "Ellora Caves showcase which three religions?",
    options: ["Hinduism, Jainism, Buddhism", "Hinduism, Buddhism, Sikhism", "Buddhism, Islam, Hinduism", "Jainism, Sikhism, Buddhism"],
    correct: 0,
    explanation: "Ellora's 34 caves represent Buddhism, Brahmanism (Hinduism), and Jainism."
  },
  {
    id: 152,
    category: "UNESCO Heritage",
    question: "Vedic Chanting tradition is among the oldest:",
    options: ["Written traditions", "Oral traditions", "Dance traditions", "Architectural traditions"],
    correct: 1,
    explanation: "Vedic Chanting (2008) is one of the oldest unbroken oral traditions."
  },
  {
    id: 153,
    category: "UNESCO Heritage",
    question: "Lucknow became the second Indian city recognized for:",
    options: ["Music", "Literature", "Gastronomy", "Film"],
    correct: 2,
    explanation: "Lucknow (2025) is the second gastronomy city after Hyderabad (2019)."
  },
  {
    id: 154,
    category: "UNESCO Heritage",
    question: "Gwalior is a UNESCO Creative City for its:",
    options: ["Architecture", "Music (Gwalior gharana)", "Crafts", "Literature"],
    correct: 1,
    explanation: "Gwalior (2023) is recognized for the Gwalior gharana's contribution to Hindustani classical music."
  },
  {
    id: 155,
    category: "UNESCO Heritage",
    question: "Which is the world's third highest peak mentioned in a UNESCO site?",
    options: ["K2", "Kangchenjunga", "Nanda Devi", "Makalu"],
    correct: 1,
    explanation: "Khangchendzonga National Park (Sikkim) includes the world's third highest peak."
  },
  
  // BOOKS & AUTHORS QUIZ (25 questions)
  {
    id: 156,
    category: "Books & Authors",
    question: "Who is the author of the Sanskrit epic Ramayana?",
    options: ["Ved Vyas", "Valmiki", "Kalidasa", "Tulsidas"],
    correct: 1,
    explanation: "Valmiki composed the original Sanskrit Ramayana."
  },
  {
    id: 157,
    category: "Books & Authors",
    question: "Ved Vyas is credited with composing:",
    options: ["Ramayana", "Mahabharata", "Vedas", "Upanishads"],
    correct: 1,
    explanation: "Ved Vyas compiled the Mahabharata, including the Bhagavad Gita."
  },
  {
    id: 158,
    category: "Books & Authors",
    question: "Panini's Ashtadhyayi is a treatise on:",
    options: ["Medicine", "Grammar", "Astronomy", "Politics"],
    correct: 1,
    explanation: "Ashtadhyayi is the foundational Sanskrit grammar text by Panini."
  },
  {
    id: 159,
    category: "Books & Authors",
    question: "Charaka Samhita is a classic text on:",
    options: ["Surgery", "Medicine (Ayurveda)", "Astronomy", "Mathematics"],
    correct: 1,
    explanation: "Charaka Samhita is an ancient Ayurvedic text on medicine and health."
  },
  {
    id: 160,
    category: "Books & Authors",
    question: "Sushruta Samhita focuses on:",
    options: ["Medicine", "Surgery", "Astrology", "Grammar"],
    correct: 1,
    explanation: "Sushruta Samhita is the ancient Ayurvedic text on surgery."
  },
  {
    id: 161,
    category: "Books & Authors",
    question: "Kalidasa is considered the greatest:",
    options: ["Tamil poet", "Sanskrit poet and dramatist", "Persian poet", "Hindi poet"],
    correct: 1,
    explanation: "Kalidasa is regarded as the greatest classical Sanskrit poet and dramatist."
  },
  {
    id: 162,
    category: "Books & Authors",
    question: "Natyasastra, the treatise on performing arts, was written by:",
    options: ["Kalidasa", "Bharat Muni", "Vishakhadatta", "Sudraka"],
    correct: 1,
    explanation: "Bharata Muni composed Natyasastra, the foundational text on drama and dance."
  },
  {
    id: 163,
    category: "Books & Authors",
    question: "Bhaskaracharya's Siddhanta Shiromani covers:",
    options: ["Medicine", "Astronomy and Mathematics", "Grammar", "Law"],
    correct: 1,
    explanation: "Siddhanta Shiromani contains four parts: Lilavati (arithmetic), Bijaganita (algebra), and astronomy."
  },
  {
    id: 164,
    category: "Books & Authors",
    question: "Mricchakatika (The Little Clay Cart) was written by:",
    options: ["Kalidasa", "Bhasa", "Sudraka", "Vishakhadatta"],
    correct: 2,
    explanation: "Sudraka authored Mricchakatika, a social drama in Sanskrit."
  },
  {
    id: 165,
    category: "Books & Authors",
    question: "Vishakhadatta's Mudrarakshasa is about:",
    options: ["Love story", "Chandragupta Maurya's political intrigue", "Devotional theme", "War epic"],
    correct: 1,
    explanation: "Mudrarakshasa depicts Chandragupta Maurya defeating the Nandas with Chanakya's help."
  },
  {
    id: 166,
    category: "Books & Authors",
    question: "Patanjali wrote Mahabhasya as a commentary on:",
    options: ["Vedas", "Panini's Ashtadhyayi", "Upanishads", "Puranas"],
    correct: 1,
    explanation: "Mahabhasya is Patanjali's great commentary on Panini's grammar."
  },
  {
    id: 167,
    category: "Books & Authors",
    question: "Varahamihira's Brihatsamhita deals with:",
    options: ["Medicine", "Astrology and astronomy", "Grammar", "Dance"],
    correct: 1,
    explanation: "Varahamihira's works cover astronomy, astrology, and natural phenomena."
  },
  {
    id: 168,
    category: "Books & Authors",
    question: "Nagarjuna founded which Buddhist school of philosophy?",
    options: ["Hinayana", "Madhyamika", "Vajrayana", "Zen"],
    correct: 1,
    explanation: "Nagarjuna founded the Madhyamika (Middle Way) school of Mahayana Buddhism."
  },
  {
    id: 169,
    category: "Books & Authors",
    question: "Asvaghosha's Buddhacharita narrates the life of:",
    options: ["Mahavira", "Buddha", "Ashoka", "Kanishka"],
    correct: 1,
    explanation: "Buddhacharita by Asvaghosha is an epic poem on Buddha's life."
  },
  {
    id: 170,
    category: "Books & Authors",
    question: "Jayadeva's Gita Govinda is a devotional work about:",
    options: ["Rama", "Krishna and Radha", "Shiva", "Durga"],
    correct: 1,
    explanation: "Gita Govinda celebrates the divine love of Krishna and Radha."
  },
  {
    id: 171,
    category: "Books & Authors",
    question: "Kautilya's Arthashastra was written by which other name?",
    options: ["Panini", "Chanakya", "Patanjali", "Kalidasa"],
    correct: 1,
    explanation: "Kautilya (Chanakya/Vishnugupta) wrote the Arthashastra on statecraft."
  },
  {
    id: 172,
    category: "Books & Authors",
    question: "Kalidasa's Meghaduta is written in which form?",
    options: ["Epic", "Drama", "Lyric poetry", "Prose"],
    correct: 2,
    explanation: "Meghaduta is a lyric poem where a yaksha sends messages via a cloud."
  },
  {
    id: 173,
    category: "Books & Authors",
    question: "Bammera Potana wrote the Telugu version of:",
    options: ["Ramayana", "Mahabharata", "Bhagavatam", "Puranas"],
    correct: 2,
    explanation: "Potana's Telugu Bhagavatam is a masterpiece focusing on Krishna."
  },
  {
    id: 174,
    category: "Books & Authors",
    question: "Dandin's Dasakumaracharita is famous for its:",
    options: ["Poetry", "Prose narrative", "Grammar", "Philosophy"],
    correct: 1,
    explanation: "Dasakumaracharita is a classic Sanskrit prose narrative of ten princes."
  },
  {
    id: 175,
    category: "Books & Authors",
    question: "Rajasekhara was a poet-dramatist in which century?",
    options: ["6th-7th", "8th-9th", "9th-10th", "11th-12th"],
    correct: 2,
    explanation: "Rajasekhara (9th-10th century) wrote plays like Karpuramanjari."
  },
  {
    id: 176,
    category: "Books & Authors",
    question: "Vijnaneshwara's Mitakshara is a commentary on:",
    options: ["Vedas", "Hindu law (Yajnavalkya Smriti)", "Puranas", "Epics"],
    correct: 1,
    explanation: "Mitakshara is an influential commentary on Yajnavalkya Smriti (Hindu law)."
  },
  {
    id: 177,
    category: "Books & Authors",
    question: "Chand Bardai's Prithviraj Raso is considered:",
    options: ["First Sanskrit work", "First Hindi book", "First Tamil work", "First Urdu work"],
    correct: 1,
    explanation: "Prithviraj Raso is among the earliest works in Hindi literature."
  },
  {
    id: 178,
    category: "Books & Authors",
    question: "Bhavabhuti wrote Uttarama-Charita as a continuation of:",
    options: ["Mahabharata", "Valmiki's Ramayana", "Puranas", "Vedas"],
    correct: 1,
    explanation: "Uttarama-Charita continues the story after Valmiki's Ramayana."
  },
  {
    id: 179,
    category: "Books & Authors",
    question: "Which work contains the story of Shakuntala?",
    options: ["Malavikagnimitram", "Abhijnanasakuntalam", "Meghaduta", "Vikramorvasiyam"],
    correct: 1,
    explanation: "Kalidasa's Abhijnanasakuntalam (Shakuntala) is his most famous play."
  },
  {
    id: 180,
    category: "Books & Authors",
    question: "Hemchandra was a scholar in which tradition?",
    options: ["Buddhist", "Jain", "Vedic", "Shaivite"],
    correct: 1,
    explanation: "Hemchandra was a Jain scholar, grammarian, and polymath (12th century)."
  },
  
  // FOREIGN TRAVELLERS QUIZ (25 questions)
  {
    id: 181,
    category: "Foreign Travellers",
    question: "Megasthenes was the ambassador of which ruler?",
    options: ["Alexander", "Seleucus Nikator", "Darius", "Cyrus"],
    correct: 1,
    explanation: "Megasthenes was Seleucus Nikator's ambassador to Chandragupta Maurya's court."
  },
  {
    id: 182,
    category: "Foreign Travellers",
    question: "Megasthenes wrote which book about India?",
    options: ["Arthashastra", "Indica", "Periplus", "Geography"],
    correct: 1,
    explanation: "Megasthenes wrote 'Indica' describing Mauryan India."
  },
  {
    id: 183,
    category: "Foreign Travellers",
    question: "Fa-Hien visited India during the reign of:",
    options: ["Ashoka", "Chandragupta II", "Harsha", "Kanishka"],
    correct: 1,
    explanation: "Chinese pilgrim Fa-Hien visited during Chandragupta II's reign (405-411 CE)."
  },
  {
    id: 184,
    category: "Foreign Travellers",
    question: "Hiuen Tsang studied at which university?",
    options: ["Taxila", "Nalanda", "Vikramashila", "Valabhi"],
    correct: 1,
    explanation: "Hiuen Tsang studied at Nalanda for around five years during Harsha's reign."
  },
  {
    id: 185,
    category: "Foreign Travellers",
    question: "Hiuen Tsang's travelogue is titled:",
    options: ["Indica", "Si-Yu-Ki", "Fo-Kyo-Ki", "Travels"],
    correct: 1,
    explanation: "Hiuen Tsang wrote 'Si-Yu-Ki' (Travel to the Western World)."
  },
  {
    id: 186,
    category: "Foreign Travellers",
    question: "Al-Biruni wrote 'Kitab-ul-Hind' during which dynasty?",
    options: ["Maurya", "Gupta", "Ghaznavid", "Delhi Sultanate"],
    correct: 2,
    explanation: "Al-Biruni came to India with Mahmud of Ghazni and studied Indian culture extensively."
  },
  {
    id: 187,
    category: "Foreign Travellers",
    question: "Ibn Batuta was appointed as a Qazi by:",
    options: ["Alauddin Khilji", "Muhammad bin Tughlaq", "Firoz Shah Tughlaq", "Balban"],
    correct: 1,
    explanation: "Muhammad bin Tughlaq appointed Ibn Batuta as Qazi of Delhi."
  },
  {
    id: 188,
    category: "Foreign Travellers",
    question: "Ibn Batuta's travelogue is called:",
    options: ["Indica", "Rihla", "Travels", "Safarnama"],
    correct: 1,
    explanation: "Ibn Batuta wrote 'Rihla' describing his travels including India."
  },
  {
    id: 189,
    category: "Foreign Travellers",
    question: "Marco Polo visited India during the reign of:",
    options: ["Alauddin Khilji", "Rudramadevi of Kakatiyas", "Muhammad Tughlaq", "Krishnadevaraya"],
    correct: 1,
    explanation: "Marco Polo visited south India during Rudramadevi of Kakatiyas' reign."
  },
  {
    id: 190,
    category: "Foreign Travellers",
    question: "Which Portuguese traveller described Krishnadevaraya's Vijayanagar?",
    options: ["Vasco da Gama", "Duarte Barbosa", "Domingo Paes", "Fernao Nuniz"],
    correct: 2,
    explanation: "Domingo Paes (1520-1522) gave detailed descriptions of Krishnadevaraya's empire."
  },
  {
    id: 191,
    category: "Foreign Travellers",
    question: "Nicolo Conti called which language the 'Italian of the East'?",
    options: ["Tamil", "Telugu", "Kannada", "Malayalam"],
    correct: 1,
    explanation: "Nicolo Conti referred to Telugu as the 'Italian of the East' in the Vijayanagar Empire."
  },
  {
    id: 192,
    category: "Foreign Travellers",
    question: "Sir Thomas Roe was the ambassador of King James I to which Mughal emperor?",
    options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
    correct: 1,
    explanation: "Sir Thomas Roe (1615-1619) was the British ambassador to Jahangir's court."
  },
  {
    id: 193,
    category: "Foreign Travellers",
    question: "Which traveller wrote 'Storia do Mogor', the most detailed Mughal account?",
    options: ["Tavernier", "Bernier", "Niccolao Manucci", "Peter Mundy"],
    correct: 2,
    explanation: "Niccolao Manucci's 'Storia do Mogor' is considered the most detailed Mughal court account."
  },
  {
    id: 194,
    category: "Foreign Travellers",
    question: "Francois Bernier was a physician to:",
    options: ["Akbar", "Jahangir", "Dara Shukoh", "Shah Jahan"],
    correct: 2,
    explanation: "Bernier was physician to prince Dara Shukoh and later at Aurangzeb's court."
  },
  {
    id: 195,
    category: "Foreign Travellers",
    question: "Jean Baptiste Tavernier was a:",
    options: ["Diplomat", "Missionary", "Jeweller and merchant", "Physician"],
    correct: 2,
    explanation: "Tavernier was a French jeweller who visited India six times during Shah Jahan's reign."
  },
  {
    id: 196,
    category: "Foreign Travellers",
    question: "Which traveller described the postal system during Muhammad bin Tughlaq?",
    options: ["Marco Polo", "Ibn Batuta", "Al-Biruni", "Nicolo Conti"],
    correct: 1,
    explanation: "Ibn Batuta described the Uluq-Horse and Dawa-Foot postal systems under Tughlaq."
  },
  {
    id: 197,
    category: "Foreign Travellers",
    question: "Fa-Hien's travelogue is titled:",
    options: ["Indica", "Si-Yu-Ki", "Fo-Kyo-Ki", "Buddhist Records"],
    correct: 2,
    explanation: "Fa-Hien wrote 'Fo-Kyo-Ki' (Records of Buddhist Kingdoms)."
  },
  {
    id: 198,
    category: "Foreign Travellers",
    question: "Abdur Razzaq was the ambassador from which dynasty?",
    options: ["Ottoman", "Safavid", "Timurid", "Mughal"],
    correct: 2,
    explanation: "Abdur Razzaq was Shahrukh of the Timurid dynasty's ambassador to Vijayanagar."
  },
  {
    id: 199,
    category: "Foreign Travellers",
    question: "Which Russian merchant wrote 'The Journey Beyond Three Seas'?",
    options: ["Peter Mundy", "Athanasius Nikitin", "Nicolo Conti", "Marco Polo"],
    correct: 1,
    explanation: "Athanasius Nikitin (1470-1474) wrote about the Bahmani kingdom."
  },
  {
    id: 200,
    category: "Foreign Travellers",
    question: "I-tsing, a Chinese traveller, contributed to knowledge of which region?",
    options: ["North India", "Srivijaya and Southeast Asian kingdoms", "Deccan", "Bengal"],
    correct: 1,
    explanation: "I-tsing's 25-year travels documented Srivijaya and kingdoms en route."
  },
  {
    id: 201,
    category: "Foreign Travellers",
    question: "Al-Masudi wrote which work about India?",
    options: ["Indica", "Kitab-ul-Hind", "Muruj-ul-Zahab", "Rihla"],
    correct: 2,
    explanation: "Al-Masudi (957 CE) gave extensive accounts of India in 'Muruj-ul-Zahab'."
  },
  {
    id: 202,
    category: "Foreign Travellers",
    question: "Which traveller mentioned coconut and paan in his accounts?",
    options: ["Megasthenes", "Fa-Hien", "Ibn Batuta", "Marco Polo"],
    correct: 2,
    explanation: "Ibn Batuta mentioned coconut and paan among his detailed observations."
  },
  {
    id: 203,
    category: "Foreign Travellers",
    question: "Francisco Pelsaert was shocked to see:",
    options: ["Wealth of rulers", "Widespread poverty", "Grand architecture", "Military strength"],
    correct: 1,
    explanation: "Dutch traveller Pelsaert noted widespread poverty among common people in the Mughal Empire."
  },
  {
    id: 204,
    category: "Foreign Travellers",
    question: "Deimachos was a Greek ambassador to which Mauryan emperor?",
    options: ["Chandragupta Maurya", "Bindusara", "Ashoka", "Dasharatha"],
    correct: 1,
    explanation: "Deimachos (320-273 BCE) was sent as ambassador to Bindusara's court."
  },
  {
    id: 205,
    category: "Foreign Travellers",
    question: "Which traveller visited India the most times?",
    options: ["Marco Polo", "Jean Baptiste Tavernier (6 times)", "Peter Mundy (6 times)", "Both Tavernier and Mundy"],
    correct: 3,
    explanation: "Both Tavernier and Peter Mundy visited India six times."
  }];

export const quizQuestions = allQuizQuestions;

export default {
  artCultureData,
  vedicFacts,
  quizQuestions: allQuizQuestions
};
