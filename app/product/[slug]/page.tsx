import React, { Suspense} from "react";


import { getSpaccifiqProductData } from "@/app/lib/moce";
import { Product } from "@/type";

function Loading() {
  return (
    <div
    className="py-20"
    ><h2 className="text-center font-bold text-7xl ">🌀 Loading...</h2></div>
    
  );
}

import ProductDetailes from "../components/ProductDetailes";

interface Props {
  slug: string;
}

async function ProductDetails({ params }: { params: { slug: string } }) {
  const Param = decodeURIComponent(params.slug);
  const data: Product[] = await getSpaccifiqProductData(Param);
  // console.log(data);
  return (
    <div>
      <Suspense fallback={<Loading />}>
       
        <ProductDetailes  productData={data} />
      </Suspense>
    </div>
  );
}

export default ProductDetails;
