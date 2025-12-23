// app/leadership/page.tsx
const leaders = [
  {
    name: "K. Venu Gopal",
    role: "Managing Director, Heritage & Culture",
  },
  {
    name: "Prakash Reddy",
    role: "Managing Director, Education",
  },
  {
    name: "Amudala Murali",
    role: "In-charge, Literature",
  },
  {
    name: "Stephen Prabhu Kumar",
    role: "In-charge, Charity",
  },
  {
    name: "Hari Krishna",
    role: "PRO",
  },
];

export default function LeadershipPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="text-3xl font-semibold mb-4">Leadership</h1>
      <p className="text-slate-600 mb-8">
        Amurtha Bharathi is guided by individuals committed to heritage,
        education, literature, and service, working together to realize the
        foundation&apos;s vision.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {leaders.map((leader) => (
          <div
            key={leader.name}
            className="rounded-2xl border bg-white p-4 shadow-sm"
          >
            <div className="h-10 w-10 rounded-full bg-amber-200 mb-3" />
            <h2 className="text-sm font-semibold">{leader.name}</h2>
            <p className="text-xs text-slate-600 mt-1">{leader.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
