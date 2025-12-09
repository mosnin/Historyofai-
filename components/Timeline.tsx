"use client";

import TimelineItem from "./TimelineItem";
import { timelineData } from "@/lib/timelineData";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Timeline center line (desktop only) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 timeline-line -translate-x-1/2" />

      {/* Section header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Journey Through Time
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From theoretical concepts to world-changing applications, explore the
          pivotal moments that shaped artificial intelligence.
        </p>
      </motion.div>

      {/* Timeline items */}
      <div className="relative">
        {timelineData.map((event, index) => (
          <TimelineItem key={index} event={event} index={index} />
        ))}
      </div>

      {/* End marker */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" />
        </div>
        <p className="mt-4 text-muted-foreground">
          The journey continues...
        </p>
      </motion.div>
    </section>
  );
}
