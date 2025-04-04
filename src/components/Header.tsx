
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const showBackButton = location.pathname !== '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-10 py-4 px-6 transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {showBackButton && (
            <Link 
              to="/" 
              className="mr-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/80 
                        transition-all duration-300 hover:bg-white shadow-sm"
            >
              <ArrowLeft size={16} />
            </Link>
          )}
          <Link to="/" className="font-semibold text-lg">Brainstorm Quiz</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
