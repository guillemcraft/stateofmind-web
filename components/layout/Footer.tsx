import { PRESSKIT, SITE_CONFIG } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

const FOOTER_LINKS = [
  { label: "Instagram", href: SITE_CONFIG.social.instagram },
  { label: "SoundCloud", href: SITE_CONFIG.social.soundcloud },
  { label: "YouTube", href: SITE_CONFIG.social.youtube },
  { label: "Spotify", href: SITE_CONFIG.social.spotify },
  { label: "Press kit", href: PRESSKIT.href },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-rule">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <Logo className="w-[96px] mb-6" />
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-cream/70 hover:text-cream transition-colors link-hover"
            >
              {SITE_CONFIG.email}
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-[11px] text-cream/60 hover:text-cream transition-colors link-hover"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 pt-6 border-t border-rule flex flex-col md:flex-row justify-between gap-3">
          <p className="mono text-[10px] text-muted">
            {SITE_CONFIG.location}
          </p>
          <p className="mono text-[10px] text-muted">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
