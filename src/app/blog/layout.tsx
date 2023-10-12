import Header from "@/ui/Header";
import { Metadata } from "next";
import React from "react";

export const metadata = {
  title: "Blog - Yeffrey Espinoza",
  description: "this is Yeffrey Espinoza Blog.",
  keywords: "Yeffrey Espinoza, yeffrey espinoza, yeffrey espinoza projects,freelancer, reactjs, nodejs freelancer, yeffrey.dev, yeffrey espinoza blog, blog",
};
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="mt-[80px] mb-[40px]">
        <Header />
        {children}
      </body>
    </html>
  );
}
