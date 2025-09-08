import { useEffect, useState } from 'react'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Section from '@/components/Section'
import { avatarImages } from '@/lib/imageMap'

type Creator = { name: string; sales: number }
interface Props {
  creatorsData: { topCreators: Creator[] }
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function TopCreator({ creatorsData }: Props) {
  const [pool, setPool] = useState<string[]>([])
  useEffect(() => {
    setPool(shuffleArray(Object.values(avatarImages)))
  }, [])

  const pick = (i: number) => (pool.length ? pool[i % pool.length] : undefined)
  const mobileFive = creatorsData.topCreators.slice(0, 5)

  return (
    <Section
      title="Top Creators"
      subtitle="Checkout Top Rated Creators On The NFT Marketplace"
      action={
        <div className="hidden sm:block">
          <Button
            variant="ghost"
            className="border border-[#A259FF] text-white hover:bg-[#A259FF]/10"
          >
            View Rankings
          </Button>
        </div>
      }
    >
      <div className="grid grid-cols-1 gap-3 sm:hidden">
        {mobileFive.map((c, i) => {
          const src = pick(i)
          const rank = i + 1
          return (
            <Card
              key={c.name + i}
              className="relative flex items-center gap-3 rounded-2xl bg-[#3B3B3B] p-3 shadow-none"
            >
              <div className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900/80 text-xs font-semibold text-zinc-200 ring-1 ring-black/20">
                {rank}
              </div>

              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-zinc-900/30">
                {src ? (
                  <img
                    src={src}
                    alt={c.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
                    {c.name[0]}
                  </div>
                )}
              </div>

              <div className="min-w-0">
                <div className="truncate text-base font-semibold text-white">{c.name}</div>
                <div className="mt-1 text-sm text-zinc-300">
                  Total Sales:{' '}
                  <span className="font-semibold text-white">{c.sales.toFixed(2)}</span>{' '}
                  <span className="tracking-wide">ETH</span>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="mt-4 sm:hidden">
        <Button
          variant="ghost"
          className="w-full border border-[#A259FF] text-white hover:bg-[#A259FF]/10"
        >
          View Rankings
        </Button>
      </div>

      <div className="hidden gap-4 sm:grid md:grid-cols-2 lg:hidden">
        {creatorsData.topCreators.map((c, i) => {
          const src = pick(i)
          const rank = i + 1
          return (
            <Card
              key={c.name + i}
              className="relative flex items-center gap-4 rounded-2xl bg-[#3B3B3B] p-4 shadow-none"
            >
              <div className="absolute -left-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900/80 text-xs font-semibold text-zinc-200 ring-1 ring-black/20">
                {rank}
              </div>
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-zinc-900/30">
                {src ? (
                  <img
                    src={src}
                    alt={c.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
                    {c.name[0]}
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <div className="truncate text-base font-semibold text-white">{c.name}</div>
                <div className="mt-1 text-sm text-zinc-300">
                  Total Sales:{' '}
                  <span className="font-semibold text-white">{c.sales.toFixed(2)}</span>{' '}
                  <span className="tracking-wide">ETH</span>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <div className="hidden gap-6 lg:grid lg:grid-cols-4">
        {creatorsData.topCreators.map((c, i) => {
          const src = pick(i)
          const rank = i + 1
          return (
            <Card key={c.name + i} className="relative rounded-3xl bg-[#3B3B3B] p-0 shadow-none">
              <div className="absolute left-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/80 text-sm font-semibold text-zinc-200 ring-1 ring-black/20">
                {rank}
              </div>

              <div className="flex flex-col items-center px-6 pb-6 pt-8">
                <div className="mb-4 h-24 w-24 overflow-hidden rounded-full ring-2 ring-zinc-900/30">
                  {src ? (
                    <img
                      src={src}
                      alt={c.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-3xl font-bold text-white">
                      {c.name[0]}
                    </div>
                  )}
                </div>
                <div className="text-center text-base font-semibold text-white">{c.name}</div>
                <div className="mt-2 text-center text-sm text-zinc-300">
                  Total Sales:{' '}
                  <span className="font-semibold text-white">{c.sales.toFixed(2)}</span>{' '}
                  <span className="tracking-wide">ETH</span>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
