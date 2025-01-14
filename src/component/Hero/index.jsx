import React from 'react'

const Hero = () => {
    return (
        <div className="bg-[url('../src/assets/images/hero-banner-1.jpg')] bg-cover bg-center bg-no-repeat py-24 px-5 md:px-0 md:py-0">
            <div className="mx-auto flex md:w-[90%] md:h-[75vh]">
                <div className="flex flex-col justify-center gap-4 md:gap-7 w-full md:w-7/12">
                    <h1 className="font-bold text-4xl leading-snug md:font-extrabold md:text-6xl md:leading-[1.2]">
                        Reveal The <br /> Beauty of Skin
                    </h1>
                    <p className="text-primary-color md:text-[1.4rem]">
                        Made using clean, non-toxic ingredients, our products
                        <br className="hidden md:block" /> are designed for everyone.
                    </p>
                    <b className="md:text-[1.4rem]">Starting at $7.99</b>
                    <div>
                        <button className="bg-cl-black text-white text-lg cursor-pointer py-2 px-5">Shop now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero