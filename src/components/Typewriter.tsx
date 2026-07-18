import { useEffect, useState } from "react";

const messages = [
  "sharpening claws...",
  "lurking in the codebase...",
  "probably debugging...",
  "curiosity is compiling...",
];

function Typewriter() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pausing, setPausing] = useState(false);

  useEffect(() => {
    const currentMessage = messages[messageIndex];

    if (pausing) {
      const timeout = setTimeout(() => {
        setPausing(false);
        setDeleting(true);
      }, 3000);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const nextText = currentMessage.slice(0, text.length + 1);
          setText(nextText);

          if (nextText === currentMessage) {
            setPausing(true);
          }
        } else {
          const nextText = currentMessage.slice(0, text.length - 1);
          setText(nextText);

          if (nextText === "") {
            setDeleting(false);
            setMessageIndex((current) => (current + 1) % messages.length);
          }
        }
      },
      deleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, pausing, messageIndex]);

  return (
    <p className="hero-subtitle">
      &gt; {text}
      <span className="cursor">_</span>
    </p>
  );
}

export default Typewriter;
