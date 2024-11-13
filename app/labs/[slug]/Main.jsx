"use client";

import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

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
        y: "-120%",
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
    <div className="w-full mt-20 ml-0 md:ml-16 max-w-2/3">
      <div className="py-4">
        <Link
          href="/labs"
          className="h-full text-lg font-medium text-primary-700"
        >
          &larr; Terug naar projecten
        </Link>
      </div>
      <div className="relative top-0 left-0 w-full mb-8 overflow-hidden aspect-video">
        <picture className="w-full h-full scale-110">
          <Image
            ref={imageRef}
            priority
            src={urlFor(project.image).url() + "?fm=webp"}
            alt={project.title}
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
            onLoad={handleImageLoad}
          />
        </picture>
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-white pointer-events-none"
        ></div>
        <div
          ref={gradientRef}
          className="absolute inset-0 opacity-0 bg-gradient-to-tr from-primary-900 via-transparent to-transparent"
        ></div>
        <div className="absolute z-10 flex flex-col overflow-hidden bottom-5 left-5 md:bottom-10 md:left-10">
          <h1 className="text-3xl text-white uppercase md:text-7xl">
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
      <h3 className="w-full pb-4 text-lg font-bold border-b md:hidden border-primary-500 text-primary-500">
        Project Info
      </h3>
      <div className="grid grid-cols-2 pt-4 mb-12 md:hidden">
        <div className="flex flex-col mb-4">
          <p className="text-lg font-medium text-primary-700">Locatie -</p>
          <p className="flex flex-col text-sm font-light text-black">
            {project.city}, {project.country}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-medium text-primary-700">Client -</p>
          <p className="text-sm font-light text-black">{project.client}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-medium text-primary-700">Jaar -</p>
          <p className="text-sm font-light text-black">
            {new Date(project.endDate).getFullYear()}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-medium text-primary-700">Grootte -</p>
          <p className="text-sm font-light text-black">{project.size}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-medium text-primary-700">Samenwerking -</p>
          <ul className="text-sm font-light text-black">
            {project.collaborators && project.collaborators.length > 0 ? (
              project.collaborators.map((collaborator, index) => (
                <li key={index}>{collaborator}</li>
              ))
            ) : (
              <li>Geen samenwerkers gevonden</li>
            )}
          </ul>
        </div>
        <div className="mb-2">
          <p className="text-lg font-medium text-primary-700">Team -</p>
          <ul className="text-sm font-light text-black">
            {project.team && project.team.length > 0 ? (
              project.team.map((member, index) => <li key={index}>{member}</li>)
            ) : (
              <li>Geen teamleden gevonden</li>
            )}
          </ul>
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
