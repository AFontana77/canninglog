import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

const SITE_URL = "https://www.canninglog.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CanningLog — Search 158+ USDA-tested recipes",
    template: "%s | CanningLog",
  },
  description: "CanningLog has 158+ USDA-tested canning recipes with processing times, jar sizes, and pressure settings. Log your batches, track your pantry, and can with confidence.",
  keywords: ["canning recipe app", "home canning log", "USDA canning recipes", "pressure canning tracker", "water bath canning guide"],
  authors: [{ name: "Anvil Road LLC" }],
  creator: "Anvil Road LLC",
  publisher: "Anvil Road LLC",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "CanningLog",
    title: "CanningLog — Search 158+ USDA-tested recipes",
    description: "CanningLog has 158+ USDA-tested canning recipes with processing times, jar sizes, and pressure settings. Log your batches, track your pantry, and can with confidence.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CanningLog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CanningLog — Search 158+ USDA-tested recipes",
    description: "CanningLog has 158+ USDA-tested canning recipes with processing times, jar sizes, and pressure settings. Log your batches, track your pantry, and can with confidence.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/icons/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F766E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
