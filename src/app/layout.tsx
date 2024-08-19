import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import zorro from '@/../public/zorro.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cristian Sebastian Capobianco",
  description: "portfolio",
  icons: {
    icon: "\zorro.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
