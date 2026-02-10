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
  {
    fact: "Bhasa (2nd-3rd century) wrote 13 plays including Swapnavasavadatta and Urubhanga",
    category: "Sanskrit Drama"
  },
  {
    fact: "Vishakhadatta (4th century) wrote Mudrarakshasa about Chandragupta Maurya and Chanakya",
    category: "Sanskrit Drama"
  },
  {
    fact: "Shudraka (5th century) wrote Mrichchhakatika (Little Clay Cart), a social drama [UPSC 2013]",
    category: "Sanskrit Drama"
  },
  {
    fact: "King Harsha (7th century) wrote 3 plays: Ratnavali, Nagananda, Priyadarsika",
    category: "Sanskrit Drama"
  },
  {
    fact: "Gita Govinda by Jayadeva describes Krishna-Radha love",
    category: "Sanskrit Drama"
  },
  {
    fact: "Rajatarangini by Kalhana chronicles Kashmir kings (Karkota, Varman, Yashaskara dynasties)",
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
  },
  {
    question: "Which Aranyakas are associated with Rigveda?",
    options: ["Taittiriya and Brihadaranyaka", "Aitareya and Kaushitaki", "Only Samaveda Aranyaka", "Only Atharvaveda Aranyaka"],
    correct: 1,
    explanation: "Rigveda is associated with Aitareya Aranyaka and Kaushitaki Aranyaka."
  },
  {
    question: "Which Upanishads are associated with Rigveda?",
    options: ["Brihadaranyaka and Taittiriya", "Chandogya and Kena", "Aitareya and Kaushitaki", "Prashna and Mundaka"],
    correct: 2,
    explanation: "Rigveda is associated with Aitareya Upanishad and Kaushitaki Upanishad."
  },
  {
    question: "Satapatha Brahmana is associated with which Veda?",
    options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
    correct: 1,
    explanation: "Satapatha Brahmana is associated with Yajurveda, along with Taittiriya Brahmana."
  },
  {
    question: "Brihadaranyaka Aranyaka is associated with which Veda?",
    options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
    correct: 1,
    explanation: "Brihadaranyaka Aranyaka is associated with Yajurveda."
  },
  {
    question: "Which Upanishads are associated with Yajurveda?",
    options: ["Aitareya and Kaushitaki", "Brihadaranyaka and Taittiriya", "Chandogya and Kena", "Prashna and Mundaka"],
    correct: 1,
    explanation: "Yajurveda is associated with Brihadaranyaka Upanishad and Taittiriya Upanishad."
  },
  {
    question: "Jaiminiya Brahmana is associated with which Veda?",
    options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
    correct: 2,
    explanation: "Jaiminiya Brahmana is associated with Samaveda, along with Kauthuma Brahmana."
  },
  {
    question: "Chandogya Upanishad is associated with which Veda?",
    options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
    correct: 2,
    explanation: "Chandogya Upanishad is associated with Samaveda."
  },
  {
    question: "Kena Upanishad is associated with which Veda?",
    options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
    correct: 2,
    explanation: "Kena Upanishad is associated with Samaveda, along with Chandogya Upanishad."
  },
  {
    question: "Gopatha Brahmana is associated with which Veda?",
    options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
    correct: 3,
    explanation: "Gopatha Brahmana is the only Brahmana associated with Atharvaveda."
  },
  {
    question: "Which three Upanishads are associated with Atharvaveda?",
    options: ["Aitareya, Kaushitaki, Brihadaranyaka", "Chandogya, Kena, Taittiriya", "Prashna, Mundaka, Mandukya", "None of these"],
    correct: 2,
    explanation: "Atharvaveda is associated with Prashna Upanishad, Mundaka Upanishad, and Mandukya Upanishad."
  },
  {
    question: "Mandukya Upanishad is associated with which Veda?",
    options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
    correct: 3,
    explanation: "Mandukya Upanishad is associated with Atharvaveda."
  },
  {
    question: "How many Brahmanas are associated with Rigveda?",
    options: ["One", "Two", "Three", "Four"],
    correct: 1,
    explanation: "Two Brahmanas are associated with Rigveda: Aitareya Brahmana and Kaushitaki Brahmana."
  },
  {
    question: "How many Upanishads are associated with Atharvaveda?",
    options: ["One", "Two", "Three", "Four"],
    correct: 2,
    explanation: "Three Upanishads are associated with Atharvaveda: Prashna, Mundaka, and Mandukya Upanishads."
  },
  {
    question: "Taittiriya Brahmana is associated with which Veda?",
    options: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"],
    correct: 1,
    explanation: "Taittiriya Brahmana is associated with Yajurveda."
  }
];

