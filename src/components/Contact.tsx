"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative flex flex-col items-center justify-center py-32 z-10 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="font-heading text-xs md:text-sm tracking-widest text-[#00f3ff] drop-shadow-[0_0_8px_#00f3ff] mb-4 block">
          &lt; GET IN TOUCH /&gt;
        </span>
        <h2 className="font-heading text-4xl md:text-6xl hollow-text-purple tracking-widest uppercase mb-12">
          Contact Me
        </h2>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="neon-border glass-panel p-8 md:p-12 text-left w-full max-w-2xl"
      >
        <form className="flex flex-col gap-6 font-heading">
          <div className="flex flex-col gap-2">
            <label className="text-white text-xs md:text-sm tracking-widest uppercase">Email :</label>
            <input 
              type="email" 
              placeholder="HELLO@EARTH.COM"
              className="bg-black/30 border border-white/20 p-4 text-[#00f3ff] placeholder:text-white/20 outline-none focus:border-[#00f3ff] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-xs md:text-sm tracking-widest uppercase">Subject :</label>
            <input 
              type="text" 
              placeholder="MISSION DETAILS"
              className="bg-black/30 border border-white/20 p-4 text-[#00f3ff] placeholder:text-white/20 outline-none focus:border-[#00f3ff] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-xs md:text-sm tracking-widest uppercase">Content :</label>
            <textarea 
              rows={5}
              placeholder="TRANSMITTING COORDINATES..."
              className="bg-black/30 border border-white/20 p-4 text-[#00f3ff] placeholder:text-white/20 outline-none focus:border-[#00f3ff] transition-colors resize-none"
            ></textarea>
          </div>
          
          <button type="button" className="mt-4 bg-[#b026ff] text-white py-4 font-bold tracking-widest uppercase hover:bg-[#991be6] transition-colors shadow-[0_0_15px_rgba(176,38,255,0.4)]">
            Submit
          </button>
        </form>
      </motion.div>
    </section>
  );
}
