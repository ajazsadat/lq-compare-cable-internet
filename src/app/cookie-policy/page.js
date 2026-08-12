import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy | LQcomparecableinternet',
  description:
    'Cookie Policy for LQcomparecableinternet.com, operated by Lean and Quality Circle llc.',
};

export default function CookiePolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-slate-600">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Cookie Policy</h1>
        <p className="text-sm text-slate-500 mb-2">Effective Date: July 23, 2026</p>
        <p className="text-sm text-slate-500 mb-10">Website: https://lqcomparecableinternet.com/</p>

        <section className="mb-8">
          <p className="mb-4 leading-relaxed font-light">
            Our website uses cookies and similar technologies to enhance your browsing experience,
            analyze traffic, and improve our marketing efforts. Cookies are small text files stored
            on your device that help us remember your preferences and understand how visitors
            interact with our site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Use Cookies</h2>
          <ul className="list-disc pl-5 space-y-2 font-light text-slate-600">
            <li>
              <strong className="text-slate-700">Essential cookies:</strong> enable basic site
              functionality and security.
            </li>
            <li>
              <strong className="text-slate-700">Analytics cookies:</strong> help us measure website
              performance and visitor behavior (for example, analytics tools).
            </li>
            <li>
              <strong className="text-slate-700">Marketing cookies:</strong> support advertising
              campaigns and may be used for retargeting through advertising platforms.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Managing Cookies</h2>
          <p className="mb-4 leading-relaxed font-light">
            You can accept, reject, or customize cookie preferences at any time using your browser
            settings. Most browsers allow you to block or delete cookies; however, some site
            features may not function properly without them.
          </p>
          <p className="mb-4 leading-relaxed font-light">
            By using our website, you consent to our use of cookies as described in this policy. For
            more details on how we handle personal data, please refer to our{' '}
            <Link href="/privacy-policy" className="text-emerald-600 hover:underline">
              Privacy Policy
            </Link>
            .
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
