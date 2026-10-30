'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AdminPage() {
  const [requests, setRequests] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRequests = async () => {
      const { data } = await supabase.from('requests').select('*')
      setRequests(data || [])
      setLoading(false)
    }
    fetchRequests()
  }, [])

  if (loading) return <div className="p-8">Loading...</div>

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Requests ({requests.length})</h1>
      <div className="space-y-4">
        {requests.map((r, i) => (
          <div key={i} className="border p-4 rounded">
            <p><strong>Family:</strong> {r.family_name}</p>
            <p><strong>Location:</strong> {r.location}</p>
            <p><strong>Need:</strong> {r.need}</p>
          </div>
        ))}
      </div>
    </div>
  )
}