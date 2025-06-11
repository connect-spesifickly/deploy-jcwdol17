"use client";
import * as React from "react";
import { Project1 } from "./project1";
import { Project2 } from "./project2";
import { Project3 } from "./project3";
import { Project4 } from "./project4";
export default function Projects() {
  return (
    <div className="  pt-[120px] lg:pt-[125px] h-full items-center my:mb-[0px] lg:my-[0px] my-[200px]  max-w-[1200px] mx-auto">
      <h1 className=" text-[2.3rem] font-bold w-auto lg:w-auto text-[#ffffff] font-mono text-center mt-[-20px]">
        Projects
      </h1>
      <div className="my-[50px]">
        <Project1 />
      </div>
      <div className="my-[150px]">
        <Project2 />
      </div>
      <div className="my-[150px]">
        <Project3 />
      </div>
      <div className="my-[150px]">
        <Project4 />
      </div>
    </div>
  );
}
