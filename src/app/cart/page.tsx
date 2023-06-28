import React from "react";
import CartList from "./CartList";
import ShoppingCart from "./ShoppingCart";

function CartPage() {
  return (
    <div className="h-[calc(100vh-70px)] mt-[70px] w-full flex">
      <div className="flex-1  h-full hidden border-r border-black border-opacity-25  md:grid place-items-center">
        <ShoppingCart />
      </div>
      <div className="flex-1 overflow-auto">
        <CartList />
      </div>
    </div>
  );
}

export default CartPage;
