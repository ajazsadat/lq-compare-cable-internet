'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProvidersOpen, setIsProvidersOpen] = useState(false);
  const pathname = usePathname() || '';
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProvidersOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Live Agent', href: '/live-agent' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const providerLinks = [
    { name: 'Xfinity', href: '/xfinity-plans' },
    { name: 'Spectrum', href: '/spectrum-plans' },
    // { name: 'Frontier', href: '/frontier-plans' },
    // { name: 'Windstream', href: '/windstream-plans' },
  ];

  const isActive = (path) => pathname === path || (path !== '/' && pathname.startsWith(path));
  const isProviderActive = providerLinks.some((link) => pathname === link.href || pathname.startsWith(`${link.href}/`));

  const defaultDisclaimer =
    'Lean and Quality Circle llc, operating LQcomparecableinternet.com — helps you compare top internet and TV plans from leading and trusted providers available in your area.';
  const spectrumDisclaimer =
    'LQcomparecableinternet is an independent comparison platform — not Spectrum, Charter, or any other carrier. We do not provide customer service for these carriers. For existing customer support, please contact your provider directly.';
  const xfinityDisclaimer =
    'LQcomparecableinternet is an independent comparison platform — not Xfinity, Comcast, or any other carrier. We do not provide customer service for these carriers. For existing customer support, please contact your provider directly.';

  const headerDisclaimer = pathname.startsWith('/spectrum-plans')
    ? spectrumDisclaimer
    : pathname.startsWith('/xfinity-plans')
      ? xfinityDisclaimer
      : defaultDisclaimer;

  // Prevent hydration errors by not rendering UI that depends on window until mounted
  if (!mounted) {
    return (
      <header className="sticky top-0 w-full z-50 transition-all duration-300 bg-[#f8fafc]/90 backdrop-blur-md border-b border-slate-200">
        <div className="bg-emerald-900/30 text-slate-600 text-[10px] sm:text-xs py-2 px-4 text-center border-b border-slate-200 leading-snug">
          {headerDisclaimer}
        </div>
        <div className="h-20"></div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 w-full z-50 transition-all duration-300 bg-[#f8fafc]/90 backdrop-blur-md border-b border-slate-200">
      <div className="bg-emerald-900/30 text-slate-600 text-[10px] sm:text-xs py-2 px-4 text-center border-b border-slate-200 leading-snug">
        {headerDisclaimer}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-300">
              LQcomparecableinternet
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                  isActive(link.href) ? 'text-emerald-400' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Providers Dropdown */}
            <div 
              className="relative"
              ref={dropdownRef}
            >
              <button 
                onClick={() => setIsProvidersOpen(!isProvidersOpen)}
                className={`text-sm font-medium transition-colors hover:text-emerald-400 flex items-center ${
                  isProviderActive ? 'text-emerald-400' : 'text-slate-600'
                }`}
              >
                Providers
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              {isProvidersOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#ffffff] ring-1 ring-black ring-opacity-5 border border-slate-200">
                  <div className="py-1" role="menu" aria-orientation="vertical">

                    {providerLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-200 hover:text-emerald-400"
                        role="menuitem"
                        onClick={() => setIsProvidersOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="tel:(888) 959-4513" className="ml-8 inline-flex items-center justify-center text-center px-6 py-2.5 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-500 hover:to-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:ring-offset-[#f8fafc] transition-all transform hover:scale-105">
              Call for assistance: (888) 959-4513
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#ffffff] border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.href) && link.href !== '/'
                    ? 'bg-slate-100 text-emerald-400'
                    : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="px-3 py-2 text-base font-medium text-slate-900 border-t border-slate-200 mt-2 pt-2">Providers</div>

            {providerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-6 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <a
              href="tel:(888) 959-4513"
              className="block w-full text-center mt-4 px-5 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-emerald-600 to-emerald-600 hover:from-emerald-500 hover:to-emerald-500"
            >
              Call for assistance: (888) 959-4513
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
