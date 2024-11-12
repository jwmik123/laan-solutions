"use client";

import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";

const Main = ({ project }) => {
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const titleRef = useRef([]);

  const handleImageLoad = () => {
    gsap.fromTo(
      overlayRef.current,
      { y: "0%" },
      {
        y: "-100%",
        duration: 1,
        ease: "power3.inOut",
        delay: 0.2,
      }
    );
    gsap.fromTo(
      imageRef.current,
      { scale: 1.5 },
      {
        scale: 1,
        duration: 1,
        delay: 0.3,
        ease: "power1.out",
      }
    );
    gsap.fromTo(
      titleRef.current,
      { y: 50 },
      {
        y: 0,
        stagger: 0.02,
        ease: "power3.out",
        duration: 1,
        delay: 0.8,
      }
    );
  };

  return (
    <div className="ml-16 mt-32 h-[300svh] w-full max-w-2/3">
      <div className="relative w-full mb-10 overflow-hidden aspect-video">
        <Image
          ref={imageRef}
          src={urlFor(project.image).url()}
          alt={project.title}
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
          onLoadingComplete={handleImageLoad}
        />
        <div ref={overlayRef} className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-900 via-transparent to-transparent opacity-20"></div>
        <div className="absolute z-10 flex flex-col overflow-hidden bottom-10 left-10">
          <h1 className="text-5xl font-bold text-white">
            {project.title.split("").map((letter, index) => (
              <span
                key={index}
                ref={(el) => (titleRef.current[index] = el)}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
        </div>
      </div>

      <div className="text-black portableText">
        {project.content?.map((block) => (
          <PortableText key={block._key} value={block} />
        ))}
      </div>
    </div>
  );
};

export default Main;
