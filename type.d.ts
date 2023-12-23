import Image from "sanity";
export interface Product {
    title:string;
    category:string;
    description:string;
    orignalPrice:number;
    discountedPrice:number;
    size:[number];
    mainImage:{
        asset:{
            url: string;
        };
    };
    subImages:[{
        asset:{
            url: string;
        }}]; 
    
}