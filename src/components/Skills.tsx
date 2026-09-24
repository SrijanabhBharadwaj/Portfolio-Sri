import { CV_DATA } from "@/data/cv";

const skillCategories = [
  { title: "AI & Machine Learning", skills: CV_DATA.skills.ai_ml },
  { title: "Web Development", skills: CV_DATA.skills.web_dev },
  { title: "Programming", skills: CV_DATA.skills.programming },
  { title: "Data & Systems", skills: CV_DATA.skills.data_systems },
  { title: "Engineering & Hardware", skills: CV_DATA.skills.engineering },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[#fbfbfd] border-t border-[#d2d2d7]">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-16">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="flex flex-col">
              <h3 className="text-xl font-bold text-[#1d1d1f] mb-4 pb-2 border-b border-[#d2d2d7]">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-lg text-[#86868b]"
                  >
                    {skill}{category.skills[category.skills.length - 1] === skill ? "" : ","}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
