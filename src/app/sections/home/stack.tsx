import { useState, useEffect } from "react";
import { HoverButton } from "@/components/ui/hover-button/hoverButton";
import Image from "next/image";
import { Laugh, PenTool, Smile, Spline } from "lucide-react";
import { Notifications } from "@/components/ui/notifications";
import { useCursor } from "@/components/cursor/CursorContext";
import { motion } from "framer-motion";
import figmaImage from "@/images/resources/figma-image.jpg";

export function Stack() {
  const { setVariant } = useCursor();

  const handleMouseEnterTitle = () => {
    setVariant("title");
  };

  const handleMouseEnterWireframe = () => {
    setVariant("wireframe");
  };

  const handleMouseEnterSection = () => {
    setVariant("section");
  };

  const handleMouseLeave = () => {
    setVariant("default");
  };

  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="min-h-screen px-4 sm:px-8 lg:px-16 "
    >
      <div className="font-medium text-3xl text-black sm:text-5xl lg:text-6xl">
        Nos
        <span
          onMouseEnter={handleMouseEnterTitle}
          onMouseLeave={handleMouseLeave}
          className="text-primary"
        >
          {" "}
          valeurs
        </span>
      </div>
      <div className="flex flex-row items-center justify-center gap-6 mt-16">
        <div className=" h-[220px] w-[220px] rounded-full bg-[#6255FA] items-center justify-center flex">
          <span className="text-white text-2xl font-medium">Communication</span>
        </div>
        <div className=" h-[220px] w-[220px] rounded-full bg-[#47ABA1] items-center justify-center flex">
          <span className="text-white text-2xl font-medium">Design</span>
        </div>
        <div className=" h-[220px] w-[220px] rounded-full bg-primary items-center justify-center flex">
          <span className="text-white text-2xl font-medium">Developpement</span>
        </div>
        <div className=" h-[220px] w-[220px] rounded-full bg-[#6255FA] items-center justify-center flex">
          <span className="text-white text-2xl font-medium">Deploiement</span>
        </div>
      </div>
    </section>
  );
}
