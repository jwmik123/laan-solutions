"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";

const Main = ({ project }) => {
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const gradientRef = useRef(null);
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
      gradientRef.current,
      { opacity: 0 },
      {
        opacity: 0.5,
        duration: 1,
        delay: 1,
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
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        ease: "power3.out",
        duration: 1,
        delay: 0.8,
      }
    );
  };

  return (
    <div className="w-full mt-32 ml-16 max-w-2/3">
      <div className="relative top-0 left-0 w-full mb-10 overflow-hidden aspect-video">
        <picture className="w-full h-full scale-110">
          <Image
            ref={imageRef}
            src={urlFor(project.image).url() + "?fm=webp"}
            alt={project.title}
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
            onLoadingComplete={handleImageLoad}
          />
        </picture>
        <div ref={overlayRef} className="absolute inset-0 bg-white"></div>
        <div
          ref={gradientRef}
          className="absolute inset-0 opacity-0 bg-gradient-to-tr from-primary-900 via-transparent to-transparent"
        ></div>
        <div className="absolute z-10 flex flex-col overflow-hidden bottom-10 left-10">
          <h1 className="text-5xl font-bold text-white">
            {project.title.split("").map((letter, index) => (
              <span
                key={index}
                ref={(el) => (titleRef.current[index] = el)}
                className="inline-block opacity-0"
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

      <div className="grid w-full grid-cols-1 gap-4 my-16 md:grid-cols-2">
        {project.images?.map((image, index) => (
          <div key={index} className="w-full">
            <Image
              src={urlFor(image).url() + "?fm=webp"}
              alt={`Project Image ${index + 1}`}
              width={500}
              height={500}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
