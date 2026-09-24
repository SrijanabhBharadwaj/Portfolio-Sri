import { CV_DATA } from "@/data/cv";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white border-t border-[#d2d2d7]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-12">
          About
        </h2>
        
        <div className="space-y-8 text-lg md:text-xl text-[#1d1d1f] leading-relaxed">
          <p>
            I am a Computer Science engineer specializing in Artificial Intelligence and Machine Learning. 
            My core drive is building intelligent, full-stack applications and conducting cross-disciplinary research 
            to solve real-world challenges from the ground up.
          </p>
          <p>
            What sets my approach apart is the fusion of an analytical engineering mindset with a deep-rooted 
            background in the creative arts. Having earned a <strong>Diploma in Fine Arts</strong> and 
            a <strong>Visharad I in Hindustani Classical Music</strong>, I approach 
            software development not just as writing code, but as a discipline of design and harmony.
          </p>
          <p>
            Whether I am tuning a ViT architecture for deepfake detection or crafting a user interface, 
            I strive to connect deep technology with user-friendly design, turning complex data into seamless, 
            intuitive experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
