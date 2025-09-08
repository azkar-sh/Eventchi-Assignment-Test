import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import Avatar from '@/components/Avatar'
import Placeholder from '@/components/Placeholder'
import creatorsData from '@/data/creators.json'
import categoriesData from '@/data/categories.json'
import discoverData from '@/data/discover.json'
import Hero from './components/hero'
import Trending from './components/trending'
import trendingData from '@/data/trending.json'
import TopCreator from './components/topcreator'
import Categories from './components/categories'
import DiscoverMore from './components/discovermore'
import FeaturedHero from './components/FeaturedHero'
import HowItWorks from './components/HowItWorks'
import Newsletter from './components/Newsletter'

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* HERO */}
      <Hero />

      {/* TRENDING */}
      <Trending trendingData={trendingData} />

      {/* TOP CREATORS */}
      <TopCreator creatorsData={creatorsData} />

      {/* CATEGORIES */}
      <Categories categoriesData={categoriesData} />

      {/* DISCOVER MORE */}
      <DiscoverMore discoverData={discoverData} />

      {/* FEATURED */}
      <FeaturedHero />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* NEWSLETTER */}
      <Newsletter />
    </div>
  )
}
