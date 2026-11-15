import React, { useState } from "react";
import { UtensilsCrossed } from "lucide-react";

export interface MenuItem {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  currency: string;
  image: string | null;
}

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(item.image) && !imageError;

  return (
    <article className="group bg-[#FFFFFF] rounded-2xl border border-[#6D0808]/12 overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      {/* Food or Drink Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#2D0000]">
        {showImage ? (
          <img
            src={item.image!}
            alt={item.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#2D0000] via-[#6D0808] to-[#2D0000] flex flex-col items-center justify-center p-6 text-center">
            <div className="w-12 h-12 rounded-xl border border-[#C9A227]/60 bg-[#2D0000]/60 flex items-center justify-center mb-3">
              <UtensilsCrossed className="w-6 h-6 text-[#C9A227]" />
            </div>
            <p className="font-display text-sm font-semibold text-[#EEEAD7]">
              {item.name}
            </p>
            <p className="text-xs text-[#C9A227]/90 mt-1">
              Senea Muslim Restaurant
            </p>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-[#757D6F] mb-1">
            {item.category}
          </p>
          <h3 className="font-display text-lg font-bold text-[#6D0808] leading-snug">
            {item.name}
          </h3>
          <p className="mt-2 text-sm text-[#2D0000]/80 leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="pt-3 border-t border-[#EEEAD7] flex items-center justify-between gap-2">
          <span className="text-xs text-[#757D6F]">Price</span>
          <span className="font-bold text-base sm:text-lg text-[#6D0808] tabular-nums">
            <span className="text-[#C9A227] mr-1">{item.price}</span>
            {item.currency}
          </span>
        </div>
      </div>
    </article>
  );
};
