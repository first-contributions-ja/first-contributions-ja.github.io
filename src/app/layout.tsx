import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { SITE_NAME, SITE_URL, SITE_DESC } from "../../lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notojp = Noto_Sans_JP({
  preload: false,
  variable: "--font-notojp",
});

export const metadata: Metadata = {
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
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
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
    <html lang="ja">
      <body className={`${inter.variable} ${notojp.variable}`}>
        <header>ヘッダー</header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
