import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
}

export default function TypingText({ text, speed = 100 }: TypingTextProps) {
  const [displayed, setDisplayed] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayed((prev) => {
        const nextChar = text.charAt(prev.length);
        if (nextChar === undefined) {
          clearInterval(interval);
          return prev;
        }
        return [...prev, nextChar];
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p>
      {displayed.map((char, idx) =>
        char === '\n' ? <br key={idx} /> : <span key={idx}>{char}</span>
      )}
    </p>
  );
}
