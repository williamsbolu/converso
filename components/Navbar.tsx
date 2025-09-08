import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src={"/images/logo.svg"} alt="logo" width={46} height={44} />
        </div>
      </Link>

      <div className="flex items-center gap-2 md:gap-8">
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavItems />
        </div>

        <MobileNav />

        {/* Desktop Authentication */}
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="btn-signin">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
