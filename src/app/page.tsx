import { Metadata } from "next";
import ProductItem from "./ProductItem";
import styles from "./page.module.css";
export const metadata: Metadata = {
  title: "Home - Yeffrey Espinoza",

  description: "I' Yeffrey Espinoza, software developer, this is my portfolio, I from Peru. Software Developer(frontend, backend, fullstack, nextjs, next 13, node, express)",
  keywords: "Yeffrey Espinoza, Yeffrey, Espinoza, software developer, fullstack, nextjs, next 13, node, express, yeffrey dev, yeffrey espinoza portfolio",
};

export default function HomePage() {
  return (
    <div className="mt-[70px] mb-10">
      <div className={`${styles["grid-products"]} md:w-11/12 mx-auto`}>
        <ProductItem price={50} name="Y dev white shirt" src="/ydevwhiteshirt.png" />
        <ProductItem price={50} name="gatito amor" src="/gato-shirt.png" />
        <ProductItem price={50} name="Y dev black shirt" src="/ydevblackshirt.png" />
      </div>
    </div>
  );
}
