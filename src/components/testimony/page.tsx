import * as React from "react";

export function Testimony() {
  return (
    <div className="mt-[50px]">
      <div className=" h-screen flex justify-center items-center">
        <div className="text-white ">
          <h1
            className="text-[2.3rem] font-bold w-auto lg:w-auto text-[#dce0de] font-mono mt-[-20px] lg:my-[50px]
            md:my-[42.5px] text-center my-[25px]"
          >
            Impression
          </h1>
          <div className="lg:mb-[100px] md:mb-[90px] mb-[65px] py-1 max-w-[1200px]">
            <div className="  py-1">
              <div
                className="flex flex-col justify-between text-[15px] lg:text-[20px] md:text-[20px]  font-bold mx-auto text-[#dce0de] font-mono items-center  lg:my-[39px]
            md:my-[29px] my-[19px] px-[33px] gap-[10px]"
              >
                <h2 className="text-center pb-[50px]">
                  Fajar menunjukkan antusiasme tinggi dalam belajar hal baru dan
                  aktif membangun komunikasi yang jelas dan terarah, sehingga
                  kolaborasi dalam tim berjalan efektif. Ia juga membawa energi
                  positif yang membuat proses diskusi dan pengarahan menjadi
                  lebih mudah dan menyenangkan.
                </h2>
                <div className="text-center">
                  <h2 className="text-[12px] lg:text-[18px] md:text-[18px] ">
                    — Rachmat Syahputra, Fullstack Developer (Bootcamp Final
                    Project Teammate)
                  </h2>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
