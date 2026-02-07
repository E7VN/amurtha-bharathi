// app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const focusAreas = [
  {
    title: "Heritage & Culture",
    desc: "Preserving India's timeless wisdom, traditions, and values to nurture a deep sense of identity and belonging.",
  },
  {
    title: "Education",
    desc: "Empowering individuals through accessible, quality education that opens doors, reduces inequality, and enables informed choices.",
  },
  {
    title: "Charity & Service",
    desc: "Serving the poor and the suffering with compassion, dignity, and empathy as a true expression of spirituality.",
  },
  {
    title: "Literature & Mother Tongue",
    desc: "Celebrating literature and the mother tongue as carriers of culture, thought, and intergenerational knowledge.",
  },
];

const heroImages = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg", "/hero-4.jpg"];

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setHeroIndex((prev) => (prev + 1) % heroImages.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      {/* Hero with fading background images */}
      <section className="relative overflow-hidden border-b border-slate-800/50">
        {/* background slideshow */}
        <div className="absolute inset-0 -z-10 h-screen">
          {heroImages.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 h-screen transition-opacity duration-[1500ms] ease-in-out ${
                i === heroIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image 
                src={src} 
                alt="" 
                fill 
                priority 
                sizes="100vw"
                className="object-cover object-center"
              />
              {/* overlay tint – stays darkish in both themes */}
              <div className="absolute inset-0 bg-black/55" />
            </div>
          ))}
        </div>

        {/* foreground content */}
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-200 mb-3">
              Heritage · Education · Charity
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 text-slate-100">
              Preserving heritage, enabling education, serving with compassion.
            </h1>
            <p className="mb-6 max-w-xl text-slate-100">
              Amurtha Bharathi foundation works to preserve India's rich
              heritage and culture, foster education as empowerment, and extend
              charitable support to build a more equitable society.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/initiatives"
                className="inline-flex items-center rounded-full border border-slate-200/70 px-5 py-2.5 text-sm font-medium text-slate-100 hover:bg-white/10"
              >
                Our Activities
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-slate-200/70 px-5 py-2.5 text-sm font-medium text-slate-100 hover:bg-white/10"
              >
                Our Events
              </Link>
            </div>
          </div>
          {/* quote card */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-[16px] bg-amber-400/40 blur-3xl" />

            <div className="relative flex items-center gap-6 rounded-3xl card px-6 py-5 md:px-8 md:py-6">
              {/* text first (left) */}
              <div className="flex-1 text-left">
                <p className="text-xs md:text-sm leading-relaxed mb-3">
                  Culture unites us; it is not through constitutions or politics
                  but through culture that we are truly one. The culture of our
                  Rishis is alive even today. It is never dead.
                </p>
                <p className="text-xs md:text-sm font-semibold text-amber-500">
                  — Sadguru Sivananda Murthy
                </p>
              </div>

              {/* circular photo on the right */}
              <div className="shrink-0">
                <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-full overflow-hidden border-4 border-amber-500 shadow-md">
                  <Image
                    src="/mission-guru.jpg"
                    alt="Sadguru Sivananda Murthy"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}