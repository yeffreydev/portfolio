"use client";
import { ReactNode, createContext, useState } from "react";
import { ICartItem } from "./shop/types";

interface IAppState {
  cart: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (item: ICartItem) => void;
  decreaseItemCount: (item: ICartItem) => void;
}
const initialState: IAppState = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  decreaseItemCount: () => {},
};
export const AppContext = createContext(initialState);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState(initialState.cart);
  const addToCart = (item: ICartItem) => {
    let foundItem = cart.find((cartItem) => cartItem.id === item.id);
    if (!foundItem) {
      setCart([item, ...cart]);
    } else {
      setCart(
        cart.map((cartItem) => {
          if (item.id === cartItem.id) cartItem.count++;
          return cartItem;
        })
      );
    }
  };
  const removeFromCart = (item: ICartItem) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };
  const decreaseItemCount = (item: ICartItem) => {
    const foundItem = cart.find((cartItem) => cartItem.id === item.id);
    if (!foundItem) return;
    if (foundItem.count === 1) {
      return removeFromCart(foundItem);
    }
    setCart(
      cart.map((cartItem) => {
        if (item.id === cartItem.id) cartItem.count--;
        return cartItem;
      })
    );
  };
  return <AppContext.Provider value={{ cart, addToCart, removeFromCart, decreaseItemCount }}>{children}</AppContext.Provider>;
};
