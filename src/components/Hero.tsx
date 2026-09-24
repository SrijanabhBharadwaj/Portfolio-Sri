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
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading hollow-text-purple uppercase tracking-widest drop-shadow-[0_0_15px_rgba(176,38,255,0.4)] leading-tight text-center md:text-right z-10 relative">
            Srijanabh <br className="hidden md:block" /> Bharadwaj
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-[2rem] overflow-hidden neon-border-purple shrink-0 bg-[#0b071a]/50 flex z-10 relative"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/profile.jpg" 
              alt="Srijanabh Bharadwaj" 
              className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
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
