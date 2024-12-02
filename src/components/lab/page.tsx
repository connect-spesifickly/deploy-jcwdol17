import * as React from "react";
import Image from "next/image";

export default function Lab() {
  return (
    <div className="">
      <h1 className="pt-[40px]  flex justify-center mt-[300px] text-2xl font-semibold text-white font-poppins">
        Projects
      </h1>
      <p className="flex justify-center text-lg text-white font-preahvihear  font-extralight">
        Projects i`ve built so far`
      </p>
      <div className="flex w-full justify-center">
        <div
          className="mt-[20px] text-white font-Poppins relative w-[600px]"
          id="container"
        >
          <h1 className="font-semibold text-xl font-poppins">
            Slicing Gojek Web Project
          </h1>
          <div className="flex justify-end" id="item">
            <div className="shadow-[0_0_10px_#38186B] absolute bg-[rgba(96,78,119,0.8)] w-[280px] h-auto left-0 rounded-2xl backdrop-filter backdrop-blur-xs">
              <p className="ml-1">
                In this project, i try to replicate Gojek website to increase my
                skill in using CSS and HTML. I enjoy it very much.
                <br />
                <br />
                You can click this `
                <b>
                  <a href="https://porto-1a.vercel.app/">Vercel</a>
                </b>
                ` to look it. Or this{" "}
                <b>
                  `
                  <a href="https://github.com/connect-spesifickly/porto-1a">
                    Github
                  </a>
                </b>{" "}
                ` to see my code. Don`t use smartphone to look it, Oke
              </p>
            </div>
            <Image
              src="/images/gojek-porto.png"
              alt=""
              width={150}
              height={20}
              className=" w-[270px] h-[auto] shadow-[0_0_15px_#ffffff] rounded-2xl"
            />
          </div>
        </div>
      </div>
      {/* second project */}
      <div className="flex w-full justify-center">
        <div
          className="mt-[20px] text-white font-Poppins relative w-[600px]"
          id="container"
        >
          <h1 className="font-semibold text-xl font-poppins">
            To-Do List Project with Next JS
          </h1>
          <div className="flex justify-end" id="item">
            <div className="shadow-[0_0_10px_#38186B] absolute bg-[rgba(96,78,119,0.6)] w-[280px] h-auto left-0 rounded-2xl backdrop-filter backdrop-blur-xs">
              <p className="ml-1">
                This project is very complicated, beacause i should use all my
                technology skills to finish this project.
                <br />
                <br />
                I`m sorry, but this project can`t be deployed on Vercel, because
                i use json-server, just can in `{" "}
                <b>
                  `
                  <a href="https://github.com/connect-spesifickly/porto-Todo-list/tree/main/ReactMaterial/todo-list">
                    Github
                  </a>
                </b>{" "}
                `
              </p>
            </div>
            <Image
              src="/images/todoList.png"
              alt=""
              width={150}
              height={20}
              className=" w-[270px] h-[auto] shadow-[0_0_15px_#ffffff] rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
