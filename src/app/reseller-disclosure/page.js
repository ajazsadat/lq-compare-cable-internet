export const metadata = {
  title: 'Reseller Disclosure | LQcomparecableinternet',
  description:
    'Reseller disclosure for LQcomparecableinternet, operated by Lean and Quality Circle llc.',
};

export default function ResellerDisclosure() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-slate-600">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Reseller Disclosure</h1>
        <p className="text-sm text-slate-500 mb-2">Effective Date: July 23, 2026</p>
        <p className="text-sm text-slate-500 mb-10">Website: https://lqcomparecableinternet.com/</p>

        <section className="mb-8 space-y-4">
          <p className="leading-relaxed font-light">
            LQcomparecableinternet.com, operated by Lean and Quality Circle llc, is an independent
            comparison and referral platform that helps customers compare, select, and connect with
            broadband, wireless, and digital services across the United States.
          </p>
          <p className="leading-relaxed font-light">
            We are not owned, operated, or controlled by any internet service provider (ISP) or
            carrier. All broadband and wireless services are delivered, billed, and supported
            directly by the respective licensed providers.
          </p>
          <p className="leading-relaxed font-light">
            Lean and Quality Circle llc may receive a commission or referral incentive from these
            providers when a customer activates or purchases a qualifying service through our
            platform or sales team. These commissions do not affect pricing — the customer pays the
            same rates offered directly by the provider.
          </p>
          <p className="leading-relaxed font-light">
            All service information, including pricing, availability, and terms, is based on data
            provided by each carrier. We do not guarantee availability or pricing accuracy in all
            areas, and customers are encouraged to confirm final details with their chosen provider
            prior to activation.
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
