import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { experienceData, certificationsData } from "@/data/experience";
import { Briefcase, Award, BookOpen } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-8 sm:py-10 relative z-10">
      <Container>
        <SectionHeader
          tag="Rekam Jejak"
          title="Pengalaman & Sertifikasi"
          subtitle="Pengalaman profesional dan sertifikasi kompetensi terakreditasi."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Kolom Kiri: Pengalaman Kerja */}
          <div>
            <div className="flex items-center gap-2 mb-3.5">
              <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-accent-cyan flex items-center justify-center border border-accent-cyan/30">
                <Briefcase size={15} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">Pengalaman Kerja</h3>
            </div>

            <div className="space-y-3">
              {experienceData.map((item, idx) => (
                <Card key={idx} className="p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        {item.role}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-accent-cyan">
                        {item.company}
                      </p>
                      {item.division && (
                        <p className="text-[11px] text-slate-400">{item.division}</p>
                      )}
                    </div>
                    <span className="self-start px-2.5 py-0.5 text-[11px] font-bold bg-blue-600/20 text-blue-300 border border-accent-cyan/30 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Sertifikasi */}
          <div>
            <div className="flex items-center gap-2 mb-3.5">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-accent-cyan flex items-center justify-center border border-cyan-500/30">
                <Award size={15} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">Sertifikasi Kompetensi</h3>
            </div>

            <div className="space-y-3">
              {certificationsData.map((cert, idx) => (
                <Card key={idx} className="p-4 flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-accent-cyan/30 text-accent-cyan flex items-center justify-center flex-shrink-0">
                    {cert.iconType === "course" ? (
                      <BookOpen size={17} />
                    ) : (
                      <Award size={17} />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {cert.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {cert.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
