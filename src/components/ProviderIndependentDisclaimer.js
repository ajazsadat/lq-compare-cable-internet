export function ProviderDisclaimerBanner({ providerName }) {
  return (
    <div className="w-full bg-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 text-center space-y-1">
        <p className="text-xs sm:text-sm font-medium leading-snug">
          Why Choose LQcomparecableinternet? We help you compare top internet and TV plans from
          leading and trusted providers available in your area.
        </p>
        <p className="text-xs sm:text-sm font-semibold leading-snug">
          LQcomparecableinternet is an independent resource. We do not sell or manage {providerName}{' '}
          accounts; all information is for guidance only.
        </p>
      </div>
    </div>
  );
}

export function ProviderDisclaimerFootnote({ providerName }) {
  return (
    <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed mt-8 max-w-4xl">
      *LQcomparecableinternet is an independent resource. We do not sell or manage {providerName}{' '}
      accounts; all information is for guidance only.
    </p>
  );
}
