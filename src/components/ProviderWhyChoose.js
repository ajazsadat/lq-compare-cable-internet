'use client';

export default function ProviderWhyChoose({ providerName }) {
  const idPrefix = providerName.toLowerCase().replace(/\s+/g, '-');

  return (
    <section className="w-full bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
              Why Choose <span className="text-emerald-500">LQcomparecableinternet</span>?
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              Getting {providerName} services is easier with LQcomparecableinternet. We help you
              compare plans, understand features and pricing, and select the option that works best
              for your home or business. Our team guides you every step of the way — clear, reliable,
              and hassle-free.
            </p>

            <a
              href="tel:8889594513"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 shadow-lg shadow-emerald-500/20 transition-all"
            >
              Check {providerName} Availability In Your Area
            </a>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <a href="tel:8889594513" className="font-semibold hover:text-emerald-600 transition-colors">
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
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor={`${idPrefix}-name`} className="block text-sm font-medium text-slate-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id={`${idPrefix}-name`}
                  name="name"
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor={`${idPrefix}-email`} className="block text-sm font-medium text-slate-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id={`${idPrefix}-email`}
                  name="email"
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor={`${idPrefix}-phone`} className="block text-sm font-medium text-slate-600 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id={`${idPrefix}-phone`}
                  name="phone"
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor={`${idPrefix}-message`} className="block text-sm font-medium text-slate-600 mb-2">
                  Message
                </label>
                <textarea
                  id={`${idPrefix}-message`}
                  name="message"
                  rows={4}
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  placeholder="How can we help?"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id={`${idPrefix}-consent`}
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 bg-[#f8fafc] border border-slate-200 rounded focus:ring-emerald-500 focus:ring-2"
                />
                <label htmlFor={`${idPrefix}-consent`} className="text-xs text-slate-600 leading-relaxed">
                  I agree to the{' '}
                  <a href="/terms-conditions" className="text-emerald-500 hover:underline">
                    terms &amp; conditions
                  </a>{' '}
                  and{' '}
                  <a href="/privacy-policy" className="text-emerald-500 hover:underline">
                    privacy policy
                  </a>{' '}
                  provided by Simply Activate Services. By providing my phone number, I agree to
                  receive text messages and calls from Simply Activate Services. Consent is not a
                  condition of purchase.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 text-lg font-bold rounded-xl text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 shadow-lg shadow-emerald-500/25 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
