import React, { useEffect, useState } from 'react';

const words = [
  '✨Full stack Developer',
  '🤖AI Enthusiastic',
  '💻Salesforce Admin'
];

const Typewriter: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
  let typingTimeout: ReturnType<typeof setTimeout>;
    const fullWord = words[currentWord];
    if (!isDeleting && displayed.length < fullWord.length) {
      typingTimeout = setTimeout(() => {
        setDisplayed(fullWord.substring(0, displayed.length + 1));
      }, 80);
    } else if (isDeleting && displayed.length > 0) {
      typingTimeout = setTimeout(() => {
        setDisplayed(fullWord.substring(0, displayed.length - 1));
      }, 40);
    } else if (!isDeleting && displayed.length === fullWord.length) {
      typingTimeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setCurrentWord((prev) => (prev + 1) % words.length);
    }
    return () => clearTimeout(typingTimeout);
  }, [displayed, isDeleting, currentWord]);

  return (
    <span className="text-blue-700 font-semibold">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
