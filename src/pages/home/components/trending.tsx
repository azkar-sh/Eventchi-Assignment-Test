import Button from '@/components/Button'
import Card from '@/components/Card'
import Placeholder from '@/components/Placeholder'
import Section from '@/components/Section'
import Avatar from '@/components/Avatar'
import { nftImages } from '@/lib/imageMap'

interface Collection {
  title: string
  floor: number
  items: number
  creator: string
  coverKey?: string
  thumbs?: string[]
  thumb?: string
}

interface Props {
  trendingData: { collections: Collection[] }
}

export default function Trending({ trendingData }: Props) {
  return (
    <Section
      title="Trending Collection"
      subtitle="Checkout Our Weekly Updated Trending Collection."
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {trendingData.collections.map((c, i) => {
          const tone = c.thumb?.split(':')[1] ?? 'indigo'
          const coverSrc = c.coverKey ? nftImages[c.coverKey] : undefined
          const thumbSrcs = (c.thumbs ?? []).map((k) => nftImages[k]).filter(Boolean)

          return (
            <Card key={i} variant="padless">
              <div className="">
                <div className="relative">
                  {coverSrc ? (
                    <img
                      src={coverSrc}
                      alt={c.title}
                      className="aspect-square w-full rounded-2xl object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <Placeholder tone={tone as any} className="aspect-square rounded-2xl" />
                  )}
                </div>
              </div>

              <div className="mt-1 flex items-center gap-3">
                {(thumbSrcs.length ? thumbSrcs : [undefined, undefined, undefined])
                  .slice(0, 3)
                  .map((src, idx) => (
                    <div key={idx} className="w-16 sm:w-20 lg:w-24">
                      {src ? (
                        <img
                          src={src}
                          alt=""
                          className="aspect-square w-full rounded-xl object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <Placeholder tone={tone as any} className="aspect-square rounded-xl" />
                      )}
                    </div>
                  ))}
                <div className="ml-auto rounded-xl bg-[#A259FF] px-4 py-3 text-sm font-semibold text-white">
                  {c.items}+
                </div>
              </div>

              <div className="px-4 pb-5 pt-4">
                <div className="text-lg font-semibold text-white">{c.title}</div>
                <div className="mt-2 flex items-center gap-2 text-sm text-zinc-300">
                  <Avatar seed={c.creator} size={20} />
                  <span className="leading-none">{c.creator}</span>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
