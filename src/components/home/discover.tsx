import { useState, useEffect } from "react";
import { HoverButton } from "../ui/hover-button/hoverButton";
import Image from "next/image";
import { Notifications } from "../ui/notifications";
import { useCursor } from "../cursor/CursorContext";
import { motion } from "framer-motion";

export function Discover() {
  const { setVariant } = useCursor();
  const [animateIconIndex, setAnimateIconIndex] = useState(0);

  const handleMouseEnter = (variant: string) => () => {
    setVariant(variant);
  };

  const handleMouseLeave = () => {
    setVariant("default");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateIconIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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

  const circlePath = {
    x: [0, 100, 180, 100, 0, -100, -180, -100, 0],
    y: [0, -100, 0, 100, 0, 100, 0, -100, 0],
    transition: {
      type: "tween",
      duration: 20,
      repeat: Infinity,
      stiffness: 260,
      damping: 20,
      ease: "linear",
    },
  };

  return (
    <section
      id="discover"
      aria-labelledby="discover-title"
      className="scroll-mt-14 py-16  sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <header>
        <div className="font-medium text-3xl text-black sm:text-5xl lg:text-6xl">
          Découvrez Nos
          <span
            onMouseEnter={handleMouseEnter("title")}
            onMouseLeave={handleMouseLeave}
            className="text-primary"
          >
            {" "}
            Services
          </span>
        </div>
      </header>
      <div className="py-12 grid grid-cols-1 gap-8 lg:grid-cols-2 mt-8">
        <div className="space-y-8">
          <div
            onMouseEnter={handleMouseEnter("section")}
            onMouseLeave={handleMouseLeave}
            className="h-auto sm:h-[320px] bg-primary rounded-xl flex flex-col items-center p-8 relative"
          >
            <h1 className="text-white  text-2xl xl:text-4xl pt-2 pb-2 font-medium">
              Analyse des utilisateurs
            </h1>
            <p className="text-base leading-8 text-slate-50 sm:max-w-md max-w-xs text-center">
              Ensemble, nous réalisons une analyse approfondie pour identifier
              les besoins et attentes de vos utilisateurs. Cette étude servira
              de fondation pour concevoir une expérience utilisateur et une
              interface optimisées.
            </p>
            <div className="text-primary flex flex-row gap-x-4 mt-4">
              <div className="bg-white p-4 rounded-xl">
                <motion.div
                  animate={animateIconIndex === 0 ? iconAnimation.animate : {}}
                  whileHover={iconAnimation.whileHover}
                  whileTap={iconAnimation.whileTap}
                  transition={iconAnimation.transition}
                >
                  😀
                </motion.div>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <motion.div
                  animate={animateIconIndex === 1 ? iconAnimation.animate : {}}
                  whileHover={iconAnimation.whileHover}
                  whileTap={iconAnimation.whileTap}
                  transition={iconAnimation.transition}
                >
                  ✏️
                </motion.div>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <motion.div
                  animate={animateIconIndex === 2 ? iconAnimation.animate : {}}
                  whileHover={iconAnimation.whileHover}
                  whileTap={iconAnimation.whileTap}
                  transition={iconAnimation.transition}
                >
                  😱
                </motion.div>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <motion.div
                  animate={animateIconIndex === 3 ? iconAnimation.animate : {}}
                  whileHover={iconAnimation.whileHover}
                  whileTap={iconAnimation.whileTap}
                  transition={iconAnimation.transition}
                >
                  💛
                </motion.div>
              </div>
            </div>
          </div>
          <div className="h-auto sm:h-[580px] bg-[#06193A] p-8 rounded-xl flex flex-col items-center text-center">
            <h1 className="text-white text-2xl xl:text-4xl pt-2 pb-2 font-medium">
              Solutions sur Mesure
            </h1>
            <p className="text-base leading-8 text-slate-50 sm:max-w-md max-w-xs pb-4">
              Nous intégrons les fonctionnalités qui répondent le mieux à vos
              besoins. Que ce soit un chatbot intelligent pour améliorer
              l&apos;engagement client, un tableau de bord analytique pour
              suivre vos performances, ou un système de gestion de contenu (CMS)
              pour une gestion simplifiée, nous avons la solution adaptée.
            </p>
            <Image
              alt="laptop"
              src={"/images/home/discover/laptop.avif"}
              height={200}
              width={400}
            />
          </div>
          <div
            className="hidden lg:flex h-auto sm:h-[280px] bg-[#C4DCFF] rounded-xl flex-col items-center text-center p-8"
            onMouseEnter={handleMouseEnter("section")}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="text-[#06193A] text-2xl xl:text-4xl pb-2 pt-2  font-medium">
              Parlez-nous de votre projet
            </h1>
            <div>
              <p className="text-base leading-8 text-black sm:max-w-md max-w-xs text-center">
                Obtenez une estimation gratuite de votre projet en discutant
                avec l&apos;un de nos experts.
              </p>

              <div className="mt-4">
                <HoverButton href="/contact" content="Votre Projet" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div
            className="h-auto sm:h-[600px] bg-[#06193A] rounded-xl flex flex-col items-center p-8"
            onMouseEnter={handleMouseEnter("wireframe")}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="text-white text-2xl xl:text-4xl pt-2 pb-2 font-medium">
              Conception de Maquettes
            </h1>
            <p className="text-base leading-8 text-slate-50 sm:max-w-md max-w-xs text-center">
              Notre équipe de designers élabore des maquettes sur mesure,
              parfaitement alignées avec votre image de marque. Vous aurez
              l’occasion de valider chaque étape avant de passer au
              développement.
            </p>
            <motion.div
              animate={circlePath}
              whileHover={{ scale: 1.1, rotate: 3 }}
            >
              <div className=" mt-8 sm:mt-32 w-[150px] h-[150px] xl:w-[250px] xl:h-[250px]">
                <Image
                  alt="user"
                  src={"/images/home/discover/wireframe.avif"}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </motion.div>
          </div>
          <div
            className="h-auto sm:h-[612px] bg-[#6255FA] rounded-xl flex flex-col items-center p-8"
            onMouseEnter={handleMouseEnter("section")}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="text-white text-2xl xl:text-4xl pt-2 pb-2  font-medium">
              Suivi en Temps Réel
            </h1>
            <p className="text-base leading-8 text-slate-50 sm:max-w-md max-w-xs text-center">
              Restez informé à chaque étape grâce à des notifications en temps
              réel et un calendrier détaillé. Vous saurez exactement où en est
              votre projet, du début à la fin.
            </p>
            <Notifications />
          </div>
          <div className="flex lg:hidden h-auto sm:h-[280px] bg-[#C4DCFF] rounded-xl flex-col items-center text-center p-8">
            <h1 className="text-[#06193A] text-2xl xl:text-4xl pb-2 pt-2  font-medium">
              Parlez-nous de votre projet
            </h1>
            <div>
              <p className="text-base leading-8 text-black sm:max-w-md max-w-xs text-center">
                Obtenez une estimation gratuite de votre projet en discutant
                avec l&apos;un de nos experts.
              </p>

              <div className="mt-4">
                <HoverButton href="/contact" content="Votre Projet" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
