export const categories = [
  { id: "news", name: "Current News" },
  { id: "culture", name: "Culture" },
  { id: "chemistry", name: "Chemistry" },
  { id: "astronomy", name: "Astronomy" },
  { id: "physics", name: "Physics" },
  { id: "history", name: "History" },
  { id: "language", name: "Language Arts" },
  { id: "literature", name: "Literature" },
  { id: "funfacts", name: "Fun Facts" },
  { id: "biology", name: "Biology" }
];

export const questions = {
  chemistry: [
    {
      question: "What is Lead on the Periodic Table?",
      answers: ["Li", "Pb", "Lu", "Lr"],
      correct: "Pb",
      explanation: "Lead is a heavy metal with the symbol Pb, from the Latin 'plumbum'."
    }
  ],
  culture: [
    {
      question: "Which magazine is Anna Wintour best known for leading?",
      answers: ["Vogue", "Elle", "Harper's Bazaar", "Vanity Fair"],
      correct: "Vogue",
      explanation: "Anna Wintour has been the editor-in-chief of Vogue since 1988."
    }
  ],
  astronomy: [
    {
      question: "What is the largest planet in our Solar System?",
      answers: ["Earth", "Jupiter", "Saturn", "Neptune"],
      correct: "Jupiter",
      explanation: "Jupiter is a gas giant and the largest planet in the Solar System."
    }
  ],
  physics: [
    {
      question: "Which constant represents the speed of light in vacuum?",
      answers: ["g", "h", "c", "k"],
      correct: "c",
      explanation: "The speed of light in vacuum is commonly denoted by c ≈ 3×10^8 m/s."
    }
  ],
  history: [
    {
      question: "In which year did the Berlin Wall fall?",
      answers: ["1985", "1987", "1989", "1991"],
      correct: "1989",
      explanation: "The Berlin Wall fell in 1989, symbolizing the end of the Cold War era."
    }
  ],
  language: [
    {
      question: "Which sentence uses the semicolon correctly?",
      answers: [
        "I like tea; but he likes coffee.",
        "I like tea; he likes coffee.",
        "I like tea,; he likes coffee.",
        "I like tea he likes coffee;"
      ],
      correct: "I like tea; he likes coffee.",
      explanation: "A semicolon can join two independent clauses without a conjunction."
    }
  ],
  literature: [
    {
      question: "Who wrote 'Beloved'?",
      answers: ["Toni Morrison", "Zora Neale Hurston", "Alice Walker", "Nella Larsen"],
      correct: "Toni Morrison",
      explanation: "Toni Morrison won the Pulitzer Prize for 'Beloved' in 1988."
    }
  ],
  funfacts: [
    {
      question: "What color is a polar bear's skin?",
      answers: ["White", "Black", "Pink", "Gray"],
      correct: "Black",
      explanation: "Beneath their translucent fur, polar bears have black skin to absorb heat."
    }
  ],
  biology: [
    {
      question: "What is the powerhouse of the cell?",
      answers: ["Ribosome", "Golgi apparatus", "Mitochondrion", "Nucleus"],
      correct: "Mitochondrion",
      explanation: "Mitochondria generate most of the cell's ATP through respiration."
    }
  ]
};
