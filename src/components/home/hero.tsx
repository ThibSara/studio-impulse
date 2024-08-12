import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { useCursor } from "./../cursor/CursorContext";
import { HoverButton } from "./../ui/hover-button/hoverButton";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  const { setVariant } = useCursor();

  const handleMouseEnter = (variant: string) => () => {
    setVariant(variant);
  };

  const handleMouseLeave = () => {
    setVariant("default");
  };

  const motionConfig = {
    initial: { rotate: 0, scale: 1, x: 0, y: 0 },
    whileHover: { scale: 1.2 },
    whileTap: { scale: 1.2 },
    transition: { type: "spring", stiffness: 260, damping: 20 },
    style: { transformOrigin: "center" },
  };

  return (
    <section
      className="w-full flex min-h-screen justify-center items-center relative"
      style={{ minHeight: "calc(100vh - 5rem)" }}
    >
      <FadeInStagger faster>
        <div>
          <FadeIn className="w-full max-w-2xl">
            {/* Flower SVG */}
            <motion.div
              {...motionConfig}
              whileHover={{ ...motionConfig.whileHover, rotate: 3 }}
              whileTap={{ ...motionConfig.whileTap, rotate: 3 }}
              className="absolute bottom-20 right-20"
            >
              <div className="w-[110px] h-[190px] sm:w-[190px] sm:h-[110px]">
                <Image
                  alt=""
                  src={"/images/hero/flower.svg"}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </motion.div>
            {/* Arc SVG */}
            <motion.div
              {...motionConfig}
              whileHover={{ ...motionConfig.whileHover, rotate: 6 }}
              whileTap={{ ...motionConfig.whileTap, rotate: 6 }}
              className="absolute top-32 left-10"
            >
              <div className="w-[110px] h-[110px] sm:w-[190px] sm:h-[130px]">
                <Image
                  alt=""
                  src={"/images/hero/arc.svg"}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </motion.div>
            {/* Video 1 */}
            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <mask id="square">
                  <path
                    d="M122.862 240.595C187.814 239.075 240 185.946 240 120.629C240 54.3547 186.274 0.628906 120 0.628906C54.6825 0.628906 1.55367 52.8149 0.03346 117.767L0 240.629L122.862 240.595Z"
                    fill="white"
                  />
                </mask>
              </defs>
            </svg>
            <div className=" absolute bottom-8 left-8 w-[240px] h-[241px] hidden md:block">
              <video
                autoPlay
                loop
                muted
                preload="none"
                style={{
                  width: "100%",
                  height: "100%",
                  mask: "url(#square)",
                  WebkitMask: "url(#square)",
                  objectFit: "cover",
                }}
              >
                <source src="./videos/people-talking.mp4" type="video/mp4" />
              </video>
            </div>
            {/* Video 2 */}
            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <mask id="bubble">
                  <path
                    d="M120 240C53.7258 240 0 186.274 0 120V120C0 53.7258 53.7258 -1.20401e-05 120 -1.20401e-05L256 -1.20401e-05V240L120 240Z"
                    fill="white"
                  />
                </mask>
              </defs>
            </svg>
            <div className=" absolute top-8 right-8 w-[240px] h-[241px] hidden md:block">
              <video
                autoPlay
                loop
                muted
                preload="none"
                style={{
                  width: "100%",
                  height: "100%",
                  mask: "url(#bubble)",
                  WebkitMask: "url(#bubble)",
                  objectFit: "cover",
                }}
              >
                <source src="./videos/website-scrolling.mp4" type="video/mp4" />
              </video>
            </div>
            {/* Title */}
            <div className="font-medium text-4xl text-gray-900 sm:text-6xl lg:text-7xl text-center">
              <span>Envie d'un </span>
              <span
                onMouseEnter={handleMouseEnter("title")}
                onMouseLeave={handleMouseLeave}
                className="text-primary"
              >
                {" "}
                site <br /> web sur mesure ?
              </span>
            </div>
            {/* Subtitle */}
            <div className="flex justify-center">
              <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 sm:max-w-md max-w-xs text-center">
                Impulse combine l&apos;
                <span
                  onMouseEnter={handleMouseEnter("subtitle")}
                  onMouseLeave={handleMouseLeave}
                >
                  UX design{" "}
                </span>
                et le{" "}
                <span
                  onMouseEnter={handleMouseEnter("subtitle")}
                  onMouseLeave={handleMouseLeave}
                >
                  developpement web{" "}
                </span>
                pour offrir des solutions digitales complètes.
              </p>
            </div>
            {/* Button */}
            <div className="mt-10 flex justify-center items-center gap-x-6">
              <HoverButton href="/contact" content="votre projet" />
            </div>
          </FadeIn>
        </div>
      </FadeInStagger>
    </section>
  );
}

export function SvgMasks() {
  return (
    <>
      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <mask id="square">
            <path
              d="M122.862 240.595C187.814 239.075 240 185.946 240 120.629C240 54.3547 186.274 0.628906 120 0.628906C54.6825 0.628906 1.55367 52.8149 0.03346 117.767L0 240.629L122.862 240.595Z"
              fill="white"
            />
          </mask>
          <mask id="bubble">
            <path
              d="M120 240C53.7258 240 0 186.274 0 120V120C0 53.7258 53.7258 -1.20401e-05 120 -1.20401e-05L256 -1.20401e-05V240L120 240Z"
              fill="white"
            />
          </mask>
        </defs>
      </svg>
    </>
  );
}
