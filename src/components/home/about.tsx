"use client";
import { ContactCard } from "../ui/card/contact-card";
import { UxCard } from "../ui/card/ux-card";
import { DevCard } from "../ui/card/dev-card";
import { ToolsCard } from "../ui/card/tools-card";
import { VideoCard } from "../ui/card/video-card";

export function About() {
  return (
    <main className="min-h-screen">
      <ContactCard />
      <UxCard />
      <DevCard />
      <ToolsCard />
      <VideoCard />
    </main>
  );
}
