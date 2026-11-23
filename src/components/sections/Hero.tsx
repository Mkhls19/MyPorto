import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { profileData } from "@/data/portfolio";
import { ArrowRight, Send, Github, Linkedin, Mail } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-24 sm:pt-28 pb-8 sm:pb-12 flex items-center relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Kolom Teks (Desktop: Kiri 7 kolom) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Main Greeting Title */}
            <h1 className="flex flex-col leading-tight tracking-tight mb-2.5">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-accent-cyan drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">
                Welcome to
              </span>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white drop-shadow-md">
                My Portfolio
              </span>
            </h1>

            {/* FOTO PROFIL UNTUK MOBILE */}
            <div className="block lg:hidden my-4 w-full max-w-[260px] sm:max-w-[280px]">
              <div className="relative group mx-auto">
                <div className="absolute -inset-2.5 bg-gradient-to-r from-accent-cyan/30 to-blue-600/30 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulseGlow" />
                
                <div className="relative z-10 w-full h-[300px] rounded-2xl overflow-hidden border-2 border-accent-cyan/40 bg-slate-900 shadow-xl">
                  <Image
                    src="/images/profile/Profile.jpg"
                    alt={`Foto Profil ${profileData.name}`}
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    priority
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="relative z-20 -mt-5 mx-auto w-max max-w-[92%] bg-slate-950/95 backdrop-blur-md border border-accent-cyan/40 px-4 py-1.5 rounded-full shadow-lg text-center">
                  <span className="block text-xs sm:text-sm font-extrabold text-white tracking-wide">
                    {profileData.name}
                  </span>
                  <span className="block text-[11px] font-semibold text-accent-cyan">
                    {profileData.degree}
                  </span>
                </div>
              </div>
            </div>

            {/* Subline */}
            <div className="mb-2.5">
              <span className="text-sm sm:text-base md:text-lg font-bold text-blue-300 tracking-tight">
                {profileData.subline}
              </span>
            </div>

            {/* Deskripsi */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mb-5">
              {profileData.description}
            </p>

            {/* CTA Buttons Group */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-5">
              <Button href="#projects" variant="primary" size="md" className="w-full sm:w-auto">
                <span>Lihat Projek</span>
                <ArrowRight size={16} />
              </Button>
              <Button href="#contact" variant="outline" size="md" className="w-full sm:w-auto">
                <span>Hubungi Saya</span>
                <Send size={14} />
              </Button>
            </div>

            {/* FIND ME SOSMED */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-extrabold tracking-widest text-slate-400 uppercase">
                FIND ME
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Mkhls19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-accent-cyan hover:bg-blue-600/20 hover:-translate-y-0.5 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhlisin-m-51a475289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-accent-cyan hover:bg-blue-600/20 hover:-translate-y-0.5 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href="mailto:mkhlsma940@gmail.com"
                  className="w-8 h-8 rounded-lg bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-accent-cyan hover:bg-blue-600/20 hover:-translate-y-0.5 transition-all duration-200"
                  aria-label="Send Email"
                >
                  <Mail size={15} />
                </a>
              </div>
            </div>

          </div>

          {/* Kolom Kanan: FOTO PROFIL (Desktop) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
            <div className="relative w-full max-w-[340px] group">
              {/* Glow Effect */}
              <div className="absolute -inset-3 bg-gradient-to-r from-accent-cyan/30 via-blue-600/25 to-sky-400/20 rounded-[30px] blur-xl opacity-75 group-hover:opacity-100 transition duration-700 animate-pulseGlow" />
              
              {/* Frame Foto */}
              <div className="relative z-10 w-full h-[380px] rounded-3xl overflow-hidden border-2 border-accent-cyan/40 bg-slate-900/90 shadow-2xl">
                <Image
                  src="/images/profile/Profile.jpg"
                  alt={`Foto Profil ${profileData.name}`}
                  fill
                  sizes="(min-width: 1024px) 340px, 300px"
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Caption Pill */}
              <div className="relative z-20 -mt-6 mx-auto w-max max-w-[90%] bg-slate-950/95 backdrop-blur-xl border border-accent-cyan/40 px-5 py-2 rounded-full shadow-xl text-center">
                <span className="block text-sm font-extrabold text-white tracking-wide">
                  {profileData.name}
                </span>
                <span className="block text-xs font-semibold text-accent-cyan">
                  {profileData.degree}
                </span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
