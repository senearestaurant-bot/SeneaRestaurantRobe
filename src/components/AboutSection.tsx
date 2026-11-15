import React, { useState } from "react";
import { Utensils } from "lucide-react";

export const AboutSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-[#EEEAD7] border-b border-[#6D0808]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-sm font-semibold text-[#757D6F] mb-2">
              Our Hospitality
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#6D0808] tracking-tight">
              About Senea Muslim Restaurant
            </h2>
            <div className="w-16 h-0.5 bg-[#C9A227] my-5" aria-hidden="true" />
            <p className="text-base sm:text-lg text-[#2D0000]/85 leading-relaxed">
              Welcome to Senea Muslim Restaurant, where traditional flavors meet
              warm hospitality. Located in Bale Robe, we are dedicated to
              serving delicious meals, refreshing drinks, and traditional
              favorites in a welcoming environment. Whether you visit us for
              breakfast, lunch, or dinner, we look forward to serving you.
            </p>

            <div className="mt-8 pt-6 border-t border-[#6D0808]/15 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <p className="font-display text-lg font-bold text-[#6D0808]">
                  Breakfast
                </p>
                <p className="text-xs sm:text-sm text-[#757D6F] mt-0.5">
                  Fetira, Firfir &amp; Dulet
                </p>
              </div>
              <div>
                <p className="font-display text-lg font-bold text-[#6D0808]">
                  Lunch
                </p>
                <p className="text-xs sm:text-sm text-[#757D6F] mt-0.5">
                  Mendi, Tibs &amp; Chicken
                </p>
              </div>
              <div>
                <p className="font-display text-lg font-bold text-[#6D0808]">
                  Dinner
                </p>
                <p className="text-xs sm:text-sm text-[#757D6F] mt-0.5">
                  Fresh Juices &amp; Teas
                </p>
              </div>
            </div>
          </div>

          {/* Photography Column */}
          <div className="lg:col-span-6">
            <div className="h-full min-h-[280px] sm:min-h-[360px] rounded-2xl overflow-hidden border border-[#C9A227]/50 shadow-lg bg-[#2D0000]">
              {!imgError ? (
                <img
                  src="https://6af8443dc6870dc3d38e4623.imgix.net/Shekala%20Tibs.jpg"
                  alt="Traditional sizzling Shekla Tibs prepared at Senea Muslim Restaurant"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#2D0000] to-[#6D0808]">
                  <Utensils className="w-10 h-10 text-[#C9A227] mb-3" />
                  <p className="font-display text-xl font-bold text-[#FFFFFF]">
                    Senea Muslim Restaurant
                  </p>
                  <p className="text-sm text-[#EEEAD7]/80 mt-1">
                    Bale Robe, Ethiopia
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
