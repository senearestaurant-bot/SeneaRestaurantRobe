import React from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { RESTAURANT_INFO, MENU_FILTER_CATEGORIES } from "../data/categoryData";

interface FooterProps {
  onSelectCategory: (category: string) => void;
}

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Categories", href: "#categories" },
  { label: "Menu", href: "#menu" },
  { label: "Restaurant Video", href: "#video" },
  { label: "About Us", href: "#about" },
  { label: "Payment Info", href: "#payment" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
    const menuEl = document.getElementById("menu");
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#2D0000] text-[#EEEAD7] border-t-2 border-[#C9A227]/60 pb-20 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo size="md" />
              <div>
                <h2 className="font-display text-lg font-bold text-[#FFFFFF]">
                  {RESTAURANT_INFO.name}
                </h2>
                <p className="text-xs text-[#C9A227]">Bale Robe, Ethiopia</p>
              </div>
            </div>
            <p className="text-sm text-[#EEEAD7]/80 leading-relaxed">
              Serving traditional Ethiopian and Arabian-inspired meals, freshly
              prepared with care and warm hospitality in Bale Robe.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="font-display text-base font-bold text-[#C9A227] mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#EEEAD7]/85 hover:text-[#C9A227] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Menu Categories */}
          <div>
            <h3 className="font-display text-base font-bold text-[#C9A227] mb-4">
              Menu Categories
            </h3>
            <ul className="space-y-2 text-sm">
              {MENU_FILTER_CATEGORIES.filter((c) => c !== "All Menu").map(
                (category) => (
                  <li key={category}>
                    <button
                      type="button"
                      onClick={() => handleCategoryClick(category)}
                      className="text-left text-[#EEEAD7]/85 hover:text-[#C9A227] transition-colors cursor-pointer"
                    >
                      {category}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-bold text-[#C9A227]">
              Location &amp; Contact
            </h3>
            <div className="flex items-start gap-2.5 text-sm text-[#EEEAD7]/85">
              <MapPin className="w-4 h-4 text-[#C9A227] mt-0.5 shrink-0" />
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C9A227] transition-colors"
              >
                {RESTAURANT_INFO.address}
              </a>
            </div>

            <div className="space-y-2.5 pt-1">
              {RESTAURANT_INFO.phones.map((phone) => (
                <div
                  key={phone.display}
                  className="flex items-center justify-between gap-2 bg-[#6D0808]/45 border border-[#C9A227]/30 rounded-lg px-3 py-2 text-sm"
                >
                  <a
                    href={phone.tel}
                    className="inline-flex items-center gap-2 text-[#FFFFFF] hover:text-[#C9A227] tabular-nums transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
                    {phone.display}
                  </a>
                  <a
                    href={phone.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp ${phone.display}`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#C9A227] hover:underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#C9A227]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#EEEAD7]/75 text-center">
          <p>© 2026 Senea Muslim Restaurant. All Rights Reserved.</p>
          <p className="text-[#C9A227]/90">Bale Robe, Ethiopia</p>
        </div>
      </div>
    </footer>
  );
};
