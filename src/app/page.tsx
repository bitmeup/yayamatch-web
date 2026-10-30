'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function RequestsPage() {
  const [requests, setRequests] = useState<any[]>([])

  useEffect(() => {
    supabase.from('requests').select('*').then(({ data }) => {
      setRequests(data || [])
    })
  }, [])

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Requests ({requests.length})</h1>
      {requests.map((r, i) => (
        <div key={i} className="border p-4 rounded mb-4">
          <p><strong>Family:</strong> {r.family_name}</p>
          <p><strong>Location:</strong> {r.location}</p>
          <p><strong>Need:</strong> {r.need}</p>
        </div>
      ))}
    </div>
  )
}