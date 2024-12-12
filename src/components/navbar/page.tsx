"use client";
import Image from "next/image";
import * as React from "react";

export default function Navbar() {
  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="flex justify-center sticky top-0 w-full bg-[#1A0A2E] lg:h-[70px] z-50 shadow-[0_0_5px_#ffffff] ">
      <div className="flex justify-between items-center bg-[#1A0A2E] lg:h-[70px] z-50 lg:px-[33px] px-[13px] h-[65px] md:w-[1014px] lg:w-[1200px] w-full ">
        <a
          href=""
          className="flex justify-center items-center lg:scale-100 scale-90 transition-transform"
        >
          <Image
            src="/images/photoSquare2.png"
            alt=""
            width={55}
            height={40}
            className="rounded-full border-[#ffffff] border-2 hover:shadow-[0_0_10px_#ffffff] transition-shadow"
          />
          <p className="font-mono text-[28px] m-[20px] font-bold lg:block md:block hidden text-white">
            Muhammad Fajar Sidiq
          </p>
        </a>
        <div className="flex justify-between  w-[33vw]  text-white font-mono text-[20px] font-bold gap-[5px] min-w-[150px]">
          <a onClick={() => scrollToSection("home")}>
            <p className="  hover:text-purple-400 cursor-pointer ">Home</p>
          </a>
          <a onClick={() => scrollToSection("about")}>
            {" "}
            <p className="  hover:text-purple-400 cursor-pointer ">About</p>
          </a>
          <a onClick={() => scrollToSection("lab")}>
            {" "}
            <p className="  hover:text-purple-400 cursor-pointer ">Lab</p>
          </a>
        </div>
      </div>
    </div>
  );
}
