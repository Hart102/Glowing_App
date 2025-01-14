import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"
import summerCollectionImg from "../../assets/images/summer-collection.jpg";
import whatsNewImg from "../../assets/images/whats-new.jpg";
import buyImg from "../../assets/images/buy1-get-1.jpg";

const Promo = () => {
    const contents = [
        {
            title: "Summer Collection",
            text: "Starting at $17.99",
            btnText: "Shop now",
            image: summerCollectionImg
        },
        {
            title: "What's new",
            text: "Get the glow",
            btnText: "Discover now",
            image: whatsNewImg
        },
        {
            title: "Buy 1 get 1",
            text: "Starting at $17.99",
            btnText: "Discover now",
            image: buyImg
        }
    ];
    return (
        <div className='w-full px-4'>
            <div className="container mx-auto flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {contents.map((content) => (
                        <div key={content.title} className="relative shadow-2xl [&_img]:hover:scale-110 overflow-hidden">
                            <img src={content.image} alt={content.title} className="object-cover rounded-lg duration-200 delay-200" />
                            <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-between p-8 md:p-10 rounded-lg">
                                <div className="flex flex-col gap-5">
                                    <h2 className="font-bold text-3xl md:text-4xl">{content.title}</h2>
                                    <p className="font-semibold md:text-2xl">{content.text}</p>
                                </div>
                                <div>
                                    <button className="flex items-center gap-2 font-semibold text-lg">{content.btnText} <AiOutlineArrowRight /> </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Promo