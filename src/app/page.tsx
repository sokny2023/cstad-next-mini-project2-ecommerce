
import React, { useEffect, useState } from 'react';
import CardProductComponent from '@/components/CardProductComponent';

import { ProductType } from "@/types/product";
import { Suspense } from "react";
import LoadingComponent from "./Loading";
import HeroSectionComponent from '@/components/HeroSectionComponent';


async function fetchProduct() {
  const product = await fetch("https://store.istad.co/api/products/?page=1&page_size=24", {
    cache: "no-store"
  });
  const res = await product.json();
  console.log(res)
  return res.results;
}

export default async function Home() {
  const product = await fetchProduct();

  return (
    <>
      <HeroSectionComponent />
      <h2 className='text-[30px] mt-4 text-center text-emerald-500 my-6'>Products</h2>
      <div className="mt-12 z-0 flex justify-center flex-wrap gap-7">
        <Suspense fallback={<LoadingComponent/>} >
        {product?.map((pro: ProductType) => (
          <CardProductComponent
            image={pro.image}
            desc={pro.desc}
            name={pro.name}
            key={pro.id}
            price={pro.price}
          />
        ))}
        </Suspense>
      </div>
    </>
  );
}
