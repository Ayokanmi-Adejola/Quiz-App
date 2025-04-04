
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import { getQuizCategory, Question } from '../data/quizData';

const Quiz = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);
  
  const quizCategory = categoryId ? getQuizCategory(categoryId) : undefined;
  const questions = quizCategory?.questions || [];
  const currentQuestion = questions[currentQuestionIndex];
  
  useEffect(() => {
    if (!quizCategory) {
      navigate('/');
    }
  }, [quizCategory, navigate]);
  
  const handleAnswer = (selected: string, isCorrect: boolean) => {
    const questionId = currentQuestion.id;
    
    // Save answer
    setAnswers(prev => ({ ...prev, [questionId]: selected }));
    
    // Track correct/incorrect answers
    if (isCorrect) {
      setScore(prevScore => prevScore + 20);
      setCorrectAnswers(prev => [...prev, questionId]);
    } else {
      setIncorrectAnswers(prev => [...prev, questionId]);
    }
    
    setHasAnswered(true);
    setShowResults(true);
    
    // Auto-advance after delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        goToNextQuestion();
      } else {
        completeQuiz();
      }
    }, 1500);
  };
  
  const goToNextQuestion = () => {
    setShowResults(false);
    setHasAnswered(false);
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };
  
  const completeQuiz = () => {
    navigate(`/results/${categoryId}`, { 
      state: { 
        score, 
        totalQuestions: questions.length,
        correctAnswers: correctAnswers.length,
        incorrectAnswers: incorrectAnswers.length
      } 
    });
  };
  
  if (!quizCategory || !currentQuestion) {
    return null;
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="px-6 pt-24 pb-12 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-12"
        >
          <div className="category-chip mb-2">{quizCategory.category}</div>
          <h1 className="text-3xl font-bold">{quizCategory.title}</h1>
          <p className="text-muted-foreground">{quizCategory.description}</p>
        </motion.div>
        
        <ProgressBar 
          current={currentQuestionIndex + 1} 
          total={questions.length} 
        />
        
        <AnimatePresence mode="wait">
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion.question}
            options={currentQuestion.options}
            correctAnswer={currentQuestion.correctAnswer}
            onAnswer={handleAnswer}
            showResults={showResults}
          />
        </AnimatePresence>
        
        <motion.div 
          className="flex justify-between mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <p className="text-sm text-muted-foreground">
              Score: <span className="font-medium">{score}</span>
            </p>
          </div>
          <div>
            {hasAnswered && currentQuestionIndex < questions.length - 1 && (
              <button 
                className="button-primary"
                onClick={goToNextQuestion}
              >
                Next Question
              </button>
            )}
            {hasAnswered && currentQuestionIndex === questions.length - 1 && (
              <button 
                className="button-primary"
                onClick={completeQuiz}
              >
                See Results
              </button>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Quiz;
