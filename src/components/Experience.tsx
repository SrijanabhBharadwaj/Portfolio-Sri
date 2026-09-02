"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { CV_DATA } from "@/data/cv";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 flex flex-col items-start md:items-center md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mb-6" />
        </motion.div>

        {/* Animated Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent -translate-x-1/2"
          />

          <div className="space-y-12">
            {CV_DATA.experience.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  } group`}
                >
                  
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10 mt-1 md:mt-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                      className="w-10 h-10 rounded-full bg-background border-2 border-blue-500/50 flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-500/20 transition-colors"
                    >
                      <Briefcase className="w-4 h-4 text-blue-400" />
                    </motion.div>
                  </div>

                  {/* Content Box Container (To handle layout spacing) */}
                  <div className={`w-full md:w-1/2 pl-16 pr-0 md:px-12 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                      className="glass p-6 md:p-8 rounded-2xl hover:border-blue-500/30 transition-colors relative"
                    >
                      <span className="text-blue-400 font-mono text-sm tracking-tight mb-2 block">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-muted-foreground font-medium mb-4">
                        {exp.company}
                      </h4>
                      <ul className="space-y-2 mt-4 text-left">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/50 shrink-0" />
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
