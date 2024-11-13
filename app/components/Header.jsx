"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Navigation from "./Navigation";

const Header = () => {
  const pathname = usePathname();
  const navRef = useRef(null);
  const navContainer = useRef(null);
  const logoRef = useRef(null);
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
    setTimeout(() => {
      firstLineRef.current.style.transform = isNavOpen
        ? "translateY(-5px)"
        : "translateY(0)";
      secondLineRef.current.style.transform = isNavOpen
        ? "translateY(5px)"
        : "translateY(0)";
    }, 200);
    logoRef.current.classList.toggle("text-white");
    firstLineRef.current.classList.toggle("bg-white");
    secondLineRef.current.classList.toggle("bg-white");
    navContainer.current.classList.toggle("pointer-events-auto");
    if (navRef.current) {
      navRef.current.style.transform = isNavOpen
        ? "translateX(110%)" // Move off screen when closed
        : "translateX(0)"; // Bring it on screen when open
    }
  };

  return (
    <>
      {!pathname.includes("/studio") && (
        <>
          <header className="fixed top-0 z-50 flex items-center justify-between w-full h-24 px-5 py-5 font-sans md:px-10">
            <Link
              href="/"
              ref={logoRef}
              className="text-3xl font-bold transition-transform duration-300 cursor-pointer text-primary-500"
              onClick={() => {
                if (isNavOpen) {
                  toggleNav();
                }
              }}
              onMouseEnter={() => {
                logoRef.current.textContent = "LAAN";
              }}
              onMouseLeave={() => {
                logoRef.current.textContent =
                  pathname.includes("/labs") ||
                  pathname.includes("/laps") ||
                  pathname.includes("/lads")
                    ? pathname
                        .slice(
                          pathname.indexOf("/") + 1,
                          pathname.indexOf("/", pathname.indexOf("/") + 1) !==
                            -1
                            ? pathname.indexOf("/", pathname.indexOf("/") + 1)
                            : pathname.length
                        )
                        .toUpperCase()
                    : "LAAN";
              }}
            >
              {pathname.includes("/labs") ||
              pathname.includes("/laps") ||
              pathname.includes("/lads")
                ? pathname
                    .slice(
                      pathname.indexOf("/") + 1,
                      pathname.indexOf("/", pathname.indexOf("/") + 1) !== -1
                        ? pathname.indexOf("/", pathname.indexOf("/") + 1)
                        : pathname.length
                    )
                    .toUpperCase()
                : "LAAN"}
            </Link>
            <div
              className="flex flex-col items-center justify-center w-12 h-full cursor-pointer"
              onClick={toggleNav}
            >
              <div
                ref={firstLineRef}
                className="w-full h-0.5 bg-primary-500 -translate-y-[5px] transition-all duration-300"
              ></div>
              <div
                ref={secondLineRef}
                className="w-full h-0.5 bg-primary-500 translate-y-[5px] transition-all duration-300"
              ></div>
            </div>
          </header>
          <Navigation
            isNavOpen={isNavOpen}
            toggleNav={toggleNav}
            navRef={navRef}
            navContainer={navContainer}
          />
        </>
      )}
    </>
  );
};

export default Header;
