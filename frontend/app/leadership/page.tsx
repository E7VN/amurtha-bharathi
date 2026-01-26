// app/leadership/page.tsx
import Image from "next/image";

const leaders = [
  { name: "L Prakash Reddy", role: "Founder & Director", image: "/prakash-reddy.jpg" },
  { name: "Amudala Murali Avadhani", role: "PRO", image: "/murali-avadhani.jpg" },
  { name: "Lokesh Reddy", role: "Operations Director", image: "/lokesh-reddy.jpg" }
];

export default function LeadershipPage() {
  return (
    <section className="relative min-h-[80vh]">
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
            {/* Circular image wrapper */}
            <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover"
              />
            </div>

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
