"use client";

import { motion } from "framer-motion";
import { CV_DATA } from "@/data/cv";

export function Skills() {
  const allSkills = [...CV_DATA.skills.ai_ml, ...CV_DATA.skills.web_dev];

  return (
    <section id="skills" className="relative w-full flex flex-col items-center justify-center py-32 px-4 md:px-6 z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-heading text-4xl md:text-6xl hollow-text tracking-widest uppercase mb-4">
          My Skills
        </h2>
        <p className="font-heading text-sm text-[#00f3ff] tracking-[0.2em] uppercase">
          A list of some of my core tools
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl">
        {allSkills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="neon-border glass-panel py-4 px-4 flex items-center justify-center font-heading text-xs text-white uppercase text-center min-h-[70px] backdrop-blur-md"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
