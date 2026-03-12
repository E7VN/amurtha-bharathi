export async function getEventsFromSheet() {
  const SHEET_ID = "1WfsWDv3cXFu9dDEKkBaOsrWA9Ofb90wDeqOzivvoe1I";
  const SHEET_NAME = "Sheet1";

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

  const res = await fetch(url);
  const text = await res.text();

  type TimelineEvent = {
  title: string;
  date: string;
  description: string;
  location: string;
  image: string;
  };

  const json = JSON.parse(
    text.substring(47, text.length - 2)
  );

  const rows = json.table.rows;

  function parseDate(dateStr: string) {
    // Expected: DD/MM/YY (27/8/25)

    if (!dateStr) return new Date(0);

    const parts = dateStr.split("/");

    if (parts.length !== 3) return new Date(0);

    const day = Number(parts[0]);
    const month = Number(parts[1]) - 1; // JS months = 0 based
    const year = Number("20" + parts[2]); // 25 → 2025

    return new Date(year, month, day);
  }

  const events: TimelineEvent[] = rows.map((row: any) => ({
    title: row.c?.[0]?.v?.toString().trim() || "",
    date: row.c?.[1]?.v?.toString().trim() || "",
    description: row.c?.[2]?.v?.toString().trim() || "",
    location: row.c?.[3]?.v?.toString().trim() || "",
    image: row.c?.[4]?.v?.toString().trim() || "",
  }));

  // Sort: Newest → Oldest
  events.sort((a: TimelineEvent, b: TimelineEvent) => {
    return (
      parseDate(b.date).getTime() -
      parseDate(a.date).getTime()
    );
  });

  return events;
}