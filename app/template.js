"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";

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

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const isAnimationExcluded =
          link.getAttribute("data-animation-link") === "no-animation";

        // Skip animation for excluded links or external links
        if (
          isAnimationExcluded ||
          link.href.startsWith("mailto:") ||
          link.href.startsWith("tel:")
        ) {
          return; // Skip further processing
        }

        e.preventDefault(); // Prevent default navigation
        const url = link.getAttribute("href");
        handleRouteChangeStart(url);
      });
    });

    gsap.to("body", {
      opacity: 1,
      duration: 0.3,
      ease: "power3.inOut",
    });

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
