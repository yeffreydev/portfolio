"use client";

export default function ShoppingCart() {
  return (
    <>
      <style jsx>
        {`
          .text-gradient {
            font-size: 72px;
            background: -webkit-linear-gradient(#000, #0e7490);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>
      <div className="text-5xl font-extrabold text-gradient">
        <span>Shopping</span>
        <br />
        <span>Cart</span>
      </div>
    </>
  );
}
