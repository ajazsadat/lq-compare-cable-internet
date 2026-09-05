import Link from 'next/link';
import { SITE } from '@/lib/site';

/**
 * Google Ads requires material offer terms to sit with the claim they qualify,
 * not only in the footer. Rendered as <details> so the text stays in the markup
 * and stays reachable without JavaScript.
 */
export default function OfferTerms({ providerName }) {
  return (
    <details className="group mt-3">
      <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-sm font-semibold text-emerald-600 underline underline-offset-2 hover:text-emerald-500">
        Learn More
        <svg
          className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
        <p className="text-[13px] leading-relaxed text-slate-600">
          {SITE.providerPlanDetailsNote(providerName)}
        </p>
        <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {SITE.footerOfferDisclosures.map((item) => (
            <div key={item.title}>
              <h4 className="text-[13px] font-semibold text-slate-900">{item.title}</h4>
              <p className="mt-1 text-[12px] leading-relaxed text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[12px] leading-relaxed text-slate-600">
          {SITE.providerStatusDisclaimer(providerName)}{' '}
          <Link href="/fees-disclosures" className="text-emerald-600 underline hover:text-emerald-500">
            Fees &amp; Disclosures
          </Link>
        </p>
      </div>
    </details>
  );
}
