import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DataOps",
  description: "Ship production-ready AI with verified domain experts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full font-helvetica-now-display">{children}</body>
    </html>
  );
}
