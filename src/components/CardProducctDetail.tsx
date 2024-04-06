import { ProductType } from "@/types/product";
import React from "react";

const CardProductDetail = ({ name, desc, price, image }: ProductType) => {
  return (
    <div>
      <div className="flex-col md:flex-row justify-between flex gap-4 items-start mx-4 py-12">
        <div className="flex bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row">
          <div className="relative w-full md:w-48 flex justify-center items-center">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">
                {name}
              </h1>
              <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
                ${price}
              </div>
              <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                In stock
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
              <div className="flex space-x-2">
                {/* Size options */}
                {/* Consider mapping over an array of sizes if you have dynamic sizes */}
              </div>
              <a
                href="#"
                className="hidden ml-auto text-sm text-gray-500 underline md:block dark:text-gray-300"
              >
                Size Guide
              </a>
            </div>
            <div className="flex mb-4 text-sm font-medium">
              <button
                type="button"
                className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
              >
                Buy now
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">{desc}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardProductDetail;
