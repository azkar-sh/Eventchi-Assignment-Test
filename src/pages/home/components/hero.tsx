import Button from '@/components/Button'
import Card from '@/components/Card'
import Placeholder from '@/components/Placeholder'
import React from 'react'
import SpaceWalking from '@/assets/images/nft/space_walking.png'
import Avatar1 from '@/assets/images/avatar/anima.png'

export default function Hero() {
  return (
    <section className="mx-auto w-full mt-6 max-w-6xl px-4 sm:px-6 md:px-8">
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-[38px] md:text-[67px]">
            Discover Digital Art & Collect NFTs
          </h1>
          <p className="max-w-prose text-white md:text-[22px]">
            NFT marketplace UI created for demo. Explore, collect, and trade from creators
            worldwide.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" className="px-10 py-5">
              🚀 Get Started
            </Button>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-3 text-sm text-zinc-300">
            <div>
              <span className="block md:text-2xl sm:text-xl text-xl  font-bold text-white font-mono">
                240k+
              </span>
              Total Sale
            </div>
            <div>
              <span className="block md:text-2xl sm:text-xl text-xl  font-bold text-white font-mono">
                100k+
              </span>
              Auctions
            </div>
            <div>
              <span className="block md:text-2xl sm:text-xl text-xl  font-bold text-white font-mono">
                240k+
              </span>
              Artists
            </div>
          </div>
        </div>
        <Card variant="padless">
          <img src={SpaceWalking} alt="Space Walking" className="aspect-[4/3] rounded-t-2xl" />

          <div className="flex items-center justify-between rounded-b-2xl px-4 py-6 bg-[#3B3B3B]">
            <div>
              <div className="font-medium text-white">Space Walking</div>
              <div className="text-xs text-zinc-400 flex items-center gap-2">
                <img src={Avatar1} alt="Avatar" className="inline-block h-5 w-5 rounded-full" />
                Animakid
              </div>
            </div>
            <Button className="text-xs">Place Bid</Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