export const quizQuestions = allQuizQuestions;

export default {
  artCultureData,
  vedicFacts,
  quizQuestions: allQuizQuestions
};

  // SANSKRIT DRAMA CATEGORY - Phase 2
  {
    id: 5,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Swapnavasavadatta",
    period: "2nd-3rd century",
    author: "Bhasa",
    description: "Romantic narrative of King Udayana and Vasavadatta, part of Bhasa's 13 plays",
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
    description: "Tragedy about Duryodhana's conflict with Bhima",
    importance: "MEDIUM"
  },
  {
    id: 7,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Mudrarakshasa",
    period: "4th century",
    author: "Vishakhadatta",
    description: "Drama about Chandragupta Maurya's rise to power with Chanakya's help",
    importance: "HIGH"
  },
  {
    id: 8,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Devi Chandraguptam",
    period: "4th century",
    author: "Vishakhadatta",
    description: "Political drama about King Ramagupta's decision to surrender his queen",
    importance: "MEDIUM"
  },
  {
    id: 9,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Mrichchhakatika",
    period: "5th century",
    author: "Shudraka",
    description: "Sanskrit social drama about Charudatta and Vasantsena, inspired by Bhasa's Charudattam. [Other works: Vinavasavadatta, and a Bhana (short one-act monologue)]",
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
    description: "Depicts Lord Rama's life after returning from exile",
    importance: "MEDIUM"
  },
  {
    id: 11,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Ratnavali",
    period: "7th century",
    author: "Harsha",
    description: "Drama about Princess Ratnavali and King Udayana, mentions Holi festival",
    importance: "MEDIUM"
  },
  {
    id: 12,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Nagananda",
    period: "7th century",
    author: "Harsha",
    description: "Story of Prince Jimūtavāhana and his act to protect the Nagas",
    importance: "MEDIUM"
  },
  {
    id: 13,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Priyadarsika",
    period: "7th century",
    author: "Harsha",
    description: "Play about the union of King Udayana and Priyadarshini",
    importance: "MEDIUM"
  },
  {
    id: 14,
    category: "Sanskrit Drama",
    subcategory: "Classical Drama",
    name: "Kathasaritsagara",
    period: "11th century",
    author: "Somadeva",
    description: "\"Ocean of the Streams of Stories,\" a collection of tales, showcasing Kashmir's tragic history",
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
  }
