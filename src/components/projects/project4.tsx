import * as React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";
export function Project4() {
  const [GoJekToolsImg] = useState<string[]>([
    "html5", //
    "ts2", //
    "react3", //
    "git2", //
    "next4", //
    "gitHub3", //
    "tailwind", //
    "supabase", //
    "postgresql",
    "nodejs6",
  ]);
  return (
    <div>
      <div className="flex lg:flex-row-reverse md:flex-col flex-col max-w-[1300px] bg-white lg:mx-[30px] mx-[30px] rounded-lg shadow-[0_0_10px_#ffffff] hover:shadow-[0_0_20px_#ffffff] hover:scale-105 transition-transform projectsContainer">
        <div className="md:border-l-2 flex flex-col lg:w-[40vw] w-auto p-[1.2rem] pb-[11px] mx-[10px] relative">
          <h1 className="font-spaceMono text-[32px] font-bold mt-[11px] pb-[8px]">
            Job Board Platform (2025)
          </h1>
          <p className="font-roboto text-[20px] pb-[18px] text-justify ">
            Platform where we can search, apply, and post some jobs.
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
          <a href="https://workase.vercel.app/">
            <Button
              className=" bg-[#3658B9] text-white hover:text-white hover:bg-[#0437c2] w-[125px] h-[45px] text-[20px] font-bold mb-[20px] absolute bottom-2 shadow-[0_0_5px_#3658B9]
          hover:shadow-[0_0_10px_#3658B9] hover:bottom-2.5 transition-shadow"
            >
              See Project
            </Button>
          </a>
        </div>
        <div className=" text-justify relative w-60vw lg:flex imgContainer">
          <div className="">
            <Image
              width={300}
              height={300}
              src={`/images/workase-porto.png`}
              alt=""
              className="imgProject w-[100vw] h-full lg:rounded-l-lg"
            />
          </div>
          <div
            className="description inset2 lg:absolute 
          lg:opacity-0 transition-opacity px-[2.4rem] py-[2.1rem] lg:rounded-l-lg"
          >
            <h1 className="font-spaceMono text-[28px] font-bold py-[10px]">
              Description & Goals
            </h1>
            <div className=" py-[7px]">
              <p className="font-roboto text-[18px]">
                <b>Situation :</b> Job seekers and companies needed an efficient
                platform to connect, search for jobs, and post opportunities in
                a streamlined and user-friendly way.
              </p>
            </div>
            <div className=" py-[7px]">
              <p className="font-roboto text-[18px]">
                <b>A Task :</b> I was responsible for developing core features
                of the platform and ensuring a seamless user experience for both
                job seekers and companies.
              </p>
            </div>
            <div className=" py-[7px]">
              <p className="font-roboto text-[18px]">
                <b>Action :</b> I collaborated closely with the team to design
                and build the platform using modern web technologies. We
                integrated features such as secure authentication, job search
                functionality, and interactive dashboards to enhance usability
                and engagement.
              </p>
            </div>
            <div className=" py-[7px]">
              <p className="font-roboto text-[18px]">
                <b>Result :</b> The platform was successfully developed and
                received a score of 85.2 out of 100, reflecting its
                effectiveness and usability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
