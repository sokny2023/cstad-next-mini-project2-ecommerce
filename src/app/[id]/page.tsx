import CardProductDetail from "@/components/CardProducctDetail";

import React from "react";
export type ParamProps = {
  params: {
    id: number;
  };
};

async function getDetail(id: number) {
  const productDetail = await fetch(
    `https://store.istad.co/api/products/${id}`
  );
  const data = await productDetail.json();
  return data;
}

export async function generateMetadata({ params }: ParamProps) {
  const id = params.id;
  const product = await getDetail(id);
  return {
    name: product?.name,
    desc: product.desc,
    image: product.image,
    price: product.price,
  };
}

async function page({ params }: ParamProps) {
  const id = params.id;
  const productDetail = await getDetail(id);
  return (
    <div className="flex justify-center items-center">
      <CardProductDetail
        name={productDetail.name}
        price={productDetail.price}
        image={productDetail.image}
        desc={productDetail.desc}
      />
    </div>
  );
}

export default page;
