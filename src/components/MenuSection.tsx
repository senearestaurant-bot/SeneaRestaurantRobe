import React, { useMemo } from "react";
import { menuData } from "../data/menuData";
import { CATEGORY_GROUPS } from "../data/categoryData";
import { MenuSearch } from "./MenuSearch";
import { CategoryFilter } from "./CategoryFilter";
import { MenuCard, MenuItem } from "./MenuCard";

interface MenuSectionProps {
  activeFilter: string;
  onSelectFilter: (filter: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  activeFilter,
  onSelectFilter,
  searchQuery,
  onSearchChange,
}) => {
  const items = menuData as MenuItem[];

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const groupCategories =
      CATEGORY_GROUPS[activeFilter as keyof typeof CATEGORY_GROUPS];

    return items.filter((item) => {
      const matchesCategory =
        activeFilter === "All Menu"
          ? true
          : groupCategories
          ? groupCategories.includes(item.category)
          : item.category === activeFilter;

      if (!matchesCategory) return false;

      if (!query) return true;
      return (
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    });
  }, [items, activeFilter, searchQuery]);

  return (
    <section
      id="menu"
      className="py-16 sm:py-20 bg-[#EEEAD7]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading & Search Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#757D6F] mb-2">
              {items.length} Freshly Prepared Dishes &amp; Drinks
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#6D0808] tracking-tight">
              Our Delicious Menu
            </h2>
            <p className="mt-3 text-base text-[#2D0000]/80 leading-relaxed">
              Explore our carefully selected traditional meals, refreshing
              drinks, and favorite treats.
            </p>
          </div>

          <MenuSearch value={searchQuery} onChange={onSearchChange} />
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-8">
          <CategoryFilter
            activeFilter={activeFilter}
            onSelectFilter={onSelectFilter}
          />
        </div>

        {/* Result Summary */}
        <div className="mb-6 flex items-center justify-between text-xs sm:text-sm text-[#757D6F] border-b border-[#6D0808]/10 pb-3">
          <span>
            Showing{" "}
            <strong className="text-[#2D0000] tabular-nums">
              {filteredItems.length}
            </strong>{" "}
            {filteredItems.length === 1 ? "item" : "items"}
            {activeFilter !== "All Menu" ? ` in ${activeFilter}` : ""}
          </span>
          {(activeFilter !== "All Menu" || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                onSelectFilter("All Menu");
                onSearchChange("");
              }}
              className="font-semibold text-[#6D0808] hover:text-[#2D0000] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Menu Grid or Empty State */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="bg-[#FFFFFF] rounded-2xl border border-[#6D0808]/12 p-10 text-center max-w-lg mx-auto">
            <p className="font-display text-xl font-bold text-[#6D0808]">
              No matching menu items found
            </p>
            <p className="mt-2 text-sm text-[#2D0000]/75">
              Try another keyword or clear your active category filter to view
              all {items.length} items.
            </p>
            <button
              type="button"
              onClick={() => {
                onSelectFilter("All Menu");
                onSearchChange("");
              }}
              className="mt-5 px-5 py-2.5 rounded-lg bg-[#6D0808] text-[#FFFFFF] text-sm font-semibold hover:bg-[#2D0000] transition-colors cursor-pointer"
            >
              Show All Menu Items
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
