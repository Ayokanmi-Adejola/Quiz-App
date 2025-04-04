
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface QuestionCardProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (selected: string, isCorrect: boolean) => void;
  showResults: boolean;
}

const QuestionCard = ({ 
  question, 
  options, 
  correctAnswer, 
  onAnswer, 
  showResults 
}: QuestionCardProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
  }, [question]);
  
  const handleOptionClick = (option: string) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    setIsAnswered(true);
    
    const isCorrect = option === correctAnswer;
    onAnswer(option, isCorrect);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-sm border border-border/50 p-6 mb-6"
    >
      <h3 className="text-xl font-medium mb-6">{question}</h3>
      
      <div className="space-y-3">
        {options.map((option, index) => {
          const isSelected = selectedOption === option;
          const isCorrect = option === correctAnswer;
          const isWrong = isSelected && !isCorrect;
          
          let optionClass = "option-button";
          
          if (showResults) {
            if (isCorrect) {
              optionClass += " correct";
            } else if (isWrong) {
              optionClass += " incorrect";
            }
          } else if (isSelected) {
            optionClass += " selected";
          }
          
          return (
            <motion.button
              key={index}
              whileHover={!isAnswered ? { scale: 1.01 } : {}}
              whileTap={!isAnswered ? { scale: 0.99 } : {}}
              className={optionClass}
              onClick={() => handleOptionClick(option)}
              disabled={isAnswered && showResults}
            >
              <motion.span 
                className="flex-1"
                initial={false}
                animate={{ opacity: showResults && !isCorrect && !isWrong ? 0.5 : 1 }}
              >
                {option}
              </motion.span>
              
              <AnimatePresence>
                {showResults && isCorrect && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-2 flex items-center justify-center w-6 h-6 rounded-full bg-quiz-green text-white"
                  >
                    <Check size={14} />
                  </motion.span>
                )}
                
                {showResults && isWrong && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-2 flex items-center justify-center w-6 h-6 rounded-full bg-quiz-coral text-white"
                  >
                    <X size={14} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default QuestionCard;
