"use client";
import { ReactNode, createContext, useState } from "react";
import { ICartItem } from "./types";

interface IAppState {
  cart: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (item: ICartItem) => void;
}
const initialState: IAppState = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
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
  return <AppContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</AppContext.Provider>;
};
