"use client";
import styles from "./card.module.scss";
import { useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const people = [
  {
    title: "Figma",
    subtitle: "UI design - Wireframing Mockup",
    src: "/images/logos/figma.svg",
  },
  {
    title: "Nextjs",
    subtitle:
      "Grâce au déploiement continu via Vercel, vous avez un accès constant à une prévisualisation en temps réel.",
    src: "/images/logos/nextjs.svg",
  },
  {
    title: "Vercel",
    subtitle:
      "Livraison du projet avec possibilité d'effectuer plusieurs allers-retours pour ajuster les dernières modifications.",
    src: "/images/logos/vercel.svg",
  },
  {
    title: "Payload",
    subtitle:
      "Livraison du projet avec possibilité d'effectuer plusieurs allers-retours pour ajuster les dernières modifications.",
    src: "/images/logos/payload.svg",
  },
];

export const ToolsCard = ({ i = 4 }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div className={styles.cardContainer}>
      <div
        className="flex flex-col relative w-full h-[700px] mx-16 rounded-2xl p-8 py-16 bg-[#06193A]"
        style={{ top: `calc(-5vh + ${i * 25}px)` }}
      >
        <h2 className="font-medium text-3xl text-white sm:text-5xl lg:text-6xl">
          Les meilleurs outils
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 pt-12"
        >
          {people.map((person, index) => (
            <li key={index} className="flex items-start">
              <Image
                alt={person.title}
                src={person.src}
                height={50}
                width={50}
              />
              <div className="ml-6">
                <h3 className="text-lg font-medium leading-8 tracking-tight text-white">
                  {person.title}
                </h3>
                <p className="text-base leading-7 text-slate-200">
                  {person.subtitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
