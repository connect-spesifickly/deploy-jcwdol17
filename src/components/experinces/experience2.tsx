import * as React from "react";

export function Experience2() {
  return (
    <div className=" p-[33px] rounded-lg py-1 shadow-[0_0_10px_#ffffff] hover:shadow-[0_0_20px_#ffffff] hover:scale-105 radialGradient4">
      <div
        className="flex flex-row justify-between text-[15px] lg:text-[24px] md:text-[24px]  font-bold mx-auto text-[#dce0de] font-mono items-center text-center lg:my-[39px]
            md:my-[29px] my-[19px]"
      >
        <div className="flex gap-2">
          <h2 className="">Fullstack </h2>{" "}
          <h2 className="lg:block md:block hidden">Developer</h2>
        </div>
        <h2>Oct 2024 - Dec 2024</h2>
      </div>
      <div className="flex flex-col items-start text-[15px] lg:text-[24px] md:text-[24px]  font-bold mx-auto text-[#cfd4d1] font-mono">
        <h2
          className="lg:mb-[39px]
            md:mb-[29px] my-[19px]"
        >
          A Corporation Partner
        </h2>
        <div className=" font-light ">
          <h2 className="text-[#dce0de]">I take responsibility for :</h2>
          <ul className="list-disc pl-[20px] text-[#dce0de]">
            {" "}
            <li className="lg:my-[29px] md:my-[19] my-[9px] ">
              Build mini market app operation (include show, pick, add and buy)
              using Java Script and HTML.
            </li>
            <li className="lg:my-[29px] md:my-[19] my-[9px] ">
              Slicing Gojek website that improve flexibility whitout too rigit
              in the website main display.
            </li>
            <li className="lg:my-[29px] md:my-[19] my-[9px]">
              Improve Todo List App until the todo list can be created
              repeatedly and can manipulate existing lists.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
