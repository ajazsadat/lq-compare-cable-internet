import Image from 'next/image';

export const metadata = {
  title: 'Windstream Internet & Phone | LQcomparecableinternet',
  description: 'Explore Windstream internet plans. Reliable high-speed internet perfect for rural and suburban communities.',
};

export default function WindstreamPage() {
  const plans = [
    {
      speed: 'Speeds Up To 300 Mbps',
      price: '25',
      features: [
        'Price lock for 1 year',
        'Suitable for streaming, gaming & downloading large files',
        'Equipment included',
        'No Annual Contracts',
        'When eligible $10 Discount with Autopay',
      ],
    },
    {
      speed: 'Speeds Up To 500 Mbps',
      price: '35',
      features: [
        'Price lock for 1 year',
        'Well-suited for 4K streaming, gaming & remote work',
        'Equipment included',
        'Get a $50 Prepaid Mastercard® – Terms apply',
        'When eligible $10 Discount with Autopay',
      ],
    },
    {
      speed: 'Speeds Up To 1 Gig Mbps',
      price: '45',
      features: [
        'Price Lock for 2 years',
        'High-speed performance for streaming, gaming & smart homes',
        'Compatible WiFi equipment included',
        'Get a $100 Prepaid Mastercard® – Terms apply',
        'When eligible $10 Discount with Autopay',
      ],
    },
  ];

  const tvPackages = [
    {
      name: 'Core TV Package',
      channels: '200+ Channels',
      features: [
        'Local channels + popular networks',
        'Your ultimate source for breaking news, live sports, and top-rated entertainment.',
      ],
    },
    {
      name: 'Select TV Package',
      channels: '290+ Channels',
      features: [
        'Everything in Core TV + more sports, movies & family content',
        'Even more entertainment options',
      ],
    },
    {
      name: 'Premier TV Package',
      channels: '340+ Channels',
      features: [
        'Select TV + Premium Networks',
        'Includes Max subscription with access to Max app, HBO channels & On Demand',
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[400px] flex items-center justify-center border-b border-slate-200 overflow-hidden">
        <Image
          src="/images/windstream.png"
          alt="Windstream Internet"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 drop-shadow-lg">
            Compare <span className="text-emerald-400">Windstream</span> Plans With LQcomparecableinternet
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md">
            1 Gig Speed Option – Designed for streaming, online gaming, and remote work use cases.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Internet Plans For Windstream</h2>
          <p className="text-slate-600 max-w-4xl mx-auto text-sm">
            "We are not Windstream or any other service provider. These plans are shown for comparison purposes. Prices, features, and hardware are subject to provider's terms and availability."
          </p>
        </div>

        {/* Internet Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
                  Offers, availability, speeds, and pricing vary by ZIP.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TV Packages Grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Find the Perfect TV Package for You!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tvPackages.map((pkg, index) => (
              <div key={`tv-${index}`} className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200 hover:border-emerald-500/50 transition-all duration-300 shadow-lg">
                <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                  <span className="bg-emerald-900/40 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">{pkg.channels}</span>
                </div>
                
                <ul className="space-y-3 mb-6 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-slate-600 text-sm">
                      <span className="text-emerald-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="tel:8889594513"
                  className="block w-full text-center px-4 py-3 text-sm font-bold rounded-lg text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                >
                  Call for Pricing
                </a>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
