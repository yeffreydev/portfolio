"use client";
import React from "react";
import { BsCartPlus } from "react-icons/bs";
function ProductItem({ src, name, price }: { src: string; name: string; price: number }) {
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
          <img className="w-full h-full absolute object-contain hover:scale-105 transition-all ease-in-out duration-300" src={src} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-white item-name">{name}</span>
          <div className="w-full flex justify-between">
            <span className="text-white text-opacity-70 font-bold text-xl ">S/. {price.toFixed(2)}</span>
            <button className="text-xl hover:scale-125">
              <BsCartPlus color="white" />
            </button>
          </div>
          <button className="bg-[#FFC700] text-gray-800  py-1 w-full mx-auto rounded-[20px] hover:bg-opacity-75 hover:scale-105">comprar</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
