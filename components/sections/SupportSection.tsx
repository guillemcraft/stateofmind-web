"use client";

import { useState } from "react";
import { SUPPORT_CONTENT } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

/* Cream "paper" page: Stripe tip box */
export function SupportSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const activeAmount = isCustom ? Number(customAmount) : selectedAmount;

  async function handleCheckout() {
    if (!activeAmount || activeAmount < 1) {
      setError("Please enter at least 1€");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: activeAmount }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Failed to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="support" className="bg-cream text-ink py-24 md:py-32 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
          {/* Copy */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <SectionLabel number={SUPPORT_CONTENT.number} label={SUPPORT_CONTENT.label} className="text-[#a27b32]" />
            <Reveal className="mt-20 lg:mt-40">
              <h2 className="headline text-ink text-[clamp(3rem,7.5vw,6.5rem)]">
                {SUPPORT_CONTENT.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="mt-8 max-w-[30rem] text-lg md:text-xl leading-relaxed text-paper-muted">
                {SUPPORT_CONTENT.description}
              </p>
            </Reveal>
          </div>

          {/* Tip box */}
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 lg:pt-40 self-end">
            <p className="label text-[#a27b32] border-b border-ink pb-4">Choose an amount</p>

            <div className="mt-6 grid grid-cols-4 gap-2">
              {SUPPORT_CONTENT.presets.map((amount) => {
                const active = !isCustom && selectedAmount === amount;
                return (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amount);
                      setIsCustom(false);
                      setCustomAmount("");
                      setError("");
                    }}
                    className={`py-4 text-lg font-semibold border transition-colors duration-200 cursor-pointer ${
                      active
                        ? "bg-ink text-cream border-ink"
                        : "bg-transparent text-ink border-rule-ink hover:border-ink"
                    }`}
                  >
                    {amount}€
                  </button>
                );
              })}
            </div>

            <label
              className={`mt-3 flex items-center border transition-colors duration-200 ${
                isCustom ? "border-ink" : "border-rule-ink hover:border-ink"
              }`}
            >
              <span className="pl-4 text-paper-muted text-lg">€</span>
              <input
                type="number"
                min="1"
                step="1"
                placeholder="Custom amount"
                value={customAmount}
                onFocus={() => {
                  setIsCustom(true);
                  setSelectedAmount(null);
                  setError("");
                }}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setIsCustom(true);
                  setSelectedAmount(null);
                  setError("");
                }}
                className="w-full bg-transparent text-ink text-lg py-4 px-2 outline-none placeholder:text-ink/40 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </label>

            {error && <p className="mt-4 text-sm text-[#a3341f]">{error}</p>}

            <button
              type="button"
              onClick={handleCheckout}
              disabled={loading || !activeAmount || activeAmount < 1}
              className="mt-6 w-full py-5 bg-ink text-cream mono text-xs font-medium transition-all duration-300 cursor-pointer hover:bg-[#1f1e1b] active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "Redirecting…" : `Support — ${activeAmount || 0}€`}
            </button>

            <p className="mono text-[10px] text-paper-muted mt-4">Secure payment via Stripe</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
