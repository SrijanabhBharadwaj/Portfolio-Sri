import { CV_DATA } from "@/data/cv";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 bg-[#fbfbfd] border-t border-[#d2d2d7]">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
          Get in Touch
        </h2>
        <p className="text-xl text-[#86868b] leading-relaxed mb-12">
          Whether you have a specific project in mind or simply want to learn more, I’m available to discuss how we can work together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={`mailto:${CV_DATA.contact.email}`}
            className="inline-flex items-center justify-center rounded-full bg-[#0066cc] px-8 py-4 text-lg font-semibold text-white hover:bg-[#0055b3] transition-colors w-full sm:w-auto"
          >
            Email Me
          </a>
          <a
            href={CV_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#e8e8ed] px-8 py-4 text-lg font-semibold text-[#1d1d1f] hover:bg-[#d2d2d7] transition-colors w-full sm:w-auto"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div className="text-[#86868b] space-x-6 text-lg">
          <a href={CV_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#1d1d1f] transition-colors">GitHub</a>
          <span>·</span>
          <span>{CV_DATA.contact.phone}</span>
        </div>
      </div>
    </section>
  );
}
