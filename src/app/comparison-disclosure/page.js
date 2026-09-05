export const metadata = {
  title: 'Comparison & Referral Disclosure | LQcomparecableinternet',
  description:
    'Comparison and referral disclosure for LQcomparecableinternet, operated by Lean and Quality Circle llc.',
};

export default function ComparisonDisclosure() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-slate-600">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Comparison &amp; Referral Disclosure
        </h1>
        <p className="text-sm text-slate-500 mb-2">Effective Date: July 23, 2026</p>
        <p className="text-sm text-slate-500 mb-10">Website: https://lqcomparecableinternet.com/</p>

        <section className="mb-8 space-y-4">
          <p className="leading-relaxed font-light">
            LQcomparecableinternet.com is operated by Lean and Quality Circle llc, an independent
            comparison and referral service that helps customers compare and select broadband,
            wireless, and digital services across the United States. We do not sell or manage
            carrier accounts directly.
          </p>
          <p className="leading-relaxed font-light">
            We do not own or operate any network, we are not a licensed service provider, and we are
            not owned, operated, or controlled by any internet service provider (ISP) or carrier. We
            are not an authorized reseller, dealer, or agent of any carrier. All broadband and
            wireless services are delivered, billed, and supported directly by the respective
            licensed providers.
          </p>
          <p className="leading-relaxed font-light">
            Lean and Quality Circle llc may receive a commission or referral incentive from a
            service provider when a customer we refer activates or continues a qualifying service.
            These commissions do not affect pricing — the customer pays the same rates offered
            directly by the provider.
          </p>
          <p className="leading-relaxed font-light">
            All service information, including pricing, availability, and terms, is based on
            publicly available data from each carrier and is subject to change. We do not guarantee
            availability or pricing accuracy in all areas, and customers are encouraged to confirm
            final details with their chosen provider prior to activation.
          </p>
          <p className="leading-relaxed font-light">
            Provider names and related marks are trademarks of their respective owners and are used
            here for identification and comparison only.
          </p>
        </section>

        <section className="mb-8 pt-8 border-t border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Us</h2>
          <ul className="space-y-2 font-light text-slate-600">
            <li className="flex items-center">
              <span className="text-emerald-400 mr-2">✅</span> (888) 959-4513
            </li>
            <li className="flex items-center">
              <span className="text-emerald-400 mr-2">✅</span> info@lqcomparecableinternet.com
            </li>
            <li className="flex items-center">
              <span className="text-emerald-400 mr-2">✅</span> 5902 Newfoundland Ct, Spring, TX
              77379
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
