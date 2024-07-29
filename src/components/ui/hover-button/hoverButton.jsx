import React, { useRef } from "react";
import "./hoverButton.css";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HoverButton = ({ href, content }) => {
  const spanRef = useRef(null);

  const handleMouseOver = (e) => {
    const span = spanRef.current;
    const button = e.currentTarget;
    span.style.left = e.pageX - button.offsetLeft + "px";
    span.style.top = e.pageY - button.offsetTop + "px";
  };

  const handleMouseOut = (e) => {
    const span = spanRef.current;
    const button = e.currentTarget;
    span.style.left = e.pageX - button.offsetLeft + "px";
    span.style.top = e.pageY - button.offsetTop + "px";
  };

  return (
    <Link
      href={href}
      className="HOVER rounded-full"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <span ref={spanRef}></span>
      <text className="font-medium flex justify-center items-center">
        {content}
        <ArrowRight className=" ml-3 h-4 w-4 transition-all ease-out " />
      </text>
    </Link>
  );
};
