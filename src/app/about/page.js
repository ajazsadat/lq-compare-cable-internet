import Link from 'next/link';

export const metadata = {
  title: 'About Us | LQcomparecableinternet',
  description: 'Learn more about LQcomparecableinternet, your trusted independent comparison service for TV and Internet deals.',
};

export default function About() {
  return (
    <div className="flex flex-col min-h-[80vh]">
      {/* Header Banner */}
      <section className="relative py-24 bg-gradient-to-b from-[#f1f5f9] to-[#f8fafc] border-b border-slate-200">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About <span className="text-gradient">LQcomparecableinternet</span></h1>
          <p className="text-xl text-slate-600">
            Our team is committed to helping you discover the most reliable TV and internet packages in your neighborhood, with full transparency.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed">
                  At LQcomparecableinternet, we know that selecting the right internet and TV provider can be a daunting task. Between complex pricing, hidden charges, and too many options, finding clarity is tough. We exist to streamline this entire journey for you.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Do</h2>
                <p className="text-slate-600 leading-relaxed">
                  Operating as an independent advisor, we compile the newest promotions from leading carriers such as Xfinity, Frontier, and Windstream. We display these options in a straightforward format, enabling you to confidently compare pricing, speeds, and features.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span><strong>Objective Analysis:</strong> Because we aren't a direct internet provider, our advice remains completely impartial and tailored solely to your best interests.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span><strong>Professional Guidance:</strong> Our friendly experts are always just a quick phone call away, ready to answer questions and assist with your setup.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span><strong>Save Time & Effort:</strong> We handle the tedious research, allowing you to get connected faster and keep more money in your wallet.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-emerald-500/20 rounded-3xl blur-2xl transform rotate-3"></div>
              <div className="bg-[#ffffff] border border-slate-200 rounded-3xl p-10 relative z-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Need Help Deciding?</h3>
                <p className="text-slate-600 mb-8">
                  Our experts are available to walk you through the options in your specific zip code and find the perfect match for your household's needs.
                </p>
                <div className="bg-[#f8fafc] rounded-xl p-6 border border-slate-200 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Call Us Toll-Free</h4>
                  <a href="tel:8889594513" className="text-3xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
                    (888) 959-4513
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
