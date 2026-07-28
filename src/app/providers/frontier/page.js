import Image from 'next/image';
import ProviderWhyChoose from '@/components/ProviderWhyChoose';

export const metadata = {
  title: 'Frontier Internet & TV | LQcomparecableinternet',
  description: 'Discover Frontier internet and TV plans. 100% fiber-optic network with symmetrical speeds and no data caps.',
};

export default function FrontierPage() {
  const plans = [
    {
      speed: 'Fiber Up To 200 Mbps',
      price: '29.99',
      features: [
        'Symmetrical Speeds – Ideal for browsing, email & video calls',
        'Max download Speed up to 200 Mbps',
        'Unlimited Data Usage On Eligible Plans',
        'Great for families & watching entertainment in 4K',
        'Work, stream & play on several devices',
      ],
    },
    {
      speed: 'Fiber Up To 500 Mbps',
      price: '49.99',
      features: [
        'Symmetrical Speeds – Ideal for browsing, email & video calls',
        'Max downloads Speed up to 500 Mbps',
        'Unlimited Data Usage On Eligible Plans',
        'Made for gaming with virtually no lag',
        'Quickly download large files & smart homes',
      ],
    },
    {
      speed: 'Fiber Up To 1 Gig',
      price: '64.99',
      features: [
        'Symmetrical Speeds – Ideal for browsing, email & video calls',
        'Max downloads Speed up to 1 Gig',
        'Ultra-fast speeds for smart homes',
        'Ideal for immersive gaming & streaming in high resolution',
        'Good for Pro Gamers and Streamers',
      ],
    },
    {
      speed: 'Fiber Up To 2 Gig',
      price: '99.99',
      features: [
        'Max Download Speed up to 2 Gig',
        'Perfect for immersive gaming & streaming',
        'Amazon eero Pro 6E router included',
        'Watch entertainment in 4K',
        '$10/mo. off YouTube TV for 1 year',
      ],
    },
    {
      speed: 'Fiber Up To 5 Gig',
      price: '129.99',
      features: [
        'Max Download Speed up to 5 Gig',
        'Supports dozens of users & hundreds of devices',
        'Amazon eero Max 7 router included',
        'Quickly download large files',
        '3-year tech upgrade guarantee',
      ],
    },
    {
      speed: 'Fiber Up To 7 Gig',
      price: '299.99',
      features: [
        'Max Download Speed up to 7 Gig',
        'Fast speeds for content creators & pros',
        'Whole Wi-Fi & Wi-Fi Security included',
        '$10/mo. off YouTube TV for 1 year',
        'Good for Pro Gamers and Streamers',
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[400px] flex items-center justify-center border-b border-slate-200 overflow-hidden">
        <Image
          src="/images/frontier.png"
          alt="Frontier Fiber Optic Internet"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 drop-shadow-lg">
            Compare <span className="text-emerald-500">Frontier</span> Plans With LQcomparecableinternet
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md">
            Compare high-speed internet plans with speeds up to 7,000 Mbps, depending on location, equipment, and network conditions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Find Plans That Fit Your Needs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="bg-[#ffffff] p-4 rounded-xl border border-slate-200 flex items-start">
              <span className="text-emerald-500 mr-3 text-xl">✅</span>
              <span className="text-slate-600 text-sm">Promotional pricing may be available for eligible customers with Auto Pay and Paperless Billing (terms apply)</span>
            </div>
            <div className="bg-[#ffffff] p-4 rounded-xl border border-slate-200 flex items-start">
              <span className="text-emerald-500 mr-3 text-xl">✅</span>
              <span className="text-slate-600 text-sm">Installation options may be available based on provider policies</span>
            </div>
            <div className="bg-[#ffffff] p-4 rounded-xl border border-slate-200 flex items-start">
              <span className="text-emerald-500 mr-3 text-xl">✅</span>
              <span className="text-slate-600 text-sm">Wi-Fi equipment options, such as Amazon eero Wi-Fi Pro 6, may be offered with select plans</span>
            </div>
            <div className="bg-[#ffffff] p-4 rounded-xl border border-slate-200 flex items-start">
              <span className="text-emerald-500 mr-3 text-xl">✅</span>
              <span className="text-slate-600 text-sm">Upload speeds vary by plan and technology and may differ from cable connections</span>
            </div>
          </div>
        </div>

        <div className="mb-12 text-center">
          <p className="text-slate-600 max-w-4xl mx-auto text-sm">
            "We are not Frontier or any other service provider. These plans are shown for comparison purposes. Prices, features, and hardware are subject to Frontier’s terms and availability."
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-[#ffffff] rounded-3xl p-8 border border-slate-200 hover:border-emerald-500/50 transition-all duration-300 flex flex-col relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2 relative z-10">{plan.speed}</h3>
              
              <ul className="mt-6 space-y-4 flex-grow relative z-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-slate-600 text-sm">
                    <svg className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-slate-200 relative z-10">
                <p className="text-slate-600 text-sm mb-1">Prices Starting From</p>
                <div className="flex items-baseline text-slate-900">
                  <span className="text-2xl font-bold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="text-xl text-slate-600 ml-1">/ Month</span>
                </div>
                <p className="text-xs text-slate-500 mt-2">Taxes, fees & equipment extra</p>
                
                <a
                  href="tel:8889594513"
                  className="mt-6 w-full flex items-center justify-center text-center px-6 py-4 text-lg font-bold rounded-xl text-slate-900 bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-500 hover:to-emerald-500 shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-1"
                >
                  Compare & Call (888) 959-4513
                </a>
                <p className="text-xs text-slate-500 mt-4 text-center">
                  Price may require AutoPay & paperless billing where applicable. Taxes, fees & equipment extra. Pricing & availability vary by ZIP.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProviderWhyChoose providerName="Frontier" />
    </div>
  );
}
