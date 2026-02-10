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
];

export const quizQuestions = allQuizQuestions;

export default {
  artCultureData,
  vedicFacts,
  quizQuestions: allQuizQuestions
};
