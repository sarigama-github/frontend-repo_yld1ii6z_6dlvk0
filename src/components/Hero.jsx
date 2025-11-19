import Spline from '@splinetool/react-spline'

const NAVY = '#0F1B2D'
const GOLD = '#C6A667'

export default function Hero({ onCTA }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden" style={{ backgroundColor: NAVY }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,27,45,0.6)] via-[rgba(15,27,45,0.8)] to-[rgba(15,27,45,0.95)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            We Acquire Complex Assets Quickly, Quietly, and With Certainty.
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate-200/90 max-w-2xl">
            A private family office allocating capital into UK commercial real estate and distressed assets.
          </p>
          <div className="mt-10">
            <button
              onClick={onCTA}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-[15px] font-medium"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              Submit an Asset
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
