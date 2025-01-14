import React from 'react'
import Motion from "../../component/Motion"

const Hero = () => {
    return (

        <div className="bg-[url('../src/assets/images/hero-banner-1.jpg')] bg-cover bg-center bg-no-repeat py-24 px-5 md:px-0 md:py-0">
            <div className="mx-auto flex md:w-[90%] md:h-[75vh]">
                <Motion
                    myVariants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className={"flex flex-col justify-center gap-4 md:gap-7 w-full md:w-7/12"}
                >
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
                </Motion>
            </div>
        </div>
    )
}

export default Hero