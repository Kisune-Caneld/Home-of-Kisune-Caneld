"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import {
  Home,
  User,
  Image as GalleryIcon,
  MessageSquare,
  Globe,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { MAIN_AVATAR_URL } from "@/assets/cloudinary";
import { useTheme } from "@/contexts/ThemeContext";

interface NavigationZoneProps {
  dict: {
    nav: {
      header: string;
      title: string;
      home: string;
      aboutMe: string;
      gallery: string;
      chat: string;
      lightMode: string;
      darkMode: string;
      close: string;
    };
  };
  locale: string;
  onClose?: () => void;
}

export function NavigationZone({ dict, locale, onClose }: NavigationZoneProps) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [rotation, setRotation] = useState<number>(0);

  const handleAvatarClick = () => {
    setRotation((prev) => prev + 360);
  };

  const getTargetLocaleUrl = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && (segments[0] === "vn" || segments[0] === "en")) {
      segments[0] = targetLocale;
      return `/${segments.join("/")}`;
    }
    return `/${targetLocale}${pathname}`;
  };

  const items = [
    {
      label: dict.nav.home,
      href: `/${locale}`,
      icon: Home,
      active: pathname === `/${locale}`,
    },
    {
      label: dict.nav.aboutMe,
      href: "#",
      icon: User,
      active: false,
    },
    {
      label: dict.nav.gallery,
      href: "#",
      icon: GalleryIcon,
      active: false,
    },
    {
      label: dict.nav.chat,
      href: "#",
      icon: MessageSquare,
      active: false,
    },
  ];

  return (
    <nav className="flex h-full w-full flex-col justify-between border-0 bg-[#ffffff]/90 p-5 shadow-xs backdrop-blur-xs transition-colors dark:bg-[#0e2133]/90">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-[#f4f7fa] pb-3 dark:border-[#13273d]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#18324a] dark:text-[#f0f7fc]">
              {dict.nav.header}
            </span>
          </div>

          <div className="flex items-center gap-0.5 rounded-lg border border-[#dcecf8] bg-[#f4f7fa] p-0.5 text-[11px] font-medium dark:border-[#8dbbe3]/20 dark:bg-[#13273d]">
            <Globe className="mx-1 h-3 w-3 text-[#66829d] dark:text-[#8dbbe3]" />
            <Link
              href={getTargetLocaleUrl("vn")}
              className={`rounded px-1.5 py-0.5 transition-colors ${
                locale === "vn"
                  ? "bg-[#24558a] font-semibold text-white shadow-xs"
                  : "text-[#66829d] hover:text-[#18324a] dark:text-[#8dbbe3] dark:hover:text-white"
              }`}
            >
              VN
            </Link>
            <Link
              href={getTargetLocaleUrl("en")}
              className={`rounded px-1.5 py-0.5 transition-colors ${
                locale === "en"
                  ? "bg-[#24558a] font-semibold text-white shadow-xs"
                  : "text-[#66829d] hover:text-[#18324a] dark:text-[#8dbbe3] dark:hover:text-white"
              }`}
            >
              EN
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-2">
          <motion.div
            onClick={handleAvatarClick}
            animate={{ rotate: rotation }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              rotate: { duration: 1.15, ease: [0.34, 1.56, 0.64, 1] },
              scale: { duration: 0.2 },
            }}
            className="relative h-36 w-36 cursor-pointer overflow-hidden rounded-full border-2 border-[#dcecf8] shadow-xs hover:border-[#8dbbe3] hover:shadow-md dark:border-[#8dbbe3]/30"
          >
            <Image
              src={MAIN_AVATAR_URL}
              alt="Main avatar"
              fill
              quality={95}
              sizes="180px"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="mb-1 px-2.5 text-xs font-bold tracking-wider text-[#66829d] uppercase dark:text-[#8dbbe3]">
            {dict.nav.title}
          </span>
          <div className="mt-1 flex items-center rounded-lg border border-[#dcecf8] bg-[#f4f7fa] p-0.5 text-xs font-medium dark:border-[#8dbbe3]/20 dark:bg-[#13273d]">
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5 transition-colors ${
                theme === "light"
                  ? "bg-[#24558a] font-semibold text-white shadow-xs"
                  : "text-[#66829d] hover:text-[#18324a] dark:text-[#8dbbe3] dark:hover:text-white"
              }`}
            >
              <Sun className="h-3.5 w-3.5" />
              <span>{dict.nav.lightMode}</span>
            </button>
            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-md py-1.5 transition-colors ${
                theme === "dark"
                  ? "bg-[#24558a] font-semibold text-white shadow-xs"
                  : "text-[#66829d] hover:text-[#18324a] dark:text-[#8dbbe3] dark:hover:text-white"
              }`}
            >
              <Moon className="h-3.5 w-3.5" />
              <span>{dict.nav.darkMode}</span>
            </button>
          </div>
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-[#dcecf8] font-semibold text-[#24558a] dark:bg-[#1f3d5c] dark:text-[#8dbbe3]"
                    : "text-[#18324a] hover:bg-[#f4f7fa] hover:text-[#3f73b8] dark:text-[#dcecf8] dark:hover:bg-[#13273d] dark:hover:text-[#60a5fa]"
                }`}
              >
                <Icon className="h-4.5 w-4.5 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-500 transition-colors hover:bg-[#FF4D4D] hover:text-white"
            >
              <X className="h-4.5 w-4.5 shrink-0" />
              <span>{dict.nav.close}</span>
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-1.5 border-t border-[#f4f7fa] pt-3 text-[11px] text-[#66829d] dark:border-[#13273d] dark:text-[#8dbbe3]">
        <span className="text-[12px] text-[#24558a] dark:text-[#8dbbe3]">
          Home of Kisune Caneld · v1.0.0
        </span>
      </div>
    </nav>
  );
}
