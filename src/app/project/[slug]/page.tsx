import { CV_DATA } from "@/data/cv";
import { ArrowLeft, CheckCircle2, ChevronRight, LayoutDashboard, TerminalSquare } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Since this is a server component by default, we can just do data fetching logic here.
// In this case, our data is static from CV_DATA.

const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Find the project based on slug
  const project = CV_DATA.projects.find(
    (p) => slugify(p.title.split("–")[0].trim()) === slug
  );

  if (!project) return notFound();

  const titleExtracted = project.title.split("–")[0].trim();
  const subtitleExtracted = project.title.split("–")[1]?.trim() || "";

  return (
    <main className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        {/* Back Navigation */}
        <div className="mb-12">
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section of the Project */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">
              Case Study
            </span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground font-medium text-sm">
              {titleExtracted}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            {titleExtracted}
          </h1>
          {subtitleExtracted && (
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {subtitleExtracted}
            </p>
          )}

          {/* Tech Stack Bubbles */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 rounded-full glass text-sm font-medium border border-white/10 text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Image / Diagram Placeholder */}
        <div className="w-full h-64 md:h-96 glass rounded-2xl mb-16 flex items-center justify-center border border-white/5 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <LayoutDashboard className="w-48 h-48" />
          </div>
          <p className="text-muted-foreground font-medium z-10 flex items-center gap-2">
            <TerminalSquare className="w-5 h-5" />
            Command Center Architecture Diagram (Placeholder)
          </p>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm">
                  1
                </span>
                The Challenge
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Building a highly accurate model for {titleExtracted} required 
                navigating complex state management and massive datasets while 
                retaining real-time inference speeds.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm">
                  2
                </span>
                The Solution & Architecture
              </h2>
              <div className="space-y-4">
                {project.description.map((desc, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed text-lg">
                    {desc}
                  </p>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass p-6 rounded-2xl border border-white/5">
              <h3 className="font-bold text-lg mb-4 text-foreground">Key Results</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm leading-tight">High model accuracy achieved</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm leading-tight">Efficient real-time performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm leading-tight">Seamless frontend bridging via API</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
