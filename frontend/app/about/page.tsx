// app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="relative">
      {/* background image + dark overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/about-bg.jpg"   // add an appropriate image in /public
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="text-3xl font-semibold mb-4 text-white">
          About Amurtha Bharathi
        </h1>

        <p className="text-slate-100 mb-3">
          Amurtha Bharathi foundation is envisioned for individual integrity and
          holistic development through heritage, culture, education, and
          eradication of poverty.
        </p>
        <p className="text-slate-100 mb-3">
          The foundation believes a country is not merely sand and brick, but its
          people and their way of life. Modern education often focuses on
          competition and material comfort, while the deeper relationship with
          self, community, and culture is neglected.
        </p>

        {/* content blocks in theme-aware cards, using your .card helper */}
        <div className="mt-8 space-y-6">
          <div className="card rounded-2xl border p-5 shadow-lg backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-3">Heritage &amp; Culture</h2>
            <p className="text-muted-foreground">
              India&apos;s richness lies in its heritage and culture, rooted in ancient
              philosophical traditions that offer timeless guidance to the world.
              Amurtha Bharathi seeks to preserve these traditions, customs, and
              values, so future generations can appreciate their beauty and depth.
            </p>
          </div>

          <div className="card rounded-2xl border p-5 shadow-lg backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-3">Education</h2>
            <p className="text-muted-foreground">
              Education is seen as a crucial investment for individuals, communities,
              and the nation. It equips people with knowledge and skills, supports
              social progress and economic growth, and empowers them to make informed
              decisions and overcome inequality.
            </p>
          </div>

          <div className="card rounded-2xl border p-5 shadow-lg backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-3">Charity &amp; Service</h2>
            <p className="text-muted-foreground">
              Charity is viewed as an expression of empathy and social
              responsibility—addressing immediate needs and upholding human dignity.
              Service to humanity, especially the poor and suffering, is regarded as a
              high form of worship and a path to spiritual expression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}