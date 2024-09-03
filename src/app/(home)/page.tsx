"use client";
import React from "react";
import { Discover } from "@/app/sections/home/discover";
import { HeroSection } from "@/app/sections/home/hero";
import { Introduction } from "@/app/sections/home/introduction";
import { Cursor } from "@/components/cursor/Cursor";
import { CursorProvider } from "@/components/cursor/CursorContext";
import { Team } from "@/app/sections/home/team";
import { CTA } from "@/app/sections/home/cta";
import { About } from "@/app/sections/home/about";

export default function LandingPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-7xl">
        <CursorProvider>
          <Cursor />
          <HeroSection />
          <Introduction />
          <Discover />
          <About />
          {/*
          <Stack />
          
          <About />
          <Team />
          <CTA />*/}
        </CursorProvider>
      </div>
    </div>
  );
}
