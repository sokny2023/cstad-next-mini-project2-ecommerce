"use client";

import { Button } from "flowbite-react";

import Link from "next/link";
import Image from "next/image";

export default function HeroSectionComponent() {
  return (
    <section className="w-[90%] mt-10 mx-auto flex h-1/2 justify-between items-center">
      <div className="flex items-center justify-between">
      <div className="w-1/2 flex flex-col justify-start items-start mt-12 ml-2 mb-12">
        <h1 className="text-4xl text-meduim">
          Welcome to
          <span className="text-emerald-500 tracking-wide"> STAD</span>
           <span className="ml-2">Ecommcerce</span>
        </h1>
        <p className="mt-6  text-[18px] text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi
          doloremque maiores temporibus ab quas mollitia libero labore facilis?
          Vitae laboriosam aut in illum deserunt cumque aliquam nulla? Mollitia,
          distinctio?
        </p>
        <div className="mt-6 flex gap-x-6">
          <Button gradientMonochrome="success">Buy now</Button>
          <Button outline gradientDuoTone="purpleToBlue">
            View more info.
          </Button>
        </div>
      </div>
      <div className=" ">
       <div className=" justify-end  ">
        <img src="hero2.png" className="w-[30rem]" alt="hero section image" />
       </div>
      </div>
      </div>
    </section>        
  );
}
