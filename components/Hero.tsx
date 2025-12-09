"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "FROM THEORY TO REALITY";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const scrollToTimeline = () => {
    const timeline = document.getElementById("timeline");
    timeline?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grid-bg">
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="kanye-text text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            THE HISTORY
            <br />
            OF AI
          </motion.h1>
        </motion.div>

        <motion.div
          className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wider mb-12 min-h-[40px] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span>
            {displayedText}
            <span className="typing-cursor"></span>
          </span>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-6 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="border-2 border-foreground px-8 py-4">
            <span className="text-sm font-bold uppercase tracking-wider">1943 - 2025</span>
          </div>
          <div className="border-2 border-foreground px-8 py-4">
            <span className="text-sm font-bold uppercase tracking-wider">30+ MILESTONES</span>
          </div>
          <div className="border-2 border-foreground px-8 py-4">
            <span className="text-sm font-bold uppercase tracking-wider">80+ YEARS</span>
          </div>
        </motion.div>

        <motion.button
          onClick={scrollToTimeline}
          className="group mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          aria-label="Scroll to timeline"
        >
          <ChevronDown className="w-10 h-10 animate-bounce group-hover:scale-110 transition-transform" />
        </motion.button>
      </div>

      {/* Subtle geometric elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-foreground/10 rotate-45" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 border-2 border-foreground/10" />
    </section>
  );
}
