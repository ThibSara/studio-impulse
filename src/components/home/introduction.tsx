import { useCursor } from "./../cursor/CursorContext";

export function Introduction() {
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
      <div className=" bg-[#07183B] mx-8 my-16 flex  rounded-3xl min-h-screen">
        <div className="max-w-xl px-4 py-24">
          <div className="font-medium text-3xl text-white sm:text-5xl lg:text-6xl">
            Du design à la <br />
            <span
              onMouseEnter={handleMouseEnterTitle}
              onMouseLeave={handleMouseLeave}
              className="text-primary"
            >
              {" "}
              conception
            </span>
          </div>
        </div>
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M87.7551 12.7551C87.7551 5.71065 82.0444 0 75 0C67.9556 0 62.2449 5.71065 62.2449 12.7551V26.738L55.3364 14.5809C51.856 8.45631 44.0696 6.31278 37.945 9.79321C31.8203 13.2736 29.6768 21.0601 33.1572 27.1847L41.0187 41.0187L27.1847 33.1572C21.0601 29.6768 13.2737 31.8203 9.79323 37.9449C6.3128 44.0695 8.45633 51.856 14.5809 55.3364L26.738 62.2449H12.7551C5.71065 62.2449 0 67.9555 0 75C0 82.0444 5.71065 87.7551 12.7551 87.7551H26.738L14.5809 94.6636C8.45633 98.144 6.3128 105.93 9.79323 112.055C13.2737 118.18 21.0601 120.323 27.1847 116.843L41.0187 108.981L33.1572 122.815C29.6768 128.94 31.8203 136.726 37.9449 140.207C44.0696 143.687 51.856 141.544 55.3364 135.419L62.2449 123.262V137.245C62.2449 144.289 67.9556 150 75 150C82.0445 150 87.7551 144.289 87.7551 137.245V123.262L94.6636 135.419C98.144 141.544 105.93 143.687 112.055 140.207C118.18 136.726 120.323 128.94 116.843 122.815L108.981 108.981L122.815 116.843C128.94 120.323 136.726 118.18 140.207 112.055C143.687 105.93 141.544 98.144 135.419 94.6636L123.262 87.7551H137.245C144.289 87.7551 150 82.0444 150 75C150 67.9556 144.289 62.2449 137.245 62.2449H123.262L135.419 55.3364C141.544 51.856 143.687 44.0695 140.207 37.9449C136.726 31.8203 128.94 29.6768 122.815 33.1572L108.981 41.0187L116.843 27.1847C120.323 21.0601 118.18 13.2736 112.055 9.79321C105.93 6.31278 98.144 8.45631 94.6636 14.5809L87.7551 26.738V12.7551Z"
            fill="#9580FF"
          />
        </svg>
      </div>
    </section>
  );
}
