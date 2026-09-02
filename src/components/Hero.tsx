"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Download, FileText, Send } from "lucide-react";
import { CV_DATA } from "@/data/cv";
import { useEffect, useState } from "react";

const TITLES = [
  "AI Engineer",
  "ML Developer",
  "Full-Stack Dev",
  "Research Enthusiast"
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for Opportunities
          <ChevronRight className="w-4 h-4 text-muted-foreground ml-1" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight mb-6"
        >
          Hi, I&apos;m <span className="text-gradient">{CV_DATA.name.split(' ')[0]}</span>
          <br className="hidden md:block" /> {CV_DATA.name.split(' ')[1]}
        </motion.h1>

        {/* Dynamic Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-12 md:h-16 mb-8 flex items-center justify-center overflow-hidden"
        >
          <motion.div
            key={titleIndex}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="text-2xl md:text-3xl text-muted-foreground font-medium"
          >
            {TITLES[titleIndex]}
          </motion.div>
        </motion.div>

        {/* Summary Snippet */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-muted-foreground md:text-lg mb-12 leading-relaxed"
        >
          {CV_DATA.summary}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex h-12 md:h-14 items-center justify-center rounded-lg bg-foreground px-8 font-medium text-background transition-transform active:scale-95"
          >
            <span>View Projects</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group inline-flex h-12 md:h-14 items-center justify-center rounded-lg glass px-8 font-medium text-foreground transition-all hover:bg-white/10 active:scale-95"
          >
            <Send className="mr-2 w-4 h-4" />
            Contact Me
          </a>
          <a
            href="#"
            className="group inline-flex h-12 md:h-14 items-center justify-center rounded-lg glass px-6 font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-white/10 active:scale-95"
            aria-label="Download Resume"
          >
            <FileText className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
