import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CategoryCards } from "./components/CategoryCards";
import { MenuSection } from "./components/MenuSection";
import { RestaurantVideo } from "./components/RestaurantVideo";
import { AboutSection } from "./components/AboutSection";
import { PaymentSection } from "./components/PaymentSection";
import { LocationSection } from "./components/LocationSection";
import { ContactSection } from "./components/ContactSection";
import { CallWaiter } from "./components/CallWaiter";
import { Footer } from "./components/Footer";

export function App() {
  const [activeFilter, setActiveFilter] = useState<string>("All Menu");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSelectCategory = (filterKey: string) => {
    setActiveFilter(filterKey);
    setSearchQuery("");
  };

  const handleExploreMenu = () => {
    setActiveFilter("All Menu");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EEEAD7] text-[#2D0000]">
      <Navbar onExploreMenu={handleExploreMenu} />

      <main className="flex-1">
        <Hero onExploreMenu={handleExploreMenu} />
        <CategoryCards onSelectCategory={handleSelectCategory} />
        <MenuSection
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <RestaurantVideo />
        <AboutSection />
        <PaymentSection />
        <LocationSection />
        <ContactSection />
      </main>

      <Footer onSelectCategory={handleSelectCategory} />
      <CallWaiter />
    </div>
  );
}

export default App;
