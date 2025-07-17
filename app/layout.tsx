import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Run Until You See",
  description: "A Next.js webapp for run until you see functionality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
