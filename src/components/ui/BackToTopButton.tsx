import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      } hover:scale-110 focus:outline-none focus:ring-4 focus:ring-teal-300`}
      aria-label="Zurück nach oben"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default BackToTopButton;