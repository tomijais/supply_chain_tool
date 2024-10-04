import { Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>&copy; 2024 CABRA Supply Chain. All rights reserved.</p>
          <p>Contact: info@cabra.org | +1 (123) 456-7890</p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" aria-label="Facebook"><Facebook className="w-6 h-6" /></a>
          <a href="#" aria-label="Twitter"><Twitter className="w-6 h-6" /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin className="w-6 h-6" /></a>
        </div>
        <p className="text-sm text-center md:text-right">
          CABRA is committed to sustainable supply chain practices and reducing our environmental impact.
        </p>
      </div>
    </footer>
  )
}