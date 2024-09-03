"use client";
import { ContactCard } from "../ui/card/contact-card";
import { UxCard } from "../ui/card/ux-card";
import { DevCard } from "../ui/card/dev-card";
import { VideoCard } from "../ui/card/video-card";
import { useCursor } from "../cursor/CursorContext";

export function About() {
  const { setVariant } = useCursor();

  const handleMouseEnter = (variant: string) => () => {
    setVariant(variant);
  };

  const handleMouseLeave = () => {
    setVariant("default");
  };
  return (
    <main className=" pt-16 sm:pt-20 lg:pt-32">
      <div className="font-medium text-3xl text-black sm:text-5xl lg:text-6xl">
        Découvrez Nos
        <span
          onMouseEnter={handleMouseEnter("title")}
          onMouseLeave={handleMouseLeave}
          className="text-primary"
        >
          {" "}
          Services
        </span>
      </div>
      <div className="pt-8 sm:pt-0 ">
        <ContactCard />
        <UxCard />
        <DevCard />
        <VideoCard />
      </div>
    </main>
  );
}
