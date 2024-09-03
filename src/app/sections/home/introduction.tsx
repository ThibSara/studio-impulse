import { useCursor } from "@/components/cursor/CursorContext";

export function Introduction() {
  const { setVariant } = useCursor();

  const handleMouseEnter = (variant: string) => () => {
    setVariant(variant);
  };

  const handleMouseLeave = () => {
    setVariant("default");
  };

  return (
    <section id="introduction" aria-label="Introduction">
      <div className="relative isolate overflow-hidden bg-[#07183B] rounded-3xl  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden"></div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="font-medium text-3xl text-white sm:text-5xl lg:text-6xl">
                  Entre créativité <br />
                  et
                  <span
                    onMouseEnter={handleMouseEnter("title")}
                    onMouseLeave={handleMouseLeave}
                    className="text-primary"
                  >
                    {" "}
                    technologies
                  </span>
                </h1>
                <p className="mt-6 text-xl leading-8 text-white">
                  Chez Impulse nous pensons que L&apos;innovation naît de
                  l&apos;équilibre entre l&apos;art et la technologie.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt=""
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-white lg:max-w-lg">
                <p>
                  Nous combinons une approche créative avec une maîtrise
                  technique pointue pour concevoir des sites web qui captivent,
                  engagent et restent gravés dans les mémoires. Cette synergie
                  nous permet de transformer vos idées en expériences digitales
                  uniques, parfaitement adaptées à vos besoins.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-200">
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-white">
                        Développement rapide
                      </strong>{" "}
                      Nous mettons en place un calendrier précis avec des dates
                      clés pour chaque étape du projet.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-white">
                        Technologies de pointe
                      </strong>{" "}
                      Nous utilisons des CMS (systèmes de gestion de contenu)
                      ainsi que de l&apos;IA pour faciliter la création et la
                      gestion de votre site web.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-white">
                        Livraison clé en main
                      </strong>{" "}
                      Votre site est livré déjà déployé et prêt à l&apos;emploi,
                      pour que vous puissiez vous concentrer sur votre activité
                      dès le premier jour.
                    </span>
                  </li>
                </ul>

                <p className="mt-8">
                  Vous êtes au cœur de chaque étape de la création de votre site
                  web. De la conception initiale au développement final, nous
                  vous impliquons à chaque phase pour garantir que le résultat
                  reflète parfaitement vos attentes. Votre avis est essentiel et
                  nous nous engageons à le prendre en compte pour que chaque
                  décision soit alignée avec votre vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
