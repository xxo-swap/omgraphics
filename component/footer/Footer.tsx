"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import AnimatedBackground from "../Cursor/AnimatedBackground";

const Footer: FC = () => {
  // State to track if the user has clicked to use the map
  const [isMapActive, setIsMapActive] = useState(false);

  return (
    <footer className=" relative overflow-clip font-body  max-w-[1440px] mx-auto bg-secondary">
      {/* Logo at the top-left */}
      <div className="px-6 md:px-20 pt-6">
        <Link href="/">
          <Image
            src="/logo_purple.svg"
            alt="Company Logo"
            width={120}
            height={40}
            priority
          />
        </Link>
      </div>

      <div className="py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Address + Map + Contact */}
          <div className="flex flex-col gap-5">
            <p className="text-bg-dark text-sm">
              1, Shyam Charan Enclave, Gurukul Road, Near Football Ground,
              Jagjeetpur, Haridwar, 249404, Uttrakhand
            </p>

            <div className="flex flex-col gap-1">
              <p className="text-bg-dark text-sm">
                <a
                  data-cursor="print"
                  href="mailto:omgraphicx@gmail.com"
                  className="no-underline hover:no-underline cursor-none"
                >
                  omgraphicx@gmail.com
                </a>
                <br />
                <a
                  data-cursor="print"
                  href="tel:+919997830465"
                  className="no-underline hover:no-underline cursor-none"
                >
                  +91 9997830465
                </a>
              </p>
            </div>

            {/* Map Section */}
            <div className="flex flex-col gap-2 items-start">
              <p className="font-display font-semibold text-bg-dark">
                Get Directions
              </p>

              <div
                className="relative group w-full h-[200px] overflow-hidden"
                onMouseLeave={() => setIsMapActive(false)} // Reset when user moves away
              >
                {/* The Overlay: Active only when isMapActive is false */}
                {!isMapActive && (
                  <div
                    data-cursor="print"
                    onClick={() => setIsMapActive(true)}
                    className="absolute inset-0 z-20 cursor-pointer flex items-center justify-center bg-black/0 hover:bg-black/5 transition-colors"
                  >
                    {/* Visual cue for the user */}
                    <span className="bg-primary/80 text-bg-light px-3 py-1 text-[10px] font-label tracking-widest uppercase rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to interact
                    </span>
                  </div>
                )}

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.434825633644!2d78.1319114!3d29.9093444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909477668636b03%3A0xe5452d08316c039b!2sOm%20GraphicX!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  className={`border-0 rounded transition-all duration-500 ${
                    isMapActive ? "grayscale-0" : "grayscale opacity-80"
                  }`}
                  loading="lazy"
                  style={{ pointerEvents: isMapActive ? "auto" : "none" }}
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold mb-3 text-black">
              Navigation
            </h4>
            <ul className="space-y-2 text-bg-dark text-sm">
              <li>
                <Link
                  href="/services/commercial-printing"
                  className="hover:opacity-70 transition-opacity"
                >
                  Commercial Printing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/packaging"
                  className="hover:opacity-70 transition-opacity"
                >
                  Packaging
                </Link>
              </li>
              <li>
                <Link
                  href="/services/event-printing"
                  className="hover:opacity-70 transition-opacity"
                >
                  Event Printing
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Platforms */}
          <div>
            <h4 className="font-display font-semibold mb-3 text-black">
              Social Platforms
            </h4>
            <ul className="space-y-2 text-bg-dark text-sm">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center py-4 text-bg-dark text-sm border-t border-black/10">
        © {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
