import { Link } from 'react-router'
import { Mail, Store } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#3B3B3B] pt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-white">
              <Store className="h-6 w-6 text-[#A259FF]" />
              NFT Marketplace
            </Link>
            <p className="mt-4 text-sm text-zinc-400">
              NFT marketplace UI created with Anima for Figma.
            </p>

            <p className="mt-5 text-sm text-white">Join our community</p>
            <div className="mt-3 flex items-center gap-3">
              {['🎮', '▶', '🐦', '📸'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700 hover:bg-zinc-600"
                >
                  <span className="text-lg">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li>
                <Link to="#" className="hover:text-white">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  Rankings
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Connect a wallet
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Join Our Weekly Digest</h3>
            <p className="mt-4 text-sm text-zinc-300">
              Get exclusive promotions &amp; updates straight to your inbox.
            </p>

            <form
              className="mt-4"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <div className="flex h-12 overflow-hidden rounded-full bg-white shadow">
                <input
                  type="email"
                  required
                  placeholder="Enter your email here"
                  className="flex-1 bg-transparent px-5 text-sm text-zinc-900 placeholder:text-zinc-500 outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-full items-center justify-center gap-2 bg-[#A259FF] px-6 text-sm font-semibold text-white hover:opacity-95 transition"
                >
                  <Mail className="h-4 w-4" />
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-700 pt-6 pb-10 text-center text-xs text-zinc-500">
          © NFT Market. Use this template freely.
        </div>
      </div>
    </footer>
  )
}
