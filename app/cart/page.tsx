import React from "react";
import Image from "next/image";
import Link from "next/link";
import CartDetails from "./components/CartDetails";


function Cart() {
  return (
    <div className="w-full md:py-20 ">
     <CartDetails/>
    </div>
  );
}

export default Cart;
