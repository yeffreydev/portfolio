"use client";

import { BiSend } from "react-icons/bi";

export default function ContactForm() {
  return (
    <form className="flex-1 flex w-11/12 mx-auto flex-col gap-4 md:gap-10" action="">
      <h1 className="text-[#adc8e3] font-semibold">Send Me a Message</h1>
      <div>
        <input placeholder="Your Name or email" className="text-white bg-gray-900 py-2 px-1 w-full" name="email" type="text" />
      </div>
      <div>
        <textarea placeholder="write your message..." name="message" className="text-white py-2 px-1 bg-gray-900 w-full" />
      </div>
      <div>
        <button className="bg-black items-center gap-2 flex rounded-xl px-7 py-2" type="submit">
          <span>send</span> <BiSend />
        </button>
      </div>
    </form>
  );
}
