import type { Metadata, Viewport } from "next";
import { Yeseva_One, Hind } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const yesevaOne = Yeseva_One({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const hind = Hind({
  variable: "--font-body",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

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
  themeColor: "#3F6B3A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${yesevaOne.variable} ${hind.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {/* Google Tag Manager - GTM-KDPF9V4P */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KDPF9V4P');`}
        </Script>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KDPF9V4P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>{children}</body>
    </html>
  );
}
