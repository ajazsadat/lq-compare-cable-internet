'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomepageGetStarted from '@/components/HomepageGetStarted';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (window.location.hash !== '#disclaimer') return;

    const scrollToDisclaimer = () => {
      document.getElementById('disclaimer')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const timer = window.setTimeout(scrollToDisclaimer, 50);
    return () => window.clearTimeout(timer);
  }, []);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    {
      q: "Are you an internet, cable, or wireless provider?",
      a: "No — we’re not a direct provider of internet, wireless, or cable services. We’re an independent comparison and referral service. You can explore and compare plans from multiple carriers across the U.S., and connect directly with the provider you choose — giving you access to more options in one place, without being tied to any single carrier."
    },
    {
      q: "Is there a fee to use this comparison service?",
      a: "Our service is completely free for consumers. We may receive compensation from providers or referral partners when you enroll through us, meaning you never pay extra to compare with us."
    },
    {
      q: "What is the easiest way to compare plans?",
      a: "Our knowledgeable agents break down pricing, speeds, and contract details from multiple carriers. We save you the hassle of browsing dozens of websites to find the perfect deal."
    },
    {
      q: "Which connection types are offered?",
      a: "Depending on your location, you may access Fiber (blazing speeds for gaming), Cable (widespread and reliable), DSL (basic and affordable), or Satellite (great for remote areas). Call us to verify exactly what reaches your home."
    },
    {
      q: "Can I get special discounts or promotions?",
      a: "Absolutely! Carriers frequently offer free installation, equipment upgrades, and bundle savings. Call to compare current offers available in your area so you can see what’s available."
    },
    {
      q: "How is installation arranged once I select a plan?",
      a: "Once you confirm your selection, your chosen provider handles scheduling and installation directly. Timelines vary by provider, location, and technician availability."
    },
    {
      q: "What is the next step?",
      a: "Just give our experts a call to review your local provider options, lock in the best rate, and complete signup directly with the provider you choose."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg.png"
            alt="High Speed Internet background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/90 via-[#f8fafc]/50 to-[#f8fafc]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8">
            <span className="flex w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2"></span>
            Independent Plan Comparison
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight drop-shadow-lg">
            Compare Multiple <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">Internet Plans</span> In One Place.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            LQcomparecableinternet is an independent plan comparison and referral website. Please note we are not a direct internet service provider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(888) 959-4513"
              className="inline-flex items-center justify-center text-center px-8 py-4 text-lg font-bold rounded-full text-white bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-500 hover:to-emerald-500 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              Call to compare your options now: (888) 959-4513
            </a>
          </div>
        </div>
      </section>

      {/* Solutions Grid Section */}
      <section className="py-24 bg-[#f8fafc] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Your Hub for Premium Connectivity & Entertainment<br/><span className="text-emerald-400">Available Through LQcomparecableinternet</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">Discover top-tier packages and find the ideal match for your digital lifestyle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="bg-[#ffffff] rounded-3xl p-8 border border-slate-200 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-400/20 rounded-2xl flex items-center justify-center mb-6 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Television & Streaming Hub</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-6 flex-grow">
                Find the ultimate entertainment packages all in one spot. We make it easy to compare offerings from top networks, covering live sports, blockbuster movies, and premium shows. LQcomparecableinternet guides you to the perfect package for your home.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-[#ffffff] rounded-3xl p-8 border border-slate-200 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600/20 to-emerald-400/20 rounded-2xl flex items-center justify-center mb-6 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ultra-Fast Internet</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-6 flex-grow">
                Unlock blazing-fast speeds with top fiber and cable providers. Whether you&apos;re gaming, streaming 4K, or working remotely, LQcomparecableinternet guides you through available options so you can select a plan with maximum reliability and minimal lag.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-[#ffffff] rounded-3xl p-8 border border-slate-200 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-400/20 rounded-2xl flex items-center justify-center mb-6 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Complete Mobile Solutions</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-6 flex-grow">
                Evaluate flexible mobile data and calling plans from leading carriers. From unlimited 5G data to family packages, LQcomparecableinternet shows you available plans with wide coverage and great value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Find The Perfect TV & Internet Providers <span className="text-emerald-400">For Your Lifestyle</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10 font-light leading-relaxed">
                Searching for the best connectivity options nearby? Compare top-rated packages and unlock exclusive local deals. LQcomparecableinternet simplifies the process of comparing your options before you decide.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose LQcomparecableinternet?</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-900">Unified Comparison Hub</h4>
                    <p className="mt-1 text-slate-600 font-light">Compare Internet providers, explore available offers, and connect with a provider—all in one place.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-900">Ultra-Fast Internet Options</h4>
                    <p className="mt-1 text-slate-600 font-light">Discover premium high-speed plans tailored to your specific ZIP code, complete with special introductory promotions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-900">Personalized Comparison Guidance</h4>
                    <p className="mt-1 text-slate-600 font-light">Our agents can explain available plans and connect you with the right provider.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-[#ffffff] rounded-3xl p-10 border border-slate-200 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-6 relative z-10">Looking for Ultra-Fast Internet Plan?</h3>
                <p className="text-slate-600 mb-8 font-light leading-relaxed relative z-10">
                  We&apos;re Here to Guide You Through Comparing Options. Our team can guide you by phone with personalized comparisons.
                </p>
                
                <div className="relative z-10">
                  <p className="text-sm text-emerald-400 font-semibold uppercase tracking-wider mb-2">Call to compare your options now</p>
                  <a
                    href="tel:(888) 959-4513"
                    className="flex items-center justify-center text-center w-full px-8 py-5 text-xl font-bold rounded-xl text-white bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-500 hover:to-emerald-500 shadow-lg transition-all transform hover:-translate-y-1"
                  >
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    Call to compare your options now: (888) 959-4513
                  </a>
                  <p className="text-xs text-slate-500 mt-4 text-center">Call to compare your options now.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#f8fafc] border-t border-slate-200 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 font-light">Find answers to common questions about our comparison and referral services.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-[#ffffff] border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-semibold text-lg text-slate-900 pr-4">{faq.q}</span>
                  <span className="flex-shrink-0 text-emerald-400">
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-600 font-light leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomepageGetStarted />

      <section
        id="disclaimer"
        className="scroll-mt-28 w-full bg-white border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Disclaimer:</h2>
          <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed max-w-4xl">
            Lean and Quality Circle llc, operating LQcomparecableinternet.com, operates as an
            independent comparison platform where users can explore and evaluate Internet and TV
            plans from multiple trusted providers. We do not directly sell, install, or manage any
            Internet or TV services. LQcomparecableinternet is not Spectrum, Xfinity, AT&amp;T,
            Verizon, Frontier, Windstream, Brightspeed, or any other carrier. We do not provide
            customer service for these carriers. For existing account questions, please contact your
            provider directly.
          </p>
        </div>
      </section>
    </div>
  );
}
