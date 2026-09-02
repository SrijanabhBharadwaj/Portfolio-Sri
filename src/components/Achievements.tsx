"use client";

import { motion, useInView } from "framer-motion";
import { Award, BookOpen, Trophy } from "lucide-react";
import { CV_DATA } from "@/data/cv";
import { useRef, useEffect, useState } from "react";

// Helper component for animated counters
function AnimatedCounter({ end, duration = 2 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.min(Math.floor(end * progress), end));
          animationFrame = requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-start md:items-center md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Milestones & <span className="text-gradient">Impact</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mb-6" />
        </motion.div>

        {/* Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { label: "Projects Built", value: CV_DATA.projects.length, icon: Trophy },
            { label: "Publications", value: CV_DATA.publications.length, icon: BookOpen },
            { label: "Certifications", value: 3, icon: Award }, // Example static count based on Diplomas
            { label: "Years Exp", value: 2, icon: Trophy }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass p-6 rounded-3xl flex flex-col items-center justify-center text-center border border-white/5 hover:border-blue-500/30 transition-colors"
            >
              <stat.icon className="w-6 h-6 text-blue-400 mb-4" />
              <div className="text-4xl md:text-5xl font-black text-foreground mb-2">
                <AnimatedCounter end={stat.value} />+
              </div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Publications List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="glass p-8 md:p-12 rounded-3xl border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <BookOpen className="text-purple-400 w-6 h-6" />
            Research & Publications
          </h3>
          <div className="space-y-6">
            {CV_DATA.publications.map((pub, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-foreground mb-1">{pub.title}</h4>
                  <p className="text-muted-foreground">{pub.forum}</p>
                </div>
                <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 font-mono text-sm border border-blue-500/20">
                  {pub.year}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
