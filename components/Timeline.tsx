"use client";

import TimelineItem from "./TimelineItem";
import { timelineData } from "@/lib/timelineData";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Timeline center line (desktop only) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 timeline-line -translate-x-1/2" />

      {/* Section header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="kanye-text text-4xl md:text-6xl mb-6">
          THE TIMELINE
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto uppercase tracking-wide">
          From theoretical foundations to world-changing applications
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
        <div className="inline-flex items-center justify-center w-12 h-12 border-2 border-foreground">
          <div className="w-4 h-4 bg-foreground" />
        </div>
        <p className="mt-6 text-sm uppercase tracking-wider text-muted-foreground">
          To be continued...
        </p>
      </motion.div>
    </section>
  );
}
