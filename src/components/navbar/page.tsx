// "use client";
import Image from "next/image";
import * as React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-around items-center h-100vh bg-[rgba(26,10,46)] sticky top-0 h-10 vh">
      <a href="">
        <Image
          src="/images/logo.png"
          alt=""
          width={55}
          height={40}
          className="rounded-full hover:bg-[rgba(210,181,245,0.1)]"
        />
      </a>
      <div className="flex justify-between  w-1/3 vw  text-white font-plus-jakarta-sans hover:pointer-events-auto gap-[25px]">
        <a href="#home">
          <p className="jakarta hover:underline">Home</p>
        </a>
        <a href="#about">
          {" "}
          <p className="jakarta hover:underline">About</p>
        </a>
        <a href="#lab">
          {" "}
          <p className="jakarta hover:underline">Lab</p>
        </a>
      </div>
    </div>
  );
}
