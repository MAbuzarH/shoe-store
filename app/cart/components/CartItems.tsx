'use client'
import Image from "next/image";
import React from "react";
import { RootState } from "@/store/store";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Product } from "@/type";
import { getSpaccifiqProductData } from "../../lib/moce";
import Link from "next/link";
 import { removeFromCart } from "@/features/cartSlice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const CartItems = async () => {




  const cartMain = useSelector((state: RootState) => state.cart);
  const cart =  cartMain.cartItems;

  const dispatch = useDispatch();

  const numberOfValues = Object.keys(cart).length;

  // const data = cart.cartItems[0].item;
  // console.log(cart.cartItems[0].item);
  // const allData: Product[] = await getSpaccifiqProductData(data);
  // console.log(cart)
  const content = 
  cart  && numberOfValues > 1 ? cart.slice(1).map((cartItem,index) => (
  
      <div key={index} className="flex py-5 gap-3 md:gap-5 border-b">
        {/* IMAGE START */}
        <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
          {/* <Image
            src={`${cartItem?.item.mainImage}`}
            alt="ll"
            width={120}
            height={120}
          /> */}
          <img src={`${cartItem?.item.mainImage}`} alt="pp" className="h-[120px] w-[120px]" />
        </div>
        {/* IMAGE END */}
        <div className="flex w-full  flex-col">
          <div className="flex flex-col md:flex-row justify-between ">
            {/* PRODUCT TITLE */}
            <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
              {cartItem.item.title}
            </div>
            {/* PRODUCT SUBTITLE */}
            <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
              {cartItem.item.category}
            </div>
            {/* PRODUCT PRICE */}
            <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
              MRP : &#8377; { cartItem.item.discountedPrice * cartItem.quantity}
            </div>
          </div>
          {/* PRODUCT SUBTITLE */}
          <div className="text-md font-medium text-black/[0.5] hidden md:block">
            p.subtitle
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
              <div className="flex items-center gap-1">
                <div className="font-semibold">Size:</div>
                <select className="hover:text-black">
                  {cartItem.item.size.map((size,index) =>(
                    <option key={index} value={index}>{size}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-1">
                <div className="font-semibold">
                  Quantity: {cartItem.quantity}
                </div>
              </div>
            </div>
            <button
            onClick={()=> dispatch(removeFromCart(cartItem.item))}
            >
              <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-red-600 text-[16px] md:text-[20px] " />
              </button>
            
          </div>
        </div>
      </div>)):(<div className="h-full flex justify-center items-center">
      <Link
      href="/"
      className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
    >
      Continue Shopping
    </Link>
      </div>);
     
  return content;
};

export default CartItems;
