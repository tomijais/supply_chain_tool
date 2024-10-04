'use client'

import { useState, useEffect } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ChartData, ArcElement } from 'chart.js'
import { Loader2 } from 'lucide-react'

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend)

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [inventoryData, setInventoryData] = useState<ChartData<'bar'>>({
    labels: [],
    datasets: [],
  });
  const [demandData, setDemandData] = useState<ChartData<'line'>>({
    labels: [],
    datasets: [],
  });
  const [costData, setCostData] = useState<ChartData<'pie'>>({
    labels: [],
    datasets: [],
  });


  
  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setInventoryData({
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        datasets: [{
          label: 'Current Inventory Levels',
          data: [65, 59, 80, 81],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }]
      })

      setDemandData({
        labels: ['2024', '2025', '2026', '2027', '2028'],
        datasets: [{
          label: 'Predicted Revenue',
          data: [-6500,13813.15,-13966.38,1317.69,4719.5],
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      })

      setCostData({
        labels: ['Rental', 'Storage', 'Labor', 'Charitable Contributions'],
        datasets: [{
          label: 'Supply Chain Costs',
          data: [13000, 65000, 117000, 1140],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
          ],
        }]
      })

      setLoading(false)
    }, 1500)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-10 h-10 animate-spin text-green-600" />
      </div>
    )
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Supply Chain Optimization Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Current Inventory Levels</h2>
          {inventoryData && <Bar data={inventoryData} options={{ responsive: true, maintainAspectRatio: true }} />}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Predicted Demand</h2>
          {demandData && <Line data={demandData} options={{ responsive: true, maintainAspectRatio: true }} />}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Supply Chain Costs</h2>
          {costData && <Pie data={costData} options={{ responsive: true, maintainAspectRatio: true }} />}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
          <ul className="space-y-20 mt-10">
            <li><strong>Average Age Target:</strong> 18-45</li>
            <li><strong>Total Inventory Value:</strong> $45,173</li>
            <li><strong>Predicted Monthly Demand:</strong> 1,714 units</li>
            <li><strong>Trees Planted:</strong>19</li>
          </ul>
        </div>
      </div>
    </div>
  )
}