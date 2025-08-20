"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { gsap } from "gsap";

const ProjectThumbnail = ({ project }) => {
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const titleRef = useRef([]);
  const dateRef = useRef([]);

  const handleImageLoad = () => {
    gsap.fromTo(
      overlayRef.current,
      { y: "0%" },
      {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
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
      { y: 25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 0.5,
        delay: 0.8,
      }
    );
    gsap.fromTo(
      dateRef.current,
      { y: 25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 0.5,
        delay: 0.8,
      }
    );
  };

  return (
    <>
      <div className="cursor-pointer group">
        <Link href={`/projects/${project.slug.current}`}>
          {project.image && (
            <div className="h-[500px] overflow-hidden relative rounded-sm">
              <div className="w-full h-full transition-all duration-300 group-hover:scale-105">
                <Image
                  ref={imageRef}
                  priority
                  src={urlFor(project.image).url()}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                  onLoad={handleImageLoad}
                />
              </div>
              <div ref={overlayRef} className="absolute inset-0 bg-white"></div>
              {/* <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-opacity-0 bg-primary-500 group-hover:bg-opacity-50">
                <h3 className="flex flex-col text-white transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <span className="text-3xl font-medium">{project?.city}</span>
                  <span className="text-xl font-light text-center ">
                    {new Date(project?.startDate).getFullYear()}
                  </span>
                </h3>
              </div> */}
            </div>
          )}
          <div className="flex justify-between mx-1 mt-2">
            <div className="flex flex-col overflow-hidden">
              <h2 ref={titleRef} className="text-xl font-medium text-black opacity-0">
                {project.title}
              </h2>
            </div>
            <div className="flex flex-col overflow-hidden">
              <p ref={dateRef} className="text-lg font-light text-gray-500 opacity-0">
                {new Date(project.endDate).getFullYear()}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProjectThumbnail;
