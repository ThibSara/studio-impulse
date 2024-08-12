"use client";
import styles from "./card.module.scss";
import { useTransform, useScroll } from "framer-motion";
import Image from "next/image";

import { useRef } from "react";

const people = [
  {
    title: "Developpement et retours",
    subtitle:
      "Nous développons votre projet avec Next.js, en organisant des réunions quotidiennes pour suivre l'avancement.",
    src: "/images/about/star.svg",
  },
  {
    title: "Déploiement en continu",
    subtitle:
      "Grâce au déploiement continu via Vercel, vous avez un accès constant à une prévisualisation en temps réel.",
    src: "/images/about/stair.svg",
  },
  {
    title: "Livraison du projet",
    subtitle:
      "Livraison du projet avec possibilité d'effectuer plusieurs allers-retours pour ajuster les dernières modifications.",
    src: "/images/about/star-ribon.svg",
  },
];

export const DevCard = ({ i = 3 }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div className={styles.cardContainer}>
      <div
        className="flex flex-col  relative w-full h-[700px] mx-16 rounded-2xl p-8 py-16 bg-[#6255FA]"
        style={{ top: `calc(-5vh + ${i * 25}px)` }}
      >
        <h2 className="font-medium text-3xl text-white sm:text-5xl lg:text-6xl">
          Développement et déploiement
        </h2>
        <ul role="list">
          {people.map((person, index) => (
            <li key={index} className="flex flex-col gap-10 pt-12 sm:flex-row">
              <Image alt="" src={person.src} height={90} width={90} />

              <div className="max-w-xl flex-auto">
                <div className="flex flex-row items-center">
                  <h3 className="text-lg font-medium leading-8 tracking-tight text-white">
                    {person.title}
                  </h3>
                </div>

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
