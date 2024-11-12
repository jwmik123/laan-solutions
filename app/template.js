"use client";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Template({ children }) {
  const lenisRef = useRef();
  const pathname = usePathname();

  const excludePath = pathname.includes("/studio");

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <>
      {excludePath ? (
        children
      ) : (
        <ReactLenis root ref={lenisRef}>
          {children}
        </ReactLenis>
      )}
    </>
  );
}
