"use client";

import { ChangeEvent, useState } from "react";

function CheckBox({ completed }: { completed: boolean }) {
  const [checked, setChecked] = useState(completed);
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget;
    setChecked(checked);
  };
  return <div className="cursor-pointer w-[15px] h-[15px] bg-white border border-black rounded-full"></div>;
}

export default CheckBox;
