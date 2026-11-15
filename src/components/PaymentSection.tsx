import React, { useState } from "react";
import { Check, Copy, AlertCircle } from "lucide-react";

interface PaymentField {
  id: string;
  label: string;
  value: string;
}

const PAYMENT_FIELDS: PaymentField[] = [
  { id: "bank-name", label: "Bank Name", value: "[ADD BANK NAME]" },
  { id: "account-name", label: "Account Name", value: "[ADD ACCOUNT NAME]" },
  {
    id: "account-number",
    label: "Account Number",
    value: "[ADD ACCOUNT NUMBER]",
  },
  {
    id: "mobile-payment",
    label: "Mobile Payment Number",
    value: "[ADD PAYMENT NUMBER]",
  },
];

export async function copyTextToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback below
    }
  }
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "-9999px";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

export const PaymentSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, value: string) => {
    const ok = await copyTextToClipboard(value);
    if (ok) {
      setCopiedId(id);
      window.setTimeout(() => {
        setCopiedId((current) => (current === id ? null : current));
      }, 2200);
    }
  };

  return (
    <section
      id="payment"
      className="py-16 sm:py-20 bg-[#2D0000] text-[#FFFFFF]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold text-[#C9A227] mb-2">
            Direct Transfer Details
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FFFFFF] tracking-tight">
            PAYMENT INFORMATION
          </h2>
          <p className="mt-3 text-base text-[#EEEAD7]/85 leading-relaxed">
            Pay conveniently using our official payment details.
          </p>
        </div>

        <div className="bg-[#EEEAD7] text-[#2D0000] rounded-2xl border border-[#C9A227]/60 shadow-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {PAYMENT_FIELDS.map((field) => {
              const isCopied = copiedId === field.id;
              return (
                <div
                  key={field.id}
                  className="bg-[#FFFFFF] rounded-xl border border-[#6D0808]/15 p-4 sm:p-5 flex flex-col justify-between gap-3 shadow-xs"
                >
                  <div>
                    <p className="text-xs font-semibold text-[#757D6F]">
                      {field.label}
                    </p>
                    <p className="mt-1.5 font-semibold text-base sm:text-lg text-[#6D0808] tabular-nums break-words">
                      {field.value}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2 border-t border-[#EEEAD7]">
                    <span
                      className={`text-xs font-medium transition-opacity duration-200 ${
                        isCopied ? "text-[#6D0808] opacity-100" : "opacity-0"
                      }`}
                      aria-live="polite"
                    >
                      Copied successfully!
                    </span>

                    <button
                      type="button"
                      onClick={() => handleCopy(field.id, field.value)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#6D0808] hover:bg-[#2D0000] text-[#FFFFFF] text-xs font-semibold border border-[#C9A227]/60 transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#C9A227]"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#C9A227]" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#C9A227]" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-5 border-t border-[#6D0808]/15 flex items-center justify-center gap-2.5 text-sm text-[#2D0000]/85 text-center">
            <AlertCircle
              className="w-4 h-4 text-[#6D0808] shrink-0"
              aria-hidden="true"
            />
            <p className="font-medium">
              Please verify the payment information before making a payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
