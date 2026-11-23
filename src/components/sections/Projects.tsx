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
    <section id="projects" className="py-16 sm:py-20 relative z-10">
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
              className="overflow-hidden flex flex-col group p-0"
            >
              {/* Image Preview Box */}
              <div className="relative w-full h-56 sm:h-64 bg-slate-950 overflow-hidden border-b border-white/[0.08]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 550px, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 right-4 bg-slate-950/85 backdrop-blur-md text-accent-cyan text-xs font-bold px-3 py-1 rounded-full border border-accent-cyan/40 shadow-md">
                  {project.category}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-600/15 text-blue-300 border border-accent-cyan/20"
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
                        className="text-xs"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={13} />
                      </Button>
                    )}
                    {project.repoUrl && (
                      <Button
                        href={project.repoUrl}
                        variant="muted"
                        size="sm"
                        className="text-xs"
                      >
                        <Github size={13} />
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
