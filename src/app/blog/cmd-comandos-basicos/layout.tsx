import Header from "@/ui/Header";
import { Metadata } from "next";
import React from "react";

export const metadata = {
  title: "CMD Comandos Básicos - Windows CMD",
  description: "Comandos básicos de la cmd de Windows",
  keywords: "cmd, comandos",
};
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <div className="w-11/12 mx-auto mt-[80px]">{children}</div>
      </body>
    </html>
  );
}
