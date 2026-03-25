import EventsTimeline from "@/components/EventsTimeline";
import Image from "next/image";

export default function EventsPage() {
  return (
    <section className="relative min-h-screen overflow-hidden">

        {/* Background Image */}
        <div className="fixed inset-0 -z-20 pointer-events-none">
            <Image
            src="/temple.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
            />
        </div>

        {/* Dark Overlay (BEHIND CONTENT) */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70 -z-10" />

        {/* Page Content */}
        <div className="relative z-10 py-24 px-4">

            <div className="max-w-6xl mx-auto text-center mb-24">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Our Journey
            </h1>

            <p className="text-white/70">
                Tracking our footprints across India
            </p>
            </div>

            <EventsTimeline />

        </div>
        </section>
  );
}