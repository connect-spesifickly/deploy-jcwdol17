"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-[1200px] p-[20px]">
        <div className="w-full h-1/6 vh flex gap-[10px] justify-center items-center"></div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-auto text-[3.91rem] font-bold w-auto lg:w-auto text-[#ffffff] font-mono text-center mt-[-20px]">
            Hey, I`m Fajar!
          </h1>
          <div className="text-auto text-[24px] md:text-[30px] lg:text-[30px] font-extralight w-auto text-[#ffffff] font-roboto flex flex-col justify-rounded items-center text-center">
            {" "}
            <p className="p-[24px]">
              Fullstack Developer who enjoy bulding <b>scalable </b> and{" "}
              <b>fast</b> web solution for your business need
            </p>
          </div>
          <Button
            className="bg-blue-50 text-black hover:text-white hover:bg-[#6F667F] w-[135px] h-[50px] text-[20px] font-bold m-[2.5px] mt-[10px] mb-[45px]"
            onClick={() => scrollToSection("about")}
          >
            About Me
          </Button>
        </div>
      </div>
    </div>
  );
}
