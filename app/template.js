"use client";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef, useLayoutEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Template({ children }) {
  const lenisRef = useRef();
  const router = useRouter();
  const pathname = usePathname();

  const excludedPath = "/studio";

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    return () => {
      gsap.ticker.remove(update);
    };
  });

  useLayoutEffect(() => {
    const handleRouteChangeStart = (url) => {
      if (url !== pathname) {
        gsap.to("body", {
          opacity: 0,
          duration: 0.3,
          ease: "power3.inOut",
          onComplete: () => {
            router.push(url); // Navigate only after animation completes
          },
        });
      }
    };

    // Listen for link clicks or programmatic navigation within the app
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const isEmailLink =
          link.getAttribute("data-animation-link") === "no-animation";
        if (
          !isEmailLink ||
          pathname === "/" ||
          pathname.includes(excludedPath)
        ) {
          e.preventDefault(); // Prevent default navigation
          const url = link.getAttribute("href");
          handleRouteChangeStart(url);
        }
      });
    });

    // Fade back in after navigation completes
    gsap.to("body", {
      opacity: 1,
      duration: 0.3,
      ease: "power3.inOut",
    });

    // Clean up event listeners
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleRouteChangeStart);
      });
    };
  }, [pathname, router]);

  return (
    <>
      {pathname.includes(excludedPath) ? (
        children
      ) : (
        <ReactLenis root ref={lenisRef} autoRaf={false}>
          {children}
        </ReactLenis>
      )}
    </>
  );
}
