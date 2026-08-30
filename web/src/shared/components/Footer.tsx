interface FooterProps {
  dict: {
    footer: {
      copyright: string;
      version: string;
    };
  };
}

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-[#dcecf8]/80 pt-6 text-xs text-[#66829d] sm:flex-row dark:border-[#8dbbe3]/20 dark:text-[#8dbbe3]">
      <span>{dict.footer.copyright}</span>
      <div className="flex items-center gap-3">
        <span className="rounded-full border border-[#8dbbe3]/30 bg-[#dcecf8]/50 px-2 py-0.5 font-mono text-[10px] font-medium text-[#24558a] dark:border-[#8dbbe3]/20 dark:bg-[#1f3d5c] dark:text-[#8dbbe3]">
          {dict.footer.version}
        </span>
      </div>
    </footer>
  );
}
