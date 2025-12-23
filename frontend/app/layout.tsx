// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Amurtha Bharathi Foundation",
  description:
    "Heritage, culture, education and charity for an equitable society.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/initiatives", label: "Activities" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-black text-white">
        <header className="border-b border-slate-800 bg-black/90 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link
              href="/"
              className="text-lg font-semibold tracking-wide text-brand-blue"
            >
              Amurtha Bharathi
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium text-slate-200">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-brand-blue"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-slate-800 bg-black mt-16">
          <div className="max-w-6xl mx-auto px-4 py-6 text-xs md:text-sm text-slate-500 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <p>© {new Date().getFullYear()} Amurtha Bharathi Foundation.</p>
            <p>Heritage · Education · Charity · Literature</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
