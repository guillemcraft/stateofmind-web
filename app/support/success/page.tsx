import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export const metadata = {
  title: "Thank You",
};

export default function SupportSuccessPage() {
  return (
    <div className="min-h-[100svh] bg-ink flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <Logo className="w-[120px] mb-12" />
        <p className="label mb-6">Support</p>
        <h1 className="headline text-cream text-5xl md:text-6xl">Thank you.</h1>
        <p className="mt-8 text-lg leading-relaxed text-cream-2">
          Your support means the world to us. Every contribution helps us keep
          creating independent music — no label, no middleman, just pure sound.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block mono text-[11px] text-cream border border-rule-strong px-6 py-4 hover:bg-cream hover:text-ink transition-colors"
        >
          Back to site
        </Link>
      </div>
    </div>
  );
}
