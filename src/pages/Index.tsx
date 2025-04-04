
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Atom, Globe, Clock } from 'lucide-react';
import Header from '../components/Header';
import QuizCard from '../components/QuizCard';
import { quizCategories } from '../data/quizData';

const Index = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleStartQuiz = (categoryId: string) => {
    navigate(`/quiz/${categoryId}`);
  };
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="px-6 pt-24 pb-12 max-w-5xl mx-auto">
        <section className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="category-chip mb-4"
          >
            Welcome to Ayokanmi Adejola Brainstorm Quiz
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold mb-4 tracking-tight"
          >
            Get Ready to Challenge Your Knowledge !
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore a variety of quizzes designed to test your expertise across different topics.
            Select a category below to begin your intellectual journey.
          </motion.p>
        </section>
        
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl font-semibold mb-8"
          >
            Select a Category
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={container}
            initial="hidden"
            animate={mounted ? "show" : "hidden"}
          >
            {quizCategories.map((category) => (
              <motion.div key={category.id} variants={item}>
                <QuizCard
                  category={category.category}
                  title={category.title}
                  description={category.description}
                  questionCount={category.questions.length}
                  color={category.color}
                  onClick={() => handleStartQuiz(category.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
        
        <section className="text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-2xl font-semibold mb-12"
          >
            Why Ayokanmi Adejola's Brainstorm Quiz?
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            animate={mounted ? "show" : "hidden"}
          >
            <motion.div variants={item} className="text-center">
              <div className="w-12 h-12 rounded-full bg-quiz-teal/10 flex items-center justify-center mx-auto mb-4">
                <Brain size={24} className="text-quiz-teal" />
              </div>
              <h3 className="font-medium mb-2">Knowledge Building</h3>
              <p className="text-sm text-muted-foreground">Expand your knowledge across multiple disciplines</p>
            </motion.div>
            
            <motion.div variants={item} className="text-center">
              <div className="w-12 h-12 rounded-full bg-quiz-light-blue/10 flex items-center justify-center mx-auto mb-4">
                <Atom size={24} className="text-quiz-light-blue" />
              </div>
              <h3 className="font-medium mb-2">Skill Practice</h3>
              <p className="text-sm text-muted-foreground">Enhance cognitive abilities and recall</p>
            </motion.div>
            
            <motion.div variants={item} className="text-center">
              <div className="w-12 h-12 rounded-full bg-quiz-coral/10 flex items-center justify-center mx-auto mb-4">
                <Globe size={24} className="text-quiz-coral" />
              </div>
              <h3 className="font-medium mb-2">Global Learning</h3>
              <p className="text-sm text-muted-foreground">Discover facts about the world around us</p>
            </motion.div>
            
            <motion.div variants={item} className="text-center">
              <div className="w-12 h-12 rounded-full bg-quiz-purple/10 flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-quiz-purple" />
              </div>
              <h3 className="font-medium mb-2">Quick Challenges</h3>
              <p className="text-sm text-muted-foreground">Perfect for short, productive breaks</p>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Index;
