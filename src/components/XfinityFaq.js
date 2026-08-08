'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Is LQcomparecableinternet affiliated with Xfinity or Comcast?',
    a: "No — we're an independent comparison resource, not a Comcast or Xfinity partner. We compare Xfinity alongside other providers so you can see how it stacks up.",
  },
  {
    q: 'Where do I go for questions about my current Xfinity account or bill?',
    a: "That has to go through Xfinity directly — we don't have access to customer accounts. We can point you to Xfinity's official contact info if needed.",
  },
  {
    q: 'Why compare through LQcomparecableinternet instead of going straight to Xfinity?',
    a: "Going direct to one provider means you only see their pitch. We lay out Xfinity's pricing next to other providers so you can see how it actually compares before deciding.",
  },
  {
    q: 'Can you tell me what Xfinity plans are available at my address?',
    a: "Yes — call or fill out the form on this page with your address, and we'll walk you through what's offered specifically at your location.",
  },
  {
    q: 'Are the prices shown here exactly what Xfinity charges?',
    a: 'These are starting-point estimates based on publicly available rates. Final pricing depends on your address, current promotions, and equipment fees — we confirm exact numbers with you directly.',
  },
  {
    q: 'Is there any cost to compare plans or talk to your team?',
    a: "No — calling or submitting the form is free, and there's no obligation to switch providers afterward.",
  },
];

export default function XfinityFaq() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#f8fafc] border-t border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#ffffff] border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-lg text-slate-900 pr-4">{faq.q}</span>
                <span className="flex-shrink-0 text-emerald-400">
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
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
                <p className="text-slate-600 font-light leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
