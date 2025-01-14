import React from 'react'
import { FaStar } from "react-icons/fa"
import { AiOutlineArrowRight } from "react-icons/ai"
import 'swiper/css';
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from "swiper/modules";
import { BiStar, BiCart } from "react-icons/bi"

import product1 from "../../assets/images/product-01.jpg"
import product2 from "../../assets/images/product-02.jpg"
import product3 from "../../assets/images/product-03.jpg"
import product4 from "../../assets/images/product-04.jpg"
import product5 from "../../assets/images/product-05.jpg"
import product6 from "../../assets/images/product-06.jpg"


const BestSeller = () => {
    let swiperInstance = null;

    const products = [
        {
            id: 1,
            img: product1,
            name: "Facial cleanser",
            price: "$35",
            oldPrice: "$59",
            discount: "20%",
            stars: 4
        },
        {
            id: 2,
            img: product2,
            name: "Facial cleanser",
            price: "$35",
            oldPrice: "$59",
            discount: "27%",
            stars: 4
        },
        {
            id: 3,
            img: product3,
            name: "Facial cleanser",
            price: "$35",
            oldPrice: "$59",
            discount: "50%",
            stars: 4
        },
        {
            id: 4,
            img: product4,
            name: "Facial cleanser",
            price: "$35",
            oldPrice: "$59",
            discount: "30%",
            stars: 4
        },
        {
            id: 5,
            img: product5,
            name: "Facial cleanser",
            price: "$35",
            oldPrice: "$59",
            discount: "25%",
            stars: 4
        },
        {
            id: 6,
            img: product6,
            name: "Facial cleanser",
            price: "$35",
            oldPrice: "$59",
            discount: "25%",
            stars: 4
        },
    ]
    
    return (
        <div className="container mx-auto px-4 flex flex-col justify-center gap-10 md:gap-20">
            <div className="w-full flex items-center justify-between gap-2">
                <h3 className='font-semibold text-3xl md:text-4xl'>Our Bestsellers</h3>
                <button className="flex items-center gap-1 font-semibold md:text-2xl cursor-pointer">Shop All Products <AiOutlineArrowRight /></button>
            </div>
            <div>
                <Swiper
                    spaceBetween={30}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        900: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1223: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    scrollbar={{
                        hide: false,
                    }}
                    modules={[Scrollbar]}
                    className="mySwiper"
                    onSwiper={(swiper) => {
                        swiperInstance = swiper;
                    }}
                    onMouseEnter={() => {
                        swiperInstance?.autoplay.stop();
                    }}
                    onMouseLeave={() => {
                        swiperInstance?.autoplay.start();
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="shadow-xl mb-10">
                                <div className="relative">
                                    <div className="absolute top-0 left-0 p-4">
                                        <span className="py-1 px-2 rounded bg-cl-yellow-dark text-white">-{product.discount}</span>
                                    </div>
                                    <img src={product.img} alt="" className='object-cover' />
                                    <div className="w-full h-full absolute right-0 top-0 flex justify-end overflow-x-hidden [&_div]:hover:translate-x-0">
                                        <div className="w-1/5 flex flex-col items-center justify-center gap-5 delay-100 duration-150 translate-x-full 
                                    text-primary-color [&_div]:bg-primary-color-light [&_div]:p-3 [&_div]:hover:cursor-pointer">
                                            <div className="hover:bg-black">
                                                <BiCart size={25} />
                                            </div>
                                            <div className="hover:bg-black">
                                                <BiStar size={25} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white flex flex-col items-center gap-3 p-5">
                                    <p><del className="text-primary-color">{product.oldPrice}</del> <span className="font-semibold text-1xl">{product.price}</span></p>
                                    <h4 className="text-2xl font-semibold">{product.name}</h4>
                                    <div className="flex items-center gap-2">
                                        <FaStar size={20} className="text-[#FDD835]" />
                                        <FaStar size={20} className="text-[#FDD835]" />
                                        <FaStar size={20} className="text-[#FDD835]" />
                                        <FaStar size={20} className="text-[#FDD835]" />
                                        <FaStar size={20} className="text-[#FDD835]" />
                                        <p className="font-semibold text-primary-color">515 reviews</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default BestSeller