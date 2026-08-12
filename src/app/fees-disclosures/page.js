export const metadata = {
  title: 'Fees & Disclosures | LQcomparecableinternet',
  description:
    'Fees and disclosures for LQcomparecableinternet.com, operated by Lean and Quality Circle llc.',
};

export default function FeesDisclosures() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-slate-600">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Fees &amp; Disclosures</h1>
        <p className="text-sm text-slate-500 mb-2">Effective Date: July 23, 2026</p>
        <p className="text-sm text-slate-500 mb-10">Website: https://lqcomparecableinternet.com/</p>

        <section className="mb-8 space-y-4">
          <p className="leading-relaxed font-light">
            LQcomparecableinternet.com, operated by Lean and Quality Circle llc, does not charge
            customers any additional fees for consulting, comparison, or connection assistance. Any
            applicable installation, activation, or equipment fees are determined and charged
            directly by the service provider, not by Lean and Quality Circle llc.
          </p>
          <p className="leading-relaxed font-light">
            We may receive a one-time or recurring commission from our partner providers for
            successful activations or continued customer relationships. These payments are part of
            standard industry partnerships and do not influence our recommendations — our goal is to
            match customers with the most suitable service for their needs and location.
          </p>
          <p className="leading-relaxed font-light">
            All offers, pricing, and promotions are subject to provider terms and availability.
            Taxes, surcharges, early termination fees, and equipment charges may apply and are the
            responsibility of the customer under their agreement with the provider.
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
