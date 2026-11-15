import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { RESTAURANT_INFO } from "../data/categoryData";

interface NavbarProps {
  onExploreMenu: () => void;
}

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Categories", href: "#categories" },
  { label: "Menu", href: "#menu" },
  { label: "About Us", href: "#about" },
  { label: "Restaurant Video", href: "#video" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC<NavbarProps> = ({ onExploreMenu }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-shadow duration-200 border-b border-[#6D0808]/10 ${
        scrolled
          ? "bg-[#FFFFFF]/95 backdrop-blur-md shadow-md"
          : "bg-[#EEEAD7]/95 backdrop-blur-sm shadow-xs"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Logo + Name */}
        <a
          href="#home"
          className="flex items-center gap-3 shrink-0 group focus-visible:outline-2 focus-visible:outline-[#C9A227] rounded-lg"
        >
          <BrandLogo size="sm" />
          <span className="font-display font-bold text-base sm:text-lg text-[#6D0808] whitespace-nowrap tracking-tight group-hover:text-[#2D0000] transition-colors">
            {RESTAURANT_INFO.name}
          </span>
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center gap-6"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#2D0000]/85 hover:text-[#6D0808] relative py-1 whitespace-nowrap shrink-0 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#C9A227] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-[#C9A227] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#menu"
            onClick={() => {
              onExploreMenu();
              setMobileOpen(false);
            }}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#FFFFFF] bg-[#6D0808] hover:bg-[#2D0000] border border-[#C9A227]/60 rounded-lg shadow-xs transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#C9A227]"
          >
            Explore Menu
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#FFFFFF] border border-[#6D0808]/20 text-[#6D0808] hover:bg-[#6D0808] hover:text-[#FFFFFF] transition-colors focus-visible:outline-2 focus-visible:outline-[#C9A227]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#FFFFFF] border-t border-[#6D0808]/15 shadow-lg animate-modal-enter">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <div className="flex items-center gap-3 pb-3 mb-2 border-b border-[#EEEAD7]">
              <BrandLogo size="sm" />
              <div>
                <p className="font-display font-bold text-[#6D0808] text-sm">
                  {RESTAURANT_INFO.name}
                </p>
                <p className="text-xs text-[#757D6F]">Bale Robe, Ethiopia</p>
              </div>
            </div>

            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#2D0000] hover:bg-[#EEEAD7] hover:text-[#6D0808] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2">
              <a
                href="#menu"
                onClick={() => {
                  onExploreMenu();
                  setMobileOpen(false);
                }}
                className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-[#FFFFFF] bg-[#6D0808] hover:bg-[#2D0000] rounded-lg border border-[#C9A227]/60 transition-colors"
              >
                Explore Menu
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
