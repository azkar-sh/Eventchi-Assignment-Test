import Button from '@/components/Button'
import Card from '@/components/Card'
import Placeholder from '@/components/Placeholder'
import Section from '@/components/Section'
import { nftImages } from '@/lib/imageMap'
import { useRef, useEffect } from 'react'

type Item = {
  title: string
  thumb: string
  creator: string
  price: number
  highestBid: number
}
interface Props {
  discoverData: { nfts: Item[] }
}

const nftPool = Object.values(nftImages)

function resolveCover(i: number): string | undefined {
  return nftPool.length ? nftPool[i % nftPool.length] : undefined
}

function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let isDown = false
    let startX = 0
    let startScroll = 0

    const onMouseDown = (e: MouseEvent) => {
      isDown = true
      el.classList.add('dragging')
      startX = e.pageX
      startScroll = el.scrollLeft
    }
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const dx = e.pageX - startX
      el.scrollLeft = startScroll - dx
    }
    const onMouseUp = () => {
      isDown = false
      el.classList.remove('dragging')
    }

    el.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      el.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])
  return ref
}

function NftCard({ n, i }: { n: Item; i: number }) {
  const cover = resolveCover(i)
  const tone = n.thumb?.split(':')[1] ?? 'indigo'
  return (
    <Card className="overflow-hidden rounded-3xl border-transparent bg-[#3B3B3B] p-0 shadow-none">
      {cover ? (
        <img
          src={cover}
          alt={n.title}
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
        />
      ) : (
        <Placeholder tone={tone as any} className="aspect-[4/3]" />
      )}

      <div className="px-5 pb-4 pt-4">
        <div className="text-lg font-semibold text-white">{n.title}</div>
        <div className="mt-1 text-sm text-zinc-300">by {n.creator}</div>
      </div>

      <div className="mx-3 mb-3 rounded-xl bg-[#4B4B4B] px-4 py-3">
        <div className="grid grid-cols-2 gap-4 text-xs text-zinc-300">
          <div>
            <div className="uppercase tracking-wide">Price</div>
            <div className="text-white">{n.price} ETH</div>
          </div>
          <div className="text-right">
            <div className="uppercase tracking-wide">Highest Bid</div>
            <div className="text-white">{n.highestBid} wETH</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function DiscoverMore({ discoverData }: Props) {
  const trackRef = useDragScroll<HTMLDivElement>()
  return (
    <Section
      title="Discover More NFTs"
      subtitle="Explore new trending NFTs."
      action={
        <div className="hidden sm:block">
          <Button
            variant="ghost"
            className="border border-[#A259FF] text-white hover:bg-[#A259FF]/10"
          >
            See All
          </Button>
        </div>
      }
    >
      <div className="hidden lg:block">
        <div
          ref={trackRef}
          className="full-bleed no-scrollbar  drag-scroll flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2
          "
        >
          {discoverData.nfts.map((n, i) => (
            <div key={n.title + i} className="min-w-[360px] max-w-[360px] snap-start">
              <NftCard n={n} i={i} />
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
        {discoverData.nfts.map((n, i) => (
          <NftCard key={n.title + i} n={n} i={i} />
        ))}
      </div>

      <div className="mt-4 sm:hidden">
        <Button
          variant="ghost"
          className="w-full border border-[#A259FF] text-white hover:bg-[#A259FF]/10"
        >
          See All
        </Button>
      </div>
    </Section>
  )
}
