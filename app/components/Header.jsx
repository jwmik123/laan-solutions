"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
const Header = () => {
  console.log(
    "%cWebsite by %cMik Development!",
    "color: white; font-size: 12px;",
    "color: orange; font-size: 14px; font-weight: bold;",
    "https://mikdevelopment.nl"
  );
  const pathname = usePathname();
  const navRef = useRef(null);
  const navContainer = useRef(null);
  const logoRef = useRef(null);
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
    firstLineRef.current.style.transform = isNavOpen
      ? "translateY(-5px)"
      : "translateY(0)";
    secondLineRef.current.style.transform = isNavOpen
      ? "translateY(5px)"
      : "translateY(0)";
    logoRef.current.classList.toggle("text-white");
    firstLineRef.current.classList.toggle("bg-white");
    secondLineRef.current.classList.toggle("bg-white");
    navContainer.current.classList.toggle("pointer-events-auto");
    if (navRef.current) {
      navRef.current.style.transform = isNavOpen
        ? "translateX(100%)" // Move off screen when closed
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
          <nav
            ref={navContainer}
            className="fixed inset-0 z-40 w-full h-full text-white pointer-events-none"
          >
            <div
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 bg-black ${
                isNavOpen ? "opacity-70" : "opacity-0"
              }`}
              onClick={toggleNav}
            ></div>
            <div
              ref={navRef}
              className="fixed right-0 z-10 w-full h-full transition-transform duration-500 translate-x-full md:w-1/3 bg-primary-500"
            >
              <div className="flex flex-col h-full gap-5 mt-32">
                <div className="flex flex-col border-t border-b border-white divide-y">
                  {["LAbS", "LApS", "LAdS"].map((path) => (
                    <Link
                      key={path}
                      href={`/${path.toLowerCase()}`}
                      className="p-10 text-4xl font-bold transition-colors duration-300 hover:bg-white hover:text-primary-500"
                      onClick={() => {
                        toggleNav();
                      }}
                    >
                      <div className="flex items-center justify-between w-full">
                        {path.charAt(0) + path.slice(1)}
                        <ArrowUpRight className="w-14 h-14" />
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col">
                  <Link
                    href="/about"
                    className="p-10 text-xl"
                    onClick={() => {
                      toggleNav();
                    }}
                  >
                    Over ons
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Header;
