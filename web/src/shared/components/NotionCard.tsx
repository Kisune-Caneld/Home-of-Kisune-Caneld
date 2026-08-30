import type { ReactNode } from "react";

interface NotionCardProps {
  children: ReactNode;
  className?: string;
  headerIcon?: ReactNode;
  title?: string;
  badge?: string;
  action?: ReactNode;
}

export function NotionCard({
  children,
  className = "",
  headerIcon,
  title,
  badge,
  action,
}: NotionCardProps) {
  return (
    <div
      className={`rounded-xl border border-[#dcecf8]/70 bg-white/85 p-5 backdrop-blur-xs transition-colors dark:border-[#8dbbe3]/20 dark:bg-[#13273d]/50 ${className}`}
    >
      {(title || headerIcon || badge || action) && (
        <div className="mb-4 flex items-center justify-between border-b border-[#dcecf8]/60 pb-3 dark:border-[#13273d]">
          <div className="flex items-center gap-2">
            {headerIcon && (
              <span className="text-[#3f73b8] dark:text-[#60a5fa]">
                {headerIcon}
              </span>
            )}
            {title && (
              <h2 className="text-[11px] font-bold tracking-widest text-[#24558a] uppercase dark:text-[#8dbbe3]">
                {title}
              </h2>
            )}
            {badge && (
              <span className="rounded-full border border-[#8dbbe3]/30 bg-[#dcecf8]/60 px-2 py-0.5 text-[10px] font-medium text-[#24558a] dark:border-[#8dbbe3]/30 dark:bg-[#1f3d5c] dark:text-[#8dbbe3]">
                {badge}
              </span>
            )}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
}
