import { useCursor } from "@/components/cursor/CursorContext";
import { HoverButton } from "@/components/ui/hover-button/hoverButton";

export function CTA() {
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
    <section id="introduction" aria-label="Introduction" className="max-w-8xl">
      <div className=" bg-[#07183B] mx-8 my-16 flex flex-col  rounded-3xl min-h-screen">
        <div className="max-w-xl px-4 py-24">
          <div className="font-medium text-3xl text-white sm:text-5xl lg:text-6xl">
            Ils ont sauté le pas, <br />
            <span
              onMouseEnter={handleMouseEnterTitle}
              onMouseLeave={handleMouseLeave}
              className="text-primary"
            >
              {" "}
              et vous ?
            </span>
          </div>
        </div>
        <div className="mt-10 flex justify-center items-center gap-x-6">
          <HoverButton href="/contact" content="votre projet" />
        </div>
      </div>
    </section>
  );
}
