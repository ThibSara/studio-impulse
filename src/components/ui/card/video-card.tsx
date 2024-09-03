"use client";
import styles from "./card.module.scss";
import { useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { HoverButton } from "../hover-button/hoverButton";

export const VideoCard = ({ i = 5 }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div className={styles.cardContainer}>
      <div
        className="flex flex-col relative w-full lg:h-[700px] h-[900px] rounded-2xl bg-[#06193A]"
        style={{ top: `calc(-5vh + ${i * 25}px)` }}
        ref={container}
      >
        <video
          autoPlay
          loop
          muted
          preload="none"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          className="rounded-2xl"
        >
          <source src="./videos/people-talking.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex justify-center items-center flex-col">
          <h2 className="text-2xl lg:text-4xl tracking-tight text-white text-center sm:text-4xl lg:pb-16 mb-4">
            Faites estimer votre projet maintenant
          </h2>
          <HoverButton href="/contact" content="Votre Projet" />
        </div>
      </div>
    </div>
  );
};
