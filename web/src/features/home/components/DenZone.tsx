"use client";

import { NotionCard } from "@/shared/components/NotionCard";
import {
  Music,
  BookOpen,
  Heart,
  Palette,
  Disc3,
  ExternalLink,
} from "lucide-react";
import { motion } from "motion/react";

interface DenZoneProps {
  dict: {
    den: {
      title: string;
      subtitle: string;
      nowPlaying: string;
      musicTrack: string;
      readingTitle: string;
      readingBook: string;
      moodTitle: string;
      moodText: string;
      hobbyTitle: string;
      hobbyText: string;
    };
  };
}

export function DenZone({ dict }: DenZoneProps) {
  const equalizerBars = [
    { height: [40, 90, 30, 80, 40], duration: 1.1 },
    { height: [70, 30, 95, 45, 70], duration: 0.9 },
    { height: [30, 85, 40, 100, 30], duration: 1.3 },
    { height: [85, 45, 75, 30, 85], duration: 0.8 },
    { height: [50, 95, 35, 65, 50], duration: 1.0 },
  ];

  return (
    <NotionCard
      headerIcon={<Heart className="h-4 w-4" />}
      title={dict.den.title}
      badge="AVID"
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-10">
        <div className="flex flex-col justify-between rounded-xl border border-[#8dbbe3]/40 bg-[#f4f7fa]/70 p-4 transition-colors lg:col-span-3 dark:border-[#8dbbe3]/20 dark:bg-[#0e2133]/60">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold tracking-widest text-[#24558a] uppercase dark:text-[#8dbbe3]">
                {dict.den.nowPlaying}
              </span>
            </div>

            <a
              href="https://www.youtube.com/watch?v=V9PVRfjEBTI"
              target="_blank"
              rel="noopener noreferrer"
              className="group/track mt-3 flex items-center gap-3 rounded-lg p-1 transition-colors hover:bg-[#8dbbe3]/15"
              aria-label="Listen to Birds Of A Feather on YouTube"
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#8dbbe3]/40 bg-[#24558a] text-white shadow-xs transition-transform duration-300 group-hover/track:scale-105 dark:bg-[#1f3d5c]">
                <Disc3 className="h-5.5 w-5.5 animate-[spin_4s_linear_infinite]" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="truncate text-sm font-bold text-[#18324a] transition-colors group-hover/track:text-[#24558a] group-hover/track:underline sm:text-base dark:text-[#f0f7fc] dark:group-hover/track:text-[#60a5fa]">
                    {dict.den.musicTrack}
                  </p>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-[#66829d] opacity-0 transition-opacity group-hover/track:opacity-100 dark:text-[#8dbbe3]" />
                </div>
                <span className="text-xs font-mono text-[#66829d] dark:text-[#8dbbe3]/80">
                  Billie Eilish
                </span>
              </div>
            </a>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-[#dcecf8]/60 pt-3 dark:border-[#13273d]">
            <div className="flex items-center gap-1.5">
              <Music className="h-4 w-4 text-[#3f73b8] dark:text-[#60a5fa]" />
              <span className="text-xs font-mono text-[#66829d] dark:text-[#8dbbe3]/80">
                AUDIO ON
              </span>
            </div>

            <div className="flex h-4 items-end gap-1 px-1">
              {equalizerBars.map((bar, idx) => (
                <motion.span
                  key={idx}
                  animate={{ height: bar.height.map((h) => `${h}%`) }}
                  transition={{
                    duration: bar.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-1 rounded-full bg-[#3f73b8] dark:bg-[#60a5fa]"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 lg:col-span-7">
          <div className="flex items-center gap-3.5 rounded-lg border border-[#dcecf8]/70 bg-white/60 p-3.5 transition-colors hover:border-[#8dbbe3]/80 hover:bg-white dark:border-[#8dbbe3]/20 dark:bg-[#0e2133]/40 dark:hover:border-[#8dbbe3]/30 dark:hover:bg-[#0e2133]">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#dcecf8]/80 text-[#24558a] dark:bg-[#1f3d5c] dark:text-[#8dbbe3]">
              <Heart className="h-4.5 w-4.5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[11px] font-bold tracking-wider text-[#66829d] uppercase sm:text-xs dark:text-[#8dbbe3]/80">
                {dict.den.moodTitle}
              </span>
              <p className="text-sm text-[#18324a] dark:text-[#dcecf8]">
                {dict.den.moodText}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 rounded-lg border border-[#dcecf8]/70 bg-white/60 p-3.5 transition-colors hover:border-[#8dbbe3]/80 hover:bg-white dark:border-[#8dbbe3]/20 dark:bg-[#0e2133]/40 dark:hover:border-[#8dbbe3]/30 dark:hover:bg-[#0e2133]">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#dcecf8]/80 text-[#24558a] dark:bg-[#1f3d5c] dark:text-[#8dbbe3]">
              <BookOpen className="h-4.5 w-4.5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[11px] font-bold tracking-wider text-[#66829d] uppercase sm:text-xs dark:text-[#8dbbe3]/80">
                {dict.den.readingTitle}
              </span>
              <p className="text-sm text-[#18324a] dark:text-[#dcecf8]">
                {dict.den.readingBook}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 rounded-lg border border-[#dcecf8]/70 bg-white/60 p-3.5 transition-colors hover:border-[#8dbbe3]/80 hover:bg-white dark:border-[#8dbbe3]/20 dark:bg-[#0e2133]/40 dark:hover:border-[#8dbbe3]/30 dark:hover:bg-[#0e2133]">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#dcecf8]/80 text-[#24558a] dark:bg-[#1f3d5c] dark:text-[#8dbbe3]">
              <Palette className="h-4.5 w-4.5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[11px] font-bold tracking-wider text-[#66829d] uppercase sm:text-xs dark:text-[#8dbbe3]/80">
                {dict.den.hobbyTitle}
              </span>
              <p className="text-sm text-[#18324a] dark:text-[#dcecf8]">
                {dict.den.hobbyText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </NotionCard>
  );
}
