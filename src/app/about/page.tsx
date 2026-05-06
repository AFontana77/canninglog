import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About CanningLog",
  description: "The story behind CanningLog. Search 158+ USDA-tested recipes. Log your jars. Build your pantry.",
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

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="px-6 sm:px-10 py-20 lg:py-28" style={{ backgroundColor: TOKEN.surface }}>
          <div className="max-w-5xl mx-auto">
            <p
              className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
              style={{ color: TOKEN.primary }}
            >
              About
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
              style={{ color: TOKEN.fg }}
            >
              A USDA-grade reference,<br />disguised as a kitchen journal.
            </h1>
            <p
              className="font-body text-lg leading-relaxed mb-8 max-w-2xl"
              style={{ color: TOKEN.body }}
            >
              CanningLog was built for home canners who learned the hard way that untested recipes are a food safety risk. The USDA NCHFP has tested hundreds of recipes for safe processing times, but that data is scattered across a clunky website. CanningLog puts it all in one searchable place, with a batch log so you track what you made and when. The app for iPhone and Android adds pantry tracking and push reminders when older jars should be used. Canning season is short. CanningLog helps you make the most of it.
            </p>
            <p
              className="font-body text-base leading-relaxed mb-10 max-w-2xl"
              style={{ color: TOKEN.body }}
            >
              CanningLog is published by Anvil Road LLC, a small product studio building practical apps and reference tools for hobbyists, professionals, and makers. Every product in the portfolio follows the same principle: a curated, searchable database paired with a personal log. Search what the experts know. Record what you discover.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/library" className="btn-primary">Browse the library</Link>
              <Link href="/free-download" className="btn-ghost">Free download</Link>
            </div>
          </div>
        </section>

        {/* Anvil Road */}
        <section className="px-6 sm:px-10 py-20 lg:py-24" style={{ backgroundColor: TOKEN.bg }}>
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-12">
            <div>
              <p
                className="font-body text-xs uppercase tracking-[0.18em] mb-2"
                style={{ color: TOKEN.muted }}
              >
                Publisher
              </p>
              <h2 className="font-display text-2xl" style={{ color: TOKEN.primary }}>
                Built by Anvil Road LLC
              </h2>
            </div>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: TOKEN.body }}
            >
              Anvil Road is an independent publisher and app studio based in New Jersey. We build reference databases, log apps, KDP books, and companion print products across a range of hobby and professional categories. CanningLog is one of 20+ apps in the Anvil Road portfolio. All apps are free to start, with one-time unlocks for unlimited features. No subscriptions.
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
