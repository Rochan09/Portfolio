import React from 'react';
import { ChevronUp } from 'lucide-react';
import { useBackToTop } from '../../hooks/useScrollAnimation';

const BackToTop: React.FC = () => {
  const { showBackToTop, scrollToTop } = useBackToTop();

  if (!showBackToTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Back to top"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
};

export default BackToTop;