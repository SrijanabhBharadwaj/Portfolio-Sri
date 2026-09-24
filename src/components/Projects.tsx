import { CV_DATA } from "@/data/cv";
import Link from "next/link";

const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");

export function Projects() {
  const featuredProjects = CV_DATA.projects.slice(0, 4);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#fbfbfd] border-t border-[#d2d2d7]">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-16">
          Featured Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {featuredProjects.map((project, index) => {
            const slug = slugify(project.title.split("–")[0].trim());

            return (
              <div key={slug} className="flex flex-col">
                <Link href={`/project/${slug}`} className="group inline-flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-[#1d1d1f] mb-4 group-hover:text-[#0066cc] transition-colors">
                    {project.title.split("–")[0].trim()}
                  </h3>
                  <p className="text-[#86868b] leading-relaxed mb-8 flex-grow text-lg">
                    {project.description[0]}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm font-medium text-[#1d1d1f] bg-white border border-[#d2d2d7] px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        
        <div className="mt-24">
          <a
            href={CV_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-[#0066cc] hover:underline"
          >
            Explore all repositories on GitHub &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
