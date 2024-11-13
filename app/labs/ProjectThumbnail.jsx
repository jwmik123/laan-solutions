"use client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { gsap } from "gsap";
import { useRef } from "react";
import Link from "next/link";

const ProjectThumbnail = ({ project }) => {
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
      { y: 25 },
      {
        y: 0,
        ease: "power3.out",
        duration: 0.5,
        delay: 0.8,
      }
    );
  };

  return (
    <>
      <div className="cursor-pointer group">
        <Link href={`/labs/${project.slug.current}`}>
          {project.image && (
            <div className="h-[500px] overflow-hidden relative">
              <div className="w-full h-full transition-all duration-300 group-hover:scale-110">
                <Image
                  ref={imageRef}
                  src={urlFor(project.image).url()}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                  onLoadingComplete={handleImageLoad}
                />
              </div>
              <div ref={overlayRef} className="absolute inset-0 bg-white"></div>
            </div>
          )}
          <div className="flex justify-between mx-1 mt-2">
            <div className="flex flex-col overflow-hidden">
              <h2 ref={titleRef} className="text-xl font-medium text-black">
                {project.title}
              </h2>
            </div>
            <p className="text-lg font-light text-gray-500">
              {/* {project.endDate} */}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProjectThumbnail;
