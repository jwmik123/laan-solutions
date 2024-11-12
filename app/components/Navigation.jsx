"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Navigation = ({ isNavOpen, toggleNav, navRef, navContainer }) => {
  const linkRefs = useRef([]);

  useEffect(() => {
    if (isNavOpen) {
      gsap.fromTo(
        linkRefs.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: 0.5,
          stagger: 0.2,
        }
      );
    }
  }, [isNavOpen]);

  return (
    <nav
      ref={navContainer}
      className="fixed inset-0 z-40 w-full h-full text-white pointer-events-none"
    >
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 bg-black ${
          isNavOpen ? "opacity-30" : "opacity-0"
        }`}
        onClick={toggleNav}
      ></div>
      <div
        ref={navRef}
        className="fixed right-0 z-10 w-full pb-16 transition-transform duration-300 translate-x-full top-4 rounded-xl md:w-1/3 lg:w-1/4 bg-primary-500"
      >
        <div className="flex flex-col h-full gap-5 mt-24">
          <div className="flex flex-col">
            {["LAbS", "LApS", "LAdS"].map((path, index) => (
              <Link
                key={path}
                href={`/${path.toLowerCase()}`}
                className="px-8 py-4 overflow-hidden text-4xl transition-all duration-200 hover:font-bold"
                onClick={() => {
                  toggleNav();
                }}
              >
                <div
                  ref={(el) => (linkRefs.current[index] = el)}
                  className="flex items-center justify-between opacity-0 w-ful"
                >
                  {path.charAt(0) + path.slice(1)}
                </div>
              </Link>
            ))}
            <Link
              href="/about"
              className="px-8 py-4 overflow-hidden text-4xl transition-all duration-200 hover:font-bold"
              onClick={() => {
                toggleNav();
              }}
            >
              <div
                ref={(el) => (linkRefs.current[3] = el)}
                className="flex items-center justify-between w-full opacity-0"
              >
                Over ons
              </div>
            </Link>
          </div>
          <div
            ref={(el) => (linkRefs.current[4] = el)}
            className="flex flex-col gap-2 pt-16 mx-8"
          >
            <Link
              data-animation-link="no-animation"
              href="mailto:info@laansolutions.nl"
            >
              <strong>Email:</strong> info@laansolutions.nl
            </Link>
            <Link data-animation-link="no-animation" href="tel:+31655555555">
              <strong>Telefoon:</strong> +31 6 55 55 55 55
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
