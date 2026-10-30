import { supabase } from '@/lib/supabase'

export default async function Home() {
  const { data, error } = await supabase.from('test').select('*').limit(1)

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">YayaMatch</h1>
      <p className="mt-4">
        Supabase status: {error ? `Error: ${error.message}` : 'Connected!'}
      </p>
    </div>
  )
}