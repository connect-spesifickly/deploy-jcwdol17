"use client";
import * as React from "react";

export function Experience1() {
  return (
    <div className=" text-justify  p-[33px] rounded-lg py-1 shadow-[0_0_10px_#ffffff] hover:shadow-[0_0_20px_#ffffff] hover:scale-105 radialGradient4">
      <div
        className="flex flex-row justify-between text-[15px] lg:text-[24px] md:text-[24px]  font-bold mx-auto text-[#dce0de] font-mono items-center text-center lg:my-[26px]
            md:my-[20px] mt-[19px]"
      >
        <div className="flex gap-2">
          <h2 className="lg:block md:block hidden">Community</h2>{" "}
          <h2 className="">Volunteer</h2>
        </div>
        <h2>Aug 2020 - Jun 2025</h2>
      </div>
      <div className="flex flex-col items-start text-[15px] lg:text-[24px] md:text-[24px]  font-bold mx-auto text-[#cfd4d1] font-mono">
        <h2
          className="lg:mb-[39px]
            md:mb-[29px] my-[19px]"
        >
          Yayasan Al-Kahfi
        </h2>
        <div className=" font-light ">
          <h2 className="text-[#dce0de]">I take responsibility for :</h2>
          <ul className="list-disc pl-[20px] text-[#dce0de]">
            <li className="lg:my-[29px] md:my-[19] my-[9px] ">
              Supported community development programs with a focus on youth
              empowerment and Islamic education.
            </li>
            <li className="lg:my-[29px] md:my-[19] my-[9px] ">
              Participated in organizing educational events, social initiatives,
              and fundraising activities.
            </li>
            <li className="lg:my-[29px] md:my-[19] my-[9px]">
              Helped manage logistics and documentation for local programs and
              volunteer coordination.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
