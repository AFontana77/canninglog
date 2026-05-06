import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support — CanningLog',
  description: 'Get help with the CanningLog app. Contact support or browse common questions.',
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

const FAQ = [
  {
    q: 'How do I get the app?',
    a: 'Search "CanningLog" in the App Store or Google Play. The app is free to download. The $6.99 one-time unlock removes entry limits and adds premium features.',
  },
  {
    q: 'What does the $6.99 unlock include?',
    a: 'Unlimited batch logs, pantry tracker, PDF export, and altitude auto-adjust. One-time payment, no subscription, no expiration.',
  },
  {
    q: 'How do I restore my purchase?',
    a: 'Open the app, go to Settings, and tap "Restore Purchases." Make sure you are signed in to the same Apple ID or Google account you used to purchase.',
  },
  {
    q: 'Does the app require an account?',
    a: 'No account is required for offline use. An optional free account lets you sync your canning batch records across devices.',
  },
  {
    q: 'Is there a subscription?',
    a: 'No. CanningLog is free to download with entry limits, and $6.99 one-time to unlock everything. No monthly fees, ever.',
  },
  {
    q: 'How do I delete my account and data?',
    a: 'Go to Settings in the app and tap "Delete Account." This removes all cloud data within 30 days. Local data is removed when you uninstall the app.',
  },
];

export default function SupportPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="px-6 sm:px-10 py-20 lg:py-24" style={{ backgroundColor: TOKEN.surface }}>
          <div className="max-w-3xl mx-auto">
            <p
              className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
              style={{ color: TOKEN.primary }}
            >
              Support
            </p>
            <h1 className="font-display text-4xl sm:text-5xl mb-4" style={{ color: TOKEN.fg }}>
              App support
            </h1>
            <p className="font-body text-lg leading-relaxed" style={{ color: TOKEN.body }}>
              Get help with CanningLog or send feedback. We respond within one to two business days.
            </p>
          </div>
        </section>

        {/* Email card */}
        <section className="px-6 sm:px-10 pt-16 lg:pt-20">
          <div className="max-w-3xl mx-auto">
            <div
              className="p-6 sm:p-8"
              style={{
                backgroundColor: TOKEN.bg,
                border: `1px solid ${TOKEN.border}`,
              }}
            >
              <p
                className="font-body text-xs uppercase tracking-[0.18em] mb-2"
                style={{ color: TOKEN.muted }}
              >
                Email
              </p>
              <p className="font-display text-xl mb-2" style={{ color: TOKEN.primary }}>
                support@canninglog.com
              </p>
              <p className="font-body text-sm" style={{ color: TOKEN.body }}>
                <a href="mailto:support@canninglog.com" className="underline" style={{ color: TOKEN.primary }}>
                  Send an email
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 sm:px-10 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto">
            <p
              className="font-body text-xs font-semibold uppercase tracking-[0.18em] mb-6"
              style={{ color: TOKEN.primary }}
            >
              Frequently asked
            </p>
            <h2 className="font-display text-3xl sm:text-4xl mb-10" style={{ color: TOKEN.fg }}>
              Common questions
            </h2>

            <div>
              {FAQ.map((item, i) => (
                <details
                  key={item.q}
                  className="group py-6"
                  style={{
                    borderTop: `1px solid ${TOKEN.border}`,
                    borderBottom: i === FAQ.length - 1 ? `1px solid ${TOKEN.border}` : 'none',
                  }}
                >
                  <summary className="font-display text-lg cursor-pointer list-none flex justify-between items-center gap-4" style={{ color: TOKEN.fg }}>
                    {item.q}
                    <span className="font-body text-2xl leading-none transition-transform group-open:rotate-45" style={{ color: TOKEN.primary }}>+</span>
                  </summary>
                  <p className="font-body text-base leading-relaxed mt-4" style={{ color: TOKEN.body }}>
                    {item.a}
                  </p>
                </details>
              ))}
            </div>

            <p className="font-body text-sm mt-10" style={{ color: TOKEN.muted }}>
              See our <a href="/privacy" className="underline" style={{ color: TOKEN.primary }}>Privacy Policy</a> for information on how we handle your data.
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
