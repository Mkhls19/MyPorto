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
    <section id="projects" className="py-8 sm:py-10 relative z-10">
      <Container>
        <SectionHeader
          tag="Portofolio Karya"
          title="Proyek Unggulan"
          subtitle="Studi kasus nyata implementasi web dan sistem tertanam untuk mengatasi masalah riil."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden flex flex-col group p-0 border border-white/[0.08] hover:border-accent-cyan/40 transition-all duration-300"
            >
              {/* Image Preview Box - Aspect Ratio 16/10 */}
              <div className="relative w-full aspect-[16/10] bg-[#0b1329] overflow-hidden border-b border-white/[0.08] flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <span className="absolute top-3 right-3 bg-slate-950/90 backdrop-blur-md text-accent-cyan text-[11px] font-bold px-2.5 py-1 rounded-full border border-accent-cyan/40 shadow-md">
                  {project.category}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-blue-600/15 text-blue-300 border border-blue-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2.5 pt-3.5 border-t border-white/[0.08]">
                    {project.demoUrl && (
                      <Button
                        href={project.demoUrl}
                        variant="outline"
                        size="sm"
                        className="text-xs py-1.5 px-3"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={12} />
                      </Button>
                    )}
                    {project.repoUrl && (
                      <Button
                        href={project.repoUrl}
                        variant="muted"
                        size="sm"
                        className="text-xs py-1.5 px-3"
                      >
                        <Github size={12} />
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
