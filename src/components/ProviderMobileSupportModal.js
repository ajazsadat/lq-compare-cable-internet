'use client';

import { useEffect } from 'react';
import IndependentSupportHelpContent from '@/components/IndependentSupportHelpContent';

/**
 * Full-screen mobile overlay matching /independent-support-help.
 * No close button — shown only below the md breakpoint.
 */
export default function ProviderMobileSupportModal() {
  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');

    const syncScrollLock = () => {
      if (media.matches) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    syncScrollLock();
    media.addEventListener('change', syncScrollLock);

    return () => {
      media.removeEventListener('change', syncScrollLock);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="How would you like to connect for Internet Services and Assistance?"
    >
      <IndependentSupportHelpContent />
    </div>
  );
}
