"use client";

import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";

const Header = () => {
  const pathname = usePathname();
  const logoRef = useRef(null);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const contactInfoRef = useRef(null);

  const handleContactHover = (isHovered) => {
    setIsContactHovered(isHovered);
    if (contactInfoRef.current) {
      if (isHovered) {
        gsap.fromTo(
          contactInfoRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.3 }
        );
      } else {
        gsap.to(contactInfoRef.current, { opacity: 0, y: -10, duration: 0.3 });
      }
    }
  };

  return (
    <>
      {!pathname.includes("/studio") && (
        <header className="fixed top-0 z-20 flex items-center justify-between w-full h-24 px-5 py-5 font-sans md:px-10">
          {pathname === "/" ? (
            <span
              ref={logoRef}
              className="text-3xl font-bold transition-transform duration-300 text-primary-500"
            >
              LAAN
            </span>
          ) : (
            <Link
              href="/"
              ref={logoRef}
              className="text-3xl font-bold transition-transform duration-300 cursor-pointer text-primary-500"
            >
              LAAN
            </Link>
          )}
          
          <div className="flex items-center space-x-8">
            <Link
              href="/projects"
              className="text-lg font-medium transition-all duration-200 hover:font-bold text-primary-500"
            >
              Projecten
            </Link>
            
            <div 
              className="relative"
              onMouseEnter={() => handleContactHover(true)}
              onMouseLeave={() => handleContactHover(false)}
            >
              <span
                className="text-lg font-medium transition-all duration-200 hover:font-bold text-primary-500 cursor-pointer"
              >
                Contact
              </span>
              
              {/* Invisible bridge to prevent hover gap */}
              <div className="absolute top-6 right-0 w-full h-4 z-20" />
              
              {isContactHovered && (
                <div
                  ref={contactInfoRef}
                  className="absolute right-0 top-8 bg-primary-500 border border-primary-600 rounded-lg shadow-lg p-4 min-w-[250px] z-30"
                >
                  <div className="flex flex-col space-y-2">
                    <a
                      href="mailto:info@laansolutions.nl"
                      className="text-white hover:text-primary-100"
                      data-animation-link="no-animation"
                    >
                      <strong>Email:</strong> info@laansolutions.nl
                    </a>
                    <a
                      href="tel:+31615191923"
                      className="text-white hover:text-primary-100"
                      data-animation-link="no-animation"
                    >
                      <strong>Telefoon:</strong> +31 6 15 19 19 23
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
