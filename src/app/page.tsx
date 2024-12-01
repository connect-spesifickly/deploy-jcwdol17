import React from "react";
import Navbar from "@/components/navbar/page";
import About from "@/components/about/page";
import Lab from "@/components/lab/page";
import Footer from "@/components/footer/page";
export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <div className="w-100% h-[1455px] bg-[#11071F]">
        <div className="" id="about">
          <About />
        </div>
        <div className="" id="lab">
          <Lab />
        </div>
        <Footer />
      </div>
    </div>
  );
}
