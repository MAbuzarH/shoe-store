import { Client } from "./Client";
export const getProductData = async () => {
  const query = `*[_type=="Product"]{ 
    title,
    category,
    description,
    orignalPrice,
    discountedPrice,
    size,
    "mainImage": mainImage.asset->url,
    "subImages": subImages[].asset->url,
    }`;
  const products = await Client.fetch(query);
  return products;
};
export const getSpaccifiqProductData = async (slug:any) => {
    const query = `*[_type=="Product" && title == '${slug}']{    
    title,
    category,
    description,
    orignalPrice,
    discountedPrice,
    size,
    "mainImage": mainImage.asset->url,
    "subImages": subImages[].asset->url,
    }`;
    const products = await Client.fetch(query);
    return products;
  };

  
