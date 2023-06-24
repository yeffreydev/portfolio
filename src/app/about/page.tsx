import React from "react";
import { FaGithub } from "react-icons/fa";
function page() {
  return (
    <div className="mt-[50px] flex">
      <div className="w-11/12 md:w-8/12  lg:w-6/12 mx-auto">
        <h1 className="text-[30px] font-bold mt-3">Yeffrey Espinoza</h1>
        <p className="overflow-auto text-justify mt-7">
          <div className="w-[200px] h-[200px] grid place-items-center float-right top-0">
            <img className="w-[150px] h-[150px] rounded-[100px] object-cover" src="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iusto quaerat aut quo at tempore officia! Aliquam, repellat ex.
          <br /> <br />
          Corporis culpa cupiditate et cum vero ducimus quae. Dolore, earum accusamus! Lorem ipsum dolor sit amet consectetur
          <br /> <br /> adipisicing elit. Porro iusto quaerat aut quo at tempore officia! Aliquam, repellat ex.
          <br /> <br /> Corporis culpa cupiditate et cum vero ducimus Dolore, earum accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iusto
          <br />
          <br />
          quaerat aut quo at tempore officia! Aliquam, repellat ex. Corporis culpa cupiditate et cum vero ducimus quae. Dolore,
        </p>
        <div className="flex items-center gap-5">
          <div className="mt-7 grid place-items-center">
            <a className="bg-black w-[50px] h-[50px] rounded-[50px] grid place-items-center" href="https://github.com/yeffreydev">
              <FaGithub className="font-2xl" color="#ffff" />
            </a>
          </div>
          <div className="mt-7 flex flex-col gap-2">
            <button className="px-5 py-1 rounded-xl bg-black text-white w-min whitespace-nowrap">Download CV</button>
          </div>
        </div>
        <div>
          <h1 className="text-xl text-white">Social Links</h1>
          <div className="flex gap-3 items-center flex-wrap">
            <div className="mt-7 grid place-items-center">
              <a className="bg-black w-[50px] h-[50px] rounded-[50px] grid place-items-center" href="https://github.com/yeffreydev">
                <FaGithub className="font-2xl" color="#ffff" />
              </a>
            </div>
            <div className="mt-7 grid place-items-center">
              <a className="bg-black w-[50px] h-[50px] rounded-[50px] grid place-items-center" href="https://github.com/yeffreydev">
                <FaGithub className="font-2xl" color="#ffff" />
              </a>
            </div>
            <div className="mt-7 grid place-items-center">
              <a className="bg-black w-[50px] h-[50px] rounded-[50px] grid place-items-center" href="https://github.com/yeffreydev">
                <FaGithub className="font-2xl" color="#ffff" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
