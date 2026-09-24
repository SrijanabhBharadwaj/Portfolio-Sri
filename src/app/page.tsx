import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent overflow-hidden selection:bg-[#00f3ff] selection:text-[#0b071a]">
      {/* Background Layers */}
      <div className="fixed inset-0 z-[-1]">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b071a]/50 to-[#0b071a] z-[2]"></div>
      </div>
      
      <div className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <div className="w-full bg-[#0b071a]/80 backdrop-blur-sm pt-20">
          <Skills />
          <Projects />
          <Experience />
          <About />
          <Achievements />
          <Contact />
        </div>
      </div>
    </main>
  );
}
