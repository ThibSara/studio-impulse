"use client";
import React from "react";
import { Discover } from "@/components/home/discover";
import { HeroSection } from "@/components/home/hero";
import { Introduction } from "@/components/home/introduction";
import { Cursor } from "@/components/cursor/Cursor";
import { CursorProvider } from "@/components/cursor/CursorContext";
import { Stack } from "@/components/home/stack";
import { About } from "@/components/home/about";
import { Team } from "@/components/home/team";
import { CTA } from "@/components/home/cta";

export default function LandingPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-7xl">
        <CursorProvider>
          <Cursor />
          <HeroSection />
          <Introduction />
          <Discover />
          <Stack />
          <About />
          <Team />
          <CTA />
        </CursorProvider>
      </div>
    </div>
  );
}
