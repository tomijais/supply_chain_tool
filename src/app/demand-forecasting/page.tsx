/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Upload, Loader2 } from 'lucide-react'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function DemandForecasting() {
  const [file, setFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [forecastData, setForecastData] = useState<any>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0]
    if (uploadedFile) {
      setFile(uploadedFile)
      setIsAnalyzing(true)
      // Simulate analysis process
      setTimeout(() => {
        setIsAnalyzing(false)
        setForecastData({
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Historical Demand',
              data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
            {
              label: 'Forecasted Demand',
              data: [70, 62, 85, 85, 58, 58, 42, 68, 62, 85, 85, 58],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],
        })
      }, 3000)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Demand Forecasting</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Upload Historical Sales Data</h2>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-green-300 border-dashed rounded-lg cursor-pointer bg-green-50 hover:bg-green-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-10 h-10 mb-3 text-green-400" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">CSV file (MAX. 10MB)</p>
            </div>
            <input id="file-upload" type="file" className="hidden" accept=".csv" onChange={handleFileUpload} />
          </label>
        </div>
      </div>

      {isAnalyzing && (
        <div className="flex flex-col items-center justify-center mb-8">
          <Loader2 className="w-10 h-10 animate-spin text-green-600 mb-2" />
          <p className="text-lg font-semibold">Analyzing data and generating forecast...</p>
        </div>
      )}

      {forecastData && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Demand Forecast</h2>
          <Line data={forecastData} options={{ responsive: true, maintainAspectRatio: true }} />
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Forecast Insights:</h3>
            <ul className="list-disc list-inside">
              <li>Predicted 5% increase in overall demand for the next year</li>
              <li>Seasonal peak expected in March and September</li>
              <li>Recommendation: Increase inventory levels by 10% for Q2 and Q4</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}