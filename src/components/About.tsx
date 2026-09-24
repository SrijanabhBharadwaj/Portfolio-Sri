"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative flex flex-col items-center justify-center py-32 z-10 text-center px-4">
      <h2 className="font-heading text-4xl md:text-6xl hollow-text-purple tracking-widest uppercase mb-16">
        Origin Story
      </h2>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="neon-border glass-panel p-8 md:p-12 text-left w-full max-w-4xl"
      >
        <div className="space-y-6 text-lg md:text-xl text-slate-300 leading-relaxed font-sans">
          <p>
            I am a Computer Science engineer specializing in Artificial Intelligence and Machine Learning. 
            My core drive is building intelligent, full-stack applications and conducting cross-disciplinary research 
            to solve real-world challenges from the ground up.
          </p>
          <p>
            What sets my approach apart is the fusion of an analytical engineering mindset with a deep-rooted 
            background in the creative arts. Having earned a <strong className="text-[#00f3ff] font-medium drop-shadow-[0_0_2px_#00f3ff]">Diploma in Fine Arts</strong> and 
            a <strong className="text-[#00f3ff] font-medium drop-shadow-[0_0_2px_#00f3ff]">Visharad I in Hindustani Classical Music</strong>, I approach 
            software development not just as writing code, but as a discipline of design and harmony.
          </p>
          <p>
            Whether I am tuning a ViT architecture for deepfake detection or crafting a user interface, 
            I strive to connect deep technology with user-friendly design, turning complex data into seamless, 
            intuitive experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
