"use client";

import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="max-w-[1440px] mx-auto bg-secondary text-black font-label">
      <div className="  py-4 flex justify-between items-center px-6 md:px-20">
        <div className="flex justify-between items-center gap-12 ">
          {/* Logo */}
          <Link
            data-cursor="print"
            href="/"
            className="flex items-center cursor-pointer"
          >
            <Image
              src="/logo_purple.svg"
              alt="Company Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8 text-sm font-medium font-display text-black">
            <Link
              data-cursor="print"
              href="/services"
              className="hover:text-accent transition-colors"
            >
              Services
            </Link>
            <Link
              data-cursor="print"
              href="/portfolio"
              className="hover:text-accent transition-colors"
            >
              Portfolio
            </Link>
            <Link
              data-cursor="print"
              href="/contact"
              className="hover:text-accent transition-colors"
            >
              Contact
            </Link>
            <Link
              data-cursor="print"
              href="/about"
              className="hover:text-accent transition-colors"
            >
              About
            </Link>
          </nav>
        </div>

        {/* CTA Button */}
        <button
          data-cursor="print"
          className="text-sm font-label font-semibold border border-primary px-4 py-2  transition-colors"
        >
          Book Now
        </button>
      </div>
    </header>
  );
};

export default Header;
