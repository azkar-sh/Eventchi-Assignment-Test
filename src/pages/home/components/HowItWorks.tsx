import Card from '@/components/Card'
import Section from '@/components/Section'
import { howItWorksImages } from '@/lib/imageMap'

export default function HowItWorks() {
  const steps = [
    {
      key: 'wallet',
      title: 'Setup Your Wallet',
      desc: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
    },
    {
      key: 'collection',
      title: 'Create Collection',
      desc: 'Upload your work and setup your collection. Add a description, social links and floor price.',
    },
    {
      key: 'earning',
      title: 'Start Earning',
      desc: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
    },
  ] as const

  return (
    <Section title="How It Works" subtitle="Find out how to get started.">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {steps.map((s) => {
          const img = howItWorksImages[s.key]
          return (
            <Card
              key={s.key}
              className="rounded-3xl border-transparent bg-[#3B3B3B] p-5 text-center shadow-none"
            >
              <div className="mx-auto mb-4">
                <div className="flex h-full w-full items-center justify-center rounded-full">
                  <img
                    src={img}
                    alt={s.title}
                    className="h-42 w-42 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="text-base font-semibold text-white">{s.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{s.desc}</p>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
