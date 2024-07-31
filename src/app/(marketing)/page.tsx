"use client";
import React from "react";
import { Design } from "@/components/home/design";
import { Discover } from "@/components/home/discover";
import { FounderMessage } from "@/components/home/founder-message";
import { HeroSection } from "@/components/home/hero";
import { Introduction } from "@/components/home/introduction";
import { NavBar } from "@/components/home/nav-bar";
import { Pricing } from "@/components/home/pricing";
import { Resources } from "@/components/home/resources";
import { Cursor } from "@/components/cursor/Cursor";
import { CursorProvider } from "@/components/cursor/CursorContext";
import { Stack } from "@/components/home/stack";
import { About } from "@/components/home/about";
import { Team } from "@/components/home/team";
import { CTA } from "@/components/home/cta";

export default function LandingPage() {
  return (
    <div>
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
  );
}
