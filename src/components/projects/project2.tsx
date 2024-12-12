import * as React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";
export function Project2() {
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
    "tailwind",
  ]);
  return (
    <div>
      <div className="flex lg:flex-row-reverse md:flex-col flex-col max-w-[1300px] bg-white lg:mx-[30px] mx-[30px] rounded-lg shadow-[0_0_10px_#ffffff] hover:shadow-[0_0_20px_#ffffff] hover:scale-105 transition-transform projectsContainer">
        <div className="flex flex-col lg:w-[40vw] w-auto p-[1.2rem] pb-[11px] mx-[10px] relative">
          <h1 className="font-spaceMono text-[32px] font-bold mt-[11px] mb-[8px]">
            To-Do List Project
          </h1>
          <p className="font-roboto text-[20px] py-[7px]">
            Todo list that can save, check, remove, and edit your todo list.
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
          <a href="https://github.com/connect-spesifickly/porto-Todo-list/tree/main/ReactMaterial/todo-list">
            <Button
              className=" bg-[#3658B9] text-white hover:text-white hover:bg-[#0437c2] w-[125px] h-[45px] text-[20px] font-bold mb-[20px] absolute bottom-2 shadow-[0_0_5px_#3658B9]
          hover:shadow-[0_0_10px_#3658B9] hover:bottom-2.5 transition-shadow"
            >
              See Project
            </Button>
          </a>
        </div>
        <div className=" relative w-60vw lg:flex imgContainer">
          <div className="">
            <Image
              width={300}
              height={300}
              src={`/images/todoList4.png`}
              alt=""
              className="imgProject w-[100vw] h-full lg:rounded-l-lg"
            />
          </div>
          <div
            className="description inset2 lg:absolute 
          lg:opacity-0 transition-opacity p-[2.4rem] lg:rounded-l-lg"
          >
            <h1 className="font-spaceMono text-[28px] font-bold py-[10px]">
              Description & Goals
            </h1>
            <div className=" py-[7px]">
              <p className="font-roboto text-[18px]">
                <b>Situation :</b> Todo list apps are very commonly used in our
                daily lives, but unfortunately there are still few or rarely
                those that are reusable, and that is a wasteful actions.
              </p>
            </div>
            <div className=" py-[7px]">
              <p className="font-roboto text-[18px]">
                <b>A Task :</b> To make a better todo list app. I have trying to
                create app with local fake database so that todo lists can be
                created repeatedly and can manipulate existing lists.
              </p>
            </div>
            <div className=" py-[7px]">
              <p className="font-roboto text-[18px]">
                <b>Action :</b> Using <b>Next JS</b> framework, <b>Tailwind</b>{" "}
                framework CSS, <b>React</b> library, and <b>VS Code</b> code
                editor. I try to create the web app using <b>HTML</b>,{" "}
                <b>CSS</b> and <b>TS</b>. To build fake api i use json. And I
                store using <b>Git</b> and <b>GitHub</b>. Now, I`m trying adding
                CMS to show it.
              </p>
            </div>
            <div className=" py-[7px]">
              <p className="font-roboto text-[18px]">
                <b>Result :</b> After building fake api and create database and
                the algorithm, I can create todo list app that more reusable and
                efficient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
