import { useEffect, useState } from "react";

const phrases = [
  "Bienvenido a mi portafolio",
  "Construyo interfaces modernas",
  "React + TypeScript es el futuro",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Escribiendo
        setText(currentPhrase.substring(0, text.length + 1));

        if (text === currentPhrase) {
          setSpeed(1200); // pausa al terminar
          setIsDeleting(true);
        } else {
          setSpeed(80);
        }
      } else {
        // Borrando
        setText(currentPhrase.substring(0, text.length - 1));
        setSpeed(40);

        if (text === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setSpeed(300);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, speed]);

  return (
    <div className="text-2xl font-mono text-center">
      <span>{text}</span>
      <span className="animate-pulse">|</span>
    </div>
  );
}