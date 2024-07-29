import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { useCursor } from "./../cursor/CursorContext";
import { HoverButton } from "./../ui/hover-button/hoverButton";
import { motion } from "framer-motion";

export function HeroSection() {
  const { setVariant } = useCursor();

  const handleMouseEnterTitle = () => {
    setVariant("title");
  };

  const handleMouseEnterSubtitle = () => {
    setVariant("subtitle");
  };

  const handleMouseLeave = () => {
    setVariant("default");
  };

  return (
    <section
      className="w-full flex min-h-screen justify-center items-center relative"
      style={{ minHeight: "calc(100vh - 5rem)" }}
    >
      <FadeInStagger faster>
        <div>
          <FadeIn className="w-full max-w-2xl">
            <motion.div
              initial={{ rotate: 0, scale: 1, x: 0, y: 0 }}
              whileHover={{ scale: 1.2, rotate: 3 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              style={{ transformOrigin: "center" }}
              className="absolute bottom-20 right-20"
            >
              <svg
                width="190"
                height="110"
                viewBox="0 0 430 361"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M228.164 59.9192C202.727 73.4427 191.908 103.696 202.059 129.907C186.007 106.834 154.877 98.8828 129.44 112.406C104.004 125.93 93.1848 156.183 103.335 182.394C87.2839 159.321 56.1532 151.37 30.7168 164.893C3.25898 179.492 -7.16584 213.585 7.43233 241.043C7.53726 241.24 7.64321 241.436 7.75014 241.632L7.7467 241.634C65.8266 350.877 201.469 392.353 310.712 334.273C419.955 276.193 461.431 140.551 403.351 31.308L403.347 31.3098C403.245 31.1118 403.141 30.914 403.036 30.7167C388.438 3.25881 354.345 -7.166 326.887 7.43216C301.451 20.9556 290.632 51.2093 300.782 77.4196C284.731 54.3466 253.6 46.3958 228.164 59.9192Z"
                  fill="#9580FF"
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ rotate: 0, scale: 1, x: 0, y: 0 }}
              whileHover={{ rotate: 6, scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              style={{ transformOrigin: "center" }}
              className="absolute top-32 left-10"
            >
              <svg
                width="190"
                height="130"
                viewBox="0 0 419 391"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M414.324 289.43C419.427 293.658 420.154 301.248 415.701 306.157C326.807 404.172 180.142 419.343 82.7144 338.629C-14.7128 257.915 -27.0857 110.987 52.6848 5.41316C56.6802 0.12545 64.272 -0.572465 69.3756 3.6556L161.11 79.6534C166.213 83.8814 166.851 91.4181 163.234 96.9718C136.563 137.928 142.701 191.857 179.235 222.123C215.768 252.389 269.897 248.39 305.178 214.566C309.962 209.979 317.486 209.204 322.589 213.432L414.324 289.43Z"
                  fill="#FBD96B"
                />
              </svg>
            </motion.div>
            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <mask id="video-mask">
                  <path
                    d="M122.862 240.595C187.814 239.075 240 185.946 240 120.629C240 54.3547 186.274 0.628906 120 0.628906C54.6825 0.628906 1.55367 52.8149 0.03346 117.767L0 240.629L122.862 240.595Z"
                    fill="white"
                  />
                </mask>
              </defs>
            </svg>
            <div className=" absolute   bottom-8 left-8 w-[240px] h-[241px]">
              <video
                autoPlay
                loop
                muted
                preload="none"
                style={{
                  width: "100%",
                  height: "100%",
                  mask: "url(#video-mask)",
                  WebkitMask: "url(#video-mask)",
                  objectFit: "cover",
                }}
              >
                <source src="./videos/people-talking.mp4" type="video/mp4" />
              </video>
            </div>
            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <mask id="video-mask-2">
                  <path
                    d="M120 240C53.7258 240 0 186.274 0 120V120C0 53.7258 53.7258 -1.20401e-05 120 -1.20401e-05L256 -1.20401e-05V240L120 240Z"
                    fill="white"
                  />
                </mask>
              </defs>
            </svg>

            <div className="hidden lg:block absolute top-8 right-8 w-[240px] h-[241px]">
              <video
                autoPlay
                loop
                muted
                preload="none"
                style={{
                  width: "100%",
                  height: "100%",
                  mask: "url(#video-mask-2)",
                  WebkitMask: "url(#video-mask-2)",
                  objectFit: "cover",
                }}
              >
                <source src="./videos/website-scrolling.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="font-medium text-4xl text-gray-900 sm:text-6xl lg:text-7xl text-center">
              <span>Envie d'un </span>
              <span
                onMouseEnter={handleMouseEnterTitle}
                onMouseLeave={handleMouseLeave}
                className="text-primary"
              >
                {" "}
                site <br /> web sur mesure ?
              </span>
            </div>
            <div className="flex justify-center">
              <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 sm:max-w-md max-w-xs text-center">
                Impulse combine l&apos;
                <span
                  onMouseEnter={handleMouseEnterSubtitle}
                  onMouseLeave={handleMouseLeave}
                >
                  UX design{" "}
                </span>
                et le{" "}
                <span
                  onMouseEnter={handleMouseEnterSubtitle}
                  onMouseLeave={handleMouseLeave}
                >
                  developpement web{" "}
                </span>
                pour offrir des solutions digitales complètes.
              </p>
            </div>

            <div className="mt-10 flex justify-center items-center gap-x-6">
              <HoverButton href="/contact" content="votre projet" />
            </div>
          </FadeIn>
        </div>
      </FadeInStagger>
    </section>
  );
}
