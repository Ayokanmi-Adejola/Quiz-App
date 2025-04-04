
import { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ResultSummary from '../components/ResultSummary';
import { getQuizCategory } from '../data/quizData';

interface LocationState {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
}

const Results = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  
  const state = location.state as LocationState | undefined;
  const quizCategory = categoryId ? getQuizCategory(categoryId) : undefined;
  
  useEffect(() => {
    // Redirect if accessed directly without state
    if (!state || !quizCategory) {
      navigate('/');
    }
  }, [state, quizCategory, navigate]);
  
  if (!state || !quizCategory) {
    return null;
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="px-6 pt-24 pb-12 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="category-chip mb-2">{quizCategory.category}</div>
          <h1 className="text-3xl font-bold">Quiz Results</h1>
          <p className="text-muted-foreground">{quizCategory.title}</p>
        </div>
        
        <ResultSummary
          score={state.score}
          totalQuestions={state.totalQuestions}
          correctAnswers={state.correctAnswers}
          incorrectAnswers={state.incorrectAnswers}
          categoryId={categoryId || ""}
        />
      </main>
    </div>
  );
};

export default Results;
