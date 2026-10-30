import { supabase } from "@/lib/supabase";

// Fetch fresh data on every visit. Without this, Vercel can render the page
// once at build time and keep showing that old snapshot.
export const dynamic = "force-dynamic";

type RequestRow = {
  id?: number | string;
  family_name: string | null;
  location: string | null;
  need: string | null;
};

export default async function AdminPage() {
  const { data, error } = await supabase.from("requests").select("*");

  const requests = (data ?? []) as RequestRow[];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Requests</h1>
            <p className="mt-1 text-sm text-gray-500">
              All submissions from the request form.
            </p>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 ring-1 ring-gray-200">
            {requests.length} total
          </span>
        </div>

        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            Couldn&apos;t load requests: {error.message}
          </div>
        ) : requests.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 bg-white p-10 text-center text-sm text-gray-500">
            No requests yet.
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="w-12 px-4 py-3 text-left font-medium text-gray-500">#</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500">Family name</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500">Location</th>
                  <th className="px-4 py-3 text-left font-medium text-gray-500">Need</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {requests.map((r, i) => (
                  <tr key={r.id ?? i} className="align-top hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-400">{i + 1}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {r.family_name || "—"}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{r.location || "—"}</td>
                    <td className="whitespace-pre-wrap px-4 py-3 text-gray-700">
                      {r.need || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}