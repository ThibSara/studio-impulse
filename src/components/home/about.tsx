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
    <main className="min-h-screen">
      <div className="font-medium text-3xl text-black sm:text-5xl lg:text-6xl">
        Simple, Rapide,
        <span
          onMouseEnter={handleMouseEnter("title")}
          onMouseLeave={handleMouseLeave}
          className="text-primary"
        >
          {" "}
          Efficace
        </span>
      </div>
      <ContactCard />
      <UxCard />
      <DevCard />
      <VideoCard />
    </main>
  );
}
