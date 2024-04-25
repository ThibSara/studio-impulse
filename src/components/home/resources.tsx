import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/home/section-heading'
import vercelImage from '@/images/resources/vercel-image.png'
import nextjsImage from '@/images/resources/nextjs-image.png'
import figmaImage from '@/images/resources/figma-image.jpg'

const resources = [
    {
        title: 'Figma',
        description:
            'We use Figma for collaborative design, prototyping, and handoff. It allows us to create stunning visuals and iterate quickly.',
        image: function FigmaImage() {
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-[#000]">
                    <Image src={figmaImage} alt="" unoptimized />
                </div>
            )
        },
    },
    {
        title: 'Vercel',
        description:
            'We deploy and host our websites on Vercel for its speed, reliability, and seamless integration with Next.js.',
        image: function VercelImage() {
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-[#000]">
                    <Image src={vercelImage} alt="" unoptimized />
                </div>
            )
        },
    },
    {
        title: 'Next.js',
        description:
            'We build our websites using Next.js, a powerful React framework that enables server-side rendering, static site generation, and more.',
        image: function NextjsImage() {
            return (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image src={nextjsImage} alt="" unoptimized />
                </div>
            )
        },
    },
]

export function Resources() {
    return (
        <section
            id="resources"
            aria-labelledby="resources-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="3" id="resources-title">
                    Resources
                </SectionHeading>
                <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                    The tools and technologies we use to build exceptional websites.
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-700">
                    We leverage industry-leading tools and technologies to streamline our
                    workflow, collaborate effectively, and deliver high-quality websites
                    that exceed our clients&apos; expectations.
                </p>
            </Container>
            <Container className="mt-16">
                <ol
                    role="list"
                    className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
                >
                    {resources.map((resource) => (
                        <li
                            key={resource.title}
                            className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
                        >
                            <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                                <resource.image />
                            </div>
                            <div>
                                <h3 className="text-base font-medium tracking-tight text-slate-900">
                                    {resource.title}
                                </h3>
                                <p className="mt-2 text-sm text-slate-600">
                                    {resource.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </Container>
        </section>
    )
}
