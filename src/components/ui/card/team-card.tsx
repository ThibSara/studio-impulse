"use client";
import styles from "./card.module.scss";
import { useTransform, useScroll } from "framer-motion";

import { useRef } from "react";

const people = [
  {
    name: "Léonard Roussard",
    role: "Ingénieur design et developpement",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Sara Thibierge",
    role: "Ingénieur design et developpement",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapib",
    xUrl: "#",
    linkedinUrl: "#",
  },
];

interface CardProps {
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  i: number;
}

export const TeamCard: React.FC<CardProps> = ({ i = 4 }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div className={styles.cardContainer}>
      <div
        className="flex flex-col  relative w-full h-[700px] rounded-2xl p-8 py-16 bg-[#3b4962]"
        style={{ top: `calc(-5vh + ${i * 25}px)` }}
      >
        <h2 className="font-medium text-3xl text-white sm:text-5xl lg:text-6xl">
          Notre équipe
        </h2>
        <ul role="list">
          {people.map((person) => (
            <li
              key={person.name}
              className="flex flex-col gap-10 pt-12 sm:flex-row"
            >
              <img
                alt=""
                src={person.imageUrl}
                className="w-32 flex-none rounded-3xl object-cover"
              />
              <div className="max-w-xl flex-auto">
                <div className="flex flex-row items-center">
                  <h3 className="text-lg font-medium leading-8 tracking-tight text-white">
                    {person.name}
                  </h3>
                  <ul className="flex ml-2">
                    <li>
                      <a
                        href={person.linkedinUrl}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="h-5 w-5"
                        >
                          <path
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                <p className="text-base leading-7 text-slate-50">
                  {person.role}
                </p>

                <p className="mt-2 text-base leading-7 text-slate-400 ">
                  {person.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
