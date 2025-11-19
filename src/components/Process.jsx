const NAVY = '#0F1B2D'

export default function Process() {
  const steps = [
    ['Step 1', 'Receive details'],
    ['Step 2', '48-hour review'],
    ['Step 3', 'Offer + terms'],
  ]

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: NAVY }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-serif text-white">Process</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(([title, body]) => (
            <div key={title} className="rounded-md border border-[#1f2a3a] p-6">
              <div className="text-slate-300 text-sm uppercase tracking-wide">{title}</div>
              <div className="mt-2 text-white font-serif text-xl">{body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
