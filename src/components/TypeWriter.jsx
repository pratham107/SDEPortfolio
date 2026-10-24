import { useState, useEffect } from "react";

const phrases = [
  "Passionate Software Engineer",
  "Front End Developer",
  "Software Developer",
  "MERN Enthusiast",
  "Problem Solver",
  "Quick Learner",
];

// eslint-disable-next-line react/prop-types
const TypewriterEffect = ({ theme }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const currentPhrase = phrases[currentPhraseIndex];

  useEffect(() => {
    const phraseComplete = !isDeleting && text === currentPhrase;
    const delay = phraseComplete ? 1800 : isDeleting ? 55 : 110;
    const timeout = window.setTimeout(() => {
      if (phraseComplete) {
        setIsDeleting(true);
      } else if (isDeleting && text.length === 0) {
        setCurrentPhraseIndex((index) => (index + 1) % phrases.length);
        setIsDeleting(false);
      } else {
        setText((currentText) =>
          isDeleting
            ? currentText.slice(0, -1)
            : currentPhrase.slice(0, currentText.length + 1)
        );
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [currentPhrase, isDeleting, text]);

  return (
    <p
      className={`text-lg font-semibold sm:text-xl ${
        theme === "dark" ? "text-blue-300" : "text-blue-700"
      }`}
      aria-live="polite"
      aria-label={`I'm a ${currentPhrase}`}
    >
      I&apos;m a <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">{text}</span>
      <span className="ml-0.5 animate-pulse text-violet-500" aria-hidden="true">|</span>
    </p>
  );
};

export default TypewriterEffect;
