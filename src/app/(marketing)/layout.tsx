import Footer from "@/components/footer";
import { GradientBackground } from "@/components/gradient-background";
import { GridPattern } from "@/components/home/hero-grid-pattern";
import { Logo } from "@/components/ui/icon";
import Link from "next/link";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="absolute inset-x-0 top-0 z-50">
                <Link className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" href="/">
                    <Logo />
                    <span className="sr-only">Acme Inc</span>
                </Link>
            </header>
            <main>
                <div className="relative isolate">
                    <GridPattern />
                    <GradientBackground />
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}