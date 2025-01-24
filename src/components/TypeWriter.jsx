import { useState, useEffect } from "react";

const TypewriterEffect = () => {
  const phrases = [
    "Passionate Software Engineer",
    "Front End Developer",
    "Software Developer",
    "MERN Enthusiast",
    "Problem Solver",
    "Quick Learner"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typeSpeed = 150; // Speed of typing in ms
  const deleteSpeed = 75; // Speed of deleting in ms
  const delayBetweenPhrases = 2000; // Delay before switching phrases

  useEffect(() => {
    let interval;
    
    if (!isDeleting && text === phrases[currentPhraseIndex]) {
      // Wait a bit before starting to delete the current phrase
      interval = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenPhrases);
    } else if (isDeleting && text === "") {
      // After deleting the current phrase, switch to the next one
      setIsDeleting(false);
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }

    if (isDeleting) {
      interval = setInterval(() => {
        setText((prevText) => prevText.slice(0, -1));
      }, deleteSpeed);
    } else {
      interval = setInterval(() => {
        setText((prevText) => phrases[currentPhraseIndex].slice(0, prevText.length + 1));
      }, typeSpeed);
    }

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [text, isDeleting, currentPhraseIndex, phrases]);

  return (
    <div className="flex flex-col mt-8">
  <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
    I'm a {text}
  </h1>
</div>

  );
};

export default TypewriterEffect;
