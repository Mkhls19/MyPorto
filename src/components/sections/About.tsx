import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { profileData } from "@/data/portfolio";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 relative z-10">
      <Container>
        <SectionHeader
          tag="Profil Diri"
          title="Tentang Saya"
          subtitle="Mengenal lebih dekat latar belakang akademis dan fokus rekayasa perangkat lunak saya."
        />

        <Card className="p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Teks Penjelasan */}
            <div className="lg:col-span-7 space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {profileData.aboutTitle}
              </h3>
              {profileData.aboutDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Statistik / Key Highlights */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {profileData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/[0.03] border border-white/[0.08] hover:border-accent-cyan/50 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <span className="block text-2xl sm:text-3xl font-extrabold text-accent-cyan mb-1 group-hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                    {stat.number}
                  </span>
                  <span className="block font-bold text-white text-sm sm:text-base mb-1">
                    {stat.title}
                  </span>
                  <span className="block text-xs sm:text-sm text-slate-400 leading-normal">
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
