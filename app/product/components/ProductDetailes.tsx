"use client";
import React, { useState } from "react";
import { Product } from "@/type";
import {
  ProductDitealCrouzal,
  RealetedProducts,
  Wrapper,
} from "@/app/components";
import { toast } from "react-hot-toast";
import { IoMdHeartEmpty } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/features/cartSlice/cartSlice";
import { Client } from "@/app/lib/Client";




// type defiened for props
type Props = {
  productData: Product[];
};

function ProductDetailes({ productData }: Props) {

// states used 
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);

//instance for dispatch
const dispatch = useDispatch();

//notify fun for toasta
  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      // autoClose: 5000,
      // hideProgressBar: false,
      // closeOnClick: true,
      // pauseOnHover: true,
      // draggable: true,
      // progress: undefined,
      // theme: "dark",
    });
  };


  // productData arrays first index given to data variable
  const data: Product = productData[0];




  return (
    <div className="w-full md:py-20">
      {data && (
        <Wrapper>
          <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] ">
            {/* Left column */}
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 ">
              {/* ProductDitealCrouzal component */}
              <ProductDitealCrouzal subimages={data?.subImages} />
            </div>

            {/* Right column */}
            <div className="flex-[1] py-3">
              {/* Product title */}
              <div className="text-[34px] font-semibold mb-2">{data.title}</div>

              {/* Product sub-title */}
              <div className="text-lg mb-5 font-semibold">{data.category}</div>

              {/* Product price */}
              <div className="text-lg font-semibold">
                PKR {data.discountedPrice}
              </div>
              <div className="text-md font-medium text-black/[0.5]">
                Incl. of taxes
              </div>
              <div className="text-lg font-semibold text-black/[0.5] mb-20">{`{also applied all duties}`}</div>

              {/* Product size range */}
              <div className="mb-10">
                {/* Size selection heading */}
                <div className="flex justify-between mb-2">
                  <div className="text-md font-semibold">Select Size</div>
                  <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                    Select Guide
                  </div>
                </div>

                {/* Size options */}
                <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                  {data.size?.map((size: any, sizeIndex) => (
                    <div
                      key={sizeIndex}
                      className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ${
                        selectedSize === size ? "border-black" : ""
                      }`}
                      onClick={() => {
                        setSelectedSize(size);
                        setShowError(false);
                      }}
                    >
                      {size}
                    </div>
                  ))}
                </div>

                {/* SHOW ERROR START */}
                {showError && (
                  <div className="text-red-600 mt-1">
                    Size selection is required
                  </div>
                )}
                {/* SHOW ERROR END */}
              </div>

              {/* Add to cart button */}
              <button
                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                onClick={() => {
                  if (!selectedSize) {
                    setShowError(true);
                    const sizesGridElement =
                      document.getElementById("sizesGrid");
                    if (sizesGridElement) {
                      sizesGridElement.scrollIntoView({
                        block: "center",
                        behavior: "smooth",
                      });
                    }
                  } else {
                    dispatch(addToCart(data))
                    notify();
                  }
                }}
              >
                Add to cart
              </button>

              {/* Wishlist button */}
              <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                Wishlist
                <IoMdHeartEmpty size={20} />
              </button>

              {/* Product details */}
              <div>
                <div className="text-lg font-bold mb-5">Product details</div>
                <div className="text-md mb-5">{data.description}</div>
                <div className="text-md mb-5">{data.description}</div>
              </div>
            </div>
          </div>
          {/* <RealetedProducts /> */}
        </Wrapper>
      )}
    </div>
  );
}

export default ProductDetailes;
