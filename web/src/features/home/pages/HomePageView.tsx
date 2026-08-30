"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, X, Maximize2 } from "lucide-react";
import { ME_AND_LOVER_2_URL } from "@/assets/cloudinary";
import { Footer } from "@/shared/components/Footer";
import { HeroZone } from "../components/HeroZone";
import { NavigationZone } from "../components/NavigationZone";
import { DenZone } from "../components/DenZone";
import { CalendarZone } from "../components/CalendarZone";
import { useHomeDashboard } from "../hooks/useHomeDashboard";

const RainBackgroundR3F = dynamic(
  () =>
    import("@/shared/components/RainBackgroundR3F").then(
      (m) => m.RainBackgroundR3F,
    ),
  { ssr: false },
);

interface HomePageViewProps {
  dict: {
    hero: {
      roomTitle: string;
      subtitle: string;
      status: string;
      onlineBadge: string;
      localTime: string;
    };
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
    calendar: {
      title: string;
      today: string;
      weekdays: string[];
      months: string[];
    };
    common: {
      deploy: string;
      docs: string;
    };
    footer: {
      copyright: string;
      version: string;
      madeWith: string;
      andTea: string;
    };
  };
  locale: string;
}

export function HomePageView({ dict, locale }: HomePageViewProps) {
  const { timeString } = useHomeDashboard();
  const [sidebarWidth, setSidebarWidth] = useState<number>(20);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        const newWidth = (e.clientX / window.innerWidth) * 100;
        if (newWidth >= 18.5 && newWidth <= 25) {
          setSidebarWidth(newWidth);
        }
      }
    },
    [isResizing],
  );

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", resize);
      window.addEventListener("mouseup", stopResizing);
    }
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [isResizing, resize, stopResizing]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreviewImage(null);
      }
    };
    if (previewImage) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewImage]);

  return (
    <div
      className={`relative min-h-screen w-full bg-transparent ${
        isResizing ? "select-none cursor-col-resize" : ""
      }`}
    >
      <RainBackgroundR3F />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[#0e2133]/50 backdrop-blur-[1px]" />

      <div className="relative z-10 flex min-h-screen w-full flex-col md:flex-row">
        <AnimatePresence initial={false}>
          {isSidebarOpen && (
            <>
              <motion.div
                key="sidebar-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSidebarOpen(false)}
                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden"
              />
              <motion.aside
                key="sidebar"
                initial={{ x: -320, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -320, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                className="fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] shrink-0 overflow-y-auto overflow-x-hidden border-r border-[#dcecf8]/60 bg-white/95 shadow-2xl backdrop-blur-md md:sticky md:top-0 md:z-10 md:h-screen md:w-[var(--sidebar-width)] md:border-b-0 md:bg-transparent md:shadow-none dark:bg-[#0e2133]/95 md:dark:bg-transparent"
                style={
                  {
                    "--sidebar-width": `${sidebarWidth}%`,
                  } as React.CSSProperties
                }
              >
                <NavigationZone
                  dict={dict}
                  locale={locale}
                  onClose={() => setIsSidebarOpen(false)}
                />
              </motion.aside>

              <div
                onMouseDown={startResizing}
                className="group relative hidden w-1.5 cursor-col-resize items-center justify-center hover:bg-[#8dbbe3]/50 active:bg-[#3f73b8] md:flex"
              >
                <div className="h-8 w-0.5 rounded-full bg-[#8dbbe3]/60 transition-colors group-hover:bg-[#3f73b8]" />
              </div>
            </>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isSidebarOpen && (
            <motion.button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0 }}
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-1/2 left-0 z-40 flex h-12 w-6 -translate-y-1/2 items-center justify-center rounded-r-lg border border-l-0 border-[#dcecf8] bg-white/90 text-[#24558a] shadow-md backdrop-blur-xs transition-colors"
              aria-label="Open Sidebar"
            >
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          )}
        </AnimatePresence>

        <main
          className="flex w-full flex-1 flex-col p-3 transition-[width] duration-300 ease-out sm:p-5 md:p-6 lg:p-8 md:w-[var(--main-width)]"
          style={
            {
              "--main-width": isSidebarOpen ? `${100 - sidebarWidth}%` : "100%",
            } as React.CSSProperties
          }
        >
          <div className="flex flex-col overflow-hidden rounded-2xl border border-[#dcecf8]/80 bg-[#ffffff]/90 shadow-md backdrop-blur-sm dark:border-[#8dbbe3]/20 dark:bg-[#0e2133]/90">
            <div
              onClick={() => setPreviewImage(ME_AND_LOVER_2_URL)}
              className="group relative h-48 w-full cursor-pointer overflow-hidden border-b border-[#dcecf8]/60 sm:h-56 md:h-64 dark:border-[#13273d]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setPreviewImage(ME_AND_LOVER_2_URL);
                }
              }}
              aria-label="View cover image"
            >
              <Image
                src={ME_AND_LOVER_2_URL}
                alt="Me and lover 2 cover"
                fill
                quality={95}
                className="object-cover object-center transition-transform duration-500 group-hover:scale-102"
                priority
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
              <div className="absolute right-3 bottom-3 flex items-center gap-1.5 rounded-lg bg-black/50 px-2.5 py-1 text-xs font-medium text-white opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="h-3.5 w-3.5" />
                <span>View</span>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-5 sm:p-7 md:p-8">
              <HeroZone dict={dict} timeString={timeString} />

              <DenZone dict={dict} />

              <CalendarZone dict={dict} />

              <Footer dict={dict} />
            </div>
          </div>
        </main>
      </div>

      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-[#0e2133] shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="absolute top-5 right-5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xs transition-colors hover:bg-black"
                aria-label="Close Preview"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative h-[75vh] w-[88vw] max-w-5xl">
                <Image
                  src={previewImage}
                  alt="Full preview"
                  fill
                  quality={100}
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
