
import { motion } from 'framer-motion';
import { Circle, CheckCircle, XCircle, Trophy, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResultSummaryProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  categoryId: string;
}

const ResultSummary = ({ 
  score, 
  totalQuestions, 
  correctAnswers, 
  incorrectAnswers,
  categoryId
}: ResultSummaryProps) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  // Performance message based on score percentage
  const getMessage = () => {
    if (percentage >= 90) return "Exceptional!";
    if (percentage >= 75) return "Great job!";
    if (percentage >= 60) return "Good effort!";
    if (percentage >= 40) return "Nice try!";
    return "Keep practicing!";
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-sm border border-border p-8 max-w-md mx-auto"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="w-20 h-20 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4"
        >
          <Trophy size={32} className="text-quiz-light-blue" />
        </motion.div>
        <h2 className="text-2xl font-semibold">{getMessage()}</h2>
        <p className="text-muted-foreground mt-2">You scored {score} points</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-secondary rounded-xl p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <BarChart3 size={20} className="text-quiz-light-blue" />
          </div>
          <div className="text-2xl font-semibold">{percentage}%</div>
          <div className="text-xs text-muted-foreground">Accuracy</div>
        </div>
        
        <div className="bg-secondary rounded-xl p-4 text-center">
          <div className="text-2xl font-semibold">{totalQuestions}</div>
          <div className="text-xs text-muted-foreground">Total Questions</div>
        </div>
        
        <div className="bg-secondary rounded-xl p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <CheckCircle size={20} className="text-quiz-green" />
          </div>
          <div className="text-2xl font-semibold">{correctAnswers}</div>
          <div className="text-xs text-muted-foreground">Correct</div>
        </div>
        
        <div className="bg-secondary rounded-xl p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <XCircle size={20} className="text-quiz-coral" />
          </div>
          <div className="text-2xl font-semibold">{incorrectAnswers}</div>
          <div className="text-xs text-muted-foreground">Incorrect</div>
        </div>
      </div>
      
      <div className="grid gap-3">
        <Link to={`/quiz/${categoryId}`} className="button-primary text-center">
          Retry Quiz
        </Link>
        <Link to="/" className="button-secondary text-center">
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
};

export default ResultSummary;
