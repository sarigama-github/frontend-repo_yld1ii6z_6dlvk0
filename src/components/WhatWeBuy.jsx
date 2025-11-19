const NAVY = '#0F1B2D'

export default function WhatWeBuy() {
  const items = [
    'Commercial assets £1M+',
    'Office, retail, light industrial, mixed-use blocks',
    'Distressed, underperforming, or complex assets',
    'Assets with short leaseholds',
    'Assets with incomplete information',
    'Properties needing repositioning',
    'Portfolios and broken portfolios',
    'Assets with title issues, arrears, or historic problems',
  ]

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: NAVY }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-serif text-white">What We Buy</h2>
        <ul className="mt-8 grid gap-3 text-slate-200/90 text-sm md:text-base list-disc pl-5">
          {items.map((item) => (
            <li key={item} className="marker:text-[#C6A667]">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
