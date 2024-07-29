import { HoverButton } from "../ui/hover-button/hoverButton";
import Image from "next/image";
import { Spline, PenTool, Smile } from "lucide-react";
import { Notifications } from "../ui/notifications";
import { useCursor } from "./../cursor/CursorContext";

export function Discover() {
  const { setVariant } = useCursor();

  const handleMouseEnterTitle = () => {
    setVariant("title");
  };

  const handleMouseEnterSection = () => {
    setVariant("section");
  };

  const handleMouseLeave = () => {
    setVariant("default");
  };

  return (
    <section
      id="discover"
      aria-labelledby="discover-title"
      className="scroll-mt-14 py-16 mx-8 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <div className="font-medium text-3xl text-black sm:text-5xl lg:text-6xl">
        Découvrez Nos
        <span className="text-primary"> Services</span>
      </div>
      <div className="py-12 grid grid-cols-2 gap-8 mt-8">
        <div className="space-y-8">
          <div className="h-[600px] bg-[#06193A] rounded-xl flex flex-col items-center ">
            <h1 className="text-white text-4xl pt-12 pb-4 font-medium">
              Cibler l&apos;utilisateur
            </h1>
            <p className="text-base leading-8 text-slate-50 sm:max-w-md max-w-xs">
              Ensemble, nous réalisons une étude préalable pour cerner les
              besoins de vos utilisateurs. Cette analyse guidera l'UX et l'UI de
              votre site web.
            </p>
            <Image
              alt="user"
              src={"/images/user.png"}
              height={300}
              width={300}
              className="mt-32"
            />
          </div>

          <div className="h-[612px] bg-[#6255FA] rounded-xl flex flex-col items-center">
            <h1 className="text-white text-4xl pt-12 pb-4 font-medium">
              Notifications en Temps Réel
            </h1>
            <p className="text-base leading-8 text-slate-50 sm:max-w-md max-w-xs">
              Suivez notre progression en temps réel grâce à des notifications
              continues et un planning détaillé.
            </p>
            <Notifications />
          </div>
        </div>
        <div className="space-y-8">
          <div
            onMouseEnter={handleMouseEnterSection}
            onMouseLeave={handleMouseLeave}
            className="h-[320px] bg-primary rounded-xl flex flex-col items-center relative"
          >
            <h1 className="text-white text-4xl pt-12 pb-4 font-medium">
              Wireframe et maquette
            </h1>
            <p className="text-base leading-8 text-slate-50 sm:max-w-md max-w-xs">
              Notre équipe de designers crée une maquette de votre site qui
              reflète au mieux votre image. Vous aurez l'opportunité de la
              valider avant la phase de développement.
            </p>
            <div className="flex flex-row text-white">
              <Spline className="absolute top-2 left-2" />
              <PenTool className="absolute top-2 right-2" />
              <Smile className="absolute top-10 right-2" />
            </div>
          </div>
          <div className="h-[540px] bg-[#06193A] p-8 rounded-xl flex flex-col items-center text-center">
            <h1 className="text-white text-4xl pt-12 pb-4 font-medium">
              Des Solutions Digitales Complètes
            </h1>
            <p className="text-base leading-8 text-slate-50 sm:max-w-md max-w-xs">
              Impulse combine l&apos; UX design et le developpement web pour
              offrir des solutions digitales complètes.
            </p>
          </div>
          <div className="h-[320px] bg-[#C4DCFF] rounded-xl flex flex-col items-center text-center">
            <h1 className="text-black text-4xl pt-12 pb-4 font-medium">
              Parlez-nous de votre projet
            </h1>
            <p className="text-base leading-8 text-black  sm:max-w-md max-w-xs">
              Faites estimer votre projet gratuitement par l'un de nos experts.
            </p>
            <div className="mt-10 flex justify-center items-center gap-x-6">
              <HoverButton href="/contact" content="votre projet" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
