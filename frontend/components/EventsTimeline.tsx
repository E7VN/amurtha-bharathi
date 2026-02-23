import Image from "next/image";
import { title } from "process";
import { getEventsFromSheet } from "@/lib/googleSheets";

type TimelineEvent = {
  title: string;
  date: string;
  description: string;
  location: string;
  image: string;
};

export default async function EventsTimeline() {
  const events = await getEventsFromSheet();
  console.log("EVENTS:", events);
  return (
    <div className="relative max-w-6xl mx-auto">

      {/* Center Vertical Line */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-[2px]
          -translate-x-1/2
          bg-white
          opacity-40
          z-0
        "
      />

      <div className="space-y-28">

        {events.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center"
            >

              {/* LEFT COLUMN */}
              <div className="flex justify-end pr-4">
                {isLeft && (
                  <div
                    className="
                      w-full
                      max-w-sm
                      card
                      border
                      rounded-2xl
                      shadow-xl
                      overflow-hidden
                      group
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-2xl
                    "
                  >
                    <CardContent event={event} />
                  </div>
                )}
              </div>

              {/* CENTER TIMELINE */}
              <div className="relative flex flex-col items-center">

                {/* Dot */}
                <div
                  className="
                    w-4
                    h-4
                    rounded-full
                    bg-green-400
                    shadow-[0_0_10px_#4ade80,0_0_20px_#4ade80]
                    z-20
                  "
                />

                {/* Date */}
                <span className="mt-2 text-xs text-white">
                  {event.date}
                </span>

              </div>

              {/* RIGHT COLUMN */}
              <div className="flex justify-start pl-4">
                {!isLeft && (
                  <div
                    className="
                      w-full
                      max-w-sm
                      card
                      border
                      rounded-2xl
                      shadow-xl
                      overflow-hidden
                      group
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-2xl
                    "
                  >
                    <CardContent event={event} />
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

/* Reusable Card Content */
function CardContent({ event }: { event: any }) {
  return (
    <>
      {/* Header */}
      <div className="p-5">
        <h3 className="text-lg font-semibold">
          {event.title}
        </h3>
      </div>

      {/* Expandable */}
      <div
        className="
          max-h-0
          opacity-0
          overflow-hidden
          transition-all
          duration-700
          ease-in-out
          group-hover:max-h-[600px]
          group-hover:opacity-100
        "
      >
        {/* Image */}
        {event.image && (
          <div className="relative h-40 w-full">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Details */}
        <div className="p-5 space-y-3">

          <p className="text-muted-foreground text-sm">
            {event.description}
          </p>

          <div className="flex items-center justify-between">

            <span className="text-xs px-3 py-1 rounded-full bg-muted">
              📍 {event.location}
            </span>

            <button className="text-sm text-brand-blue hover:underline">
              View Details →
            </button>

          </div>
        </div>
      </div>
    </>
  );
}
