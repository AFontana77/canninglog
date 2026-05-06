import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { EmailCaptureForm } from '@/components/EmailCaptureForm';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free USDA Canning Safety Cheat Sheet",
  description: "A one-page quick reference — when to water bath vs. pressure can, key processing temps, and warning signs. Free printable from CanningLog — no signup required.",
};

const TOKEN = {
  bg: 'oklch(0.97 0.012 105)',
  surface: 'oklch(0.94 0.018 105)',
  fg: 'oklch(0.18 0.025 130)',
  body: 'oklch(0.32 0.022 130)',
  muted: 'oklch(0.46 0.018 130)',
  border: 'oklch(0.84 0.018 105)',
  primary: 'oklch(0.40 0.12 145)',
};

const INCLUDED = [
  'Water bath vs. pressure canning decision guide',
  'pH rule for high-acid vs. low-acid foods',
  'Key internal processing temperatures',
  'Warning signs of improper seals',
  'Altitude adjustment table for pressure canning',
];

export default function FreeDownloadPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="px-6 sm:px-10 py-20 lg:py-28" style={{ backgroundColor: TOKEN.surface }}>
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-start">
            <div>
              <p
                className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
                style={{ color: TOKEN.primary }}
              >
                Free download · No signup walls
              </p>
              <h1
                className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
                style={{ color: TOKEN.fg }}
              >
                The USDA canning<br />safety cheat sheet.
              </h1>
              <p
                className="font-body text-lg leading-relaxed mb-8 max-w-xl"
                style={{ color: TOKEN.body }}
              >
                One page. Water bath vs. pressure decision guide, key processing temperatures, altitude adjustments, and the warning signs that mean a jar should be discarded. Printable PDF, free.
              </p>
            </div>

            {/* Email capture card */}
            <div
              className="p-6 sm:p-8"
              style={{
                backgroundColor: TOKEN.bg,
                border: `1px solid ${TOKEN.border}`,
              }}
            >
              <p className="font-body text-xs uppercase tracking-[0.18em] mb-2" style={{ color: TOKEN.muted }}>
                Get the free PDF
              </p>
              <p className="font-display text-2xl mb-3" style={{ color: TOKEN.primary }}>
                Send it to my inbox
              </p>
              <p className="font-body text-sm mb-5" style={{ color: TOKEN.body }}>
                Enter your email. We will send the PDF right away.
              </p>
              <EmailCaptureForm buttonLabel="Send me the free PDF" />
              <p className="font-body text-xs mt-4" style={{ color: TOKEN.muted }}>
                No spam. Unsubscribe any time.
              </p>
            </div>
          </div>
        </section>

        {/* What's inside */}
        <section className="px-6 sm:px-10 py-20 lg:py-24">
          <div className="max-w-5xl mx-auto">
            <p
              className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
              style={{ color: TOKEN.primary }}
            >
              What is inside
            </p>
            <h2 className="font-display text-3xl sm:text-4xl mb-10" style={{ color: TOKEN.fg }}>
              Five reference panels on one page.
            </h2>

            <div>
              {INCLUDED.map((item, i) => (
                <div
                  key={item}
                  className="grid grid-cols-[60px_1fr] gap-6 py-6 items-baseline"
                  style={{
                    borderTop: `1px solid ${TOKEN.border}`,
                    borderBottom: i === INCLUDED.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <span className="font-display text-2xl tabular-nums" style={{ color: TOKEN.primary }}>
                    0{i + 1}
                  </span>
                  <p className="font-body text-base leading-relaxed" style={{ color: TOKEN.body }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App CTA */}
        <section className="px-6 sm:px-10 py-20 lg:py-24" style={{ backgroundColor: TOKEN.surface }}>
          <div className="max-w-3xl mx-auto">
            <p
              className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
              style={{ color: TOKEN.primary }}
            >
              Want the full database?
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] mb-6" style={{ color: TOKEN.fg }}>
              The PDF covers basics. The app covers everything.
            </h2>
            <p className="font-body text-lg leading-relaxed mb-10 max-w-2xl" style={{ color: TOKEN.body }}>
              The cheat sheet is a quick reference. CanningLog gives you the full searchable library of 158 USDA-tested recipes, plus a personal batch log. Free on iPhone and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get on App Store
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Get on Google Play
              </a>
            </div>
            <p className="font-body text-sm mt-6">
              <Link href="/library" className="underline" style={{ color: TOKEN.primary }}>
                Or browse the recipe library
              </Link>
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
