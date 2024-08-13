"use client";
import styles from "./card.module.scss";
import { useTransform, useScroll } from "framer-motion";
import Image from "next/image";

import { useRef } from "react";

const people = [
  {
    title: "Experience utilisateur",
    subtitle:
      "Nous réalisons une étude approfondie de l'expérience utilisateur (UX).",
    src: "/images/about/target.svg",
  },
  {
    title: "Maquette",
    subtitle:
      "Nous revenons vers vous avec une maquette complète de votre futur site web",
    src: "/images/about/spark.svg",
  },
  {
    title: "fonctionnalités additionnelles",
    subtitle:
      "En fonction de vos besoins et de ceux de vos utilisateurs, nous proposons également des services de rebranding, l'intégration de chatbots, d'IA, de tableaux de bord, de CMS, et bien plus encore.",
    src: "/images/about/flower.svg",
  },
];

export const UxCard = ({ i = 2 }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div className={styles.cardContainer}>
      <div
        className="flex flex-col  relative w-full h-[700px]  rounded-2xl p-8 py-16 bg-[#C4DCFF]"
        style={{ top: `calc(-5vh + ${i * 25}px)` }}
      >
        <h2 className="font-medium text-3xl text-[#06193A] sm:text-5xl lg:text-6xl">
          Étude UX et Design
        </h2>
        <ul role="list">
          {people.map((person, index) => (
            <li key={index} className="flex flex-col gap-10 pt-12 sm:flex-row">
              <Image alt="" src={person.src} height={90} width={90} />

              <div className="max-w-xl flex-auto">
                <div className="flex flex-row items-center">
                  <h3 className="text-lg font-medium leading-8 tracking-tight text-black">
                    {person.title}
                  </h3>
                </div>

                <p className="text-base leading-7 text-slate-700">
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
