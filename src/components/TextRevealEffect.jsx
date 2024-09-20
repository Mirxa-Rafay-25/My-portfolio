"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const TextRevealEffect = ({ text }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          animateText();
          window.removeEventListener("scroll", onScroll);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Function to animate text reveal
  const animateText = async () => {
    await controls.start((i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, // Delay each word's animation
        duration: 0.8,
        ease: "easeOut",
      },
    }));
  };

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: "inline-block",
        overflow: "hidden",
      }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          custom={index}
          initial={{ opacity: 0, x: "-100%" }}
          animate={controls}
          style={{ display: "inline-block", marginRight: "5px" }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default TextRevealEffect;
