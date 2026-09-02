"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Palette, Music, Code2 } from "lucide-react";
import { CV_DATA } from "@/data/cv";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 flex flex-col items-start"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            The Intersection of <span className="text-gradient">Logic & Art</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Narrative Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I am a Computer Science engineer specializing in Artificial Intelligence and Machine Learning. 
              My core drive is building intelligent, full-stack applications and conducting cross-disciplinary research 
              to solve real-world challenges from the ground up.
            </p>
            <p>
              What sets my approach apart is the fusion of an analytical engineering mindset with a deep-rooted 
              background in the creative arts. Having earned a <strong className="text-foreground font-medium">Diploma in Fine Arts</strong> and 
              a <strong className="text-foreground font-medium">Visharad I in Hindustani Classical Music</strong>, I approach 
              software development not just as writing code, but as a discipline of design and harmony.
            </p>
            <p>
              Whether I am tuning a ViT architecture for deepfake detection or crafting a glassmorphic user interface, 
              I strive to connect deep technology with user-friendly design, turning complex data into seamless, 
              intuitive experiences.
            </p>
          </motion.div>

          {/* Bento Box Visuals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Box 1 - AI/ML */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass p-6 rounded-2xl flex flex-col gap-4 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">AI & ML</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Deep Learning, Vision Transformers, and Explainable AI applied to complex systems.
                </p>
              </div>
            </motion.div>

            {/* Box 2 - Full Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-6 rounded-2xl flex flex-col gap-4 border border-white/5 hover:border-white/10 transition-colors sm:translate-y-6"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">Engineering</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Full-stack scalable applications using Next.js, React, and Python microservices.
                </p>
              </div>
            </motion.div>

            {/* Box 3 - Fine Arts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass p-6 rounded-2xl flex flex-col gap-4 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400">
                <Palette className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">Fine Arts</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Diploma holder bringing color theory, aesthetics, and spatial awareness into UI design.
                </p>
              </div>
            </motion.div>

            {/* Box 4 - Classical Music */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass p-6 rounded-2xl flex flex-col gap-4 border border-white/5 hover:border-white/10 transition-colors sm:translate-y-6"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                <Music className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">Classical Music</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Visharad I in Hindustani Music, instilling discipline, harmony, and creative rhythm.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
