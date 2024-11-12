"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const IntroScreen = () => {
  const introRef = useRef(null);

  const handleClick = () => {
    gsap.to(introRef.current, {
      marginLeft: "10rem",
      marginRight: "10rem",
      marginTop: "5rem",
      marginBottom: "5rem",
      duration: 0.8,
      ease: "power3.out",
      onComplete: () => {
        gsap.to(introRef.current, {
          translateY: "-120%",
          duration: 0.5,
          ease: "power3.out",
        });
      },
    });
  };

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 z-10 opacity-50 bg-primary-700"></div>
        <Image
          src="/konijn.jpg"
          alt="Background"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-4xl text-white">
            <span className="font-bold">LAAN</span>{" "}
            <span className="font-light">Solutions</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
