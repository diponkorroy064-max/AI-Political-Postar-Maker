import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bengali",
});

export const metadata: Metadata = {
  title: "AI Political Party Poster Maker",
  description: "রাজনৈতিক দলের জন্য সহজে পোস্টার তৈরি করুন",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={notoBengali.variable}>
      <body className="font-bengali antialiased">{children}</body>
    </html>
  );
}
