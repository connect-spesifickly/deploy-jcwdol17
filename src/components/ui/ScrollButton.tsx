"use client";

import { Button } from "./button";

interface ScrollButtonProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function ScrollButton({
  id,
  className,
  children,
}: ScrollButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button className={className} onClick={handleClick}>
      {children}
    </Button>
  );
}
