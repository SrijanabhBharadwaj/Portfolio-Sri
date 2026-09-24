"use client";

import { motion } from "framer-motion";
import { CV_DATA } from "@/data/cv";

export function Experience() {
  return (
    <section id="experience" className="relative flex flex-col items-center justify-center py-32 z-10 text-center px-4">
      <h2 className="font-heading text-4xl md:text-6xl hollow-text tracking-widest uppercase mb-16">
        Mission Logs
      </h2>
      
      <div className="w-full max-w-5xl space-y-8">
        {CV_DATA.experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="neon-border glass-panel p-8 text-left relative flex flex-col md:flex-row gap-8 items-start hover:bg-white/5 transition-colors"
          >
            <div className="md:w-1/3">
              <span className="font-heading text-[#00f3ff] text-sm tracking-widest block mb-2">{exp.period}</span>
              <span className="text-slate-400 text-xs font-heading tracking-widest uppercase">{exp.location}</span>
            </div>
            <div className="md:w-2/3 border-l border-[#00f3ff]/20 pl-6 md:pl-8">
              <h3 className="font-heading text-xl md:text-2xl text-white uppercase mb-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                {exp.role}
              </h3>
              <h4 className="text-[#b026ff] font-heading text-sm tracking-widest uppercase mb-6 drop-shadow-[0_0_5px_rgba(176,38,255,0.4)]">
                {exp.company}
              </h4>
              <div className="space-y-4">
                {exp.description.map((desc, idx) => (
                  <p key={idx} className="text-slate-300 font-sans leading-relaxed text-sm md:text-base">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
