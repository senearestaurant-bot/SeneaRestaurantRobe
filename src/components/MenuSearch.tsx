import React from "react";
import { Search, X } from "lucide-react";

interface MenuSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const MenuSearch: React.FC<MenuSearchProps> = ({ value, onChange }) => {
  return (
    <div className="relative w-full max-w-md">
      <label htmlFor="menu-search" className="sr-only">
        Search menu items by name or description
      </label>
      <Search
        className="w-4 h-4 text-[#757D6F] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />
      <input
        id="menu-search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Mendi, Tibs, Fish, Juices, Tea..."
        className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#FFFFFF] border border-[#6D0808]/20 text-sm text-[#2D0000] placeholder:text-[#757D6F] shadow-xs focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/25 transition-all"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 inline-flex items-center justify-center rounded-lg text-[#757D6F] hover:text-[#6D0808] hover:bg-[#EEEAD7] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
