import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LOGO_URL } from "@/assets/cloudinary";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Home of Kisune Caneld",
    template: "%s | Home of Kisune Caneld",
  },
  description:
    "The cozy homepage and creative sanctuary of Kisune Caneld, featuring Blue Nostalgia aesthetics, Notion-inspired layouts, and interactive WebGL experiences.",
  applicationName: "Home of Kisune Caneld",
  authors: [{ name: "Kisune Caneld" }],
  creator: "Kisune Caneld",
  publisher: "Kisune Caneld",
  keywords: [
    "Kisune Caneld",
    "Home of Kisune Caneld",
    "Blue Nostalgia",
    "Notion",
    "Portfolio",
    "WebGL",
    "Interactive Room",
  ],
  icons: {
    icon: [
      {
        url: LOGO_URL,
        type: "image/png",
      },
    ],
    shortcut: [LOGO_URL],
    apple: [
      {
        url: LOGO_URL,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Home of Kisune Caneld",
    title: "Home of Kisune Caneld",
    description:
      "The cozy homepage and creative sanctuary of Kisune Caneld, featuring Blue Nostalgia aesthetics and Notion-inspired design.",
    images: [
      {
        url: LOGO_URL,
        width: 800,
        height: 800,
        alt: "Home of Kisune Caneld Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home of Kisune Caneld",
    description: "The cozy homepage and creative sanctuary of Kisune Caneld.",
    images: [LOGO_URL],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
