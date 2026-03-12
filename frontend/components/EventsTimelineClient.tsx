"use client";

import Image from "next/image";
import { useState } from "react";

type TimelineEvent = {
  title: string;
  date: string;
  description: string;
  location: string;
  image: string;
};

export default function EventsTimelineClient({ events }: { events: TimelineEvent[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 md:px-0">

      {/* Desktop center line */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white opacity-40 z-0" />

      {/* Mobile line — inside the padding box, so we use ml-[15px] to sit under dot center.
          Dot column is w-8 (32px), its center = 16px. Plus px-4 (16px) outer padding = 32px from viewport edge.
          But absolute is relative to this div (after padding), so left = w-8/2 = 16px. */}
      <div className="block md:hidden absolute top-0 h-full w-[2px] bg-white opacity-30 z-0" style={{ left: "calc(1rem + 15px)" }} />

      <div className="space-y-8 md:space-y-28">
        {events.map((event: TimelineEvent, index: number) => {
          const isLeft = index % 2 === 0;
          const isOpen = openIndex === index;

          return (
            <div key={index}>

              {/* ── DESKTOP LAYOUT ── */}
              <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center relative">
                <div className="flex justify-end pr-4">
                  {isLeft && <EventCard event={event} isOpen={isOpen} onToggle={() => toggle(index)} />}
                </div>
                <div className="relative flex flex-col items-center z-10">
                  <div className="w-4 h-4 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80,0_0_20px_#4ade80]" />
                  <span className="mt-2 text-xs text-white whitespace-nowrap">{event.date}</span>
                </div>
                <div className="flex justify-start pl-4">
                  {!isLeft && <EventCard event={event} isOpen={isOpen} onToggle={() => toggle(index)} />}
                </div>
              </div>

              {/* ── MOBILE LAYOUT ── */}
              <div className="flex md:hidden items-start gap-3">
                {/* Dot + date — w-8 so center = 16px, matching the line at left calc(1rem + 15px) */}
                <div className="flex flex-col items-center shrink-0 w-8 pt-1 z-10">
                  <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80,0_0_16px_#4ade80]" />
                  <span className="mt-1 text-[10px] text-white/60 leading-tight text-center whitespace-nowrap">
                    {event.date}
                  </span>
                </div>
                {/* Card */}
                <div className="flex-1 min-w-0">
                  <EventCard event={event} isOpen={isOpen} onToggle={() => toggle(index)} />
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

function EventCard({
  event,
  isOpen,
  onToggle,
}: {
  event: TimelineEvent;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      className="
        w-full text-left
        card border rounded-2xl shadow-xl overflow-hidden
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-2xl
        focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400
        cursor-pointer
      "
    >
      <div className="p-5 flex items-center justify-between gap-2">
        <h3 className="text-lg font-semibold leading-snug">{event.title}</h3>
        <span
          className={`shrink-0 text-green-400 text-sm transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          aria-hidden="true"
        >
          ▼
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {event.image && (
          <div className="relative h-40 w-full">
            <Image src={event.image} alt={event.title} fill className="object-cover" />
          </div>
        )}
        <div className="p-5 space-y-3">
          <p className="text-muted-foreground text-sm">{event.description}</p>
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-muted">
            📍 {event.location}
          </span>
        </div>
      </div>
    </button>
  );
}