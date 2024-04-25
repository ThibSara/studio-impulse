import clsx from 'clsx'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/home/section-heading'
import { Link } from '../ui/link'

function Plan({
    name,
    description,
    price,
    features,
    href,
    featured = false,
}: {
    name: string
    description: string
    price: string
    features: Array<string>
    href: string
    featured?: boolean
}) {
    return (
        <div
            className={clsx(
                'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
                featured && 'bg-blue-600 sm:shadow-lg',
            )}
        >
            <div className="relative flex flex-col">
                <h3
                    className={clsx(
                        'mt-7 text-lg font-semibold tracking-tight',
                        featured ? 'text-white' : 'text-slate-900',
                    )}
                >
                    {name}
                </h3>
                <p
                    className={clsx(
                        'mt-2 text-lg tracking-tight',
                        featured ? 'text-white' : 'text-slate-600',
                    )}
                >
                    {description}
                </p>
                <div className='order-first flex flex-col'>
                    <span className={clsx(
                        'text-lg leading-tight',
                        featured ? 'text-blue-200' : 'text-slate-500',
                    )}>
                        Starts at
                    </span>
                    <p className="flex font-display font-bold">
                        <span
                            className={clsx(
                                'text-[1.75rem] leading-tight',
                                featured ? 'text-blue-200' : 'text-slate-500',
                            )}
                        >
                            $
                        </span>
                        <span
                            className={clsx(
                                'ml-1 mt-1 text-7xl tracking-tight',
                                featured ? 'text-white' : 'text-slate-900',
                            )}
                        >
                            {price}
                        </span>
                    </p>
                </div>
                <div className="order-last mt-8">
                    <ul
                        role="list"
                        className={clsx(
                            '-my-2 divide-y text-base tracking-tight',
                            featured
                                ? 'divide-white/10 text-white'
                                : 'divide-slate-200 text-slate-900',
                        )}
                    >
                        {features.map((feature) => (
                            <li key={feature} className="flex py-2">
                                <span className={clsx(
                                    'h-8 w-8 flex-none',
                                    featured ? 'text-white' : 'text-slate-600',
                                )}>✓</span>
                                <span className="ml-4">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link
                    href={href}
                    variant={featured ? 'secondary' : 'default'}
                    className="mt-8"
                    aria-label={`Get started with the ${name} plan for $${price}`}
                >
                    Get started
                </Link>
            </div>
        </div>
    )
}

export function Pricing() {
    return (
        <section
            id="pricing"
            aria-labelledby="pricing-title"
            className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
        >
            <Container>
                <SectionHeading number="4" id="pricing-title">
                    Pricing
                </SectionHeading>
                <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                    Pick your package
                </p>
                <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
                    Our web design services are available in two different packages
                    so you can pick the one that's right for you.
                </p>
            </Container>
            <div className="mx-auto mt-16 max-w-5xl lg:px-6">
                <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
                    <Plan
                        name="Landing Page"
                        description="The perfect starting point for a single page website."
                        price="2,000"
                        href="/contact"
                        features={[
                            'Responsive design',
                            'Next.js / Tailwind CSS',
                            'SEO optimization',
                            'Performant code',
                            'CMS integration'
                        ]}
                    />
                    <Plan
                        featured
                        name="Multi-Page Website"
                        description="Ideal for businesses that need a full online presence."
                        price="12,000"
                        href="/contact"
                        features={[
                            'Web Apps and SaaS Development',
                            'Multi-page landing page website',
                            'Content management system',
                            'E-commerce functionality',
                            'AI Apps development',
                            'Negotiable delivery time'
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}
