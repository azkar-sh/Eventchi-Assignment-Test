import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Store } from 'lucide-react'
import { Link, Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[#2B2B2B] text-zinc-900">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
