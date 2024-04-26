import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { ImageCard } from "@/components/home/image-card";
import { Link } from "@/components/ui/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="w-full overflow-hidden">
            <FadeInStagger className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32" faster>
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                    <FadeIn className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                        <h1 className="font-display font-semibold  text-5xl tracking-tight [text-wrap:balance] text-gray-900 sm:text-6xl">
                            We create stunning interfaces for your users
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                            At Impulse, we leverage state-of-the-art technologies to build high-performance websites and complex digital experiences. Our team of skilled developers deliver exceptional results that drive your business forward.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Link
                                href="/contact"
                                variant="default"
                                className="group w-44 justify-between font-medium"
                            >
                                Get started
                                <ArrowRight className="mr-0 h-4 w-4 transition-all ease-out group-hover:-mr-1" />
                            </Link>
                        </div>
                    </FadeIn>
                    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                        <FadeIn className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                            <ImageCard
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                alt=""
                            />
                        </FadeIn>
                        <FadeIn className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                            <ImageCard
                                src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                alt=""
                            />
                            <ImageCard
                                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                                alt=""
                            />
                        </FadeIn>
                        <FadeIn className="w-44 flex-none space-y-8 pt-32 sm:pt-0">

                            <ImageCard
                                src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                                alt=""
                            />


                            <ImageCard
                                src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                alt=""
                            />

                        </FadeIn>
                    </div>
                </div>
            </FadeInStagger>
        </section>
    )
}