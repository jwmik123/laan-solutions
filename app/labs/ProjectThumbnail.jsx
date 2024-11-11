"use client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import Link from "next/link";

const ProjectThumbnail = ({ project }) => {
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const titleRef = useRef([]);

  useGSAP(() => {
    // Animation for the overlay and image
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

    // Stagger animation for each letter in the title
    gsap.fromTo(
      titleRef.current,
      { y: 25 },
      {
        y: 0,
        stagger: 0.02,
        ease: "power3.out",
        duration: 0.5,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div className="cursor-pointer group">
      <Link href={`/labs/${project.slug.current}`}>
        {project.image && (
          <div className="h-[450px] overflow-hidden relative">
            <div className="w-full h-full transition-all duration-300 group-hover:scale-110">
              <Image
                ref={imageRef}
                src={urlFor(project.image).url()}
                alt={project.title}
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div ref={overlayRef} className="absolute inset-0 bg-white"></div>
          </div>
        )}
        <div className="flex justify-between mx-1 mt-2">
          <div className="flex flex-col overflow-hidden">
            <h2 className="text-lg font-bold text-black">
              {project.title.split("").map((letter, index) => (
                <span
                  key={index}
                  ref={(el) => (titleRef.current[index] = el)}
                  className="inline-block"
                >
                  {letter}
                </span>
              ))}
            </h2>
          </div>
          {/* <p className="text-lg font-light text-gray-500">
            {project.endDate.split("-")[0]}
          </p> */}
        </div>
      </Link>
    </div>
  );
};

export default ProjectThumbnail;
