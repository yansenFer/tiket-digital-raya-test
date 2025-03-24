'use client'

import { useRouter } from 'next/navigation'
export default function Header() {
  const router = useRouter()
  return (
    <header className="relative z-10 bg-blue-500 text-white flex items-center justify-between px-6 py-3">
      <div
        onClick={() => router.push('/')}
        className="font-bold text-xl cursor-pointer"
      >
        STAYKUY
      </div>
      <nav className="flex items-center gap-6">
        <a href="#" className="text-sm hover:underline">
          My Booking
        </a>
        <a href="#" className="text-sm hover:underline">
          Wishlist
        </a>
        <a href="#" className="text-sm hover:underline">
          Blog
        </a>
        <a href="#" className="text-sm hover:underline">
          Help
        </a>
        <div className="flex items-center gap-2">
          <div className="bg-gray-700 rounded-full w-7 h-7 flex items-center justify-center">
            <span className="text-sm">T</span>
          </div>
          <span>ID</span>
        </div>
      </nav>
    </header>
  )
}
