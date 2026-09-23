"use client";

import { useState, useEffect } from "react";
import { ICON_SOCIALS, NAV_LINKS, PRESSKIT, SITE_CONFIG } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { SocialIcon } from "@/components/ui/SocialIcon";

function SocialLinks() {
  return (
    <ul className="flex items-center gap-3">
      {ICON_SOCIALS.map((social) => (
        <li key={social.name}>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`State Of Mind on ${social.name}`}
            className="flex h-9 w-9 items-center justify-center text-cream hover:text-gold transition-colors"
          >
            <SocialIcon
              name={social.icon}
              className={social.icon === "soundcloud" ? "w-7 h-7" : "w-[18px] h-[18px]"}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-ink/95 backdrop-blur-sm border-b border-rule"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 md:px-12 h-[72px] md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="relative z-[101] shrink-0 transition-opacity hover:opacity-80"
            aria-label={`${SITE_CONFIG.name} — home`}
          >
            <Logo className="w-[72px] md:w-[84px]" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-9">
            <ul className="flex items-center gap-5 xl:gap-9">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="mono text-[13px] font-extrabold text-cream hover:text-gold transition-colors link-hover"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <span className="h-5 w-px bg-cream/25" aria-hidden="true" />
            <SocialLinks />
            <a
              href={PRESSKIT.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-[12px] font-extrabold text-cream border border-cream/60 px-4 py-2.5 hover:bg-cream hover:text-ink transition-colors"
            >
              Press kit ↓
            </a>
          </div>

          {/* Mobile: socials + menu button */}
          <div className="lg:hidden flex items-center gap-2 relative z-[101]">
            <SocialLinks />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-cream p-2"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-7 h-4 relative flex flex-col justify-between">
                <span
                  className={`w-full h-[1.5px] bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`w-full h-[1.5px] bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[99] bg-ink transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-end h-full px-6 pb-12 pt-24">
          <p className="label mb-8">Menu</p>
          <ul className="flex flex-col gap-1 border-t border-rule">
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.href}
                className={`border-b border-rule transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 60}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="headline flex items-baseline justify-between py-4 text-4xl text-cream active:text-gold"
                >
                  {link.label}
                  <span className="label text-cream/40">0{index + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex items-center justify-between gap-6">
            <a
              href={PRESSKIT.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-[12px] font-extrabold text-cream border border-cream/60 px-5 py-3 active:bg-cream active:text-ink"
            >
              Press kit ↓
            </a>
            <p className="mono text-[11px] text-muted">{SITE_CONFIG.location}</p>
          </div>
        </div>
      </div>
    </>
  );
}
