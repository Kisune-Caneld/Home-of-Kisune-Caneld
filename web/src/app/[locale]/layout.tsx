import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { hasLocale, locales } from "@/configs/i18n";
import { ThemeProvider } from "@/contexts/ThemeContext";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  return <ThemeProvider>{children}</ThemeProvider>;
}
