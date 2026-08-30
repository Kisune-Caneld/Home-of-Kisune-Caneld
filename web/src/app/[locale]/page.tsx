import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/configs/i18n";
import { HomePageView } from "@/features/home/pages/HomePageView";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return <HomePageView dict={dict} locale={locale} />;
}
