import * as React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="">
      <div className="mt-[50px]">
        <div className=" h-auto flex justify-center items-center">
          <div className="text-white h-[88vh]">
            <h1
              className="text-[2.91rem] font-bold w-auto lg:w-auto text-[#dce0de] font-poppins lg:my-[5px]
            md:my-[2.5px] text-center my-[2.5px]"
            >
              Contact
            </h1>
            <p className="flex justify-center text-white font-preahvihear lg:text-[24px] md:text-[24px] text-[23px] font-extralight">
              Have project in mind? Let`s Contact
            </p>
            <div className="max-w-[1200px] rounded-lg ">
              <div className=" rounded-lg bg-white ">
                <div
                  className="flex flex-row justify-between text-[15px] lg:text-[24px] md:text-[24px]  font-bold mx-auto items-center  lg:my-[39px]
            md:my-[29px] my-[19px] gap-[10px]"
                >
                  <div className=" p-[33px] bg-[#12071F] w-[100vw]">
                    <div className="flex flex-row justify-between items-center my-[12px]">
                      <h2 className="font-preahvihear text-[16px]">
                        My Email : <b>Altitude.Altair@gmail.com</b>
                      </h2>
                      <a
                        href="https://www.linkedin.com/in/muhammad-fajar-sidiq-56b879258/?originalSubdomain=id"
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
                    <form
                      action=""
                      className=" flex flex-col  text-black rounded-lg gap-1 bg-white p-[33px]"
                    >
                      <label htmlFor="name">Name :</label>
                      <input
                        className="border-[#1A0A2E] border-2 rounded-lg"
                        type="text"
                        id="name"
                        name="name"
                        required
                      />

                      <label htmlFor="email">Email :</label>
                      <input
                        className="border-[#1A0A2E] border-2 rounded-lg"
                        type="text"
                        id="email"
                        name="email"
                        required
                      />

                      <label htmlFor="message">Message :</label>
                      <textarea
                        className="border-[#1A0A2E] border-2 rounded-lg"
                        name="message"
                        id="message"
                        required
                      ></textarea>

                      <button
                        className="border-[#1A0A2E] border-2 rounded-lg hover:text-white hover:bg-[#1A0A2E] transition-all"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </form>
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
