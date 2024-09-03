"use client";
import { ContactCard } from "@/components/ui/card/contact-card";
import { UxCard } from "@/components/ui/card/ux-card";
import { DevCard } from "@/components/ui/card/dev-card";
import { VideoCard } from "@/components/ui/card/video-card";
import { useCursor } from "@/components/cursor/CursorContext";

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
