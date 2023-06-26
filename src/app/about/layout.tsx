import { Metadata } from "next";
import React from "react";

export const metadata = {
  title: "About - Yeffrey Espinoza",
  description: "I am a software developer, born in Peru, who has a passion for crafting solutions and thrives on the challenges of programming.",
  keywords: "Yeffrey Espinoza, yeffrey espinoza cv, yeffrey,  yeffrey espinoza profile,yeffrey dev, reactjs, nodejs freelancer, yeffrey.dev",
};
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
