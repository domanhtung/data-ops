import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DataOps",
  description: "Ship production-ready AI with verified domain experts",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "DataOps",
    description: "Ship production-ready AI with verified domain experts",
    images: [
      {
        url: "/preview-image.png",
        width: 1200,
        height: 630,
        alt: "DataOps preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DataOps",
    description: "Ship production-ready AI with verified domain experts",
    images: ["/preview-image.png"],
  },
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
