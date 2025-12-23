// app/initiatives/page.tsx
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
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 text-slate-900 dark:text-slate-100">
      <h1 className="text-3xl font-semibold mb-4">Our Activities</h1>
      <p className="mb-8 text-slate-600 dark:text-slate-300">
        Amurtha Bharathi undertakes initiatives that weave together heritage,
        education, charity, and literature to build a more compassionate and
        aware society.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {initiatives.map((block) => (
          <div
            key={block.category}
            className="rounded-2xl border border-slate-200 dark:border-slate-700
                       bg-white dark:bg-slate-900/70 p-5 shadow-sm"
          >
            <h2 className="text-lg font-semibold mb-3">{block.category}</h2>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 text-sm space-y-2">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
