import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/home/section-heading'
import userResearch from '@/images/design/user-research.svg'
import wireframing from '@/images/design/wireframing.svg'
import visualDesign from '@/images/design/visual-design.svg'
import interactionDesign from '@/images/design/interaction-design.svg'

const designProcess = [
    {
        title: 'User Research',
        description:
            'We start by understanding your users, their needs, and their goals through research and analysis.',
        image: userResearch,
    },
    {
        title: 'Wireframing',
        description:
            'We create low-fidelity wireframes to establish the structure and layout of your website.',
        image: wireframing,
    },
    {
        title: 'Visual Design',
        description:
            'We craft visually appealing designs that align with your brand and engage your target audience.',
        image: visualDesign,
    },
    {
        title: 'Interaction Design',
        description:
            'We design intuitive and seamless interactions to enhance the user experience on your website.',
        image: interactionDesign,
    },
]

export function Design() {
    return (
        <section
            id="design"
            aria-labelledby="design-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="2" id="design-title">
                    Design Process
                </SectionHeading>
                <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                    Crafting stunning websites through a user-centric design process
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-700">
                    At impulse, we follow a meticulous design process to create websites
                    that not only look great but also deliver exceptional user experiences.
                    Here&apos;s how we approach website design:
                </p>
            </Container>
            <Container className="mt-16">
                <ol
                    role="list"
                    className="grid grid-cols-1 gap-y-10 gap-x-8 [counter-reset:design] sm:grid-cols-2 lg:grid-cols-4"
                >
                    {designProcess.map((step) => (
                        <li key={step.title} className="[counter-increment:design]">
                            <div className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg">
                                <div className="flex overflow-hidden rounded">
                                    <Image src={step.image} alt="" unoptimized />
                                </div>
                            </div>
                            <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(design,decimal-leading-zero)]">
                                {step.title}
                            </h3>
                            <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                        </li>
                    ))}
                </ol>
            </Container>
        </section>
    )
}
