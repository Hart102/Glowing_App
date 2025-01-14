import React from 'react'
import payImg from "../../assets/images/pay.png"

const Footer = () => {
    return (
        <div className="w-full bg-primary-color-light py-20 px-4 md:p-20">
            <div
                className="container mx-auto flex flex-col md:flex-row justify-between gap-10 md:text-[1.1rem]
                ">

                <div className="w-full md:w-5/12 flex flex-col md:flex-row justify-between gap-10
                [&_div]:flex [&_div]:flex-col [&_div]:gap-3 md:[&_b]:text-[1.2rem] [&_b]:font-semibold">
                    <div>
                        <b>Company</b>
                        <ul className="flex flex-col gap-3 text-primary-color">
                            <li>Our stores</li>
                            <li>+391 (0)35 2568 4593</li>
                            <li>hello@domain.com</li>
                        </ul>
                    </div>

                    <div>
                        <b>Useful links</b>
                        <ul className="flex flex-col gap-3 text-primary-color">
                            <li>New Products</li>
                            <li>Best Sellers</li>
                            <li>Bundle & Save</li>
                            <li>Online Gift Card</li>
                        </ul>
                    </div>

                    <div>
                        <b>Information</b>
                        <ul className="flex flex-col gap-3 text-primary-color">
                            <li>Contact Us</li>
                            <li>Shipping FAQ</li>
                            <li>Terms</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full md:w-5/12 flex flex-col gap-4">
                    <b className='text-2xl md:text-3xl'>Good emails.</b>
                    <p className="text-primary-color">
                        Enter your email below to be the first to know about new collections <br className="hidden md:block" /> and product launches.
                    </p>

                    <form className="flex items-center mt-5 md:mt-8">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full bg-transparen p-2 md:p-3 bg-white border border-cl-black"
                        />
                        <button className="bg-cl-black text-white py-[0.6rem] md:py-[0.8rem] px-4">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="container mx-auto mt-20 md:mt-24 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <p className='text-primary-color'>© 2025 Oussama Anedam</p>
                <h2 className="font-bold text-[2.7rem] hidden md:block">GLOWING</h2>
                <div>
                    <img src={payImg} alt="payment method" />
                </div>
            </div>
        </div>
    )
}

export default Footer