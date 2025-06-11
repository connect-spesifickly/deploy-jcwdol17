import * as React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";
export function Project3() {
  const [GoJekToolsImg] = useState<string[]>([
    "html5",
    "css3",
    "javaScript2",
    "react3",
    "vsCode",
    "git2",
    "next4",
    "gitHub3",
    "ts2",
    "vercel4",
  ]);
  return (
    <div>
      <div className=" flex lg:flex-row md:flex-col flex-col max-w-[1300px] bg-white lg:mx-[30px] mx-[30px] rounded-lg shadow-[0_0_10px_#ffffff] hover:shadow-[0_0_20px_#ffffff] hover:scale-105 transition-transform projectsContainer">
        <div className="md:border-r-2 flex flex-col lg:w-[40vw] w-auto p-[1.2rem] pb-[11px] mx-[10px] relative">
          <h1 className="font-spaceMono text-[32px] font-bold mt-[11px] pb-[8px] ">
            Blibli Clone Project (2024)
          </h1>
          <p className="font-roboto text-[20px] pb-[18px] text-justify ">
            Front-end challenge to built e-commerce website
          </p>

          <div className="flex flex-wrap w-auto gap-[7.5px] mb-[75px]">
            {GoJekToolsImg.map((item, key) => (
              // eslint-disable-next-line react/jsx-key
              <Image
                key={key}
                width={300}
                height={300}
                src={`/images/${item}.png`}
                alt=""
                className="radialGradient3 shadow-[0_0_15px_#ffffff] rounded-lg h-[52px] w-[52px]"
              />
            ))}
          </div>
          <a href="https://marketplace-task-oi5z.vercel.app/">
            <Button
              className=" bg-[#3658B9] text-white hover:text-white hover:bg-[#0437c2] w-[125px] h-[45px] text-[20px] font-bold mb-[20px] absolute bottom-2 shadow-[0_0_5px_#3658B9]
          hover:shadow-[0_0_10px_#3658B9] hover:bottom-2.5 transition-shadow"
            >
              See Project
            </Button>
          </a>
        </div>
        <div className=" relative w-60vw lg:flex imgContainer text-justify">
          <div className="">
            <Image
              width={300}
              height={300}
              src={`/images/blibli-porto.png`}
              alt=""
              className="imgProject w-[100vw] h-full lg:rounded-r-lg"
            />
          </div>
          <div
            className="description inset1 lg:absolute 
          lg:opacity-0 transition-opacity px-[2.4rem] py-[1.6rem] lg:rounded-r-lg"
          >
            <h1 className="font-spaceMono text-[28px] font-bold py-[10px]">
              Description & Goals
            </h1>
            <div className=" py-[7px]">
              <p className="font-roboto text-[18px]">
                <b>Situation :</b> During my year-end holiday downtime, I wanted
                to challenge myself by working on a front-end project. I chose
                to recreate the basic layout and key features of the Blibli
                e-commerce website.
              </p>
            </div>
            <div className=" py-[7px]">
              <p className="font-roboto text-[18px]">
                <b>A Task :</b> The goal was to build a responsive user
                interface and implement secure authentication functionality,
                simulating a real-world e-commerce environment.
              </p>
            </div>
            <div className=" py-[7px]">
              <p className="font-roboto text-[18px]">
                <b>Action :</b> I used <b>Next.js, Tailwind CSS,</b> and{" "}
                <b>NextAuth</b> to develop the application. I focused on
                creating a fully responsive UI and built login/register pages
                with secure authentication flow.
              </p>
            </div>
            <div className=" py-[7px]">
              <p className="font-roboto text-[18px]">
                <b>Result :</b> Most of the core features were successfully
                implemented. This project significantly improved my skills in
                front-end development and secure authentication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
