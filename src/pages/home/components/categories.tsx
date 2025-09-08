import { useEffect, useState } from 'react'
import Card from '@/components/Card'
import Placeholder from '@/components/Placeholder'
import Section from '@/components/Section'
import { categoryImages } from '@/lib/imageMap'

type Cat = { name: string; thumb: string }
interface Props {
  categoriesData: { categories: Cat[] }
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Categories({ categoriesData }: Props) {
  const [shuffledCovers, setShuffledCovers] = useState<string[]>([])

  useEffect(() => {
    const allCovers = Object.values(categoryImages)
    setShuffledCovers(shuffleArray(allCovers))
  }, [])

  return (
    <Section title="Browse Categories">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {categoriesData.categories.map((cat, i) => {
          const cover = shuffledCovers.length
            ? shuffledCovers[i % shuffledCovers.length]
            : undefined
          const tone = cat.thumb?.split(':')[1] ?? 'indigo'

          return (
            <Card
              key={cat.name + i}
              className="overflow-hidden rounded-3xl border-transparent bg-[#3B3B3B] p-0 shadow-none"
              variant="padless"
            >
              <div className="">
                {cover ? (
                  <img
                    src={cover}
                    alt={cat.name}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <Placeholder tone={tone as any} className="aspect-[4/3] rounded-2xl" />
                )}
              </div>

              <div className="rounded-t-none rounded-b-3xl bg-[#4B4B4B] px-5 py-4">
                <div className="text-base font-semibold text-white">{cat.name}</div>
              </div>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
