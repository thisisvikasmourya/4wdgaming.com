// components/BubbleEffect.js

import { useState } from "react";
import styles from "./BubbleEffect.module.css";

const BubbleEffect = () => {
  const [bubbles, setBubbles] = useState([]);

  const createBubble = (event) => {
    const newBubble = {
      x: event.clientX,
      y: event.clientY,
    };

    setBubbles((prevBubbles) => [...prevBubbles, newBubble]);

    setTimeout(() => {
      setBubbles((prevBubbles) => prevBubbles.filter((b) => b !== newBubble));
    }, 300);
  };

  return (
    <div className={styles.container} onClick={createBubble}>
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className={styles.bubble}
          style={{ left: bubble.x, top: bubble.y }}
        ></div>
      ))}
    </div>
  );
};

export default BubbleEffect;
