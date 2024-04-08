import { ProductDetailType } from "@/types/productDetail";
import React from "react";

const CardProductDetail = ({ name, desc, price, image, seller, category, quantity }: ProductDetailType) => {
  return (
    <section className="mt-4 flex justify-center items-center">
      <div className="flex justify-center items-center w-[300px] md:w-[800px]">
        <div className="w-1/2">
          <img className="w-[90%]" src={image} alt={name} />
        </div>
        <div className="w-1/2 grid gap-4">
          <h2 className="text-2xl font-meduim text-emerald-500">{name}</h2>
          <p className="text-gray-700 text-[18x]">{desc}</p>
          <p className="text-sky-600 text-[22x]">P{price}</p>
          <h2 className="text-2xl font-meduim text-black">Seller: {seller}</h2>
          <p className="text-gray-800 text-[18x]">Category: {category} </p>
          <p className="ml-8 text-[18px]">{quantity}</p>
        </div>
      </div>
    </section>
  );
};

export default CardProductDetail;
