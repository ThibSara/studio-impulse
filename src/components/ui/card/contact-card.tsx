"use client";
import styles from "./card.module.scss";
import { useTransform, useScroll } from "framer-motion";
import Image from "next/image";

import { useRef } from "react";

const people = [
  {
    key: 1,
    title: "Contactez-nous pour une première estimation",
    subtitle: "Remplissez le formulaire",
    src: "/images/about/bubble.svg",
  },
  {
    key: 2,
    title: "Nous vous recontactons rapidement",
    subtitle:
      "Nous vous recontacterons rapidement pour mieux comprendre vos objectifs.",
    src: "/images/about/lightning.svg",
  },
  {
    key: 3,
    title: "Devis",
    subtitle:
      "Nous vous fournirons ensuite un devis détaillé, un calendrier prévisionnel, ainsi qu'un moodboard personnalisé.",
    src: "/images/about/flower.svg",
  },
];

export const ContactCard = ({ i = 1 }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div className={styles.cardContainer}>
      <div
        className="flex flex-col  relative w-full h-[700px] mx-16 rounded-2xl p-8 py-16 bg-[#06193A]"
        style={{ top: `calc(-5vh + ${i * 25}px)` }}
      >
        <h2 className="font-medium text-3xl text-white sm:text-5xl lg:text-6xl">
          Prise de contact
        </h2>
        <ul role="list">
          {people.map((person) => (
            <li
              key={person.key}
              className="flex flex-col gap-10 pt-12 sm:flex-row"
            >
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
