import React, { useState } from "react";
import { MapPin, ExternalLink, Copy, Check } from "lucide-react";
import { RESTAURANT_INFO } from "../data/categoryData";
import { copyTextToClipboard } from "./PaymentSection";

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    const ok = await copyTextToClipboard(RESTAURANT_INFO.address);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section
      id="location"
      className="py-16 sm:py-20 bg-[#EEEAD7] border-b border-[#6D0808]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Address Details Card */}
          <div className="lg:col-span-5 bg-[#FFFFFF] rounded-2xl border border-[#6D0808]/15 p-6 sm:p-8 shadow-xs flex flex-col justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-[#757D6F] mb-2">
                Visit Our Restaurant
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#6D0808] tracking-tight">
                Find Us
              </h2>
              <div
                className="w-14 h-0.5 bg-[#C9A227] my-5"
                aria-hidden="true"
              />

              <div className="flex items-start gap-3.5 bg-[#EEEAD7]/70 rounded-xl p-4 border border-[#6D0808]/10">
                <div className="w-10 h-10 rounded-lg bg-[#6D0808] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#C9A227]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#757D6F]">
                    Restaurant Address
                  </p>
                  <p className="mt-1 text-base font-semibold text-[#2D0000]">
                    {RESTAURANT_INFO.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#6D0808] hover:bg-[#2D0000] text-[#FFFFFF] text-sm font-semibold border border-[#C9A227]/60 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#C9A227]"
                >
                  <ExternalLink className="w-4 h-4 text-[#C9A227]" />
                  Get Directions
                </a>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#EEEAD7] hover:bg-[#FFFFFF] text-[#6D0808] text-sm font-semibold border border-[#6D0808]/25 hover:border-[#C9A227] transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#C9A227]"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#6D0808]" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#C9A227]" />
                      Copy Address
                    </>
                  )}
                </button>
              </div>

              <p
                className={`text-xs font-medium text-[#6D0808] h-4 transition-opacity duration-200 ${
                  copied ? "opacity-100" : "opacity-0"
                }`}
                aria-live="polite"
              >
                Copied successfully!
              </p>
            </div>
          </div>

          {/* Embedded Google Maps */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[300px] sm:min-h-[380px] rounded-2xl overflow-hidden border border-[#6D0808]/20 shadow-sm bg-[#FFFFFF]">
              <iframe
                title="Senea Muslim Restaurant Location Map - Bale Robe, Ethiopia"
                src="https://maps.google.com/maps?q=42C3%2BVXC%2C%20Robe%2C%20Ethiopia&t=&z=16&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[300px] sm:min-h-[380px] border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
