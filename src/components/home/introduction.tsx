import { motion } from "framer-motion";
import { useRef } from "react";

export function Introduction() {
  const constraintsRef = useRef(null);

  return (
    <section id="introduction" aria-label="Introduction">
      <div
        className="bg-[#07183B] my-16 flex rounded-3xl min-h-screen relative overflow-hidden"
        ref={constraintsRef}
      >
        <div className="px-16 py-16">
          <div className="font-medium text-3xl text-white sm:text-5xl lg:text-6xl">
            Entre créativité <br />
            et
            <span className="text-primary"> technologies</span>
          </div>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-white sm:max-w-lg max-w-xs">
            <span className="text-xl sm:text-2xl">
              L'innovation naît de l'équilibre entre l'art et la technologie.
              <br />
            </span>{" "}
            Nous combinons une approche créative avec une maîtrise technique
            pointue pour concevoir des sites web qui captivent, engagent et
            restent gravés dans les mémoires. Cette synergie nous permet de
            transformer vos idées en expériences digitales uniques, parfaitement
            adaptées à vos besoins.
          </p>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-white sm:max-w-lg max-w-xs">
            <span className="text-xl sm:text-2xl">
              Vous avez le contrôle
              <br />
            </span>{" "}
            vous êtes au cœur de chaque étape de la création de votre site web.
            De la conception initiale au développement final, nous vous
            impliquons à chaque phase pour garantir que le résultat reflète
            parfaitement vos attentes. Votre avis est essentiel et nous nous
            engageons à le prendre en compte pour que chaque décision soit
            alignée avec votre vision.
          </p>
        </div>

        <motion.div
          drag
          dragConstraints={constraintsRef}
          style={{
            y: 0,
            x: "50%",
            position: "absolute",
            transform: "translateX(-50%)",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#07183B",
            fontWeight: "bold",
            cursor: "grab",
          }}
          animate={{ y: 300 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
        >
          Text
        </motion.div>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          style={{
            y: 0,
            x: "20%",
            position: "absolute",
            transform: "translateX(-50%)",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#07183B",
            fontWeight: "bold",
            cursor: "grab",
          }}
          animate={{ y: 300 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
        >
          Text
        </motion.div>
      </div>
    </section>
  );
}
