import React from "react";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950/90 border-t border-white/[0.08] text-slate-400 py-12 relative z-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <span className="text-xl font-extrabold text-white tracking-tight">
              mkhlsma<span className="text-accent-cyan">.dev</span>
            </span>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Informatics Engineering Graduate | Web Developer &amp; Software Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm" aria-label="Footer Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Mkhls19"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-accent-cyan hover:bg-blue-600/20 transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhlisin-m-51a475289"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-accent-cyan hover:bg-blue-600/20 transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="mailto:mkhlsma940@gmail.com"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-accent-cyan hover:bg-blue-600/20 transition-all duration-200"
              aria-label="Send Email"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 text-center text-xs text-slate-500">
          <p>&copy; {currentYear} Muhlisin. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
