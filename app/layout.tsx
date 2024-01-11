import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: SiteConfig.title, template: `%s | ${SiteConfig.title}` },
  description: SiteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
