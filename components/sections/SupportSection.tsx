"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { SUPPORT_CONTENT } from "@/lib/constants";

export function SupportSection() {
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get("support") === "success";

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
    <section id="support" className="py-24 md:py-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="section-title text-white/50">
            {SUPPORT_CONTENT.title}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight">
            {SUPPORT_CONTENT.subtitle}
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-xl mx-auto">
          {isSuccess ? (
            /* Thank-you state */
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#00f5ff]/10 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#00f5ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <p className="text-xl text-white/80">
                {SUPPORT_CONTENT.thankYouMessage}
              </p>
            </div>
          ) : (
            /* Payment form */
            <>
              <p className="text-white/60 leading-relaxed text-lg mb-10">
                {SUPPORT_CONTENT.description}
              </p>

              {/* Preset amounts */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                {SUPPORT_CONTENT.presets.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setIsCustom(false);
                      setCustomAmount("");
                      setError("");
                    }}
                    className={`py-3 rounded-lg text-lg font-semibold transition-all duration-200 cursor-pointer border ${
                      !isCustom && selectedAmount === amount
                        ? "bg-[#00f5ff]/10 text-[#00f5ff] border-[#00f5ff] shadow-[0_0_20px_rgba(0,245,255,0.15)]"
                        : "bg-white/5 text-white/70 border-white/10 hover:border-white/30"
                    }`}
                  >
                    {amount}€
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="mb-8">
                <div
                  className={`flex items-center rounded-lg border transition-all duration-200 ${
                    isCustom
                      ? "border-[#00f5ff] shadow-[0_0_20px_rgba(0,245,255,0.15)]"
                      : "border-white/10"
                  }`}
                >
                  <span className="pl-4 text-white/50 text-lg">€</span>
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
                    className="w-full bg-transparent text-white text-lg py-3 px-2 outline-none placeholder:text-white/30 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-400 text-sm mb-4">{error}</p>
              )}

              {/* Pay button */}
              <button
                onClick={handleCheckout}
                disabled={loading || !activeAmount || activeAmount < 1}
                className="w-full py-4 rounded-lg text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed bg-gradient-to-r from-[#00f5ff] to-[#ff00ff] hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] active:scale-[0.98]"
              >
                {loading ? "Redirecting..." : `Support — ${activeAmount || 0}€`}
              </button>

              {/* Stripe note */}
              <p className="text-center text-white/30 text-sm mt-6">
                Secure payment via Stripe
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
