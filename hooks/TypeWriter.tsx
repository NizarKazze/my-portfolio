import { useEffect, useState } from "react";

type UseTypeWriterProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
};

export const useTyperWriter = ({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDelay = 1200,
}: UseTypeWriterProps) => {

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(typingSpeed);

  useEffect(() => {
    const currentWord = words[index % words.length];

    const timeout = setTimeout(() => {
        if (!isDeleting) {
            setText(currentWord.substring(0, text.length + 1));
            setSpeed(typingSpeed);

            if (text === currentWord) {
                setIsDeleting(true);
                setSpeed(pauseDelay);
            }
        } else {
            // Borrando
            setText(currentWord.substring(0, text.length - 1));
            setSpeed(deletingSpeed);

            if (text === "") {
                setIsDeleting(false);
                setIndex((prev) => prev + 1);
                setSpeed(typingSpeed);
            }  
        }
    }, speed)
    
     return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, speed, typingSpeed, deletingSpeed, pauseDelay]);

  return text;
}