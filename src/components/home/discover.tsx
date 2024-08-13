import { useState, useEffect } from "react";
import { HoverButton } from "../ui/hover-button/hoverButton";
import Image from "next/image";
import { Laugh, PenTool, Smile, Spline } from "lucide-react";
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
      <div className="py-12 grid grid-cols-1 gap-8 md:grid-cols-2 mt-8">
        <div className="space-y-8">
          <div
            className="h-auto sm:h-[600px] bg-[#06193A] rounded-xl flex flex-col items-center p-8"
            onMouseEnter={handleMouseEnter("wireframe")}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="text-white text-2xl sm:text-4xl pt-8 pb-4 font-medium">
              Wireframe et maquette
            </h1>
            <p className="text-base leading-8 text-slate-50 sm:max-w-md max-w-xs text-center">
              Notre équipe de designers crée une maquette de votre site qui
              reflète au mieux votre image. Vous aurez l&apos;opportunité de la
              valider avant la phase de développement.
            </p>
            <motion.div
              animate={circlePath}
              whileHover={{ scale: 1.1, rotate: 3 }}
            >
              <div className=" mt-8 sm:mt-32 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px]">
                <Image
                  alt="user"
                  src={"/images/wireframe.png"}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </motion.div>
          </div>

          <div className="h-auto sm:h-[612px] bg-[#6255FA] rounded-xl flex flex-col items-center p-8">
            <h1 className="text-white text-2xl sm:text-4xl pt-8 pb-4 font-medium">
              Notifications en Temps Réel
            </h1>
            <p className="text-base leading-8 text-slate-50 sm:max-w-md max-w-xs text-center">
              Suivez notre progression en temps réel grâce à des notifications
              continues et un planning détaillé.
            </p>
            <Notifications />
          </div>
        </div>
        <div className="space-y-8">
          <div
            onMouseEnter={handleMouseEnter("section")}
            onMouseLeave={handleMouseLeave}
            className="h-auto sm:h-[320px] bg-primary rounded-xl flex flex-col items-center p-8 relative"
          >
            <h1 className="text-white text-2xl sm:text-4xl pt-8 pb-4 font-medium">
              Cibler l&apos;utilisateur
            </h1>
            <p className="text-base leading-8 text-slate-50 sm:max-w-md max-w-xs text-center">
              Ensemble, nous réalisons une étude préalable pour cerner les
              besoins de vos utilisateurs. Cette analyse guidera l&apos;UX et
              l&apos;UI de votre site web.
            </p>
            <div className="text-primary flex flex-row gap-x-4 mt-4">
              <div className="bg-white p-4 rounded-xl">
                <motion.div
                  animate={animateIconIndex === 0 ? iconAnimation.animate : {}}
                  whileHover={iconAnimation.whileHover}
                  whileTap={iconAnimation.whileTap}
                  transition={iconAnimation.transition}
                >
                  <Spline />
                </motion.div>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <motion.div
                  animate={animateIconIndex === 1 ? iconAnimation.animate : {}}
                  whileHover={iconAnimation.whileHover}
                  whileTap={iconAnimation.whileTap}
                  transition={iconAnimation.transition}
                >
                  <Smile />
                </motion.div>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <motion.div
                  animate={animateIconIndex === 2 ? iconAnimation.animate : {}}
                  whileHover={iconAnimation.whileHover}
                  whileTap={iconAnimation.whileTap}
                  transition={iconAnimation.transition}
                >
                  <PenTool />
                </motion.div>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <motion.div
                  animate={animateIconIndex === 3 ? iconAnimation.animate : {}}
                  whileHover={iconAnimation.whileHover}
                  whileTap={iconAnimation.whileTap}
                  transition={iconAnimation.transition}
                >
                  <Laugh />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="h-auto sm:h-[540px] bg-[#06193A] p-8 rounded-xl flex flex-col items-center text-center">
            <h1 className="text-white text-2xl sm:text-4xl pt-8 pb-4 font-medium">
              IA, Chatbot, Dashboard et CMS
            </h1>
            <p className="text-base leading-8 text-slate-50 sm:max-w-md max-w-xs">
              Nous intégrons les fonctionnalités essentielles à votre site web
              selon vos besoins. Profitez d&apos;un chatbot IA pour une
              interaction client optimisée, d&apos;un tableau de bord analytique
              pour suivre vos ventes, ou d&apos;un Content Management System
              (CMS) pour gérer facilement votre contenu.
            </p>
          </div>
          <div className="h-auto sm:h-[320px] bg-[#C4DCFF] rounded-xl flex flex-col items-center text-center p-8">
            <h1 className="text-[#06193A] text-2xl sm:text-4xl pt-8  font-medium">
              Parlez-nous de votre projet
            </h1>
            <div className=" mt-4">
              <p className="text-base leading-8 text-[#06193A] ">
                Faites estimer votre projet gratuitement par l&apos;un de nos
                experts.
              </p>
              <div className="mt-8">
                <HoverButton href="/contact" content="Mon projet" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
