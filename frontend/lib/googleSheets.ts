import Papa from "papaparse";

export async function getEventsFromSheet() {
  const SHEET_ID = "1WfsWDv3cXFu9dDEKkBaOsrWA9Ofb90wDeqOzivvoe1I";
  const GID = "0";

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID}`;

  const res = await fetch(url, {
    next: { revalidate: 60 }
  });

  const csv = await res.text();

  type TimelineEvent = {
    title: string;
    date: string;
    description: string;
    location: string;
    image: string;
  };

  const parsed = Papa.parse(csv, {
    header: false,
    skipEmptyLines: true
  });

  const rows = parsed.data as string[][];

  function normalizeDate(value: string) {
    if (!value) return "";

    if (value.includes("/")) return value;

    const date = new Date(value);

    if (!isNaN(date.getTime())) {
      const dd = String(date.getDate()).padStart(2, "0");
      const mm = String(date.getMonth() + 1).padStart(2, "0");
      const yy = String(date.getFullYear()).slice(-2);
      return `${dd}/${mm}/${yy}`;
    }

    return value;
  }

  function parseDate(dateStr: string) {
    const parts = dateStr.split("/");

    if (parts.length !== 3) return new Date(0);

    const day = Number(parts[0]);
    const month = Number(parts[1]) - 1;
    const year = Number("20" + parts[2]);

    return new Date(year, month, day);
  }

  const events: TimelineEvent[] = rows
    .filter(row => row[0])
    .map(row => ({
      title: row[0]?.trim() || "",
      date: normalizeDate(row[1]?.trim() || ""),
      description: row[2]?.trim() || "",
      location: row[3]?.trim() || "",
      image: row[4]?.trim() || ""
    }));

  events.sort((a, b) => {
    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });

  return events;
}