,
  // Sanskrit Drama Quiz Questions
  {
    question: "Who is the author of 'Swapnavasavadatta'?",
    options: ["Vishakhadatta", "Bhasa", "Shudraka", "Harsha"],
    correct: 1,
    explanation: "Swapnavasavadatta was written by Bhasa (2nd-3rd century), part of his 13 plays. It's a romantic narrative of King Udayana and Vasavadatta. [UPSC 2024]"
  },
  {
    question: "'Urubhanga' is a tragedy about which character's conflict?",
    options: ["Arjuna and Karna", "Duryodhana and Bhima", "Krishna and Kamsa", "Rama and Ravana"],
    correct: 1,
    explanation: "Urubhanga by Bhasa is a tragedy about Duryodhana's conflict with Bhima."
  },
  {
    question: "Who wrote 'Mudrarakshasa'?",
    options: ["Bhasa", "Vishakhadatta", "Kalidasa", "Bhavabhuti"],
    correct: 1,
    explanation: "Mudrarakshasa was written by Vishakhadatta (4th century). It's about Chandragupta Maurya's rise to power with Chanakya's help."
  },
  {
    question: "'Mrichchhakatika' (Little Clay Cart) was written by which author?",
    options: ["Bhasa", "Shudraka", "Harsha", "Somadeva"],
    correct: 1,
    explanation: "Mrichchhakatika was written by Shudraka (5th century). It's a social drama about Charudatta and Vasantsena, inspired by Bhasa's Charudattam. [UPSC 2013]"
  },
  {
    question: "Which drama depicts Lord Rama's life after returning from exile?",
    options: ["Ramacharit", "Uttara-Ramacharit", "Ramayana", "Rama Katha"],
    correct: 1,
    explanation: "Uttara-Ramacharit by Bhavabhuti (7th century) depicts Lord Rama's life after returning from exile."
  },
  {
    question: "Who wrote three plays: Ratnavali, Nagananda, and Priyadarsika?",
    options: ["Bhasa", "Kalidasa", "Harsha", "Bhavabhuti"],
    correct: 2,
    explanation: "King Harsha (7th century) wrote three Sanskrit dramas: Ratnavali, Nagananda, and Priyadarsika."
  },
  {
    question: "Which play mentions the Holi festival?",
    options: ["Ratnavali", "Nagananda", "Swapnavasavadatta", "Gita Govinda"],
    correct: 0,
    explanation: "Ratnavali by Harsha mentions the Holi festival. It's about Princess Ratnavali and King Udayana."
  },
  {
    question: "'Nagananda' is about a prince protecting which creatures?",
    options: ["Tigers", "Elephants", "Nagas (serpents)", "Birds"],
    correct: 2,
    explanation: "Nagananda by Harsha tells the story of Prince Jimūtavāhana and his act to protect the Nagas (serpents)."
  },
  {
    question: "'Kathasaritsagara' (Ocean of the Streams of Stories) was written by?",
    options: ["Somadeva", "Jayadeva", "Kalhana", "Vishakhadatta"],
    correct: 0,
    explanation: "Kathasaritsagara was written by Somadeva (11th century). It's a collection of tales showcasing Kashmir's tragic history."
  },
  {
    question: "'Gita Govinda' describes the love between which two divine figures?",
    options: ["Rama and Sita", "Krishna and Radha", "Shiva and Parvati", "Vishnu and Lakshmi"],
    correct: 1,
    explanation: "Gita Govinda by Jayadeva (12th century) describes the love between Krishna and Radha."
  },
  {
    question: "Who wrote 'Rajatarangini', the chronicles of Kashmir kings?",
    options: ["Somadeva", "Jayadeva", "Kalhana", "Bilhana"],
    correct: 2,
    explanation: "Rajatarangini was written by Kalhana (12th century). It chronicles Kashmir kings, covering the Karkota, Varman, and Yashaskara dynasties."
  },
  {
    question: "Which dynasties are covered in 'Rajatarangini'?",
    options: ["Maurya, Gupta, Kushan", "Karkota, Varman, Yashaskara", "Chola, Pandya, Chera", "Delhi Sultanate dynasties"],
    correct: 1,
    explanation: "Rajatarangini chronicles the Karkota, Varman, and Yashaskara dynasties of Kashmir."
  },
  {
    question: "Bhasa (2nd-3rd century) wrote how many plays in total?",
    options: ["7 plays", "10 plays", "13 plays", "15 plays"],
    correct: 2,
    explanation: "Bhasa wrote 13 plays in total, including Swapnavasavadatta and Urubhanga."
  },
  {
    question: "'Mrichchhakatika' was inspired by which earlier work?",
    options: ["Swapnavasavadatta", "Charudattam", "Mudrarakshasa", "Ratnavali"],
    correct: 1,
    explanation: "Mrichchhakatika by Shudraka was inspired by Bhasa's Charudattam."
  },
  {
    question: "Which author wrote 'Devi Chandraguptam' about King Ramagupta?",
    options: ["Bhasa", "Vishakhadatta", "Kalidasa", "Bhavabhuti"],
    correct: 1,
    explanation: "Devi Chandraguptam was written by Vishakhadatta (4th century). It's about King Ramagupta's decision to surrender his queen."
  }
];
