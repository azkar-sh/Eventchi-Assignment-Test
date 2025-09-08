import { Store, User2 } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router'
import BurgerMenu from './BurgerMenu'
import Button from './Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#2B2B2B]/90 backdrop-blur supports-[backdrop-filter]:bg-[#2B2B2B]/70">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-mono text-lg font-medium text-white">
          <Store size={24} className="text-[#A259FF]" />
          NFT Marketplace
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <Link to="#" className="font-semibold text-white hover:underline">
            Marketplace
          </Link>
          <Link to="/about" className="font-semibold text-white hover:underline">
            Rankings
          </Link>
          <Link to="#" className="font-semibold text-white hover:underline">
            Connect a wallet
          </Link>
          <Button variant="primary" className="px-7 py-3">
            <Link to="/register" className="flex items-center gap-3">
              <User2 size={18} className="text-white" />
              Sign Up
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-6 lg:hidden">
          <BurgerMenu
            isOpen={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-white"
          />
        </div>
      </nav>

      {/* Panel mobile: jadikan FIXED di bawah header, bukan absolute di dalam nav */}
      <div
        className={`fixed inset-x-0 top-14 z-40 bg-[#2B2B2B] transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-5xl px-4 pb-6 pt-4">
          <div className="flex flex-col items-start gap-4">
            <Link to="#" className="font-semibold text-white hover:underline">
              Marketplace
            </Link>
            <Link to="/about" className="font-semibold text-white hover:underline">
              Rankings
            </Link>
            <Link to="#" className="font-semibold text-white hover:underline">
              Connect a wallet
            </Link>
            <Button variant="primary" className="px-7 py-3">
              <Link to="/register" className="flex items-center gap-3">
                <User2 size={18} className="text-white" />
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
