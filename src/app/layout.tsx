import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, SITE_DESC } from "../../lib/constants";
import {
  Inter,
  Noto_Sans_JP,
  Noto_Color_Emoji,
  Noto_Emoji,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notojp = Noto_Sans_JP({
  preload: false,
  variable: "--font-notojp",
});

const notoColorEmoji = Noto_Color_Emoji({
  subsets: ["emoji"],
  weight: "400",
  display: "swap",
  variable: "--font-noto-color-emoji",
});

const notoEmoji = Noto_Emoji({
  subsets: ["emoji"],
  weight: "400",
  display: "swap",
  variable: "--font-noto-emoji",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s - ${SITE_NAME}`,
  },
  description: SITE_DESC,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESC,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESC,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="overflow-x-hidden">
      <body
        className={`${inter.variable} ${notojp.variable} ${notoEmoji.variable} ${notoColorEmoji.variable} overflow-x-hidden text-stone-800`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
