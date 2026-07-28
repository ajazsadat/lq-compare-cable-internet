'use client';

import { useState } from 'react';

export default function ContactForm({
  source = 'Contact page',
  submitLabel = 'Send Message',
  idPrefix = 'contact',
  className = 'space-y-6',
  inputClassName = 'w-full bg-[#f8fafc] border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all',
  buttonClassName = 'w-full py-4 px-6 text-lg text-center font-bold rounded-lg text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 shadow-lg shadow-emerald-500/25 transition-all',
  labels = {
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    message: 'Message',
  },
  placeholders = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '(555) 123-4567',
    message: 'How can we help you?',
  },
}) {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');
    setError('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
          consent: formData.get('consent') === 'on',
          source,
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Unable to send your message.');
      }

      form.reset();
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Unable to send your message.');
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div>
        <label htmlFor={`${idPrefix}-name`} className="block text-sm font-medium text-slate-600 mb-2">
          {labels.name}
        </label>
        <input
          type="text"
          id={`${idPrefix}-name`}
          name="name"
          required
          className={inputClassName}
          placeholder={placeholders.name}
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-email`} className="block text-sm font-medium text-slate-600 mb-2">
          {labels.email}
        </label>
        <input
          type="email"
          id={`${idPrefix}-email`}
          name="email"
          required
          className={inputClassName}
          placeholder={placeholders.email}
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-phone`} className="block text-sm font-medium text-slate-600 mb-2">
          {labels.phone}
        </label>
        <input
          type="tel"
          id={`${idPrefix}-phone`}
          name="phone"
          required
          className={inputClassName}
          placeholder={placeholders.phone}
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-message`} className="block text-sm font-medium text-slate-600 mb-2">
          {labels.message}
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={4}
          required
          className={`${inputClassName} resize-none`}
          placeholder={placeholders.message}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id={`${idPrefix}-consent`}
          name="consent"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 bg-[#f8fafc] border border-slate-200 rounded focus:ring-emerald-500 focus:ring-2"
        />
        <label htmlFor={`${idPrefix}-consent`} className="text-xs text-slate-600 leading-relaxed">
          I agree to the{' '}
          <a href="/terms-conditions" className="text-emerald-500 hover:underline">
            terms &amp; conditions
          </a>{' '}
          and{' '}
          <a href="/privacy-policy" className="text-emerald-500 hover:underline">
            privacy policy
          </a>{' '}
          provided by Simply Activate Services. By providing my phone number, I agree to receive text
          messages and calls from Simply Activate Services. Consent is not a condition of purchase.
        </label>
      </div>

      {status === 'success' && (
        <p className="text-sm text-emerald-600 font-medium">
          Thanks — your message was sent. We&apos;ll be in touch soon.
        </p>
      )}
      {status === 'error' && <p className="text-sm text-red-600 font-medium">{error}</p>}

      <button type="submit" disabled={status === 'submitting'} className={buttonClassName}>
        {status === 'submitting' ? 'Sending...' : submitLabel}
      </button>
    </form>
  );
}
