const NAVY = '#0F1B2D'
const GOLD = '#C6A667'

export default function Contact() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: NAVY }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-serif text-white">Contact</h2>
            <p className="mt-4 text-slate-300/90">Handled directly by our acquisitions team.</p>
          </div>
          <div className="space-y-2 text-slate-200/90">
            <div>
              <div className="text-slate-400 text-xs uppercase tracking-wider">Email</div>
              <a href="mailto:acquisitions@citywideinvestors.co.uk" className="hover:underline text-white">acquisitions@citywideinvestors.co.uk</a>
            </div>
            <div>
              <div className="text-slate-400 text-xs uppercase tracking-wider">Phone</div>
              <a href="tel:+440000000000" className="hover:underline text-white">+44 (0)20 0000 0000</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
