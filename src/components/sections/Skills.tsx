import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { skillsData } from "@/data/skills";
import { Server, Layout, Terminal, Cpu } from "lucide-react";
import clsx from "clsx";

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "server":
        return <Server size={20} />;
      case "layout":
        return <Layout size={20} />;
      case "terminal":
        return <Terminal size={20} />;
      case "cpu":
        return <Cpu size={20} />;
      default:
        return <Server size={20} />;
    }
  };

  const getIconColorClass = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-600/20 text-blue-400 border-blue-500/30";
      case "cyan":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
      case "dark":
        return "bg-white/10 text-white border-white/20";
      case "amber":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      default:
        return "bg-blue-600/20 text-blue-400 border-blue-500/30";
    }
  };

  return (
    <section id="skills" className="py-8 sm:py-10 relative z-10">
      <Container>
        <SectionHeader
          tag="Kompetensi"
          title="Keahlian & Tech Stack"
          subtitle="Teknologi, bahasa pemrograman, dan ekosistem yang saya kuasai dan aplikasikan."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {skillsData.map((category) => (
            <Card key={category.id} className="p-5 flex flex-col justify-between">
              <div>
                <div
                  className={clsx(
                    "w-10 h-10 rounded-xl flex items-center justify-center mb-4 border",
                    getIconColorClass(category.iconColor)
                  )}
                >
                  {getIcon(category.iconName)}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-3">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={clsx(
                      "px-2.5 py-0.5 rounded-md text-[11px] font-semibold border transition-colors",
                      skill.highlight
                        ? "bg-blue-600/25 text-blue-300 border-accent-cyan/40 shadow-sm"
                        : "bg-white/[0.04] text-slate-300 border-white/[0.08]"
                    )}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
