
export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizCategory {
  id: string;
  title: string;
  category: string;
  description: string;
  color: string;
  questions: Question[];
}

export const quizCategories: QuizCategory[] = [
  {
    id: "science",
    title: "Science Explorer",
    category: "Science",
    description: "Test your knowledge of scientific principles and discoveries",
    color: "bg-quiz-teal",
    questions: [
      {
        id: "sci-1",
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correctAnswer: "Au"
      },
      {
        id: "sci-2",
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Mercury"],
        correctAnswer: "Mars"
      },
      {
        id: "sci-3",
        question: "What is the hardest natural substance on Earth?",
        options: ["Titanium", "Platinum", "Diamond", "Quartz"],
        correctAnswer: "Diamond"
      },
      {
        id: "sci-4",
        question: "What is the speed of light in a vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "200,000 km/s"],
        correctAnswer: "300,000 km/s"
      },
      {
        id: "sci-5",
        question: "Which of these is not a type of elementary particle?",
        options: ["Quark", "Lepton", "Proton", "Neutrino"],
        correctAnswer: "Proton"
      }
    ]
  },
  {
    id: "history",
    title: "History Chronicles",
    category: "History",
    description: "Journey through time with historical events and figures",
    color: "bg-quiz-coral",
    questions: [
      {
        id: "hist-1",
        question: "In which year did World War II end?",
        options: ["1943", "1945", "1947", "1950"],
        correctAnswer: "1945"
      },
      {
        id: "hist-2",
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
        correctAnswer: "George Washington"
      },
      {
        id: "hist-3",
        question: "The Renaissance period primarily took place in which region?",
        options: ["England", "France", "Italy", "Spain"],
        correctAnswer: "Italy"
      },
      {
        id: "hist-4",
        question: "Which ancient wonder was located in Alexandria?",
        options: ["The Great Pyramid", "The Lighthouse", "The Hanging Gardens", "The Colossus"],
        correctAnswer: "The Lighthouse"
      },
      {
        id: "hist-5",
        question: "Who wrote the 'I Have a Dream' speech?",
        options: ["Malcolm X", "Martin Luther King Jr.", "Rosa Parks", "Barack Obama"],
        correctAnswer: "Martin Luther King Jr."
      }
    ]
  },
  {
    id: "tech",
    title: "Tech Innovators",
    category: "Technology",
    description: "Navigate through the evolution and innovation of technology",
    color: "bg-quiz-light-blue",
    questions: [
      {
        id: "tech-1",
        question: "Who is considered the co-founder of Apple Inc. along with Steve Jobs?",
        options: ["Bill Gates", "Steve Wozniak", "Tim Cook", "Mark Zuckerberg"],
        correctAnswer: "Steve Wozniak"
      },
      {
        id: "tech-2",
        question: "What year was the first iPhone released?",
        options: ["2005", "2007", "2009", "2010"],
        correctAnswer: "2007"
      },
      {
        id: "tech-3",
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Personal Unit", "Central Processor Unifier", "Central Program Utility"],
        correctAnswer: "Central Processing Unit"
      },
      {
        id: "tech-4",
        question: "Which programming language was created by James Gosling at Sun Microsystems?",
        options: ["Python", "JavaScript", "Java", "C++"],
        correctAnswer: "Java"
      },
      {
        id: "tech-5",
        question: "Which company developed the first commercially successful GUI operating system?",
        options: ["Microsoft", "Apple", "IBM", "Linux"],
        correctAnswer: "Apple"
      }
    ]
  },
  {
    id: "geography",
    title: "World Explorer",
    category: "Geography",
    description: "Test your knowledge of countries, capitals, and landmarks",
    color: "bg-quiz-purple",
    questions: [
      {
        id: "geo-1",
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: "Canberra"
      },
      {
        id: "geo-2",
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
      },
      {
        id: "geo-3",
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
        correctAnswer: "Antarctic"
      },
      {
        id: "geo-4",
        question: "Which country is home to the Great Barrier Reef?",
        options: ["Brazil", "Australia", "Thailand", "Mexico"],
        correctAnswer: "Australia"
      },
      {
        id: "geo-5",
        question: "Which mountain range separates Europe from Asia?",
        options: ["The Alps", "The Andes", "The Urals", "The Himalayas"],
        correctAnswer: "The Urals"
      }
    ]
  }
];

export const getQuizCategory = (id: string): QuizCategory | undefined => {
  return quizCategories.find(category => category.id === id);
};
