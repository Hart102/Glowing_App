import React from 'react'
import guaranteedImg from "../../assets/images/guaranteed.jpg"
import crueltyImg from "../../assets/images/free.jpg"
import ingredientImg from "../../assets/images/period.jpg"


const ShopCard = () => {
    const shopContent = [
        {
            title: "Guaranteed PURE",
            text: "All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients",
            img: guaranteedImg
        },
        {
            title: "Completely Cruelty-Free",
            text: "All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients",
            img: crueltyImg
        },
        {
            title: "Ingredient Sourcing",
            text: "All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients",
            img: ingredientImg
        },
    ]
    return (
        <div className="container mx-auto flex flex-col items-center gap-20 px-5">
            <b className="font-bold text-3xl md:text-4xl1 text-center">Why Shop with Glowing?</b>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                {shopContent.map((content) => (
                    <div key={content.title} className="flex flex-col justify-center gap-6 md:gap-12 text-center">
                        <img src={content.img} alt={content.title} width={100} className='mx-auto' />
                        <b className='text-3xl md:text-4xl'>{content.title}</b>
                        <p className='text-[1.2rem] text-primary-color'>{content.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShopCard