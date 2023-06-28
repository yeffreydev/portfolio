"use client";

import { useContext } from "react";
import { AppContext } from "../AppProvider";
import { ICartItem } from "../types";
import Image from "next/image";
import Link from "next/link";

const CartItem = ({ item }: { item: ICartItem }) => {
  return (
    <div className=" flex gap-10  min-h-[200px] w-full pl-5">
      <div className="relative h-[200px] w-[150px] ">
        <Image width={200} height={300} src={item.img} alt={item.name} className="h-full absolute object-contain w-full" />
      </div>
      <div className="flex flex-col gap-1 h-[200px] justify-end pb-5">
        <div className="text-[70px] flex gap-5 items-center">
          <button>-</button>
          <span>{item.count}</span>
          <button>+</button>
        </div>
        <div className="">
          <span>{item.name}</span>
        </div>
        <div>
          <span>
            Total Price <b className="text-xl text-gray-600">S/.{(item.count * item.price).toFixed(2)}</b>
          </span>
        </div>
      </div>
    </div>
  );
};
export default function CartList() {
  const { cart } = useContext(AppContext);
  if (cart.length < 1) {
    return (
      <div className="w-full h-full grid place-items-center">
        <div className="flex flex-col gap-3">
          <h1>Your cart is currently empty</h1>
          <Link className="px-5 py-2 text-center bg-cyan-700 text-white rounded-3xl uppercase" href={"/"}>
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-auto flex flex-col gap-5">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
        <div className="h-[200px] flex flex-col gap-3 mt-[50px] mb-[50px] pr-10 items-end w-full">
          <span className="text-xl">Total S/.{cart.reduce((acc, item) => acc + item.price * item.count, 0).toFixed(2)}</span>
          <span className="text-sm">Shipping & taxes calculated at checkout</span>
          <button className="bg-black text-white p-2 rounded-md">Checkout</button>
        </div>
      </div>
    </div>
  );
}
