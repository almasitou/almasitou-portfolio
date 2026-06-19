'use client';

import { useState, useEffect } from 'react';

export default function Typewriter({ title }) {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    if (!title) return;
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(title.substring(0, i));
      i++;
      if (i > title.length) {
        clearInterval(intervalId);
      }
    }, 80); // Adjust typing speed here
    return () => clearInterval(intervalId);
  }, [title]);

  const words = displayedText.split(' ');
  const firstWord = words[0];
  const restOfText = displayedText.substring(firstWord.length);

  // If we haven't typed the first word yet, we only show the gradient part
  // Once we exceed the first word, we show gradient for first word, then line break, then the rest.
  return (
    <>
      <span className="text-gradient">{firstWord}</span>
      {displayedText.length > firstWord.length && (
        <>
          <br />
          {restOfText.trimStart()}
        </>
      )}
      {displayedText.length < (title?.length || 0) && (
        <span className="inline-block w-1 h-12 md:h-20 lg:h-24 bg-blue-500 ml-2 animate-pulse align-bottom mb-2 md:mb-4 lg:mb-6" />
      )}
    </>
  );
}
