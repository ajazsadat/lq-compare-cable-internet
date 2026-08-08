'use client';

import ContactForm from '@/components/ContactForm';

export default function ProviderWhyChoose({
  providerName,
  callCtaLabel = 'Call to compare providers',
  introLeadText,
  introActionText = 'Call to compare providers, understand features and pricing, and select the option that works best for your home or business.',
}) {
  const idPrefix = providerName.toLowerCase().replace(/\s+/g, '-');
  const leadText =
    introLeadText ??
    `Getting ${providerName} Internet & Cable Services is easier with LQcomparecableinternet.`;

  return (
    <section className="w-full bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
              Why Choose <span className="text-emerald-500">LQcomparecableinternet</span>?
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              {leadText}{' '}
              {introActionText} Our team guides you every step of the way — clear, reliable, and
              hassle-free.
            </p>

            <a
              href="tel:(888) 959-4513"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 shadow-lg shadow-emerald-500/20 transition-all"
            >
              {callCtaLabel}
            </a>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <a href="tel:(888) 959-4513" className="font-semibold hover:text-emerald-600 transition-colors">
                  (888) 959-4513
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <a
                  href="mailto:info@lqcomparecableinternet.com"
                  className="font-semibold hover:text-emerald-600 transition-colors break-all"
                >
                  info@lqcomparecableinternet.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="font-semibold leading-snug pt-2">
                  5902 Newfoundland Ct
                  <br />
                  Spring, TX 77379
                </span>
              </li>
            </ul>

            <p className="mt-8 text-xs text-slate-500 leading-relaxed max-w-xl">
              Pricing, availability, and included services vary by location and plan. Promotions may
              require AutoPay. Equipment and streaming services subject to terms and change.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 md:p-9 border border-slate-200 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Started</h3>
            <ContactForm
              source={`${providerName} provider page`}
              submitLabel="Submit"
              idPrefix={idPrefix}
              className="space-y-5"
              labels={{
                name: 'Name',
                email: 'Email',
                phone: 'Phone',
                message: 'Message',
              }}
              placeholders={{
                name: 'Your name',
                email: 'you@example.com',
                phone: '(555) 123-4567',
                message: 'What would you like to compare?',
              }}
              buttonClassName="w-full py-4 px-6 text-lg font-bold rounded-xl text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 shadow-lg shadow-emerald-500/25 transition-all disabled:opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
