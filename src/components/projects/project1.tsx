import * as React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";
export function Project1() {
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
      <div className="flex lg:flex-row md:flex-col flex-col max-w-[1300px] bg-white lg:mx-[30px] mx-[30px] rounded-lg shadow-[0_0_10px_#ffffff] hover:shadow-[0_0_20px_#ffffff] hover:scale-105 transition-transform projectsContainer">
        <div className="flex flex-col lg:w-[40vw] w-auto p-[1.2rem] pb-[11px] mx-[10px] relative">
          <h1 className="font-spaceMono text-[32px] font-bold mt-[11px] mb-[8px]">
            Slicing Gojek Web
          </h1>
          <p className="font-roboto text-[20px] py-[7px]">
            GoJek Home Page that show how big Gojek Company
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
          <Button
            className=" bg-[#3658B9] text-white hover:text-white hover:bg-[#0437c2] w-[125px] h-[45px] text-[20px] font-bold mb-[20px] absolute bottom-2 shadow-[0_0_5px_#3658B9]
          hover:shadow-[0_0_10px_#3658B9] hover:bottom-2.5 transition-shadow"
          >
            See Project
          </Button>
        </div>
        <div className=" relative w-60vw lg:flex imgContainer">
          <div className="">
            <Image
              width={300}
              height={300}
              src={`/images/gojek-porto2.png`}
              alt=""
              className="imgProject w-[100vw] h-full lg:rounded-r-lg"
            />
          </div>
          <div
            className="description inset1 lg:absolute 
          lg:opacity-0 transition-opacity p-[2.4rem] lg:rounded-r-lg"
          >
            <h1 className="font-spaceMono text-[28px] font-bold py-[10px]">
              Description & Goals
            </h1>
            <div className=" py-[7px]">
              <p className="font-roboto text-[18px]">
                <b>Situation :</b> Go Jek`s main page has a response that is too
                rigid and does not provide a flexible response to changes in the
                appearance of the hero section.
              </p>
            </div>
            <div className=" py-[7px]">
              <p className="font-roboto text-[18px]">
                <b>A Task :</b> To make better display of Go Jek`s main page. I
                try to slice it and improve hero section with a display that
                provides more flexibility whitout too rigid.
              </p>
            </div>
            <div className=" py-[7px]">
              <p className="font-roboto text-[18px]">
                <b>Action :</b> Using <b>Next JS</b> framework, <b>React</b>{" "}
                library, and <b>VS Code</b> code editor. I try to slice the web{" "}
                <b>HTML</b> and improve the <b>CSS</b>. To store code i use{" "}
                <b>Git</b> and <b>GitHub</b> and deploy it to <b>Vercel</b>
              </p>
            </div>
            <div className=" py-[7px]">
              <p className="font-roboto text-[18px]">
                <b>Result :</b> After slicing and improving the hero section, Go
                Jek`s main page has a more flexiblility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
