import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Namrata Modha | Portfolio",
  description:
    "Software Engineer portfolio - an immersive journey through code, culture, and craft. Built with Next.js and Framer Motion.",
  openGraph: {
    title: "Namrata Modha | Portfolio",
    description: "Enter the world of Namrata Modha - Software Engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[#06031a] text-white antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
