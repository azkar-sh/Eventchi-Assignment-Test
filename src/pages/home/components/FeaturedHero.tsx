import { useEffect, useMemo, useState } from 'react'
import Button from '@/components/Button'
import { nftImages } from '@/lib/imageMap'
import { Eye } from 'lucide-react'

type Props = {
  endsAt?: string | number | Date
  coverKey?: keyof typeof nftImages
  creatorName?: string
  title?: string
}

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => new Date().getTime())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  const total = Math.max(0, target.getTime() - now)
  const sec = Math.floor(total / 1000)
  const h = Math.floor(sec / 3600)
  const m = Math.floor((sec % 3600) / 60)
  const s = sec % 60
  return { h, m, s }
}

export default function FeaturedHero({
  endsAt,
  coverKey = 'mushroom',
  creatorName = 'Shroomie',
  title = 'Magic Mushrooms',
}: Props) {
  const cover = nftImages[coverKey] ?? Object.values(nftImages)[0]
  const target = useMemo(() => new Date(endsAt ?? Date.now() + 60 * 60 * 1000 * 24), [endsAt])
  const { h, m, s } = useCountdown(target)

  const PILL =
    'rounded-2xl bg-black/50 text-white backdrop-blur px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,.35)]'

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="relative h-[62vw] min-h-[420px] max-h-[680px] md:min-h-[520px]">
        <img
          src={cover}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#A259FF]/45" />

        <div className="absolute inset-0 mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="grid h-full grid-cols-1 items-end gap-6 pb-14 sm:pb-16 md:grid-cols-[1fr_auto]">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1 text-sm text-white backdrop-blur">
                <span className="h-6 w-6 overflow-hidden rounded-full ring-1 ring-black/20">
                  <img src={cover} alt="" className="h-full w-full object-cover" />
                </span>
                {creatorName}
              </div>

              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-6xl">
                {title}
              </h2>

              <div className={`md:hidden ${PILL} w-fit`}>
                <div className="mb-2 text-xs uppercase tracking-wide text-zinc-300">
                  Auction ends in:
                </div>
                <div className="flex items-center justify-between text-center">
                  <TimeBox label="Hours" value={h} />
                  <span className="px-1 text-xl">:</span>
                  <TimeBox label="Minutes" value={m} />
                  <span className="px-1 text-xl">:</span>
                  <TimeBox label="Seconds" value={s} />
                </div>
              </div>

              <div className="md:hidden">
                <Button className="w-fit rounded-2xl bg-white px-[28px] py-4 text-black shadow-lg">
                  <Eye className="mr-2 h-4 w-4 text-[#A259FF]" />
                  <span className="text-black">See NFT</span>
                </Button>
              </div>
            </div>

            <div className="hidden self-end md:block">
              <div className={`${PILL} md:px-5 md:py-4`}>
                <div className="mb-2 text-xs uppercase tracking-wide text-zinc-300">
                  Auction ends in:
                </div>
                <div className="flex items-center justify-between text-center">
                  <TimeBox label="Hours" value={h} />
                  <span className="px-1 text-xl">:</span>
                  <TimeBox label="Minutes" value={m} />
                  <span className="px-1 text-xl">:</span>
                  <TimeBox label="Seconds" value={s} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden md:flex">
          <div className="pointer-events-auto mx-auto w-[90%] max-w-6xl px-4 sm:px-6 md:px-8">
            <Button className="rounded-2xl bg-white px-[28px] py-4 text-black shadow-lg">
              <Eye className="mr-2 h-4 w-4 text-[#A259FF]" />
              <span className="text-black">See NFT</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TimeBox({ label, value }: { label: string; value: number }) {
  const v = value.toString().padStart(2, '0')
  return (
    <div className="min-w-[64px]">
      <div className="text-3xl font-bold leading-none text-white sm:text-4xl">{v}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wide text-zinc-300">{label}</div>
    </div>
  )
}
