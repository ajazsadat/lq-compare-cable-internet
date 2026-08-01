'use client';

import { useEffect, useState } from 'react';

const tabs = [
  { label: 'About Spectrum', hash: '' },
  { label: 'Internet', hash: 'internet' },
  { label: 'TV', hash: 'tv' },
  { label: 'Customer Service', hash: 'customer-service' },
];

function hashToSelected(hash) {
  const value = hash.replace(/^#/, '');
  const match = tabs.find((tab) => tab.hash && tab.hash === value);
  return match?.label ?? 'About Spectrum';
}

export default function SpectrumTopicTabs() {
  const [selected, setSelected] = useState('About Spectrum');

  useEffect(() => {
    const syncFromHash = () => {
      setSelected(hashToSelected(window.location.hash));
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const handleTabClick = (tab) => {
    if (tab.hash) {
      window.history.pushState(null, '', `#${tab.hash}`);
    } else {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }

    setSelected(tab.label);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav aria-label="Spectrum topics" className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap justify-center sm:justify-start gap-1 sm:gap-0" role="tablist">
          {tabs.map((tab) => {
            const isSelected = selected === tab.label;
            return (
              <li key={tab.label} role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleTabClick(tab)}
                  className={`inline-flex cursor-pointer select-none px-4 sm:px-5 py-3.5 text-sm sm:text-base font-semibold border-b-2 transition-colors ${
                    isSelected
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
