"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { profileData } from "@/data/portfolio";
import { Mail, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";

export const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Pesan Portofolio dari ${name}`);
    const body = encodeURIComponent(
      `Halo Muhlisin,\n\nNama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`
    );

    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const getChannelIcon = (platform: string) => {
    switch (platform) {
      case "Email":
        return <Mail size={18} />;
      case "LinkedIn":
        return <Linkedin size={18} />;
      case "GitHub":
        return <Github size={18} />;
      default:
        return <Mail size={18} />;
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-14 relative z-10">
      <Container>
        <SectionHeader
          tag="Kontak"
          title="Hubungi Saya"
          subtitle="Mari berdiskusi tentang peluang kerja, proyek web development, atau integrasi IoT."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Kolom Saluran Kontak Langsung */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {profileData.socials.map((channel, idx) => (
              <a
                key={idx}
                href={channel.url}
                target={channel.platform !== "Email" ? "_blank" : undefined}
                rel={channel.platform !== "Email" ? "noopener noreferrer" : undefined}
                className="group"
              >
                <Card className="p-4 flex items-center gap-3.5 group-hover:border-accent-cyan/50 group-hover:bg-blue-600/10 group-hover:translate-x-1">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-accent-cyan flex items-center justify-center flex-shrink-0 group-hover:bg-accent-cyan/20 group-hover:border-accent-cyan/40 transition-colors">
                    {getChannelIcon(channel.platform)}
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400 font-medium">
                      {channel.platform}
                    </span>
                    <strong className="block text-xs sm:text-sm font-bold text-white group-hover:text-accent-cyan transition-colors">
                      {channel.username}
                    </strong>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          {/* Kolom Formulir Kontak */}
          <div className="lg:col-span-7">
            <Card className="p-5 sm:p-7">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">
                Kirim Pesan Langsung
              </h3>

              {isSubmitted ? (
                <div className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 p-3.5 rounded-xl flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="flex-shrink-0 text-emerald-400" />
                  <p className="text-xs sm:text-sm">
                    Aplikasi email Anda telah dibuka. Silakan kirimkan pesan Anda melalui aplikasi email!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label
                      htmlFor="contactName"
                      className="block text-xs font-semibold text-slate-300 mb-1"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nama Anda"
                      required
                      className="w-full px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contactEmail"
                      className="block text-xs font-semibold text-slate-300 mb-1"
                    >
                      Email Anda
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nama@email.com"
                      required
                      className="w-full px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contactMessage"
                      className="block text-xs font-semibold text-slate-300 mb-1"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="contactMessage"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tuliskan pesan atau penawaran kerja Anda di sini..."
                      required
                      className="w-full px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all resize-y"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full mt-1 text-xs sm:text-sm py-2.5"
                  >
                    <span>Kirimkan Pesan</span>
                    <Send size={14} />
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
