import { getEventsFromSheet } from "@/lib/googleSheets";
import EventsTimelineClient from "./EventsTimelineClient";

export const revalidate = 60; // refresh data every 60 seconds

type TimelineEvent = {
  title: string;
  date: string;
  description: string;
  location: string;
  image: string;
};

export default async function EventsTimeline() {
  const events: TimelineEvent[] = await getEventsFromSheet();
  return <EventsTimelineClient events={events} />;
}