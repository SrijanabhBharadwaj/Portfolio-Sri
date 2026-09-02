import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { AeroShards } from "@/components/AeroShards";

export default function Home() {
  return (
    <main className="relative min-h-screen isolate">
      <AeroShards />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Achievements />
      <Contact />
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-white/5">
        <p className="text-sm">© {new Date().getFullYear()} Srijanabh Bharadwaj. All rights reserved.</p>
      </footer>
    </main>
  );
}
