import Header from "@/ui/Header";
import { Metadata } from "next";
import React from "react";

export const metadata = {
  title: "Projects - Yeffrey Espinoza",
  description: "list of my projects.",
  keywords: "Yeffrey Espinoza, yeffrey espinoza, yeffrey espinoza projects,freelancer, reactjs, nodejs freelancer, yeffrey.dev",
};
export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <body>
      <Header />
      {children}
    </body>
  );
}
