// app/leadership/page.tsx
import Image from "next/image";

const leaders = [
  { name: "K. Venu Gopal", role: "Managing Director, Heritage & Culture" },
  { name: "Prakash Reddy", role: "Managing Director, Education" },
  { name: "Amudala Murali", role: "In-charge, Literature" },
  { name: "Stephen Prabhu Kumar", role: "In-charge, Charity" },
  { name: "Hari Krishna", role: "PRO" },
];

export default function LeadershipPage() {
  return (
    <section className="relative">
      {/* background image + overlay (similar to initiatives) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/leadership-bg.jpg"  // put an appropriate image in /public
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="text-3xl font-semibold mb-4 text-white">Leadership</h1>
        <p className="text-slate-100 mb-8">
          Amurtha Bharathi is guided by individuals committed to heritage,
          education, literature, and service, working together to realize the
          foundation&apos;s vision.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 pb-14">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="card rounded-2xl border p-4 shadow-lg backdrop-blur-sm"
            >
              <div className="h-16 w-16 md:h-16 md:w-16 rounded-full bg-amber-200 mb-3" />
              <h2 className="text-sm font-semibold">{leader.name}</h2>
              <p className="text-xs text-muted-foreground mt-1">
                {leader.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
