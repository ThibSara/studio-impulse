import Image from 'next/image'

import { SectionHeading } from '@/components/home/section-heading'
import founderImage from '@/images/avatars/founder.png'
import founderSignature from '@/images/founder-signature.png'
import { GridPattern } from '../grid-pattern'

function TwitterIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
    )
}

export function FounderMessage() {
    return (
        <section
            id="founder-message"
            aria-labelledby="founder-message-title"
            className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
        >
            <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
                <GridPattern x="50%" y="100%" />
            </div>
            <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
                <div className="bg-slate-50 pt-px sm:rounded-6xl">
                    <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
                        <Image
                            className="absolute inset-0 h-full w-full object-cover"
                            src={founderImage}
                            alt=""
                            sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
                        />
                    </div>
                    <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
                        <SectionHeading number="5" id="founder-message-title">
                            Founder's Message
                        </SectionHeading>
                        <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                            <span className="block text-blue-600">Leonard Roussard –</span> Welcome to
                            impulse, where design meets innovation.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-slate-700">
                            As the founder of impulse, I've been passionate about web design
                            and creating exceptional digital experiences for over a decade.
                            Our team of talented designers and developers has worked with a
                            diverse range of clients, from startups to established brands,
                            helping them achieve their online goals and stand out in the
                            digital landscape.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-slate-700">
                            At impulse, we believe that great design is not just about
                            aesthetics, but also about functionality, usability, and
                            performance. We strive to create websites that not only look
                            stunning but also deliver seamless user experiences and drive
                            meaningful results for our clients.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-slate-700">
                            As a thought leader in the industry, I regularly share my insights
                            and expertise through conferences, workshops, and our blog. Our
                            team stays at the forefront of web design trends and technologies
                            to ensure that we deliver cutting-edge solutions to our clients.
                        </p>
                        <p className="mt-8">
                            <Image src={founderSignature} alt="Leonard Roussard" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
