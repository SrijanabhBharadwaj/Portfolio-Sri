"use client";

import { motion } from "framer-motion";
import { CV_DATA } from "@/data/cv";

export function Achievements() {
  return (
    <section id="achievements" className="relative flex flex-col items-center justify-center py-32 z-10 text-center px-4">
      <h2 className="font-heading text-4xl md:text-6xl hollow-text tracking-widest uppercase mb-16">
        Academia & Impact
      </h2>
      
      <div className="w-full max-w-5xl space-y-16">
        
        {/* Education */}
        <div className="text-left w-full">
            <h3 className="font-heading text-3xl font-bold text-white uppercase mb-8 ml-4">
                Education
            </h3>
            <div className="space-y-6">
            {CV_DATA.education.map((edu, i) => (
                <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="neon-border glass-panel p-6"
                >
                <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center border-b border-white/10 pb-4 mb-4">
                    <h4 className="font-heading text-[#00f3ff] text-lg md:text-xl uppercase">{edu.degree}</h4>
                    <span className="font-heading text-xs text-slate-400 tracking-widest uppercase text-left md:text-right">{edu.period}</span>
                </div>
                <p className="font-sans text-slate-200 text-lg">{edu.institution}</p>
                <p className="font-sans text-slate-400 text-sm mt-2">{edu.location}</p>
                </motion.div>
            ))}
            </div>
        </div>

        {/* Volunteering */}
        <div className="text-left w-full">
            <h3 className="font-heading text-3xl font-bold text-white uppercase mb-8 ml-4">
                Volunteering
            </h3>
            <div className="space-y-6">
            {CV_DATA.volunteering.map((vol, i) => (
                <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="neon-border-purple glass-panel p-6"
                >
                <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center border-b border-white/10 pb-4 mb-4">
                    <h4 className="font-heading text-[#b026ff] text-lg md:text-xl uppercase drop-shadow-[0_0_5px_rgba(176,38,255,0.4)]">{vol.role}</h4>
                    <span className="font-heading text-xs text-slate-400 tracking-widest uppercase text-left md:text-right">{vol.period}</span>
                </div>
                <p className="font-sans text-slate-200 text-lg mb-4">{vol.organization}</p>
                <div className="space-y-2">
                    {vol.description.map((desc, idx) => (
                        <p key={idx} className="font-sans text-slate-400 text-sm md:text-base leading-relaxed">
                            • {desc}
                        </p>
                    ))}
                </div>
                </motion.div>
            ))}
            </div>
        </div>

      </div>
    </section>
  );
}
