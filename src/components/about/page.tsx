"use client";
import * as React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";
export default function About() {
  const [ImageName] = useState<string[]>([
    "OnTime3",
    "Professional",
    "Communicative",
    "LearnerIcon",
    "WantToUnderstand2",
    "DeepField",
  ]);
  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="md:h-screen lg:h-screen h-auto flex justify-center pt-[160px] lg:pt-[175px]">
      <div className="max-w-[1215px] mx-auto lg:px-[33px] px-[13px]">
        <div className="text-white text-center">
          <h1 className="text-[2.91rem] font-bold w-auto lg:w-auto text-[#ffffff] font-mono text-center mt-[-20px] my-[50px]">
            About Me
          </h1>
          <h2 className="text-auto text-[20px] font-extralight italic w-auto text-[#ffffff] font-roboto flex flex-col justify-rounded items-center text-center my-[50px]">
            I Interest in web development and Developing web application for
            around 5 months
          </h2>
        </div>
        <div className="flex text-white lg:flex-row md:flex-row flex-col gap-[30px]">
          <div className="flex-col">
            <h2 className="p-[10px] text-center font-mono text-[24px] font-bold">
              Get to know me !
            </h2>
            <p className="p-[10px]">
              My main skills are about JavaScript (i can use TypeScript too),
              React (exacty, i use Next js), HTML and CSS (actually i usually
              use JSX and Tailwind).
            </p>
            <p className="p-[10px]">
              My principles of work are: On Time, Professional, Communicative,
              Always learn and growth, Want to Understand, go deep into field of
              work
            </p>
            <div className="my-[40px] flex justify-between mx-[4px]">
              {" "}
              {ImageName.map((item, key) => (
                // eslint-disable-next-line react/jsx-key
                <Image
                  key={key}
                  width={300}
                  height={300}
                  src={`/images/${item}.png`}
                  alt=""
                  className="radialGradient2 shadow-[0_0_15px_#ffffff] rounded-full h-[52px] w-[52px] hover:w-[60px] hover:h-[60px] hover:mt-[-5px]"
                />
              ))}
            </div>
          </div>
          <div className="flex-col">
            <h2 className="p-[10px] text-center font-mono text-[24px] font-bold">
              My skills around
            </h2>
            <p className="p-[10px]">
              Front-End Skills: Technologies like HTML, CSS, JavaScript or
              TypeScript, React, Next js and Tailwind.
            </p>
            <p className="p-[10px]">
              Back-End Skills: Frameworks and languages like Node.js, and other
              skills still learning like Python and Express.
            </p>
            <p className="p-[10px]">
              DevOps & Tools: Tools used in development (that i still learn),
              such as Docker, Git, Jenkins, AWS, or CI/CD solutions.
            </p>
            <Button
              className="bg-blue-50 text-black hover:text-white hover:bg-[#6F667F] w-[125px] h-[45px] text-[20px] font-bold m-[10px]"
              // eslint-disable-next-line react/no-string-refs
              onClick={() => scrollToSection("lab")}
            >
              Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
