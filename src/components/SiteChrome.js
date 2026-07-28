'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BARE_PATHS = new Set(['/live-agent', '/independent-support-help']);

export default function SiteChrome({ children }) {
  const pathname = usePathname() || '';
  const isBare = BARE_PATHS.has(pathname);

  if (isBare) {
    return <main className="flex-grow">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
