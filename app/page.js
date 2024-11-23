"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

import useProjectStore from "@/app/lib/projectStore";
import IntroScreen from "./components/IntroScreen";
import Footer from "./components/Footer";

export default function Home({ introscreen }) {
  const [hovered, setHovered] = useState("");
  const [showIntro, setShowIntro] = useState(false);
  const introRef = useRef(null);
  const hoverTextRef = useRef(null);
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
    <div className="flex flex-col items-center justify-center h-screen max-h-screen">
      {showIntro && <IntroScreen introscreen={introscreen} />}
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
        <HoverText hovered={hovered} hoverTextRef={hoverTextRef} />
      </div>
      <Footer />
    </div>
  );
}

const HoverText = ({ hovered, hoverTextRef }) => {
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

  useEffect(() => {
    if (hovered) {
      gsap.fromTo(
        hoverTextRef.current,
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
    <div
      ref={hoverTextRef}
      className="hidden md:flex absolute translate-x-full -right-[12rem] justify-center items-center mt-4 w-[300px]"
    >
      <p className="text-black">{getHoverText()}</p>
    </div>
  );
};
