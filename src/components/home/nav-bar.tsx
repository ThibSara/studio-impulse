'use client'

import { useEffect, useRef, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import clsx from 'clsx'
import { Button } from '../ui/button'
import { ChevronsUpDown, Menu } from 'lucide-react'
import { Link } from '../ui/link'

const sections = [
    {
        id: 'discover',
        title: 'Discover',
    },
    { id: 'design', title: 'Design' },
    { id: 'resources', title: 'Resources' },
    { id: 'pricing', title: 'Pricing' },
    { id: 'founder-message', title: 'Founder\'s message' },
]

export function NavBar() {
    let navBarRef = useRef<React.ElementRef<'div'>>(null)
    let [activeIndex, setActiveIndex] = useState<number | null>(null)
    let mobileActiveIndex = activeIndex === null ? 0 : activeIndex

    useEffect(() => {
        function updateActiveIndex() {
            if (!navBarRef.current) {
                return
            }

            let newActiveIndex = null
            let elements = sections
                .map(({ id }) => document.getElementById(id))
                .filter((el): el is HTMLElement => el !== null)
            let bodyRect = document.body.getBoundingClientRect()
            let offset = bodyRect.top + navBarRef.current.offsetHeight + 1

            if (window.scrollY >= Math.floor(bodyRect.height) - window.innerHeight) {
                setActiveIndex(sections.length - 1)
                return
            }

            for (let index = 0; index < elements.length; index++) {
                if (
                    window.scrollY >=
                    elements[index].getBoundingClientRect().top - offset
                ) {
                    newActiveIndex = index
                } else {
                    break
                }
            }

            setActiveIndex(newActiveIndex)
        }

        updateActiveIndex()

        window.addEventListener('resize', updateActiveIndex)
        window.addEventListener('scroll', updateActiveIndex, { passive: true })

        return () => {
            window.removeEventListener('resize', updateActiveIndex)
            window.removeEventListener('scroll', updateActiveIndex)
        }
    }, [])

    return (
        <div ref={navBarRef} className="sticky top-0 z-50">
            <Popover>
                <PopoverTrigger asChild className='sm:hidden'>
                    <div
                        className={clsx(
                            "relative flex items-center px-4 py-3",
                            "bg-white/95 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur"
                        )}
                    >
                        <span
                            aria-hidden="true"
                            className="font-mono text-sm text-blue-600"
                        >
                            {(mobileActiveIndex + 1).toString().padStart(2, "0")}
                        </span>
                        <span className="ml-4 text-base font-medium text-slate-900">
                            {sections[mobileActiveIndex].title}
                        </span>
                        <Button
                            className="-mr-1 ml-auto"
                            aria-label="Toggle navigation menu"
                            variant="ghost"
                        >
                            {/* Increase hit area */}
                            <ChevronsUpDown className="size-5" />
                        </Button>
                    </div>
                </PopoverTrigger>
                <PopoverContent align="start" className="absolute inset-x-0 top-0 bg-white/95 py-3.5 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur w-screen">
                    {sections.map((section, sectionIndex) => (
                        <Link
                            key={section.id}
                            asChild
                            className="flex items-center px-4 py-1.5 justify-start"
                            variant='ghost'
                            href={`#${section.id}`}
                        >
                            <span aria-hidden="true" className="font-mono text-sm text-blue-600">
                                {(sectionIndex + 1).toString().padStart(2, "0")}
                            </span>
                            <span className="ml-4 text-base font-medium text-slate-900">
                                {section.title}
                            </span>
                        </Link>
                    ))}
                </PopoverContent>
            </Popover>
            <div className="hidden sm:flex sm:h-32 sm:justify-center sm:border-b sm:border-slate-200 sm:bg-white/95 sm:[@supports(backdrop-filter:blur(0))]:bg-white/80 sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur">
                <ol
                    role="list"
                    className="mb-[-2px] grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-slate-900 [counter-reset:section]"
                >
                    {sections.map((section, sectionIndex) => (
                        <li key={section.id} className="flex [counter-increment:section]">
                            <a
                                href={`#${section.id}`}
                                className={clsx(
                                    'flex w-full flex-col items-center text-wrap text-center justify-center border-b-2 before:mb-2 before:font-mono before:text-sm before:content-[counter(section,decimal-leading-zero)]',
                                    sectionIndex === activeIndex
                                        ? 'border-blue-600 bg-blue-50 text-blue-600 before:text-blue-600'
                                        : 'border-transparent before:text-slate-500 hover:bg-blue-50/40 hover:before:text-slate-900',
                                )}
                            >
                                {section.title}
                            </a>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
