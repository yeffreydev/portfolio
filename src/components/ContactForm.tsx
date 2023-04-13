"use client";

import { FormEvent, useState } from "react";
import { BiSend } from "react-icons/bi";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let name = e.currentTarget.name;
    let txt = e.currentTarget.value;
    setForm((prevForm) => ({ ...prevForm, [name]: txt }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabledButton(true);
    fetch("/api/message", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(form) });
    setIsDisabledButton(false);
    setForm({ name: "", message: "" });
  };
  return (
    <form onSubmit={handleSubmit} className="flex-1 flex w-11/12 mx-auto flex-col gap-4 md:gap-10" action="">
      <h1 className="text-[#adc8e3] font-semibold">Send Me a Message</h1>
      <div>
        <input onChange={handleChange} value={form.name} placeholder="Your Name or email" className="text-white bg-gray-900 py-2 px-1 w-full" name="name" type="text" />
      </div>
      <div>
        <textarea onChange={handleChange} value={form.message} placeholder="write your message..." name="message" className="text-white py-2 px-1 bg-gray-900 w-full" />
      </div>
      <div>
        <button
          disabled={isDisabledButton}
          className={`${!isDisabledButton ? "bg-black text-white cursor-pointer" : "bg-gray-700 text-gray-500"} items-center gap-2 flex rounded-xl px-7 py-2`}
          type="submit"
        >
          <span>send</span> <BiSend />
        </button>
      </div>
    </form>
  );
}
