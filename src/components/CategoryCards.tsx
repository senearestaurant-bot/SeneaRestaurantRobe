import React, { useState } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { CATEGORY_CARDS } from "../data/categoryData";

interface CategoryCardsProps {
  onSelectCategory: (filterKey: string) => void;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({
  onSelectCategory,
}) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleCardClick = (filterKey: string | null, comingSoon: boolean) => {
    if (comingSoon || !filterKey) return;
    onSelectCategory(filterKey);
    const menuEl = document.getElementById("menu");
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="categories"
      className="py-16 sm:py-20 bg-[#EEEAD7] border-b border-[#6D0808]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <p className="text-sm font-semibold text-[#757D6F] mb-2">
            Curated Selection
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#6D0808] tracking-tight">
            Explore Our Food Categories
          </h2>
          <p className="mt-3 text-base text-[#2D0000]/80 leading-relaxed">
            Discover something delicious for every taste and every moment.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORY_CARDS.map((cat) => {
            const showPhoto = Boolean(cat.image) && !failedImages[cat.id];
            const isInteractive = !cat.comingSoon && Boolean(cat.filterKey);

            return (
              <button
                key={cat.id}
                type="button"
                disabled={!isInteractive}
                onClick={() => handleCardClick(cat.filterKey, cat.comingSoon)}
                aria-label={
                  isInteractive
                    ? `Explore ${cat.name} category`
                    : `${cat.name} - Coming Soon`
                }
                className={`group relative h-52 sm:h-64 rounded-2xl overflow-hidden text-left transition-all duration-300 shadow-md focus-visible:outline-2 focus-visible:outline-[#C9A227] ${
                  isInteractive
                    ? "cursor-pointer hover:-translate-y-1 hover:shadow-xl"
                    : "cursor-default"
                }`}
              >
                {/* Background image or refined burgundy/gold culinary backdrop */}
                {showPhoto ? (
                  <img
                    src={cat.image!}
                    alt={cat.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setFailedImages((prev) => ({ ...prev, [cat.id]: true }))
                    }
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                ) : (
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[#2D0000] via-[#6D0808] to-[#2D0000]"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 select-none text-6xl sm:text-7xl">
                      {cat.emoji}
                    </div>
                  </div>
                )}

                {/* Measured scrim */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    showPhoto
                      ? "bg-gradient-to-t from-[#2D0000]/95 via-[#2D0000]/45 to-[#2D0000]/20"
                      : "bg-gradient-to-t from-[#2D0000]/90 via-transparent to-[#2D0000]/30"
                  }`}
                  aria-hidden="true"
                />

                {/* Glassmorphism Overlay Card Surface */}
                <div className="relative h-full p-3.5 sm:p-5 flex flex-col justify-between border border-[#FFFFFF]/25 rounded-2xl">
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FFFFFF]/15 backdrop-blur-md border border-[#FFFFFF]/30 text-xl sm:text-2xl shadow-sm"
                      aria-hidden="true"
                    >
                      {cat.emoji}
                    </span>

                    {cat.comingSoon && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#2D0000]/80 backdrop-blur-md border border-[#C9A227]/60 text-[11px] sm:text-xs font-semibold text-[#C9A227]">
                        <Clock className="w-3 h-3" />
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <div className="rounded-xl bg-[#2D0000]/55 backdrop-blur-md border border-[#FFFFFF]/25 p-3 sm:p-3.5 transition-colors duration-200 group-hover:border-[#C9A227]/70">
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#FFFFFF] leading-snug">
                      {cat.name}
                    </h3>

                    {isInteractive ? (
                      <div className="mt-1 flex items-center justify-between text-xs sm:text-sm font-medium text-[#C9A227]">
                        <span>Explore Category</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    ) : (
                      <p className="mt-1 text-xs text-[#EEEAD7]/80">
                        Coming Soon
                      </p>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
