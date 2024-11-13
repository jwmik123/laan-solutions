"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

import useProjectStore from "@/app/lib/projectStore";
import IntroScreen from "./components/IntroScreen";
import Footer from "./components/Footer";

export default function Home() {
  const [hovered, setHovered] = useState("");
  const [showIntro, setShowIntro] = useState(false);
  const introRef = useRef(null);
  const loading = useProjectStore((state) => state.loading);

  useEffect(() => {
    console.log(
      "%cWebsite by %cMik Development!",
      "color: white; font-size: 12px;",
      "color: orange; font-size: 14px; font-weight: bold;",
      "https://mikdevelopment.nl"
    );
  }, []);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (!hasSeenIntro) {
      setShowIntro(true);
      sessionStorage.setItem("hasSeenIntro", "true");
    }
  }, []);

  useEffect(() => {
    if (!loading || !showIntro) {
      gsap.fromTo(
        introRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, delay: 0.5 }
      );
    }
  }, [loading]);

  return (
    <div className="flex flex-row items-center justify-center h-screen max-h-screen">
      {showIntro && <IntroScreen />}
      <>
        <div
          ref={introRef}
          className="relative flex flex-col items-center justify-center space-y-4 opacity-0"
        >
          <Link
            href="/labs"
            onMouseEnter={() => setHovered("labs")}
            onMouseLeave={() => setHovered("")}
          >
            <h1 className="text-4xl transition-all duration-200 hover:font-bold">
              LAbS
            </h1>
          </Link>
          <Link
            href="/laps"
            onMouseEnter={() => setHovered("laps")}
            onMouseLeave={() => setHovered("")}
          >
            <h1 className="text-4xl transition-all duration-200 hover:font-bold">
              LApS
            </h1>
          </Link>
          <Link
            href="/lads"
            onMouseEnter={() => setHovered("lads")}
            onMouseLeave={() => setHovered("")}
          >
            <h1 className="text-4xl transition-all duration-200 hover:font-bold">
              LAdS
            </h1>
          </Link>
        </div>
        <HoverText hovered={hovered} />
        <Footer />
      </>
    </div>
  );
}

const HoverText = ({ hovered }) => {
  const hoverTitles = {
    labs: "Laan Building Solutions",
    laps: "Laan Permit Solutions",
    lads: "Laan Drawing Solutions",
  };
  const hoverTexts = {
    labs: "staat voor u partner in al-round bouwprojecten.",
    laps: "staat voor gedegen advies en uitwerking voor u vergunning.",
    lads: "kan u ondersteunen met digitalisatie van archief of bestaande objecten.",
  };

  const textRef = useRef(null);

  useEffect(() => {
    if (hovered) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  }, [hovered]);

  const getHoverText = () => {
    return (
      <>
        <strong className="text-xl text-primary-500">
          {hoverTitles[hovered] || ""}
        </strong>
        <br />
        <span className="text-base">{hoverTexts[hovered] || ""}</span>
      </>
    );
  };

  return (
    <div className="hidden md:flex absolute items-center justify-center -translate-x-1/2 right-0 w-[300px] h-[300px]">
      <p className="text-black " ref={textRef}>
        {getHoverText()}
      </p>
    </div>
  );
};
