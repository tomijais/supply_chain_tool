import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="text-2xl font-bold">CABRA</span>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
            <li><Link href="/" className="hover:underline">Dashboard</Link></li>
            <li><Link href="/demand-forecasting" className="hover:underline">Demand Forecasting</Link></li>
            <li><Link href="/inventory-management" className="hover:underline">Inventory Management</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}