"use client";

import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { SquareMenuIcon } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-[2px]">
          <SquareMenuIcon className="h-6 w-6" />
          <span className="text-sm font-semibold tracking-tighter">menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 sm:w-96">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2.5">
            <Image src="/images/logo.svg" alt="logo" width={40} height={40} />
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-4 mt-8 px-4">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-6">
            {navItems.map(({ href, label }) => (
              <SheetClose asChild key={label}>
                <Link
                  href={href}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    pathname === href
                      ? "text-primary font-semibold"
                      : "text-foreground"
                  }`}
                >
                  {label}
                </Link>
              </SheetClose>
            ))}
          </nav>

          <div className="pt-4 border-t border-border">
            <SheetClose asChild>
              <Link href="/companions/new" className="block">
                <button className="btn-primary w-full justify-center">
                  <Image
                    src="/icons/plus.svg"
                    alt="plus"
                    width={12}
                    height={12}
                  />
                  <span>Build a New Companion</span>
                </button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
