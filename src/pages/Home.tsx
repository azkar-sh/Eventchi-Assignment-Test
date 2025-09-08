import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import Avatar from '@/components/Avatar'
import Placeholder from '@/components/Placeholder'
import trendingData from '@/data/trending.json'
import creatorsData from '@/data/creators.json'
import categoriesData from '@/data/categories.json'
import discoverData from '@/data/discover.json'

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* HERO */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="space-y-5">
            <Badge>✨ New Featured</Badge>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Discover Digital Art & Collect NFTs
            </h1>
            <p className="max-w-prose text-zinc-300">
              NFT marketplace UI created for demo. Explore, collect, and trade from creators
              worldwide.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button>👀 Get Started</Button>
              <Button variant="ghost">🎬 Watch Tutorial</Button>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-3 text-sm text-zinc-300">
              <div>
                <span className="block text-xl font-bold text-white">240k+</span>Total Sale
              </div>
              <div>
                <span className="block text-xl font-bold text-white">100k+</span>Auctions
              </div>
              <div>
                <span className="block text-xl font-bold text-white">240k+</span>Artists
              </div>
            </div>
          </div>
          <Card className="p-0">
            <div className="p-3">
              <Placeholder tone="indigo" className="aspect-[4/3] rounded-xl" />
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <div>
                <div className="font-medium text-white">Space Walking</div>
                <div className="text-xs text-zinc-400">@animakid</div>
              </div>
              <Button className="text-xs">Place Bid</Button>
            </div>
          </Card>
        </div>
      </section>

      {/* TRENDING */}
      <Section
        title="Trending Collection"
        subtitle="Checkout our weekly updated trending collections."
        action={<Button variant="ghost">View All</Button>}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trendingData.collections.map((c, i) => (
            <Card key={i}>
              <Placeholder tone={c.thumbs[0].split(':')[1]} className="aspect-square rounded-lg" />
              <div className="mt-3">
                <div className="font-semibold text-white">{c.title}</div>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-zinc-400">{c.creator}</span>
                  <span className="rounded-lg bg-zinc-800 px-2 py-1 text-zinc-200">{c.items}+</span>
                </div>
                <div className="mt-2 text-xs text-zinc-400">
                  Floor: <span className="text-white">{c.floor} ETH</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* TOP CREATORS */}
      <Section
        title="Top Creators"
        subtitle="Checkout top rated creators on the marketplace."
        action={<Button variant="ghost">View Rankings</Button>}
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {creatorsData.topCreators.map((p, i) => (
            <Card key={i} className="flex items-center gap-3">
              <Avatar seed={p.name} />
              <div>
                <div className="text-sm font-medium text-white">{p.name}</div>
                <div className="text-xs text-zinc-400">
                  Total Sales: <span className="text-white">{p.sales} ETH</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CATEGORIES */}
      <Section title="Browse Categories">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {categoriesData.categories.map((cat, i) => (
            <Card key={i} className="overflow-hidden p-0">
              <div className="p-4">
                <Placeholder tone={cat.thumb.split(':')[1]} className="aspect-[4/3] rounded-lg" />
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <div className="text-sm font-medium text-white">{cat.name}</div>
                <span className="text-lg">{cat.icon}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* DISCOVER MORE */}
      <Section
        title="Discover More NFTs"
        subtitle="Explore new trending NFTs."
        action={<Button variant="ghost">See All</Button>}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {discoverData.nfts.map((n, i) => (
            <Card key={i}>
              <Placeholder tone={n.thumb.split(':')[1]} className="aspect-[4/3] rounded-lg" />
              <div className="mt-3 flex items-start justify-between">
                <div>
                  <div className="font-semibold text-white">{n.title}</div>
                  <div className="text-xs text-zinc-400">by {n.creator}</div>
                </div>
                <Badge>Price: {n.price} ETH</Badge>
              </div>
              <div className="mt-2 text-xs text-zinc-400">
                Highest Bid: <span className="text-white">{n.highestBid} wETH</span>
              </div>
              <div className="mt-3">
                <Button className="w-full">Place Bid</Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section title="How It Works" subtitle="Three easy steps to get started.">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: 'Setup Your Wallet',
              desc: 'Connect your wallet to start exploring and collecting NFTs.',
            },
            {
              title: 'Create Collection',
              desc: 'Upload your work and set up your first collection and price.',
            },
            {
              title: 'Start Earning',
              desc: 'List your NFTs and start earning by selling to the community.',
            },
          ].map((s, i) => (
            <Card key={i} className="text-center">
              <div className="mx-auto mb-3 h-16 w-16">
                <Placeholder className="h-16 w-16 rounded-full" />
              </div>
              <div className="font-medium text-white">{s.title}</div>
              <p className="mt-1 text-sm text-zinc-400">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* NEWSLETTER */}
      <Section
        title="Join Our Weekly Digest"
        subtitle="Get exclusive promotions & updates straight to your inbox."
      >
        <Card className="flex flex-col items-center gap-3 p-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <div className="text-white">Stay in the loop</div>
            <div className="text-sm text-zinc-400">We’ll send you the best picks once a week.</div>
          </div>
          <form className="flex w-full max-w-md gap-2">
            <input
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-zinc-700 bg-zinc-800/60 px-3 py-2 text-sm text-white placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-violet-600"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </Card>
      </Section>
    </div>
  )
}
