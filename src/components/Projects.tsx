"use client";

import { motion } from "framer-motion";
import { CV_DATA } from "@/data/cv";
import Link from "next/link";

const slugify = (text: string) => text.toLowerCase().trim().replace(/[^\w\-]+/g, "-");

export function Projects() {
  const projects = CV_DATA.projects.slice(0, 4);
  
  return (
    <section id="projects" className="relative flex flex-col items-center justify-center py-32 z-10 text-center">
      <h2 className="font-heading text-4xl md:text-6xl hollow-text-purple tracking-widest uppercase mb-16 px-4">
        My Projects
      </h2>
      
      <div className="w-full max-w-6xl px-6 flex flex-col gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href={`/project/${slugify(project.title.split("–")[0])}`} className="block w-full">
              <div className="neon-border-purple glass-panel p-8 md:p-12 text-left relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
                <div className="absolute -right-4 -bottom-8 font-heading text-9xl font-black text-white/5 pointer-events-none group-hover:text-[#b026ff]/10 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="font-heading text-2xl md:text-4xl text-white mb-6 uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                  {project.title.split("–")[0]}
                </h3>
                <p className="text-slate-300 font-sans leading-relaxed mb-8 max-w-3xl text-lg relative z-10">
                  {project.description[0]}
                </p>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-heading font-medium tracking-wider px-4 py-2 bg-[#b026ff]/10 text-[#00f3ff] border border-[#00f3ff]/30 uppercase backdrop-blur-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
