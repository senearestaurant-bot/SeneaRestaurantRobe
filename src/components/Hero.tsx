import React from "react";
import { MapPin, UtensilsCrossed } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

interface HeroProps {
  onExploreMenu: () => void;
}

const HIGHLIGHTS = [
  {
    title: "Traditional Food",
    detail: "Authentic Ethiopian & Arabian flavors prepared daily.",
  },
  {
    title: "Fresh Ingredients",
    detail: "Carefully selected meats, spices, and natural fruits.",
  },
  {
    title: "Warm Hospitality",
    detail: "Welcoming family dining in the heart of Bale Robe.",
  },
];

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#2D0000] text-[#FFFFFF]"
    >
      {/* Background Photograph */}
      <div className="absolute inset-0">
        <img
          src="https://6af8443dc6870dc3d38e4623.imgix.net/Mandi-Chicken1.jpg"
          alt="Traditional spiced Mendi rice and roasted chicken at Senea Muslim Restaurant"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 opacity-55"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#2D0000]/90 via-[#2D0000]/75 to-[#2D0000]/95"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#2D0000]/90 via-[#6D0808]/45 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-4 mb-6">
            <BrandLogo size="lg" className="shadow-lg ring-2 ring-[#C9A227]/60" />
            <div className="border-l border-[#C9A227]/50 pl-4">
              <p className="text-sm font-medium text-[#C9A227] tracking-wide">
                Bale Robe, Ethiopia
              </p>
              <p className="text-lg sm:text-xl font-display font-semibold text-[#FFFFFF]">
                Experience the Taste of Tradition
              </p>
            </div>
          </div>

          <h1
            className="font-display font-bold text-[#FFFFFF] leading-tight tracking-tight mb-5"
            style={{
              fontSize: "clamp(2.25rem, 4.5vw, 3.85rem)",
              textWrap: "balance",
            }}
          >
            Welcome to Senea Muslim Restaurant
          </h1>

          <p className="text-base sm:text-lg text-[#EEEAD7]/95 leading-relaxed max-w-2xl mb-8">
            Discover delicious traditional Ethiopian and Arabian-inspired meals,
            freshly prepared with care and served with warm hospitality.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              onClick={onExploreMenu}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#FFFFFF] bg-[#6D0808] hover:bg-[#840c0c] border border-[#C9A227] rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#C9A227]"
            >
              <UtensilsCrossed className="w-4 h-4 text-[#C9A227]" />
              Explore Our Menu
            </a>

            <a
              href="#location"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#FFFFFF] bg-[#2D0000]/75 hover:bg-[#FFFFFF] hover:text-[#2D0000] border border-[#FFFFFF]/40 hover:border-[#C9A227] rounded-xl backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#C9A227]"
            >
              <MapPin className="w-4 h-4 text-[#C9A227]" />
              Find Our Location
            </a>
          </div>
        </div>

        {/* Three Restaurant Highlights */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#C9A227]/30 grid grid-cols-1 md:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item, idx) => (
            <div
              key={item.title}
              className="flex items-start gap-4 bg-[#2D0000]/65 backdrop-blur-md border border-[#C9A227]/30 rounded-xl p-5"
            >
              <span className="font-display font-bold text-lg text-[#C9A227] tabular-nums shrink-0">
                0{idx + 1}.
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold text-[#FFFFFF]">
                  {item.title}
                </h2>
                <p className="text-sm text-[#EEEAD7]/85 mt-1 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
