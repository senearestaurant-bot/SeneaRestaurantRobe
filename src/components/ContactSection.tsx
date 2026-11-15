import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { RESTAURANT_INFO } from "../data/categoryData";

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-[#EEEAD7]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold text-[#757D6F] mb-2">
            Direct Assistance &amp; Inquiries
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#6D0808] tracking-tight">
            Contact Senea Muslim Restaurant
          </h2>
          <p className="mt-3 text-base text-[#2D0000]/80 leading-relaxed">
            Reach our restaurant team directly by phone or WhatsApp for quick
            assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESTAURANT_INFO.phones.map((phone) => (
            <div
              key={phone.display}
              className="bg-[#FFFFFF] rounded-2xl border border-[#6D0808]/15 p-6 sm:p-7 shadow-xs flex flex-col justify-between gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#6D0808] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#C9A227]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#757D6F]">
                    {phone.label}
                  </p>
                  <p className="font-display text-2xl font-bold text-[#6D0808] tabular-nums mt-0.5">
                    {phone.display}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={phone.tel}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#6D0808] hover:bg-[#2D0000] text-[#FFFFFF] text-sm font-semibold border border-[#C9A227]/50 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#C9A227]"
                >
                  <Phone className="w-4 h-4 text-[#C9A227]" />
                  Call {phone.display}
                </a>

                <a
                  href={phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#EEEAD7] hover:bg-[#FFFFFF] text-[#2D0000] text-sm font-semibold border border-[#757D6F]/40 hover:border-[#C9A227] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#C9A227]"
                >
                  <MessageCircle className="w-4 h-4 text-[#6D0808]" />
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
