"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const IntroScreen = () => {
  const [isVisible, setIsVisible] = useState(() => {
    // Check if the intro screen has been shown before
    return !localStorage.getItem("introShown");
    return true;
  });
  const introRef = useRef(null);
  const cursorRef = useRef(null);

  const handleClick = () => {
    gsap.to(introRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      onComplete: () => {
        setIsVisible(false);
        // Mark the intro screen as shown
        localStorage.setItem("introShown", "true");
      },
    });
  };

  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        introRef.current,
        { opacity: 1 },
        { opacity: 1, duration: 1, ease: "power3.out" }
      );

      const handleMouseMove = (e) => {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 1,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 z-10 opacity-40 bg-primary-500"></div>
        <Image
          src="/konijn.jpg"
          alt="Background"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">LAAN Solutions</h1>
        </div>
        <div
          ref={cursorRef}
          className="absolute z-30 px-4 py-2 text-white translate-x-1/2 translate-y-1/2 rounded-full pointer-events-none bg-primary-500"
        >
          klik
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
