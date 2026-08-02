import Image from 'next/image';
import Link from 'next/link';

const PHONE_DISPLAY = '(888) 959-4513';
const PHONE_TEL = 'tel:(888) 959-4513';

export default function IndependentSupportHelpContent({ className = '' }) {
  return (
    <div className={`flex flex-col min-h-[80vh] bg-[#f8fafc] ${className}`.trim()}>
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#f1f5f9] to-[#f8fafc] border-b border-slate-200">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Speak with a <span className="text-emerald-500">live agent</span>
          </h1>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            Call now and we&apos;ll walk you through your options.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 flex-grow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12">
            <a
              href={PHONE_TEL}
              className="group flex flex-col items-center text-center rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-lg hover:border-emerald-500/40 hover:shadow-xl transition"
            >
              <Image
                src="/images/live-agent-ref/human.png"
                alt=""
                width={96}
                height={96}
                className="w-20 h-20 md:w-24 md:h-24 object-contain mb-5"
              />
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Speak With A Live Agent</h2>
              <p className="text-slate-600 font-light mb-6 leading-relaxed">
                Call now and we&apos;ll walk you through your options.
              </p>
              <span className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 group-hover:from-emerald-500 group-hover:to-emerald-400 transition">
                {PHONE_DISPLAY}
              </span>
            </a>

            <Link
              href="/contact"
              className="group flex flex-col items-center text-center rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-lg hover:border-emerald-500/40 hover:shadow-xl transition"
            >
              <span className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition">
                <svg
                  className="w-8 h-8 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Send Us a Message</h2>
              <p className="text-slate-600 font-light mb-6 leading-relaxed">
                Prefer not to call? Fill out our contact form and we&apos;ll follow up.
              </p>
              <span className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-emerald-700 bg-emerald-500/10 border border-emerald-500/30 group-hover:bg-emerald-500/20 transition">
                Go to Contact Form
              </span>
            </Link>
          </div>

          <p className="page-disclaimer text-center text-sm text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
            LQcomparecableinternet is an independent comparison resource. We do not provide internet,
            TV, or phone services directly, and we are not affiliated with Spectrum, Xfinity, AT&amp;T,
            Verizon, or any other carrier. For billing or existing account support, please contact your
            provider directly.
          </p>
        </div>
      </section>
    </div>
  );
}
