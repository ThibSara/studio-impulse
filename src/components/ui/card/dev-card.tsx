import styles from "./card.module.scss";
import { useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

export const DevCard = ({ i = 3 }) => {
  const iconAnimation = {
    whileHover: { scale: 1.2, rotate: 90 },
    whileTap: {
      scale: 0.8,
      rotate: -90,
      borderRadius: "100%",
    },
    animate: {
      rotate: 360,
      scale: 1.2,
    },
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  };

  return (
    <div className={styles.cardContainer}>
      <div
        className="relative w-full lg:h-[700px] h-[900px] rounded-2xl p-8 py-16  bg-[#07183B] grid grid-cols-1 lg:grid-cols-2 gap-8"
        style={{ top: `calc(-5vh + ${i * 25}px)` }}
      >
        {/* Text Section */}
        <div className="relative">
          <h2 className="text-2xl lg:text-4xl tracking-tight text-white sm:text-4xl lg:pb-16">
            Développement et déploiement
          </h2>
          <div className=" leading-8 text-white md:mr-8 text-base tracking-tight ">
            <div className="pt-8 rounded-xl flex items-center">
              <div className=" bg-white p-2 px-3 md:p-3 md:px-4 rounded-xl mr-2 md:mr-4">
                <motion.div
                  whileHover={iconAnimation.whileHover}
                  whileTap={iconAnimation.whileTap}
                  transition={iconAnimation.transition}
                  className=""
                >
                  🦄
                </motion.div>
              </div>
              Nous développons votre projet en organisant des réunions
              quotidiennes pour suivre les progrès.
            </div>
            <div className="pt-4 md:pt-8 rounded-xl flex items-center">
              <div className=" bg-white p-2 px-3 md:p-3 md:px-4 rounded-xl mr-2 md:mr-4">
                <motion.div
                  whileHover={iconAnimation.whileHover}
                  whileTap={iconAnimation.whileTap}
                  transition={iconAnimation.transition}
                  className=""
                >
                  🦄
                </motion.div>
              </div>
              Vous aurez un accès constant à une prévisualisation en temps réel
              tout au long du processus.
            </div>
            <div className="pt-4  md:pt-8 rounded-xl flex items-center">
              <div className=" bg-white p-2 px-3 md:p-3 md:px-4 rounded-xl mr-2 md:mr-4">
                <motion.div
                  whileHover={iconAnimation.whileHover}
                  whileTap={iconAnimation.whileTap}
                  transition={iconAnimation.transition}
                  className=""
                >
                  🦄
                </motion.div>
              </div>
              À la fin, nous vous livrerons le projet avec la possibilité
              d’effectuer plusieurs ajustements pour peaufiner les derniers
              détails.
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          <Image
            alt="laptop"
            src={"/images/home/resources/devices.avif"}
            height={900}
            width={900}
            className="rounded-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
          />
        </div>
      </div>
    </div>
  );
};
