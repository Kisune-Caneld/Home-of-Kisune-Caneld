"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";

interface HeaderProps {
  currentLocale: string;
}

export function Header({ currentLocale }: HeaderProps) {
  const pathname = usePathname();

  const getTargetLocaleUrl = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && (segments[0] === "vn" || segments[0] === "en")) {
      segments[0] = targetLocale;
      return `/${segments.join("/")}`;
    }
    return `/${targetLocale}${pathname}`;
  };

  return (
    <header className="relative z-20 mb-4 flex items-center justify-between border-b border-[#dcecf8] bg-[#ffffff]/80 px-4 py-2.5 backdrop-blur-md rounded-xl shadow-xs">
      <div className="flex items-center gap-2">
        <span className="font-mono text-xs font-semibold tracking-wider text-[#18324a]">
          KISUNE.ROOM
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 rounded-lg border border-[#dcecf8] bg-[#f4f7fa] p-0.5 text-xs font-medium">
          <Globe className="ml-1.5 h-3.5 w-3.5 text-[#66829d]" />
          <Link
            href={getTargetLocaleUrl("vn")}
            className={`rounded-md px-2 py-0.5 transition-colors ${
              currentLocale === "vn"
                ? "bg-[#24558a] text-white font-semibold shadow-xs"
                : "text-[#66829d] hover:text-[#18324a]"
            }`}
          >
            VN
          </Link>
          <Link
            href={getTargetLocaleUrl("en")}
            className={`rounded-md px-2 py-0.5 transition-colors ${
              currentLocale === "en"
                ? "bg-[#24558a] text-white font-semibold shadow-xs"
                : "text-[#66829d] hover:text-[#18324a]"
            }`}
          >
            EN
          </Link>
        </div>
      </div>
    </header>
  );
}
