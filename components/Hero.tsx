"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Explore the journey from simple machines to artificial general intelligence";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const scrollToTimeline = () => {
    const timeline = document.getElementById("timeline");
    timeline?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            The History of
            <br />
            Artificial Intelligence
          </motion.h1>
        </motion.div>

        <motion.div
          className="text-xl md:text-2xl text-muted-foreground mb-12 min-h-[80px] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="font-light">
            {displayedText}
            <span className="typing-cursor"></span>
          </span>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="glass px-6 py-3 rounded-full">
            <span className="text-sm font-semibold">1940s - 2025</span>
          </div>
          <div className="glass px-6 py-3 rounded-full">
            <span className="text-sm font-semibold">30+ Milestones</span>
          </div>
          <div className="glass px-6 py-3 rounded-full">
            <span className="text-sm font-semibold">80+ Years of Innovation</span>
          </div>
        </motion.div>

        <motion.button
          onClick={scrollToTimeline}
          className="group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          aria-label="Scroll to timeline"
        >
          <ChevronDown className="w-12 h-12 animate-bounce text-primary group-hover:scale-125 transition-transform" />
        </motion.button>
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
