"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Manue from "./Manue";
import ManueMobile from "./ManueMobile";

import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";


function Header() {

  // states
  const [mobileManue, setMobileManue] = useState(false);
  const [showCatManue, setShowCatManue] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrolly, setLastScrolly] = useState(0);

//use selectors
const cart = useSelector((state: RootState) => state.cart)

const numberOfValues = Object.keys(cart.cartItems).length;
// console.log(cart)

  const controlNav = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrolly && !mobileManue) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrolly(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNav);
    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, []);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper styelsExtra="h-[60px] flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={40} height={30} />
        </Link>
        <Manue />
        {mobileManue && <ManueMobile />}
        <div className="flex items-center gap-2 text-black">
          {/* icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black[0.07] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              51
            </div>
          </div>
          {/* icon end */}
          {/* icon start */}
          <Link href='/cart'>
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black[0.07] cursor-pointer relative">
            <BsCart className="text-[15px] md:text-[20px]" />
            {numberOfValues-1 >= 1 && ( <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              {numberOfValues-1}
            </div>)}
           
          </div>
          </Link>
          {/* icon end */}
          {/* mobile icon start */}
          <div className="w-8 md:w-12 md:hidden h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black[0.07] cursor-pointer relative -mr-2">
            {mobileManue ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileManue(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[22px]"
                onClick={() => setMobileManue(true)}
              />
            )}
          </div>
          {/* mobile icon end */}
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
