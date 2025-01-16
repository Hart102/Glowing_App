import React, { useState } from "react";
import { BiSearch, BiUser, BiStar, BiCart, BiMenu } from "react-icons/bi"
import { FaTimes } from "react-icons/fa"
import Motion from "../../component/Motion"


import { UserIcon, StarIcon, ShoppingCartIcon, SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"


const Navbar = () => {

  const [transition, setTransition] = useState("-translate-x-full");
  const links = ["Home", "Collection", "Shop", "Offer", "Blog"];

  const handleOpen = () => setTransition("translate-x-0");
  const handleClose = () => setTransition("-translate-x-full");

  return (
    <nav className="w-full relative md:mb-5 [&_svg]:size-8 [&_svg]:hover:cursor-pointer">
      <div className="bg-cl-yellow-light font-bold md:text-[1.2rem] tracking-[0.1rem] uppercase text-center p-3">
        Free shipping on all U.S. orders $50+
      </div>

      {/* Desktop View */}
      <Motion
        myVariants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="hidden px-10 py-4 md:flex items-center justify-between">
          <form className="flex-1">
            <div className="flex items-center justify-between border rounded-full p-3 border-primary-color w-1/2">
              <input
                type="text"
                placeholder="Search products..."
                className="placeholder:text-[1.2rem] placeholder:text-primary-color"
              />
              <BiSearch size={30} className="text-cl-yellow-dark" />
            </div>
          </form>
          <div className="flex-1 text-center">
            <h2 className="font-bold text-[2.7rem]">GLOWING</h2>
          </div>
          <div className="flex items-center justify-end gap-10 flex-1">
            <UserIcon />
            <div className="relative">
              <StarIcon className="font-extralight" />
              <div
                className="
                flex 
                items-center 
                justify-center 
                absolute -top-2 -right-3 
                w-6 h-6 p-1 
                rounded-full 
                text-white bg-cl-black"
              >2</div>
            </div>
            <div className="relative">
              <ShoppingCartIcon />
              <div
                className="
                flex 
                items-center 
                justify-center 
                absolute -top-2 -right-3 
                w-6 h-6 p-1 
                rounded-full 
                text-white bg-cl-black"
              >2</div>
            </div>

            <div className="flex items-center gap-6 px-3 py-1 shadow-xl rounded-full [&_div]:rounded-full [&_div]:p-1">
              <div className="bg-[#BEBE57]">
                <SunIcon />
              </div>
              <div className="bg-cl-black text-white">
                <MoonIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="flex text-center gap-10 text-[1.3rem] mx-auto text-primary-color">
            {
              links.map((link) => (
                <a
                  href="/"
                  key={link}
                  className="text-[0.9em] hover:scale-110 hover:text-cl-black duration-200 delay-200">
                  {link}
                </a>
              ))
            }
          </div>
        </div>
      </Motion>

      {/* Mobile View */}
      <div className="grid grid-cols-3 items-center p-4 md:hidden">
        <div><Bars3Icon onClick={handleOpen} size={25} /></div>
        <div className="text-center">
          <h2 className="font-bold text-2xl">GLOWING</h2>
        </div>
      </div>

      <div className={`flex flex-col gap-8 p-4 absolute top-0 w-full h-[100vh] bg-white ${transition} delay-100 duration-150 md:hidden`}>
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">GLOWING</h2>
          <XMarkIcon onClick={handleClose} size={25} className="text-primary-color" />
        </div>
        <div className="flex flex-col gap-4 uppercase font-semibold">
          {
            links.map((link) => (
              <a href="/" key={link} onClick={handleClose}>{link}</a>
            ))
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar