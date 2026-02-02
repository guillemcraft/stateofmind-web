"use client";

import Image from "next/image";
import { ABOUT_CONTENT } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/artists.png"
                alt="State Of Mind"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="section-title text-white/50">{ABOUT_CONTENT.title}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight mb-8">
              {ABOUT_CONTENT.subtitle}
            </h2>

            <div className="space-y-6">
              {ABOUT_CONTENT.bio.map((paragraph, index) => (
                <p key={index} className="text-white/60 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
