import React from 'react'
// import Link from "react-router-dom"
import { AiOutlineArrowRight } from "react-icons/ai"

import blogImg1 from "../../assets/images/blog-1-B7RvJSAb.jpg"
import blogImg2 from "../../assets/images/blog-2-DWwh5UGh.jpg"
import blogImg3 from "../../assets/images/blog-3.jpg"


const DiscoverMore = () => {
    const blogs = [
        {
            img: blogImg1,
            title: "Find store",
            href: "Our store"
        },
        {
            img: blogImg2,
            title: "Find store",
            href: "Our store"
        },
        {
            img: blogImg3,
            title: "Find store",
            href: "Our store"
        }
    ]
    return (
        <div className="container mx-auto p-4 flex flex-col items-center justify-center gap-10 md:gap-24">
            <b className="font-bold text-3xl md:text-4xl1 text-center">More to Discover</b>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <div key={index + 1} className="flex flex-col items-center justify-center gap-8">
                        <div className="[&_img]:hover:scale-110 overflow-hidden">
                            <img src={blog.img} alt="blog" className="duration-200 delay-200" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-2xl md:text-4xl">{blog.title}</p>
                            <a href="#" className="flex items-center justify-center gap-2 text-lg">
                                {blog.href} <AiOutlineArrowRight />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DiscoverMore