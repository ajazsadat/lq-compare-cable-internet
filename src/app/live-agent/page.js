import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Live Agent Help | LQcomparecableinternet',
  description:
    'Speak with a live agent from LQcomparecableinternet. Call now and we will walk you through your options for comparing internet and TV plans.',
};

const PHONE_DISPLAY = '(888) 959-4513';
const PHONE_TEL = 'tel:(888) 959-4513';

function PhoneBadge() {
  return (
    <span className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-[#071018] bg-gradient-to-r from-emerald-400 to-emerald-500 group-hover:brightness-110 transition shadow-[0_0_20px_rgba(16,185,129,0.25)]">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      {PHONE_DISPLAY}
    </span>
  );
}

export default function LiveAgentPage() {
  return (
    <div className="bg-[#071018] min-h-screen flex flex-col text-[#d6dde8]">
      <section className="flex-grow flex items-center py-16 md:py-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-center text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Speak with a <span className="text-emerald-300">live agent</span>
          </h1>
          <p className="text-center text-base sm:text-lg text-[#d6dde8]/80 font-light max-w-2xl mx-auto mb-10 md:mb-14">
            Call now and we&apos;ll walk you through your options.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
            <a
              href={PHONE_TEL}
              className="group flex flex-col items-center justify-center gap-5 rounded-2xl border border-white/10 bg-[#121c2a] px-6 py-12 md:py-16 text-center hover:border-emerald-400/50 hover:bg-[#152033] transition"
            >
              <svg className="w-16 h-16 md:w-20 md:h-20 text-emerald-300" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <circle cx="32" cy="22" r="10" stroke="currentColor" strokeWidth="2.5" />
                <path d="M14 52c0-10 8-16 18-16s18 6 18 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M48 28v6c0 4-3 7-7 7h-1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M16 28v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="text-xl md:text-2xl font-bold text-white">Speak With A Human Agent</span>
              <PhoneBadge />
            </a>

            <a
              href={PHONE_TEL}
              className="group flex flex-col items-center justify-center gap-5 rounded-2xl border border-white/10 bg-[#121c2a] px-6 py-12 md:py-16 text-center hover:border-emerald-400/50 hover:bg-[#152033] transition"
            >
              <svg className="w-16 h-16 md:w-20 md:h-20 text-emerald-300" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                <rect x="18" y="8" width="28" height="48" rx="6" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="32" cy="46" r="2.5" fill="currentColor" />
                <path d="M26 18h12M26 26h12M26 34h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="text-xl md:text-2xl font-bold text-white">Automated Support Line</span>
              <PhoneBadge />
            </a>
          </div>
        </div>
      </section>

      <div className="md:hidden flex justify-center items-center py-10 px-4">
        <Link href="/" className="flex flex-col items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="LQcomparecableinternet logo"
            width={64}
            height={64}
            className="rounded-full ring-1 ring-emerald-400/30"
          />
          <span className="text-xl font-bold tracking-tight text-gradient">LQcomparecableinternet</span>
        </Link>
      </div>
    </div>
  );
}
