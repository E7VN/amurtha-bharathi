// app/initiatives/page.tsx
import Image from "next/image";

const initiatives = [
  {
    category: "Heritage & Culture",
    items: [
      "Preservation of traditional practices, festivals, and local knowledge.",
      "Creating awareness about India’s philosophical and cultural legacy.",
    ],
  },
  {
    category: "Education",
    items: [
      "Supporting underprivileged students with learning opportunities.",
      "Promoting education in the mother tongue to strengthen identity.",
    ],
  },
  {
    category: "Charity",
    items: [
      "Providing assistance to the poor and suffering with dignity.",
      "Encouraging community participation in acts of service.",
    ],
  },
  {
    category: "Literature",
    items: [
      "Encouraging literary activities and cultural writing.",
      "Preserving stories and texts that embody heritage and values.",
    ],
  },
];

export default function InitiativesPage() {
  return (
    <section className="relative">
      {/* background image + overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/initiatives-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="text-3xl font-semibold mb-4 text-white">
          Our Activities
        </h1>
        <p className="mb-8 text-slate-100">
          Amurtha Bharathi undertakes initiatives that weave together heritage,
          education, charity, and literature to build a more compassionate and
          aware society.
        </p>

        <div className="grid md:grid-cols-2 gap-6 pb-12">
          {initiatives.map((block) => (
            <div
              key={block.category}
              className="
                card
                rounded-2xl border p-5 shadow-lg backdrop-blur-sm
              "
            >
              <h2 className="text-lg font-semibold mb-3">
                {block.category}
              </h2>
              <ul className="list-disc list-inside text-sm space-y-2">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}