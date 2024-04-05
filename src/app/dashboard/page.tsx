
import ProductTable from "@/components/tables/ProductTable";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center text-center w-full mx-7">
      <h1 className="font-bold text-[25px] mt-4 text-emerald-500">Products</h1>
      <ProductTable/>
    </div>
  );
};

export default page;
