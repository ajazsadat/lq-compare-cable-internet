const FEATURES = [
  {
    feature: 'Speed (Max)',
    att: 'Up to 5 Gbps (symmetrical)',
    xfinity: 'Up to 2 Gbps download (select areas)',
    spectrum: 'Up to 1 Gbps (select areas)',
  },
  {
    feature: 'Upload Speeds',
    att: 'Symmetrical (same as download) on many fiber plans',
    xfinity: 'Typically lower upload vs download on cable',
    spectrum: 'Typically lower upload on cable',
  },
  {
    feature: 'Starting Price',
    att: 'From about $35/mo (where available)',
    xfinity: 'From about $30/mo (where available)',
    spectrum: 'From about $30/mo (where available)',
  },
  {
    feature: 'Price Guarantee',
    att: 'Often fewer price hikes on fiber; no annual contract on many fiber plans',
    xfinity: 'Some plans offer multi-year price locks',
    spectrum: 'Fewer long-term price-lock guarantees',
  },
  {
    feature: 'Customer Service',
    att: 'Generally strong ratings in fiber markets',
    xfinity: 'Mixed to improving satisfaction by market',
    spectrum: 'Mixed reviews by market',
  },
  {
    feature: 'Fiber Availability',
    att: 'Fiber footprint still limited nationally',
    xfinity: 'Limited true fiber; mostly cable network',
    spectrum: 'Limited fiber; mostly cable',
  },
  {
    feature: 'Coverage',
    att: 'Broad mix of fiber, DSL, and fixed wireless in many markets',
    xfinity: 'Strong coverage in many cable markets',
    spectrum: 'Good coverage in many cable markets',
  },
  {
    feature: 'Reliability',
    att: 'Fiber tends to be more consistent where available',
    xfinity: 'Generally strong, can vary with network congestion',
    spectrum: 'Good overall; consistency can vary',
  },
  {
    feature: 'Security Features',
    att: 'Built-in security features on some plans',
    xfinity: 'Basic security; add-ons often available',
    spectrum: 'Basic security features',
  },
  {
    feature: 'Contracts',
    att: 'No contracts on many fiber plans',
    xfinity: 'No annual contracts on many newer offers',
    spectrum: 'No contracts on many plans',
  },
  {
    feature: 'Data Caps',
    att: 'No data caps on many fiber plans',
    xfinity: 'Data caps on many plans unless unlimited add-on',
    spectrum: 'No data caps on many plans',
  },
  {
    feature: 'Bundles / Discounts',
    att: 'Wireless bundle discounts available in some offers',
    xfinity: 'Strong internet + mobile/TV bundling',
    spectrum: 'Fewer bundle advantages than some peers',
  },
  {
    feature: 'Best For',
    att: 'Performance, business use, work-from-home',
    xfinity: 'Coverage + bundling deals',
    spectrum: 'Budget + simple plans',
  },
];

export default function ProviderComparisonTable() {
  return (
    <section className="w-full bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          Provider Comparison: How the Top Internet Services Stack Up by{' '}
          <span className="text-emerald-500">LQcomparecableinternet</span>
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed max-w-4xl mb-8">
          The information in the table below reflects LQcomparecableinternet&apos;s independent research
          and observations. It is based on publicly available data, performance trends, and internal
          evaluations. This content is for informational purposes only and is not affiliated with or
          endorsed by any of the providers listed. Pricing, speeds, and features vary by address and
          change over time — confirm details with the provider before ordering.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="px-4 py-3.5 font-semibold sticky left-0 bg-slate-900 z-10 min-w-[140px]">
                  Feature
                </th>
                <th className="px-4 py-3.5 font-semibold min-w-[180px]">AT&amp;T (Fiber)</th>
                <th className="px-4 py-3.5 font-semibold min-w-[180px]">Xfinity (Comcast)</th>
                <th className="px-4 py-3.5 font-semibold min-w-[180px]">Spectrum (Charter)</th>
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((row, index) => (
                <tr
                  key={row.feature}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                >
                  <th className="px-4 py-3.5 font-semibold text-slate-900 sticky left-0 z-10 text-left bg-inherit border-t border-slate-200">
                    {row.feature}
                  </th>
                  <td className="px-4 py-3.5 text-slate-600 leading-relaxed border-t border-slate-200">
                    {row.att}
                  </td>
                  <td className="px-4 py-3.5 text-slate-600 leading-relaxed border-t border-slate-200">
                    {row.xfinity}
                  </td>
                  <td className="px-4 py-3.5 text-slate-600 leading-relaxed border-t border-slate-200">
                    {row.spectrum}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
