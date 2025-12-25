// components/BrandLogo.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

export function BrandLogo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const src = isDark ? "/logo-dark.png" : "/logo-light.png";
  const alt = "Amurtha Bharathi Foundation logo";

  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src={src}
        alt={alt}
        width={400}               // big intrinsic size
        height={120}
        priority
        className="h-16 w-auto md:h-20"  // THIS actually controls size
      />
    </Link>
  );
}