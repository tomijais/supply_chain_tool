/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Loader2 } from 'lucide-react'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function InventoryManagement() {
  const [loading, setLoading] = useState(true)
  const [inventoryData, setInventoryData] = useState<any>(null)

  useEffect(() => {
    // Simulate data fetching and processing
    setTimeout(() => {
      setInventoryData({
        labels: ['Snowboards', 'Jackets', 'Hoodies', 'Skis', 'Outdoor tents'],
        datasets: [
          {
            label: 'Current Stock',
            data: [65, 59, 80, 81, 56],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
          {
            label: 'Recommended Stock',
            data: [70, 65, 82, 75, 60],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
          },
        ],
      })
      setLoading(false)
    }, 2000)
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
      <h1 className="text-3xl font-bold text-green-800 mb-8">Inventory Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Current vs Recommended Stock Levels</h2>
          <Bar data={inventoryData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Inventory Optimization Recommendations</h2>
          <ul className="space-y-2">
            <li><strong>Hoodies:</strong> Increase stock by 7% to meet projected demand</li>
            <li><strong>Jackets:</strong> Maintain current stock levels</li>
            <li><strong>Outdoor tents:</strong> Slight increase of 2% recommended</li>
            <li><strong>Skis:</strong> Reduce stock by 7% to optimize storage costs</li>
            <li><strong>Snowboards:</strong> Increase stock by 7% to prevent stockouts</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Inventory Health Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Stock Turnover Rate</h3>
              <p className="text-2xl font-bold">4.5x</p>
              <p className="text-sm text-gray-600">per year</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Days of Inventory</h3>
              <p className="text-2xl font-bold">32 days</p>
              <p className="text-sm text-gray-600">on average</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Stockout Rate</h3>
              <p className="text-2xl font-bold">1.2%</p>
              <p className="text-sm text-gray-600">of SKUs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}