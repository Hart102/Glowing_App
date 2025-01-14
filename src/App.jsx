import React, { useState } from "react"
import Header from "./component/Header"
import Footer from "./component/Footer"
import Hero from "./component/Hero"
import PromoCard from "./component/PromoCard"
import BestSeller from "./component/BestSeller"
import ShopCard from "./component/ShopCard"
import DiscoverMore from "./component/Discover"

import DiscoveryImg from "./assets/images/banner-1-f-pyyN0i.jpg"
import extendedImg from "./assets/images/banner-2-D9w-Ci8b.jpg"

import offerImg1 from "./assets/images/offer-banner-1-BmkWvm1y.jpg"
import offerImg2 from "./assets/images/offer-banner-2-BfjNs0_-.jpg"

import Motion from "./component/Motion"









function App() {





  return (
    <>

      <Header />
      <Hero />

      <div className="flex flex-col gap-32 md:gap-48 pb-10 my-16">

        <Motion
          myVariants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <PromoCard />
        </Motion>

        <Motion
          myVariants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <BestSeller />
        </Motion>

        <Motion
          myVariants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20">
              <div className="relative w-full lg:w-8/12 [&_img]:hover:scale-110 overflow-hidden">
                <img src={DiscoveryImg} alt="Dicover" className="w-full h-[350px] md:h-[500px] duration-200 delay-200" />
                <div className="w-full h-full absolute top-0 left-0 p-8 md:p-14 flex flex-col gap-8">
                  <p className="text-3xl">New Collection</p>
                  <b className="text-4xl tracking-wider">Discover Our <br className="hidden md:block" /> Autumn Skincare </b>
                  <div>
                    <button className="bg-black text-white p-2 text-lg">Explore more</button>
                  </div>
                </div>
              </div>
              <div className="relative w-full lg:w-4/12 [&_img]:hover:scale-110 overflow-hidden">
                <img src={extendedImg} alt="Dicover" className="w-full h-[350px] md:h-[500px] duration-200 delay-200" />
                <div className="w-full h-full absolute top-0 left-0 p-8 md:p-10 flex flex-col gap-8">
                  <p className="text-3xl">25% Off Everything</p>
                  <p className="tracking-wider text-primary-color text-[1.2rem]">
                    Makeup with extended range in color for <br className="hidden md:block" /> every human
                  </p>
                  <div>
                    <button className="bg-black text-white p-2 text-lg">Shop now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Motion>

        <Motion
          myVariants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <ShopCard />
        </Motion>

        <Motion
          myVariants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="container mx-auto p-4 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-32">
              <div className="flex justify-center items-center gap-4 md:gap-8">
                <img src={offerImg1} alt="offer" className="w-1/3 lg:w-2/5" />
                <img src={offerImg2} alt="offer" className="w-1/2 lg:w-7/12" />
              </div>
              <div className="flex flex-col gap-4 md:gap-7">
                <div className="flex items-center gap-4 uppercase">
                  <p className="text-[1.2rem] md:text-[1.8rem]">Special offer</p>
                  <span className="bg-cl-yellow-dark text-white px-3 py-1 font-semibold text-[1.2rem]">-20%</span>
                </div>
                <b className="text-2xl md:text-4xl">Mountain Pine Batch Oil</b>
                <p className="text-[1.2rem] md:text-[1.5rem] text-primary-color">Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                <p className="text-2xl md:text-5xl text-primary-color tracking-widest">15 : 21 : 43 : 33</p>
                <div>
                  <button className="bg-black text-white text-lg px-4 py-2">Get onle $23</button>
                </div>
              </div>
            </div>
          </div>
        </Motion>

        
        <Motion
          myVariants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <DiscoverMore />
        </Motion>
      </div>

      <Footer />
    </>
  )
}



export default App
