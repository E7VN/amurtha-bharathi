export async function getEventsFromSheet() {
  const SHEET_ID = "1WfsWDv3cXFu9dDEKkBaOsrWA9Ofb90wDeqOzivvoe1I";
  const GID = "0"; // sheet tab id

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID}`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  const text = await res.text();

  type TimelineEvent = {
    title: string;
    date: string;
    description: string;
    location: string;
    image: string;
  };

  function normalizeDate(value: string) {
    if (!value) return "";

    // already in DD/MM/YY
    if (value.includes("/")) return value;

    // sometimes CSV returns ISO date
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
      const dd = String(date.getDate()).padStart(2, "0");
      const mm = String(date.getMonth() + 1).padStart(2, "0");
      const yy = String(date.getFullYear()).slice(-2);
      return `${dd}/${mm}/${yy}`;
    }

    return value;
  }

  const rows = text.split("\n").slice(1);

  const events: TimelineEvent[] = rows
    .map((row) => row.split(","))
    .filter((cols) => cols[0])
    .map((cols) => ({
      title: cols[0]?.trim() || "",
      date: normalizeDate(cols[1]?.trim() || ""),
      description: cols[2]?.trim() || "",
      location: cols[3]?.trim() || "",
      image: cols[4]?.trim() || "",
    }));

  function parseDate(dateStr: string) {
    const parts = dateStr.split("/");
    if (parts.length !== 3) return new Date(0);

    const day = Number(parts[0]);
    const month = Number(parts[1]) - 1;
    const year = Number("20" + parts[2]);

    return new Date(year, month, day);
  }

  events.sort((a, b) => {
    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });

  return events;
}