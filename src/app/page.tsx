"use client";
import React from "react";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import Hero from "@/components/hero/page";
import About from "@/components/about/page";
import Projects from "@/components/projects/page";
import { Experiences } from "@/components/experinces/page";
import { Testimony } from "@/components/testimony/page";
export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <div className="w-100% h-auto bg-[#11071F]">
        <div className="">
          <Hero />
        </div>
        <div className="" id="about">
          <About />
        </div>
        <div className="" id="lab">
          <Projects />
        </div>
        <div className="">
          <Experiences />
        </div>
        <div className="">
          <Testimony />
        </div>
        <Footer />
      </div>
    </div>
  );
}
