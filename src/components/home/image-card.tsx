import Image from "next/image";

type ImageCardProps = {
    src: string;
    alt: string;
};

export function ImageCard({ src, alt }: ImageCardProps) {
    return (
        <div className="relative">
            <img
                src={src}
                alt={alt}
                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
        </div>
    );
}
