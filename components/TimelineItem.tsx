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
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -100 : 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.4,
      },
    },
  };

  return (
    <div ref={ref} className="relative mb-16 md:mb-24">
      {/* Desktop layout */}
      <div className="hidden md:flex items-center">
        {/* Left side */}
        <div className={`w-1/2 ${isLeft ? "pr-12 text-right" : "order-3 pl-12"}`}>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {isLeft && <Card event={event} isLeft={isLeft} />}
          </motion.div>
        </div>

        {/* Center dot and line */}
        <div className="flex flex-col items-center order-2">
          <motion.div
            className="relative z-10"
            variants={dotVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 pulse" />
          </motion.div>
        </div>

        {/* Right side */}
        <div className={`w-1/2 ${isLeft ? "order-3 pl-12" : "pr-12 text-right"}`}>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {!isLeft && <Card event={event} isLeft={isLeft} />}
          </motion.div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-4">
        <div className="flex flex-col items-center">
          <motion.div
            variants={dotVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 pulse" />
          </motion.div>
          <div className="w-0.5 h-full bg-primary/30 mt-2" />
        </div>
        <div className="flex-1 pb-8">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
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
    <div className="group relative">
      <div className="glass rounded-2xl overflow-hidden hover-lift glow-border">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Year badge */}
          <div className="absolute top-4 right-4">
            <div className="glass px-4 py-2 rounded-full backdrop-blur-md">
              <span className="text-2xl font-bold text-white drop-shadow-lg">
                {event.year}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 gradient-text">
            {event.title}
          </h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {event.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 blur-xl" />
        </div>
      </div>

      {/* Connecting line decoration */}
      <div className={`hidden md:block absolute top-1/2 ${isLeft ? '-right-12' : '-left-12'} w-12 h-0.5 bg-primary/30`} />
    </div>
  );
}
