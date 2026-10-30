import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export default async function Home() {
  let status = 'Checking...'
  try {
    const { error } = await supabase.from('test').select('*').limit(1)
    status = error ? `Error: ${error.message}` : 'Connected!'
  } catch (e) {
    status = 'Connection failed'
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">YayaMatch</h1>
      <p className="mt-4">Supabase status: {status}</p>
    </div>
  )
}