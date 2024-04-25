import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/home/section-heading'

function CheckCircle() {
    return (
        <svg className="h-6 w-6 flex-none fill-blue-500" viewBox="0 0 24 24">
            <path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z" />
            <circle cx="12" cy="12" r="8.25" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function Discover() {
    return (
        <section
            id="discover"
            aria-labelledby="discover-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="1" id="discover-title">
                    Discover
                </SectionHeading>
                <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                    Unveiling your digital potential through meticulous discovery.
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-700">
                    At impulse, we believe that every successful website starts with a deep understanding of our clients&apos; businesses. Our discovery process is designed to uncover the essence of your brand, target audience, and unique selling points.
                </p>
                <div className="mt-8">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-48 w-48 rounded-lg object-cover"
                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />
                        </div>
                        <div className="ml-6">
                            <h3 className="text-lg font-medium text-slate-900">Collaborative Workshops</h3>
                            <p className="mt-2 text-base text-slate-700">
                                We conduct interactive workshops with your team to align goals, define success metrics, and establish a shared vision for your website. These sessions foster open communication and lay the foundation for a successful partnership.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-48 w-48 rounded-lg object-cover"
                                src="https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhiteboard.2d6ee65a.jpg&w=1920&q=75"
                                alt="User research and analysis"
                            />
                        </div>
                        <div className="ml-6">
                            <h3 className="text-lg font-medium text-slate-900">User Research and Analysis</h3>
                            <p className="mt-2 text-base text-slate-700">
                                Through a combination of surveys, interviews, and data analysis, we gain valuable insights into your target audience&apos;s behaviors, preferences, and pain points. This knowledge informs our design decisions and ensures a user-centric approach.
                            </p>
                        </div>
                    </div>
                </div>
                <ul className="mt-8 grid grid-cols-1 gap-4 text-lg tracking-tight text-slate-700 sm:grid-cols-2">
                    <li className="flex items-center">
                        <CheckCircle />
                        <span className="ml-4">Stakeholder interviews</span>
                    </li>
                    <li className="flex items-center">
                        <CheckCircle />
                        <span className="ml-4">Competitor analysis</span>
                    </li>
                    <li className="flex items-center">
                        <CheckCircle />
                        <span className="ml-4">Content audit and strategy</span>
                    </li>
                    <li className="flex items-center">
                        <CheckCircle />
                        <span className="ml-4">Technical feasibility assessment</span>
                    </li>
                </ul>
            </Container>
        </section>
    )
}
