"use client";

import { motion } from "framer-motion";
import { CV_DATA } from "@/data/cv";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10"
      >
        <h2 className="text-sm md:text-base tracking-[0.3em] text-[#00f3ff] uppercase mb-4 font-heading">
          A Message from Earth
        </h2>
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black font-heading hollow-text-purple uppercase mb-6 tracking-wide drop-shadow-2xl">
          Hello Fellow<br className="hidden md:block" /> Galaxy Member
        </h1>
        <h3 className="text-xl md:text-3xl font-heading font-medium text-white mb-16 tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          I AM {CV_DATA.name.split(' ')[0].toUpperCase()}
        </h3>
      </motion.div>

      {/* The massive foreground planet curve */}
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: "20%" }}
        transition={{ duration: 1.5, type: "spring", bounce: 0.2 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[50vh] bg-gradient-to-t from-[#003cff]/80 to-[#0b071a] rounded-[100%] blur-[1px] border-t-2 border-[#00f3ff]/80 z-0 pointer-events-none"
        style={{
          boxShadow: "0 -20px 150px rgba(0, 243, 255, 0.4)"
        }}
      />
      
      {/* Scroll indicator over the planet */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-heading text-xs tracking-widest text-[#00f3ff] drop-shadow-[0_0_8px_#00f3ff]">SCROLL TO EXPLORE</span>
        <div className="w-px h-16 bg-gradient-to-b from-[#00f3ff] to-transparent"></div>
      </motion.div>
    </section>
  );
}
