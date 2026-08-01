import Image from 'next/image';
import ProviderComparisonTable from '@/components/ProviderComparisonTable';
import ProviderWhyChoose from '@/components/ProviderWhyChoose';
import SpectrumFaq from '@/components/SpectrumFaq';

export const metadata = {
  title: 'Spectrum Internet & Cable Plans | LQcomparecableinternet',
  description:
    'Compare Spectrum internet and cable services. Reliable TV, phone, and high-speed internet plans available across many U.S. markets.',
};

export default function SpectrumPage() {
  const plans = [
    {
      speed: 'Up To 100 Mbps',
      price: '30',
      features: [
        'Suitable for browsing, email & everyday streaming',
        'Supports multiple connected devices',
        'No data caps on many Spectrum internet plans',
        'No long-term contracts on many offers',
      ],
    },
    {
      speed: 'Up To 500 Mbps',
      price: '50',
      features: [
        'Well-suited for streaming, gaming & remote work',
        'Hybrid fiber-coaxial network performance',
        'Smart home and multi-device households',
        'Promotional pricing may be available by ZIP',
      ],
    },
    {
      speed: 'Up To 1 Gig',
      price: '70',
      features: [
        'High-speed option for heavy usage households',
        '4K streaming and large downloads',
        'Available in select Spectrum service areas',
        'Bundle options with TV, phone, or mobile',
      ],
    },
  ];

  const services = [
    {
      title: 'High-Speed Internet',
      description:
        'Reliable internet with speeds starting around 100 Mbps, capable of supporting streaming, gaming, smart home devices, and remote work. Higher-speed tiers are available in select areas for households with heavy usage.',
    },
    {
      title: 'Cable TV',
      description:
        'A wide selection of channels, on-demand shows, and entertainment packages. Flexible bundles help viewers pick content that matches their lifestyle.',
    },
    {
      title: 'Home Phone',
      description:
        'Nationwide calling, voicemail, and dependable connections make Spectrum’s phone service a practical option for families who prefer a traditional home line.',
    },
    {
      title: 'Mobile Services',
      description:
        'Spectrum Mobile leverages advanced wireless technology for fast 5G connectivity. Introductory promotions may offer added savings for new customers in select areas.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[400px] flex items-center justify-center border-b border-slate-200 overflow-hidden">
        <Image
          src="/images/spectrum.png"
          alt="Spectrum Internet and Cable Services"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <p className="text-lg md:text-xl font-semibold text-emerald-400 mb-3 drop-shadow-md">
            Spectrum Internet &amp; Cable Services
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 drop-shadow-lg">
            Compare <span className="text-emerald-400">Spectrum</span> Plans With LQcomparecableinternet
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md">
            Call to get assistance to compare providers. Spectrum delivers reliable TV, phone, and
            fiber-powered internet plans across many U.S. markets.
          </p>
        </div>
      </section>

      {/* Speak With A Live Agent */}
      <section className="border-b border-slate-200 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-center">
          <a
            href="/independent-support-help"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-slate-900 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:brightness-110 transition"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Speak With A Live Agent
          </a>
          <a
            href="tel:(888) 959-4513"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-white border border-white/25 bg-white/5 hover:bg-white/10 transition"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call to get assistance — (888) 959-4513
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Spectrum?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="bg-[#ffffff] p-4 rounded-xl border border-slate-200 flex items-start">
              <span className="text-emerald-500 mr-3 text-xl">✅</span>
              <span className="text-slate-600 text-sm">
                Wide nationwide coverage — available in many states for residential internet and TV
              </span>
            </div>
            <div className="bg-[#ffffff] p-4 rounded-xl border border-slate-200 flex items-start">
              <span className="text-emerald-500 mr-3 text-xl">✅</span>
              <span className="text-slate-600 text-sm">
                Reliable high-speed internet for streaming, remote work, and smart homes
              </span>
            </div>
            <div className="bg-[#ffffff] p-4 rounded-xl border border-slate-200 flex items-start">
              <span className="text-emerald-500 mr-3 text-xl">✅</span>
              <span className="text-slate-600 text-sm">
                Accessible Spectrum customer support across multiple help channels
              </span>
            </div>
            <div className="bg-[#ffffff] p-4 rounded-xl border border-slate-200 flex items-start">
              <span className="text-emerald-500 mr-3 text-xl">✅</span>
              <span className="text-slate-600 text-sm">
                No data caps or long-term contracts on many Spectrum internet plans
              </span>
            </div>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            SPECTRUM INTERNET PLANS – SPEED OPTIONS FOR EVERY TYPE OF HOME
          </h2>
          <p className="text-slate-600 max-w-4xl mx-auto text-sm mb-4">
            Internet plans generally start around $30/mo in many areas, depending on availability.
            Speeds above 500 Mbps may be available in select locations. Spectrum delivers internet
            through a hybrid fiber-coaxial (HFC) network across many parts of the United States.
          </p>
          <p className="text-slate-600 max-w-4xl mx-auto text-sm">
            &quot;We are not Spectrum or any other service provider. These plans are shown for
            comparison purposes. Prices, features, and hardware are subject to Spectrum’s terms and
            availability.&quot;
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#ffffff] rounded-3xl p-8 border border-slate-200 hover:border-emerald-500/50 transition-all duration-300 flex flex-col relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2 relative z-10">
                Speeds {plan.speed}
              </h3>

              <ul className="mt-6 space-y-4 flex-grow relative z-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-slate-600 text-sm">
                    <svg
                      className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
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
                <p className="text-xs text-slate-500 mt-2">Taxes, fees &amp; equipment extra</p>

                <a
                  href="tel:(888) 959-4513"
                  className="mt-6 w-full flex items-center justify-center text-center px-6 py-4 text-lg font-bold rounded-xl text-slate-900 bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-500 hover:to-emerald-500 shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-1"
                >
                  Call to get assistance to compare providers — (888) 959-4513
                </a>
                <p className="text-xs text-slate-500 mt-4 text-center">
                  Offers, availability, speeds, and pricing vary by ZIP. We are an independent
                  comparison and referral service and do not provide service directly.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Services at a Glance */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Spectrum Services at a Glance
          </h2>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-10 text-sm">
            Spectrum offers a variety of services to meet everyday household needs. Here are four key
            areas we highlight.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-500/30 bg-white p-7 md:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-lg">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              Need Spectrum support help?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
              Get independent support routing — or compare new plan options. Not affiliated with
              Spectrum or Charter.
            </p>
          </div>
          <a
            href="/independent-support-help"
            className="inline-flex shrink-0 items-center justify-center px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 transition"
          >
            Visit Independent Support Help
          </a>
        </div>
      </section>

      <ProviderComparisonTable />
      <SpectrumFaq />
      <ProviderWhyChoose providerName="Spectrum" />
    </div>
  );
}
