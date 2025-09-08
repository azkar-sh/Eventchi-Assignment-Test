import Card from '@/components/Card'
import Section from '@/components/Section'
import { nftImages } from '@/lib/imageMap'
import { Mail } from 'lucide-react'

export default function Newsletter() {
  const img = nftImages.space_walking

  return (
    <Section title="" subtitle="">
      <Card className="rounded-3xl border-transparent bg-[#3B3B3B] p-6 sm:p-8 md:p-10 shadow-none">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <img
              src={img}
              alt="Astronaut reading a newspaper"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
              Join Our Weekly Digest
            </h3>
            <p className="mt-3 text-base text-zinc-300">
              Get Exclusive Promotions &amp; Updates Straight To Your Inbox.
            </p>

            <form
              className="mt-6 max-w-md"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <div className="flex h-12 overflow-hidden rounded-full bg-white shadow">
                <input
                  type="email"
                  required
                  placeholder="Enter your email here"
                  aria-label="Email address"
                  className="flex-1 bg-transparent px-5 text-sm text-zinc-900 placeholder:text-zinc-500 outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-full items-center justify-center gap-2 bg-[#A259FF] px-6 text-sm font-semibold text-white hover:opacity-95 transition"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16v16H4z" opacity=".15"></path>
                    <path d="M4 8l8 5 8-5M4 4h16v16H4z" />
                  </svg>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </Section>
  )
}
