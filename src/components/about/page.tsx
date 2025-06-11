"use client";
import * as React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";

const ScrollButton = dynamic(() => import("./ScrollButton"), { ssr: false });

export default function About() {
  const [ImageName] = useState<string[]>([
    "OnTime3",
    "Professional",
    "Communicative",
    "LearnerIcon",
    "WantToUnderstand2",
    "DeepField",
  ]);

  return (
    <div className="md:h-screen lg:h-screen h-auto flex justify-center pt-[160px] lg:pt-[175px]">
      <div className="max-w-[1215px] mx-auto lg:px-[33px] px-[13px]">
        <div className="text-white text-center">
          <h1 className="text-[2.3rem] font-bold w-auto lg:w-auto text-[#ffffff] font-mono text-center mt-[-20px] my-[50px]">
            About Me
          </h1>
          <h2 className="text-auto text-[20px] font-extralight italic w-auto text-[#ffffff] font-roboto flex flex-col justify-rounded items-center text-center my-[50px]">
            I Interest in web development and Developing web application for
            around 1 year
          </h2>
        </div>
        <div className="flex text-white lg:flex-row md:flex-row flex-col gap-[30px]">
          <div className="flex-col text-justify">
            <h2 className="p-[10px] text-center font-mono text-[24px] font-bold">
              Get to know me !
            </h2>
            <p className="p-[10px]">
              I usually work using Agile and Scrum methodologies. My main skills
              include JavaScript (and TypeScript), React (specifically with
              Next.js), HTML and CSS (typically using TSX and Tailwind CSS), as
              well as Node.js (with Express and TypeScript).
            </p>
            <p className="p-[10px]">
              My work principles are: being punctual, professional,
              communicative, always learning and growing, eager to understand,
              and deeply committed to my field of work.
            </p>
            <div className="my-[40px] flex justify-between mx-[4px]">
              {ImageName.map((item, key) => (
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
          <div className="flex-col text-justify">
            <h2 className="p-[10px] text-center font-mono text-[24px] font-bold">
              My skills around
            </h2>
            <p className="p-[10px]">
              Front-End Skills: Technologies like HTML5, CSS3, JavaScript (ES6+)
              or TypeScript, React, Next js and Tailwind CSS.
            </p>
            <p className="p-[10px]">
              Back-End Skills: Frameworks and languages like Node.js, Express.js
              and other skills like Prisma ORM, PostgreSQL, RESTful APIs, also
              other tools like Supabase or Postman.
            </p>
            <p className="p-[10px]">
              DevOps & Tools: Tools used in development, such as Docker, Git adn
              GitHub, Vercel or CI/CD solutions.
            </p>
            <ScrollButton id="lab" />
          </div>
        </div>
      </div>
    </div>
  );
}
