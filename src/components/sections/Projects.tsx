import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { projectsData } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-10 sm:py-12 relative z-10">
      <Container>
        <SectionHeader
          tag="Portofolio Karya"
          title="Proyek Unggulan"
          subtitle="Studi kasus nyata implementasi web dan sistem tertanam untuk mengatasi masalah riil."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden flex flex-col group p-0 border border-white/[0.08] hover:border-accent-cyan/40 transition-all duration-300 shadow-xl"
            >
              {/* Image Preview Box - Responsive Aspect Ratio */}
              <div className="relative w-full aspect-[16/10] bg-[#0b1329] overflow-hidden border-b border-white/[0.08] flex items-center justify-center p-2">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 680px, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <span className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md text-accent-cyan text-xs font-bold px-3 py-1 rounded-full border border-accent-cyan/40 shadow-md">
                  {project.category}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between gap-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-2">
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-3 py-1 rounded-md bg-blue-600/15 text-blue-300 border border-blue-400/25"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                    {project.demoUrl && (
                      <Button
                        href={project.demoUrl}
                        variant="outline"
                        size="sm"
                        className="text-xs sm:text-sm py-2 px-4"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </Button>
                    )}
                    {project.repoUrl && (
                      <Button
                        href={project.repoUrl}
                        variant="muted"
                        size="sm"
                        className="text-xs sm:text-sm py-2 px-4"
                      >
                        <Github size={14} />
                        <span>GitHub Repo</span>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
