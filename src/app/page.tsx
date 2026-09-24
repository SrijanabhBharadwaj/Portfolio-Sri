import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#fbfbfd]">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Achievements />
      <Contact />
      <footer className="py-12 text-center text-[#86868b] border-t border-[#d2d2d7]">
        <p className="text-sm">© {new Date().getFullYear()} Srijanabh Bharadwaj. All rights reserved.</p>
      </footer>
    </main>
  );
}
