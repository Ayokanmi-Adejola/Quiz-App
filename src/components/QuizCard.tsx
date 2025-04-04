
import { motion } from 'framer-motion';

interface QuizCardProps {
  category: string;
  title: string;
  description: string;
  questionCount: number;
  color: string;
  onClick: () => void;
}

const QuizCard = ({ category, title, description, questionCount, color, onClick }: QuizCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl shadow-sm border border-border/50 overflow-hidden 
                cursor-pointer transition-all duration-300 hover:shadow-md"
      onClick={onClick}
    >
      <div className={`h-2 w-full ${color}`} aria-hidden="true" />
      <div className="p-6">
        <div className="category-chip mb-4">{category}</div>
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground">
            {questionCount} questions
          </span>
          <motion.span 
            className="text-xs font-medium text-primary"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Start Quiz →
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default QuizCard;
