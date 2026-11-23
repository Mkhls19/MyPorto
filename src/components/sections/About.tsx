import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { profileData } from "@/data/portfolio";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-8 sm:py-10 relative z-10">
      <Container>
        <SectionHeader
          tag="Profil Diri"
          title="Tentang Saya"
          subtitle="Mengenal lebih dekat latar belakang akademis dan fokus rekayasa perangkat lunak saya."
        />

        <Card className="p-5 sm:p-7 lg:p-9">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Teks Penjelasan */}
            <div className="lg:col-span-7 space-y-3.5 text-slate-300 leading-relaxed text-xs sm:text-sm">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {profileData.aboutTitle}
              </h3>
              {profileData.aboutDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Statistik / Key Highlights */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {profileData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/[0.03] border border-white/[0.08] hover:border-accent-cyan/50 rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <span className="block text-xl sm:text-2xl font-extrabold text-accent-cyan mb-0.5 group-hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                    {stat.number}
                  </span>
                  <span className="block font-bold text-white text-xs sm:text-sm mb-0.5">
                    {stat.title}
                  </span>
                  <span className="block text-[11px] sm:text-xs text-slate-400 leading-normal">
                    {stat.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
};
