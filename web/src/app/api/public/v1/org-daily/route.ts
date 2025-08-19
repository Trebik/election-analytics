import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/dbAdmin'

export async function GET() {
  const since = new Date(Date.now() - 30*24*3600*1000).toISOString().slice(0,10)
  const { data, error } = await supabaseAdmin
    .from('v_org_daily')
    .select('*')
    .gte('date', since)
    .order('date', { ascending: true })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ rows: data ?? [] })
}
