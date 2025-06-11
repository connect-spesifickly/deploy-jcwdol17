import * as React from "react";
import { Experience1 } from "./experience1";

export function Experiences() {
  return (
    <div className="">
      <div className=" h-auto flex justify-center ">
        <div className="text-white ">
          <h1
            className="text-[2.3rem] font-bold w-auto lg:w-auto text-[#dce0de] font-mono mt-[-20px] lg:my-[50px]
            md:my-[42.5px] my-[25px] text-center"
          >
            Experiences
          </h1>
          <div className="lg:mb-[100px] md:mb-[90px] mb-[65px]  rounded-lg py-1 max-w-[1200px] px-[33px] ">
            <Experience1 />
          </div>
        </div>
      </div>
    </div>
  );
}
