import { Metadata } from "next";
import React from "react";

export const metadata = {
  title: "Ensayo grupal - comunicacion 3",
  description: "blog comunicacion 3, powered by UPN",
  keywords: "upn, comunicacion, ensayo grupal, ensayo grupal comunicacion 3, ensayo grupal comunicacion 3 upn",
  authors: [{ name: "Yeffrey Espinoza", url: "https://yeffrey.dev" }, { name: "Kevin Lezama Córdova" }, { name: "Ariana Chavely Medina Gamarra" }, { name: "Kevin Neiser Sanchez Garcia" }],
};
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
