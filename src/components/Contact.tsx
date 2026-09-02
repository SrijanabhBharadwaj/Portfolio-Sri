"use client";

import { motion } from "framer-motion";
import { Mail, Send, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { CV_DATA } from "@/data/cv";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white/[0.02] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s Build <span className="text-gradient">Together</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-xl">
            Whether it&apos;s a research collaboration, a full-stack project, or just a technical discussion, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Socials & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-6">
              <a href={`mailto:${CV_DATA.contact.email}`} className="group flex items-center gap-6 glass p-6 rounded-2xl hover:border-blue-500/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                  <p className="text-lg font-bold text-foreground">{CV_DATA.contact.email}</p>
                </div>
              </a>

              <a href={`tel:${CV_DATA.contact.phone.replace(/[^0-9+]/g, '')}`} className="group flex items-center gap-6 glass p-6 rounded-2xl hover:border-purple-500/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
                  <p className="text-lg font-bold text-foreground">{CV_DATA.contact.phone}</p>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href={CV_DATA.contact.github} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/20 transition-all">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href={CV_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-muted-foreground hover:text-blue-400 hover:border-blue-500/30 transition-all">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form className="glass p-8 md:p-10 rounded-3xl flex flex-col gap-6 border border-white/5" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-2xl font-bold text-foreground">Send a message</h3>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can I help you?" 
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="group relative inline-flex h-14 items-center justify-center rounded-xl bg-blue-600 px-8 font-medium text-white transition-all hover:bg-blue-500 active:scale-95 w-full mt-2"
              >
                <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
