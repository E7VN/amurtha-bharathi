import Papa from "papaparse";

export async function getEventsFromSheet() {
  const SHEET_ID = "1WfsWDv3cXFu9dDEKkBaOsrWA9Ofb90wDeqOzivvoe1I";
  const GID = "0";

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID}`;

  const res = await fetch(url, {
    next: { revalidate: 60 }, // refresh every 60 seconds
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
    header: true,
    skipEmptyLines: true,
  });

  const rows = parsed.data as any[];

  function normalizeDate(value: string) {
    if (!value) return "";

    // already DD/MM/YY
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
    .filter((row) => row.title)
    .map((row) => ({
      title: row.title.trim(),
      date: normalizeDate(row.date?.trim()),
      description: row.description?.trim() || "",
      location: row.location?.trim() || "",
      image: row.image?.trim() || "",
    }));

  // newest → oldest
  events.sort((a, b) => {
    return (
      parseDate(b.date).getTime() -
      parseDate(a.date).getTime()
    );
  });

  return events;
}