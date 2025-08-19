import ChartLine from '@/components/ChartLine'

async function getData() {
  const res = await fetch(`/api/public/v1/org-daily`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Fetch failed')
  return res.json() as Promise<{ rows: any[] }>
}

export default async function Home() {
  const { rows } = await getData()
  const cost   = rows.map(r => ({ date: r.date, value: Number(r.spend ?? 0) }))
  const reach  = rows.map(r => ({ date: r.date, value: Number(r.reach ?? 0) }))
  const clicks = rows.map(r => ({ date: r.date, value: Number(r.clicks ?? 0) }))

  return (
    <main className="mx-auto max-w-6xl p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Aktywność reklamowa — ostatnie 30 dni</h1>
      <ChartLine title="Koszt dzienny" data={cost} dataKey="value" />
      <ChartLine title="Zasięg dzienny" data={reach} dataKey="value" />
      <ChartLine title="Kliknięcia dziennie" data={clicks} dataKey="value" />
    </main>
  )
