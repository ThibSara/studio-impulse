"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu } from "lucide-react";
import { RoundLogo } from "@/components/ui/round-logo/roundLogo";
import { PAGES_NAMES } from "@/app/constants/PAGES_NAMES";

const navigation = [
  {
    name: PAGES_NAMES.HOME.title,
    href: PAGES_NAMES.HOME.href,
  },
  {
    name: PAGES_NAMES.DECOUVRIR.title,
    href: PAGES_NAMES.DECOUVRIR.href,
  },
  {
    name: PAGES_NAMES.SERVICES.title,
    href: PAGES_NAMES.SERVICES.href,
  },
  {
    name: PAGES_NAMES.CONTACT.title,
    href: PAGES_NAMES.CONTACT.href,
  },
];

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-black">
      <nav
        aria-label="Global"
        className="relative mx-auto flex max-w-7xl items-center justify-between p-6 sm:pt-10 lg:px-8"
      >
        <div className="absolute mt-20">
          <RoundLogo />
        </div>
        <div className="flex lg:flex-1"></div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Menu aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-md font-medium leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 bg-black/50" />{" "}
        <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between"></div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
