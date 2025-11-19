const NAVY = '#0F1B2D'

export default function Mandate() {
  const rows = [
    ['Target Lot Size', '£1M–£30M'],
    ['Geography', 'England only'],
    ['Yield Guidance', '10%+ (or clear value-add angle)'],
    ['Condition', 'Any'],
    ['Tenancy', 'Any'],
    ['Lease Length', 'Short leaseholds acceptable'],
    ['Vendors', 'Receivers, administrators, insolvency, probate, private companies'],
  ]

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: NAVY }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-serif text-white">Our Acquisition Mandate</h2>
        <div className="mt-8 divide-y divide-[#1f2a3a] rounded-md border border-[#1f2a3a]">
          {rows.map(([k, v]) => (
            <div key={k} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
              <div className="text-slate-300 font-medium">{k}</div>
              <div className="md:col-span-2 text-slate-200/90">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
