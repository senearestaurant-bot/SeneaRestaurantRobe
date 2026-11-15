import React, { useState } from "react";
import { RESTAURANT_LOGO } from "../data/categoryData";

interface BrandLogoProps {
  className?: string;
  imgClassName?: string;
  size?: "sm" | "md" | "lg";
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  imgClassName = "",
  size = "md",
}) => {
  const [hasError, setHasError] = useState(false);

  const sizeMap = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-20 w-20 sm:h-24 sm:w-24",
  };

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl bg-[#FFFFFF] border border-[#C9A227]/60 text-[#6D0808] font-display font-bold tracking-tight select-none ${sizeMap[size]} ${className}`}
        aria-label="Senea Muslim Restaurant Official Logo"
      >
        <span className={size === "lg" ? "text-xl" : "text-sm"}>SMR</span>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-[#FFFFFF] p-1 border border-[#C9A227]/50 shadow-sm shrink-0 overflow-hidden ${sizeMap[size]} ${className}`}
    >
      <img
        src={RESTAURANT_LOGO}
        alt="Senea Muslim Restaurant Official Logo"
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`w-full h-full object-contain ${imgClassName}`}
      />
    </div>
  );
};
