"use client";

import React, { useState, useEffect } from "react";
import { navItems } from "@/data/portfolio";
import { Volume2, VolumeX, Menu, X } from "lucide-react";
import clsx from "clsx";

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Floating Pill Container (Desktop & Tablet) */}
      <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 bg-slate-950/85 backdrop-blur-xl border border-white/10 px-2 sm:px-3 py-1.5 rounded-full shadow-2xl shadow-black/50 transition-all duration-300 max-w-full overflow-x-auto"
          aria-label="Navigasi Utama"
        >
          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={clsx(
                      "inline-block px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200",
                      isActive
                        ? "bg-blue-600/30 text-white border border-accent-cyan/40 shadow-[0_0_15px_rgba(37,99,235,0.35)]"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Nav Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white rounded-full bg-white/5 border border-white/10"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            <span>Menu</span>
          </button>

          {/* Divider */}
          <div className="w-px h-5 bg-white/15 mx-1" aria-hidden="true" />

          {/* Sound / Mode Toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={clsx(
              "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 border",
              isMuted
                ? "text-slate-500 bg-white/5 border-white/10"
                : "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/30 hover:bg-accent-cyan/20"
            )}
            title={isMuted ? "Suara dinonaktifkan" : "Suara aktif"}
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-20 inset-x-4 bg-slate-900/95 border border-white/15 rounded-2xl p-5 shadow-2xl flex flex-col gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs font-bold text-accent-cyan tracking-wider uppercase px-3 py-1">
              Navigasi Halaman
            </span>
            <ul className="flex flex-col gap-1 mt-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={clsx(
                        "block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
                        isActive
                          ? "bg-blue-600/30 text-accent-cyan border border-accent-cyan/40"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
