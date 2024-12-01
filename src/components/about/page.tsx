import * as React from "react";
import Image from "next/image";
export default function About() {
  return (
    <div>
      <div className="w-full h-1/6 vh flex gap-[10px] justify-center items-center pt-[40px] pb-[40px]">
        <div
          className=" w-[220px] h-[220px] bg-[#120822] rounded-full shadow-[0_0_150px_#ffffff] flex justify-center items-center radialGradient "
          id="bgAccount"
        >
          <Image
            width={158}
            height={159}
            src="/images/MyAccount.png"
            alt=""
            className=""
          />
        </div>
        <h1 className="text-3xl font-bold w-[300px] md:w-auto lg:w-auto text-[#ffffff] font-preahvihear">
          Hello! My Name Fajar, <br />
          I`m a Fullstack Developer
        </h1>
      </div>
      <div
        id="tech"
        className="w-full h-[90px] flex flex-col items-center justify-rounded mt-[35px]"
      >
        <p className="text-white font-preahvihear text-2xl mb-[40px] font-extrabold">
          My tecnology infrastructure
        </p>
        <p className="text-lg text-white font-preahvihear mt-[-40px] mb-[40px] font-extralight">
          Technologies i`ve been working with recently
        </p>
        <div id="logo" className=" grid grid-cols-4 gap-[45px] rounded-full">
          <Image
            src="/images/html5.png"
            alt=""
            width={50}
            height={50}
            className="radialGradient2 shadow-[0_0_15px_#ffffff] rounded-full w-[53px] h-[50px]"
          />
          <Image
            src="/images/css.png"
            alt=""
            width={50}
            height={50}
            className="radialGradient2 shadow-[0_0_15px_#ffffff] rounded-full h-[50px] w-[55px]"
          />
          <Image
            src="/images/javaScript2.png"
            alt=""
            width={50}
            height={50}
            className="radialGradient2 shadow-[0_0_15px_#ffffff] rounded-full h-[52px] w-[52px]"
          />
          <Image
            src="/images/vsCode.png"
            alt=""
            width={50}
            height={50}
            className="radialGradient2 shadow-[0_0_15px_#ffffff] rounded-full h-[50px] w-[52px]"
          />
          <Image
            src="/images/git.png"
            alt=""
            width={50}
            height={50}
            className="radialGradient2 shadow-[0_0_15px_#ffffff] rounded-full h-[50px] w-[52px]"
          />
          <Image
            src="/images/gitHub3.png"
            alt=""
            width={50}
            height={50}
            className="radialGradient2 shadow-[0_0_15px_#ffffff] rounded-full h-[52px] w-[55px]"
          />
          <Image
            src="/images/react3.png"
            alt=""
            width={50}
            height={50}
            className="radialGradient2 shadow-[0_0_15px_#ffffff] rounded-full h-[50px] w-[50px]"
          />
          <Image
            src="/images/next4.png"
            alt=""
            width={50}
            height={50}
            className="radialGradient2 shadow-[0_0_15px_#ffffff] rounded-full h-[50px] w-[50px]"
          />
          <Image
            src="/images/tailwind.png"
            alt=""
            width={50}
            height={50}
            className="radialGradient2 shadow-[0_0_15px_#ffffff] rounded-full h-[47px]"
          />
          <Image
            src="/images/ts2.png"
            alt=""
            width={50}
            height={50}
            className="radialGradient2 shadow-[0_0_15px_#ffffff] rounded-full h-[47px]"
          />
          <Image
            src="/images/node2.png"
            alt=""
            width={50}
            height={50}
            className="radialGradient2 shadow-[0_0_15px_#ffffff] rounded-full h-[47px]"
          />
          <Image
            src="/images/vercel3.png"
            alt=""
            width={50}
            height={50}
            className="radialGradient2 shadow-[0_0_15px_#ffffff] rounded-full h-[47px]"
          />
        </div>
      </div>
    </div>
  );
}
