"use client";

import Image from "next/image";
import { Clock } from "lucide-react";
import { LOGO_URL } from "@/assets/cloudinary";

interface HeroZoneProps {
  dict: {
    hero: {
      roomTitle: string;
      subtitle: string;
      status: string;
      onlineBadge: string;
      localTime: string;
    };
  };
  timeString?: string;
}

export function HeroZone({ dict, timeString }: HeroZoneProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[#dcecf8]/70 bg-white/85 p-4.5 backdrop-blur-xs transition-colors sm:p-5 dark:border-[#8dbbe3]/20 dark:bg-[#13273d]/50">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3.5 sm:gap-4">
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#8dbbe3]/40 bg-[#24558a] p-1.5 text-white sm:h-13 sm:w-13 dark:bg-[#1f3d5c]">
            <Image
              src={LOGO_URL}
              alt="Logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <div className="min-w-0 flex-1">
            <span className="block text-xs font-bold tracking-widest text-[#24558a] uppercase dark:text-[#8dbbe3]">
              KISUNE CANELD
            </span>
            <div className="mt-0.5 flex items-center gap-2">
              <h1 className="truncate text-base font-bold tracking-tight text-[#18324a] sm:text-lg md:text-xl dark:text-[#f0f7fc]">
                {dict.hero.roomTitle}
              </h1>
            </div>
            <p className="text-xs text-[#66829d] sm:text-sm md:text-[15px] dark:text-[#8dbbe3]/80">
              {dict.hero.subtitle}
            </p>
          </div>
        </div>

        <div className="flex w-full items-center justify-between rounded-xl border border-[#dcecf8]/80 bg-[#f4f7fa]/70 px-3.5 py-2 backdrop-blur-xs sm:w-auto sm:justify-end sm:px-4 sm:py-2.5 dark:border-[#8dbbe3]/20 dark:bg-[#0e2133]/60">
          <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:flex-col sm:items-end sm:justify-start sm:gap-0">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#3f73b8] sm:h-4.5 sm:w-4.5 dark:text-[#60a5fa]" />
              <span className="font-mono text-base font-bold tracking-wider text-[#18324a] sm:text-xl md:text-2xl dark:text-[#f0f7fc]">
                {timeString || "--:--:--"}
              </span>
            </div>
            <span className="text-[11px] font-mono font-medium tracking-wider text-[#66829d] uppercase sm:text-xs dark:text-[#8dbbe3]/70">
              {dict.hero.localTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
