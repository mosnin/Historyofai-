"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import type { TimelineEvent } from "@/lib/timelineData";

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

export default function TimelineItem({ event, index }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isLeft = index % 2 === 0;

  const cardVariants = {
    hidden: {
      opacity: 0,
      rotateY: isLeft ? -30 : 30,
      x: isLeft ? -50 : 50,
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div ref={ref} className="relative mb-12 md:mb-20" style={{ perspective: "2000px" }}>
      {/* Desktop layout */}
      <div className="hidden md:flex items-start gap-8">
        {/* Left side */}
        <div className={`w-1/2 ${isLeft ? "text-right" : "order-3"}`}>
          {isLeft && (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Card event={event} isLeft={isLeft} />
            </motion.div>
          )}
        </div>

        {/* Center dot */}
        <div className="flex flex-col items-center order-2 relative">
          <motion.div
            className="timeline-dot relative z-10"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
        </div>

        {/* Right side */}
        <div className={`w-1/2 ${isLeft ? "order-3" : ""}`}>
          {!isLeft && (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Card event={event} isLeft={isLeft} />
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-4">
        <div className="flex flex-col items-center">
          <motion.div
            className="timeline-dot"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
          />
          <div className="w-0.5 h-full timeline-line mt-2" />
        </div>
        <div className="flex-1 pb-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
          >
            <Card event={event} isLeft={true} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Card({ event, isLeft }: { event: TimelineEvent; isLeft: boolean }) {
  return (
    <div className="group flip-card">
      <div className="bg-card border-2 border-border overflow-hidden transition-all duration-300 hover:border-foreground">
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-charcoal-900">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />

          {/* Year overlay */}
          <div className="absolute top-0 right-0 bg-foreground text-background px-6 py-3">
            <span className="text-3xl font-black">{event.year}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-black uppercase tracking-tight">
            {event.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {event.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {event.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-foreground/20 hover:bg-foreground hover:text-background transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
