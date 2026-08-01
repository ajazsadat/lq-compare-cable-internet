'use client';

import { useState } from 'react';

const inputClassName =
  'w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all';

const PACKAGE_OPTIONS = ['Fiber', 'Cable', 'Wireless', 'Landline', '5G', 'TV'];

export default function HomepageGetStarted() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [currentProvider, setCurrentProvider] = useState('');
  const [packages, setPackages] = useState([]);

  function togglePackage(value) {
    setPackages((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');
    setError('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name'),
      address: formData.get('address'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      currentProvider: formData.get('currentProvider'),
      providerName: formData.get('providerName'),
      usage: formData.get('usage'),
      packages: formData.getAll('packages'),
      fiber: formData.get('fiber'),
      wireless: formData.get('wireless'),
      landline: formData.get('landline'),
      tv: formData.get('tv'),
      consent: formData.get('consent') === 'on',
      source: 'Homepage Get Started',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Unable to send your request.');
      }

      form.reset();
      setCurrentProvider('');
      setPackages([]);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Unable to send your request.');
    }
  }

  return (
    <section className="w-full bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">Get Started</h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
              Call to get assistance to compare providers at{' '}
              <a href="tel:(888) 959-4513" className="text-emerald-600 font-semibold italic hover:underline">
                (888) 959-4513
              </a>
              , or request a free, no-obligation quote to see available options in your area.
            </p>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              Our experts will walk you through plans, pricing, and promotions — so you can upgrade
              with confidence.
            </p>

            <ul className="space-y-4">
              <li>
                <a
                  href="tel:(888) 959-4513"
                  className="inline-flex items-center gap-3 text-slate-800 font-semibold hover:text-emerald-600 transition-colors"
                >
                  <span className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  (888) 959-4513
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@lqcomparecableinternet.com"
                  className="inline-flex items-center gap-3 text-slate-800 font-semibold hover:text-emerald-600 transition-colors break-all"
                >
                  <span className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  info@lqcomparecableinternet.com
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Started</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="home-name" className="block text-sm font-medium text-slate-600 mb-2">
                    Name
                  </label>
                  <input id="home-name" name="name" type="text" required className={inputClassName} placeholder="Name" />
                </div>
                <div>
                  <label htmlFor="home-address" className="block text-sm font-medium text-slate-600 mb-2">
                    Address
                  </label>
                  <input
                    id="home-address"
                    name="address"
                    type="text"
                    className={inputClassName}
                    placeholder="Address"
                  />
                </div>
                <div>
                  <label htmlFor="home-email" className="block text-sm font-medium text-slate-600 mb-2">
                    Email
                  </label>
                  <input
                    id="home-email"
                    name="email"
                    type="email"
                    required
                    className={inputClassName}
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="home-phone" className="block text-sm font-medium text-slate-600 mb-2">
                    Phone
                  </label>
                  <input
                    id="home-phone"
                    name="phone"
                    type="tel"
                    required
                    className={inputClassName}
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="home-provider" className="block text-sm font-medium text-slate-600 mb-2">
                    Current Provider
                  </label>
                  <select
                    id="home-provider"
                    name="currentProvider"
                    className={inputClassName}
                    value={currentProvider}
                    onChange={(e) => setCurrentProvider(e.target.value)}
                  >
                    <option value="">Select Provider</option>
                    <option value="Spectrum">Spectrum</option>
                    <option value="Xfinity">Xfinity</option>
                    <option value="AT&T">AT&T</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {currentProvider === 'Other' && (
                  <div>
                    <label htmlFor="home-provider-name" className="block text-sm font-medium text-slate-600 mb-2">
                      Provider Name
                    </label>
                    <input
                      id="home-provider-name"
                      name="providerName"
                      type="text"
                      className={inputClassName}
                      placeholder="Provider Name"
                    />
                  </div>
                )}
                <div>
                  <label htmlFor="home-usage" className="block text-sm font-medium text-slate-600 mb-2">
                    Usage
                  </label>
                  <select id="home-usage" name="usage" className={inputClassName} defaultValue="">
                    <option value="">Usage Devices</option>
                    <option value="1 to 4">1 to 4</option>
                    <option value="5 to 8">5 to 8</option>
                    <option value="8 to 12">8 to 12</option>
                    <option value="12+">12+</option>
                  </select>
                </div>
              </div>

              <div>
                <p className="block text-sm font-medium text-slate-600 mb-3">Packages</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {PACKAGE_OPTIONS.map((option) => (
                    <label key={option} className="inline-flex items-center gap-2 text-sm text-slate-700">
                      <input
                        type="checkbox"
                        name="packages"
                        value={option}
                        checked={packages.includes(option)}
                        onChange={() => togglePackage(option)}
                        className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {packages.includes('Fiber') && (
                  <div>
                    <label htmlFor="home-fiber" className="block text-sm font-medium text-slate-600 mb-2">
                      Fiber
                    </label>
                    <select id="home-fiber" name="fiber" className={inputClassName} defaultValue="">
                      <option value="">Fiber Options</option>
                      <option value="GIG">GIG</option>
                      <option value="500">500</option>
                      <option value="300">300</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                )}
                {packages.includes('Wireless') && (
                  <div>
                    <label htmlFor="home-wireless" className="block text-sm font-medium text-slate-600 mb-2">
                      Wireless
                    </label>
                    <select id="home-wireless" name="wireless" className={inputClassName} defaultValue="">
                      <option value="">Wireless Options</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6+">6+</option>
                    </select>
                  </div>
                )}
                {packages.includes('Landline') && (
                  <div>
                    <p className="block text-sm font-medium text-slate-600 mb-2">Landline</p>
                    <div className="flex gap-5 pt-2">
                      <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="landline" value="Yes" className="text-emerald-600 focus:ring-emerald-500" />
                        Yes
                      </label>
                      <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                        <input type="radio" name="landline" value="No" className="text-emerald-600 focus:ring-emerald-500" />
                        No
                      </label>
                    </div>
                  </div>
                )}
                {packages.includes('TV') && (
                  <div>
                    <label htmlFor="home-tv" className="block text-sm font-medium text-slate-600 mb-2">
                      TV Options
                    </label>
                    <select id="home-tv" name="tv" className={inputClassName} defaultValue="">
                      <option value="">TV Options</option>
                      <option value="Basic">Basic</option>
                      <option value="Premium">Premium</option>
                      <option value="Advance">Advance</option>
                    </select>
                  </div>
                )}
              </div>

              <div className="flex items-start gap-3 pt-1">
                <input
                  id="home-consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 bg-[#f8fafc] border border-slate-200 rounded focus:ring-emerald-500 focus:ring-2"
                />
                <label htmlFor="home-consent" className="text-xs text-slate-600 leading-relaxed">
                  I agree to the{' '}
                  <a href="/terms-conditions" className="text-emerald-500 hover:underline">
                    terms &amp; conditions
                  </a>{' '}
                  and{' '}
                  <a href="/privacy-policy" className="text-emerald-500 hover:underline">
                    privacy policy
                  </a>{' '}
                  provided by LQcomparecableinternet. By providing my phone number, I agree to receive
                  text messages and calls from LQcomparecableinternet. Consent is not a condition of
                  purchase.
                </label>
              </div>

              {status === 'success' && (
                <p className="text-sm text-emerald-600 font-medium">
                  Thanks — your request was sent. We&apos;ll be in touch soon.
                </p>
              )}
              {status === 'error' && <p className="text-sm text-red-600 font-medium">{error}</p>}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 px-6 text-lg font-bold rounded-xl text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 shadow-lg shadow-emerald-500/25 transition-all disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
