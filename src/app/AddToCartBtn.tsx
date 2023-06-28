"use client";
import { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";
import { AppContext } from "./AppProvider";

export const AddToCartBtn = ({ id, name, price, img }: { id: string; name: string; price: number; img: string }) => {
  const { addToCart } = useContext(AppContext);
  const handleAddToCart = () => {
    addToCart({ id, name, price, count: 1, img: img });
  };
  return (
    <button onClick={handleAddToCart} className="text-xl hover:scale-125">
      <BsCartPlus className="text-3xl" color="#383c3c" />
    </button>
  );
};
