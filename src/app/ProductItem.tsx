"use client";
import Image from "next/image";
import React from "react";
import { AddToCartBtn } from "./AddToCartBtn";
function ProductItem({ src, name, price, id }: { src: string; name: string; price: number; id: string }) {
  return (
    <div className="container border-[.5px] border-white border-opacity-5 w-full h-[450px] grid place-content-center hover:bg-opacity-30 p-2.5">
      <style jsx>
        {`
          .container:hover .item-name {
            text-decoration: underline;
          }
        `}
      </style>
      <div className="w-[300px] h-[400px] flex flex-col gap-1">
        <div className="flex-1 relative overflow-hidden">
          <Image width={300} height={400} className="w-full h-full absolute object-contain hover:scale-105 transition-all ease-in-out duration-300" src={src} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-[#383c3c] item-name">{name}</span>
          <div className="w-full flex justify-between">
            <span className="text-[#383c3c] text-opacity-70 font-bold text-xl ">S/. {price.toFixed(2)}</span>
            <AddToCartBtn id={id} name={name} price={price} />
          </div>
          <a
            target={"_blank"}
            href={`https://api.whatsapp.com/send?phone=51921862850&text=me%20gusta%20el%20item%20%22${name}%22😍%20y%20quiero%20comprarlo%20@yeffreydev`}
            className="bg-[#FFC700] text-gray-800 text-center  py-1 w-full mx-auto rounded-[20px] hover:bg-opacity-75 hover:scale-105"
          >
            comprar
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
