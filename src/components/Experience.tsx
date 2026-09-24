import { CV_DATA } from "@/data/cv";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-white border-t border-[#d2d2d7]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-16">
          Experience
        </h2>

        <div className="space-y-16">
          {CV_DATA.experience.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 border-b border-[#d2d2d7] pb-12 last:border-0 last:pb-0">
              <div className="md:w-1/3 shrink-0">
                <span className="text-[#86868b] text-base md:text-lg font-medium tracking-wide">
                  {exp.period}
                </span>
                <span className="block text-sm text-[#86868b] mt-1">{exp.location}</span>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl md:text-2xl font-bold text-[#1d1d1f] mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-[#1d1d1f] font-medium mb-4 text-lg">
                  {exp.company}
                </h4>
                <div className="space-y-3">
                  {exp.description.map((desc, i) => (
                    <p key={i} className="text-[#1d1d1f] leading-relaxed text-lg">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
