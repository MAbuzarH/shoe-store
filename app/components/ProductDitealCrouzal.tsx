"use client";
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";

interface SubImage {
  asset: {
    url: string;
  };
}

interface Props {
  subimages: SubImage[];
}

function ProductDitealCrouzal({ subimages }: Props) {
  
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px] ">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel "
      >
        {subimages?.map((image,index) => (
          <div  key={index} >
            <img  src={`${image}`} alt="image"  />
            </div>
          
        ))}
      </Carousel>
      
    </div>
  );
}

export default ProductDitealCrouzal;

