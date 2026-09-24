import { CV_DATA } from "@/data/cv";

export function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 pt-24 pb-12">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1d1d1f] max-w-4xl mx-auto mb-6">
        {CV_DATA.name}
      </h1>
      <p className="text-xl md:text-3xl font-medium tracking-tight text-[#86868b] mb-6">
        {CV_DATA.role.split(" | ").join(" · ")}
      </p>
      <p className="max-w-2xl text-lg md:text-xl text-[#1d1d1f] leading-relaxed mx-auto mb-10">
        {CV_DATA.summary}
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-full bg-[#0066cc] px-6 py-3 text-base font-semibold text-white hover:bg-[#0055b3] transition-colors"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-[#f5f5f7] px-6 py-3 text-base font-semibold text-[#1d1d1f] hover:bg-[#e8e8ed] transition-colors"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
