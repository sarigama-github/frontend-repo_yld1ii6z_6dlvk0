import { useState } from 'react'

const NAVY = '#0F1B2D'
const GOLD = '#C6A667'

export default function SubmissionForm() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(`${baseUrl}/api/submissions`, {
        method: 'POST',
        body: data,
      })
      const json = await res.json()
      if (!res.ok || !json.ok) throw new Error(json.error || 'Submission failed')
      setResult({ ok: true, id: json.id })
      form.reset()
    } catch (err) {
      setResult({ ok: false, error: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="submit" className="py-16 md:py-24" style={{ backgroundColor: NAVY }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-serif text-white">Submit an Asset</h2>
        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-slate-300 text-sm mb-1">Property address</label>
            <input name="property_address" required className="w-full bg-[#0B1626] border border-[#1f2a3a] rounded-md px-3 py-2 text-white placeholder-slate-500" placeholder="Address" />
          </div>
          <div>
            <label className="block text-slate-300 text-sm mb-1">Guide price</label>
            <input name="guide_price" className="w-full bg-[#0B1626] border border-[#1f2a3a] rounded-md px-3 py-2 text-white placeholder-slate-500" placeholder="£" />
          </div>
          <div>
            <label className="block text-slate-300 text-sm mb-1">Rental income / occupancy</label>
            <input name="rental_income_occupancy" className="w-full bg-[#0B1626] border border-[#1f2a3a] rounded-md px-3 py-2 text-white placeholder-slate-500" placeholder="Details" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-slate-300 text-sm mb-1">Issues / arrears / urgent points</label>
            <textarea name="issues" rows="4" className="w-full bg-[#0B1626] border border-[#1f2a3a] rounded-md px-3 py-2 text-white placeholder-slate-500" placeholder="Short notes" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-slate-300 text-sm mb-1">Contact details</label>
            <input name="contact_details" required className="w-full bg-[#0B1626] border border-[#1f2a3a] rounded-md px-3 py-2 text-white placeholder-slate-500" placeholder="Name, email, phone" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-slate-300 text-sm mb-1">File upload (brochure or pack)</label>
            <input name="file" type="file" className="block w-full text-slate-300" />
          </div>
          <div className="md:col-span-2">
            <button disabled={loading} className="inline-flex items-center px-6 py-3 rounded-md text-[15px] font-medium" style={{ backgroundColor: GOLD, color: NAVY }}>
              {loading ? 'Submitting…' : 'Submit'}
            </button>
          </div>
        </form>

        {result && (
          <div className={`mt-6 text-sm ${result.ok ? 'text-green-400' : 'text-red-400'}`}>
            {result.ok ? 'Received. Our team will review and respond.' : `Error: ${result.error}`}
          </div>
        )}
      </div>
    </section>
  )
}
