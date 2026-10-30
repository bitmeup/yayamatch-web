'use client'

import { useState } from 'react'

export default function Home() {
  const [form, setForm] = useState({
    familyName: '',
    location: '',
    need: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Request received!\nFamily: ${form.familyName}\nLocation: ${form.location}\nNeed: ${form.need}`)
  }

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">YayaMatch</h1>
      <p className="mb-6 text-gray-600">Find a yaya for your family</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Family Name"
          className="w-full border p-3 rounded"
          value={form.familyName}
          onChange={(e) => setForm({ ...form, familyName: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Location (e.g. Makati)"
          className="w-full border p-3 rounded"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          required
        />
        <textarea
          placeholder="What do you need? (e.g. full-time yaya)"
          className="w-full border p-3 rounded"
          rows={3}
          value={form.need}
          onChange={(e) => setForm({ ...form, need: e.target.value })}
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded font-medium"
        >
          Find a Yaya
        </button>
      </form>
    </div>
  )
}