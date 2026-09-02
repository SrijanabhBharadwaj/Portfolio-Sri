"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CV_DATA } from "@/data/cv";
import Link from "next/link";

const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -

export function Projects() {
  // Take the first 4 featured projects as requested
  const featuredProjects = CV_DATA.projects.slice(0, 4);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 flex flex-col items-start"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of projects where I bridge the gap between machine learning research 
            and scalable software engineering.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredProjects.map((project, index) => {
            const slug = slugify(project.title.split("–")[0].trim());

            return (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/project/${slug}`} className="block group h-full">
                  <div className="glass h-full p-8 rounded-3xl flex flex-col gap-6 relative overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:border-blue-500/30 group-hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] cursor-pointer">
                    
                    {/* Background glow on hover */}
                    <div className="absolute -inset-x-0 -top-full h-full bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl" />
                    
                    {/* Meta/Tech Bubbles */}
                    <div className="flex flex-wrap gap-2 z-10 w-full pr-12">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-foreground/5 text-foreground rounded-full border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium bg-foreground/5 text-muted-foreground rounded-full border border-white/5">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Arrow Icon */}
                    <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-white transition-colors duration-300 z-10">
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                    </div>

                    {/* Title & Description */}
                    <div className="flex-grow z-10 mt-4">
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-400 transition-colors">
                        {project.title.split("–")[0].trim()}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description[0]}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center flex justify-center"
        >
          <a
            href={CV_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-foreground hover:text-blue-400 transition-colors group"
          >
            Explore all repositories on GitHub
            <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
