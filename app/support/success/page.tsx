import Link from "next/link";

export const metadata = {
  title: "Thank You",
};

export default function SupportSuccessPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* Checkmark */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#00f5ff]/10 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-[#00f5ff]"
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

        <h1 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-4">
          Thank you
        </h1>

        <p className="text-white/60 text-lg leading-relaxed mb-10">
          Your support means the world to us. Every contribution helps us keep
          creating independent music — no label, no middleman, just pure sound.
        </p>

        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider text-white border border-white/20 hover:border-white/40 transition-all duration-300"
        >
          Back to site
        </Link>
      </div>
    </div>
  );
}
