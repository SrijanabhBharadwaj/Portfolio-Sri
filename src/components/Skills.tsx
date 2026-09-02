"use client";

import { motion } from "framer-motion";
import { Code, Brain, Database, Wrench, Layout } from "lucide-react";
import { CV_DATA } from "@/data/cv";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: CV_DATA.skills.ai_ml,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    title: "Web Development",
    icon: Layout,
    skills: CV_DATA.skills.web_dev,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Programming",
    icon: Code,
    skills: CV_DATA.skills.programming,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Data & Systems",
    icon: Database,
    skills: CV_DATA.skills.data_systems,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
  {
    title: "Engineering & Hardware",
    icon: Wrench,
    skills: CV_DATA.skills.engineering,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-start"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl">
            A comprehensive overview of the tools, languages, and frameworks I use to build intelligent systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-6 md:p-8 rounded-3xl flex flex-col gap-6 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.bg} ${category.color}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
