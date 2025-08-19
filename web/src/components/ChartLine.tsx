'use client'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

export default function ChartLine({ title, data, dataKey }:{
  title:string, data:any[], dataKey:string
}) {
  return (
    <div className="rounded-2xl shadow p-4">
      <h2 className="text-lg font-medium mb-2">{title}</h2>
      <div style={{ width:'100%', height:320 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey={dataKey} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
