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
