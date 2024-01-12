import type { Metadata } from "next";

import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "To live a life",
  description: "What does it mean to live a life?",
  icons: ["/favicon.png"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
