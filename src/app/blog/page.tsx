import React from "react";
import BlogItem from "./BlogItem";
import Image from "next/image";
import Link from "next/link";
const Item = ({ src, name, price }: { src: string; name: string; price: number }) => {
  return (
    <Link href={"/shop"} className="w-11/12 flex flex-col gap-4 hover:bg-[#6bc1c1] bg-blue-400 bg-opacity-25 hover:bg-opacity-30 p-2">
      <div className="w-full grid place-items-center">
        <Image src={src} width={250} height={200} className="w-full p-2 bg-red-400 bg-opacity-10 h-[200px] object-contain" alt=""></Image>
      </div>
      <div className="w-full">
        <h3 className="text-[#383c3c] font-semibold">{name}</h3>
        <p className="opacity-80">S/ {price}</p>
      </div>
    </Link>
  );
};

function page() {
  return (
    <div className="mt-[80px] mb-[40px] w-11/12 mx-auto flex gap-3">
      <div className="flex-1">
        <h1 className="text-xl font-bold pl-2">latest articles</h1>
        <div className="flex-1">{/* <BlogItem id="ensayo-comu-3" title="La influencia de la educación en la corrupción" year="2023" /> */}</div>
      </div>

      <div className="w-[300px] hidden md:block">
        <h2 className="my-3 text-2xl w-11/12 mx-auto">last Items</h2>
        <div className="flex flex-col gap-5 items-center">
          <Item src="/ydevwhiteshirt.png" name="Y dev Shirt" price={60} />
          <Item src="/ydevblackshirt.png" name="Y dev Black Shirt" price={60} />
        </div>
      </div>
    </div>
  );
}

export default page;
