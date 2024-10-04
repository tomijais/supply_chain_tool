'use client'

import { useState } from 'react'
import { Upload, Download, Loader2 } from 'lucide-react'

export default function ReforestationTool() {
  const [file, setFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [isAnalyzed, setIsAnalyzed] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0]
    if (uploadedFile) {
      setFile(uploadedFile)
      setIsAnalyzing(true)
      // Simulate analysis process
      setTimeout(() => {
        setIsAnalyzing(false)
        setIsAnalyzed(true)
      }, 3000)
    }
  }

  const handleDownload = () => {
    // In a real application, this would be the analyzed data
    // For now, we'll just download the uploaded file or a placeholder
    if (file) {
      const url = URL.createObjectURL(file)
      const a = document.createElement('a')
      a.href = url
      a.download = 'data1.csv'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
      <div className="mb-6">
        <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-2">
          Upload CSV File
        </label>
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
        <div className="flex items-center justify-center mb-6">
          <Loader2 className="w-6 h-6 animate-spin mr-2" />
          <span>Analyzing...</span>
        </div>
      )}

      {isAnalyzed && (
        <div className="flex justify-center">
          <button
            onClick={handleDownload}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <Download className="w-4 h-4 mr-2" />
            <span>Download Results</span>
          </button>
        </div>
      )}
    </div>
  )
}