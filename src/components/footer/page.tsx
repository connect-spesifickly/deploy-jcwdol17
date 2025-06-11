import * as React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="">
      <div className="mt-[50px]">
        <div className=" h-auto flex justify-center items-center">
          <div className="text-white h-[100vh] flex flex-col justify-center items-center">
            <h1
              className="text-[2rem] font-bold w-auto lg:w-auto text-[#dce0de] font-poppins lg:my-[5px]
            md:my-[2.5px] text-center my-[2.5px]"
            >
              Thank You For Your Attention
            </h1>
            <p className="flex justify-center text-white font-preahvihear lg:text-[20px] md:text-[20px] text-[18px] font-extralight">
              Have project in mind? Let`s Contact
            </p>
            <div className="max-w-[1200px] rounded-lg ">
              <div className=" rounded-lg bg-white ">
                <div
                  className="flex flex-row justify-between text-[15px] lg:text-[24px] md:text-[24px]  font-bold mx-auto items-center  lg:my-[39px]
            md:my-[29px] my-[19px] gap-[10px]"
                >
                  <div className=" bg-[#12071F] w-full px-4">
                    <div className="flex flex-row justify-between items-center my-[2px] max-w-[600px] gap-8">
                      <h2 className="font-preahvihear text-[18px]">
                        My Email : <b>Altitude.Altair@gmail.com</b>
                      </h2>
                      <div className="h-full border border-r border-white "></div>
                      <a
                        href="https://www.linkedin.com/in/muhammad-fajar-sidiq-916879258/"
                        className=" transition-transform"
                      >
                        <Image
                          src="/images/linkedin.png"
                          alt=""
                          width={30}
                          height={30}
                          className="rounded-full border-[#ffffff] border-2 hover:shadow-[0_0_10px_#ffffff] transition-shadow"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
