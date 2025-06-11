"use client";

import { Button } from "../ui/button";

interface ScrollButtonProps {
  id: string;
}

export default function ScrollButton({ id }: ScrollButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      className="bg-blue-50 text-black hover:text-white hover:bg-[#6F667F] w-[125px] h-[45px] text-[20px] font-bold m-[10px]"
      onClick={handleClick}
    >
      Projects
    </Button>
  );
}
