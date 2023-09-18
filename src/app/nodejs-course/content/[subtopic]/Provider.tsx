"use client";
import { ReactNode, createContext, useState } from "react";

interface IProviderProps {
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
}
const initialState: IProviderProps = {
  openMenu: false,
  setOpenMenu: () => {},
};
export const Context = createContext(initialState);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [openMenu, setOpenMenu] = useState(initialState.openMenu);

  return <Context.Provider value={{ openMenu, setOpenMenu }}>{children}</Context.Provider>;
};
