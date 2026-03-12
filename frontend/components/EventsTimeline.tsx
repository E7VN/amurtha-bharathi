import { getEventsFromSheet } from "@/lib/googleSheets";
import EventsTimelineClient from "./EventsTimelineClient";

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