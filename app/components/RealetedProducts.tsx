"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

const RealetedProducts:any  = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0 ">
      <div className="text-2xl font-bold mb-5 ">You Might also Like</div>
      <Carousel containerClass="-mx-[10px] flex "
      itemClass="px-[10px]"
      responsive={responsive}>
        <ProductCard />
       
      </Carousel>
    </div>
  );
};

export default RealetedProducts;
