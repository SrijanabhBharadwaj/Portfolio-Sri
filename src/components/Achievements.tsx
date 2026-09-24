import { CV_DATA } from "@/data/cv";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32 bg-white border-t border-[#d2d2d7]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-16">
          Education & Volunteering
        </h2>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#1d1d1f] mb-8">Education</h3>
          <div className="space-y-12">
            {CV_DATA.education.map((edu, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="md:w-1/3 shrink-0">
                  <span className="text-[#86868b] text-base md:text-lg font-medium tracking-wide">
                    {edu.period}
                  </span>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl md:text-2xl font-bold text-[#1d1d1f] mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-[#1d1d1f] font-medium text-lg">
                    {edu.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
           <h3 className="text-2xl font-bold text-[#1d1d1f] mb-8">Volunteering</h3>
           <div className="space-y-12">
            {CV_DATA.volunteering.map((vol, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="md:w-1/3 shrink-0">
                  <span className="text-[#86868b] text-base md:text-lg font-medium tracking-wide">
                    {vol.period}
                  </span>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl md:text-2xl font-bold text-[#1d1d1f] mb-1">
                    {vol.role}
                  </h4>
                  <p className="text-[#1d1d1f] font-medium text-lg mb-3">
                    {vol.organization}
                  </p>
                  <div className="space-y-2">
                    {vol.description.map((desc, i) => (
                        <p key={i} className="text-[#86868b] leading-relaxed text-lg">
                        {desc}
                        </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
