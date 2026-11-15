import React, { useState } from "react";
import { Film } from "lucide-react";
import { RESTAURANT_VIDEO_URL } from "../data/categoryData";

export const RestaurantVideo: React.FC = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <section
      id="video"
      className="py-16 sm:py-20 bg-[#2D0000] text-[#FFFFFF] border-y border-[#C9A227]/25"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold text-[#C9A227] mb-2">
            Restaurant Presentation
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight"
            style={{ textWrap: "balance" }}
          >
            Take a Look Inside Senea Muslim Restaurant
          </h2>
          <p className="mt-3 text-base text-[#EEEAD7]/85 leading-relaxed">
            Experience our restaurant atmosphere, delicious food, and warm
            hospitality.
          </p>
        </div>

        <div className="rounded-2xl p-2 sm:p-3 bg-[#6D0808]/45 border border-[#C9A227]/50 shadow-2xl">
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#2D0000]">
            {!videoError ? (
              <video
                controls
                playsInline
                preload="metadata"
                poster="https://6af8443dc6870dc3d38e4623.imgix.net/Mandi-Chicken1.jpg"
                onError={() => setVideoError(true)}
                className="restaurant-video w-full h-full object-cover"
              >
                <source src={RESTAURANT_VIDEO_URL} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#2D0000] via-[#6D0808] to-[#2D0000]">
                <div className="w-14 h-14 rounded-2xl border border-[#C9A227]/60 bg-[#2D0000]/70 flex items-center justify-center mb-4">
                  <Film className="w-7 h-7 text-[#C9A227]" />
                </div>
                <p className="font-display text-xl font-bold text-[#FFFFFF]">
                  Senea Muslim Restaurant Video Preview
                </p>
                <p className="mt-2 text-sm text-[#EEEAD7]/80 max-w-md">
                  Unable to load the video player in this browser. You can
                  explore our menu and visit us in Bale Robe.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
