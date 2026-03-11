// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Amurtha Bharathi Foundation",
  description:
    "Heritage, culture, education and charity for an equitable society.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>

          <Navbar />

          <main className="flex-1">{children}</main>

          <footer className="site-footer">
            <div className="max-w-6xl mx-auto px-4 py-6 text-xs md:text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <p>© {new Date().getFullYear()} Amurtha Bharathi Foundation.</p>
              <p>Heritage · Education · Charity · Literature</p>
            </div>
          </footer>

        </ThemeProvider>
      </body>
    </html>
  );
}