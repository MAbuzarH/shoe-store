import Link from "next/link";
import React from "react";
import { Client } from "../lib/Client";
import { Product } from "@/type";
import { getProductData } from "../lib/moce";

async function ProductCard() {
  const poducts: Product[] = await getProductData();
  // console.log(poducts);
  return (
    <>
      {poducts?.map((product, index) => (
        <Link
          href={`/product/${product.title}`}
          key={index}
          className="transform overflow-hidden bg-white
    hover:scale-105 cursor-pointer rounded-sm border shadow-md transition-transform duration-300
    "
        >
          <img
            src={`${product.mainImage}`}
            alt="1st product"
            className="w-[383px] h-[343px]"
          />
          <div className="p-4 text-black/[0.8]">
            <h1 className="text-lg font-medium">{product.title}</h1>
            <div className="flex items-center text-black/[0.5]">
              <p className="mr-2 text-lg font-semibold">
                {" "}
                $ {product.discountedPrice}
              </p>
              <p className="text-base font-medium line-through">
                $ {product.orignalPrice}
              </p>
              <p className="text-base font-medium ml-auto text-green-500">
                -20% off
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default ProductCard;
