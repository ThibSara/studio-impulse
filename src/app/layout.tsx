import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import clsx from "clsx";
import { NavBar } from "@/components/common/navbar";

export const metadata: Metadata = {
  title: {
    template: "%s - Impulse Lab",
    default: "Impulse Lab - Designing the future of the web",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx("h-full scroll-smooth antialiased")}>
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,701,900,901&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <div className="px-4 sm:px-8 lg:px-16 max-w-8xl">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
