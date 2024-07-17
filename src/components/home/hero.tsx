import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { ImageCard } from "@/components/home/image-card";
import { Link } from "@/components/ui/link";
import { ArrowRight } from "lucide-react";
import { useCursor } from "./../cursor/CursorContext";
import { HoverButton } from "./../ui/hover-button/HoverButton"; // Ensure correct import path

export function HeroSection() {
  const { setVariant } = useCursor();

  const handleMouseEnter = () => {
    setVariant("buy");
  };

  const handleMouseLeave = () => {
    setVariant("default");
  };

  return (
    <section className="w-full overflow-hidden flex min-h-screen justify-center items-center">
      <FadeInStagger
        className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32"
        faster
      >
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <FadeIn className=" w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1 className="font-display font-semibold text-5xl tracking-tight text-gray-900 sm:text-6xl">
              We create{" "}
              <span
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-[#9580FF]"
              >
                Stunning Websites{" "}
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
              Impulse combine l'UX design et le développement web pour offrir
              des solutions digitales complètes. De l'idée à la mise en œuvre,
              nous créons des expériences utilisateurs uniques et des produits
              sur mesure.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <HoverButton href="/contact" />
            </div>
          </FadeIn>
        </div>
      </FadeInStagger>
    </section>
  );
}
