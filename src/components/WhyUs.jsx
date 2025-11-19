const NAVY = '#0F1B2D'
const GOLD = '#C6A667'

export default function WhyUs() {
  const blocks = [
    { title: 'Speed & Certainty', body: 'We move fast, no bureaucracy.' },
    { title: 'Liquid Capital Available', body: 'No dependence on lenders.' },
    { title: 'Flexible Structures', body: 'We accommodate exchange-with-delayed-completion if it helps the seller.' },
  ]

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: NAVY }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-serif text-white">Why Vendors Choose Us</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocks.map((b) => (
            <div key={b.title} className="border rounded-md p-6" style={{ borderColor: '#1f2a3a' }}>
              <h3 className="text-white font-serif text-xl">{b.title}</h3>
              <p className="mt-2 text-slate-200/90 text-sm">{b.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-slate-300/90 text-sm">We do not require a valuation report to proceed.</p>
      </div>
    </section>
  )
}
