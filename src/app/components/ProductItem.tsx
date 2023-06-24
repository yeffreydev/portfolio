import React from "react";
import { BsCartPlus } from "react-icons/bs";
function ProductItem() {
  return (
    <div className="border-[.5px] border-white border-opacity-5 w-full h-[450px] grid place-content-center hover:bg-gray-600 hover:bg-opacity-30 p-2.5">
      <div className="w-[300px] h-[400px] flex flex-col gap-1">
        <img className="flex-1 object-contain" src="https://cdn.shopify.com/s/files/1/0639/8964/5546/products/npm-run-dev-navy.png?v=1650288119&width=480" alt="" />
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-white">Npm Developer</span>
          <div className="w-full flex justify-between">
            <span className="text-white text-opacity-70 font-bold text-xl ">S/. 100.00</span>
            <button className="text-xl">
              <BsCartPlus color="white" />
            </button>
          </div>
          <button className="bg-[#FFC700] text-gray-800  py-1 w-full mx-auto rounded-[20px]">comprar</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
