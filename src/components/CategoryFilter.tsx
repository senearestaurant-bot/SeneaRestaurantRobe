import React from "react";
import { MENU_FILTER_CATEGORIES, CATEGORY_GROUPS } from "../data/categoryData";

interface CategoryFilterProps {
  activeFilter: string;
  onSelectFilter: (filter: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeFilter,
  onSelectFilter,
}) => {
  const activeGroupList =
    CATEGORY_GROUPS[activeFilter as keyof typeof CATEGORY_GROUPS];

  return (
    <div className="space-y-3">
      <div
        role="tablist"
        aria-label="Menu Categories"
        className="flex flex-wrap items-center gap-2"
      >
        {MENU_FILTER_CATEGORIES.map((category) => {
          const isActive = activeFilter === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectFilter(category)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg border transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C9A227] ${
                isActive
                  ? "bg-[#6D0808] text-[#FFFFFF] border-[#C9A227] shadow-sm"
                  : "bg-[#FFFFFF] text-[#2D0000]/85 border-[#6D0808]/15 hover:border-[#C9A227] hover:text-[#6D0808]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {activeGroupList && (
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#2D0000]/80 bg-[#FFFFFF] border border-[#C9A227]/40 rounded-lg px-3.5 py-2">
          <span className="font-semibold text-[#6D0808]">
            Showing {activeFilter}:
          </span>
          <span>{activeGroupList.join(" · ")}</span>
          <button
            type="button"
            onClick={() => onSelectFilter("All Menu")}
            className="ml-auto font-semibold text-[#6D0808] underline hover:text-[#2D0000] cursor-pointer"
          >
            View All Menu
          </button>
        </div>
      )}
    </div>
  );
};
