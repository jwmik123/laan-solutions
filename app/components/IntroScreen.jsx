"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { urlFor } from "@/sanity/lib/image";

import useProjectStore from "@/app/lib/projectStore";

import { client } from "@/sanity/lib/client";

async function getImages() {
  const introscreen = await client.fetch(`*[_type == "introscreen"]`);
  return introscreen[0].images;
}

const IntroScreen = () => {
  const introRef = useRef(null);
  const setLoading = useProjectStore((state) => state.setLoading);
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRefs = useRef([]);

  useEffect(() => {
    getImages().then((fetchedImages) => {
      const imageUrls = fetchedImages.map((img) => urlFor(img).url());
      setImages(imageUrls);
    });
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    gsap.to(imageRefs.current[0], { opacity: 1, duration: 1 });
  }, [images]);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      const currentImage = imageRefs.current[currentImageIndex];
      const nextImage = imageRefs.current[nextIndex];

      gsap.to(currentImage, { opacity: 0, duration: 1 });
      gsap.to(nextImage, { opacity: 1, duration: 1 });

      setCurrentImageIndex(nextIndex);
    }, 3500); // Change image every 3.5 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  const handleClick = () => {
    gsap.to(introRef.current, {
      marginLeft: window.innerWidth < 768 ? "2rem" : "10rem",
      marginRight: window.innerWidth < 768 ? "2rem" : "10rem",
      marginTop: "5rem",
      marginBottom: "5rem",
      borderRadius: "1rem",
      duration: 0.8,
      ease: "power3.out",
      onComplete: () => {
        setLoading(false);
        gsap.to(introRef.current, {
          translateY: "120%",
          duration: 0.5,
          ease: "power3.out",
        });
      },
    });
  };

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 z-30 opacity-50 bg-primary-700"></div>
        {images.map((image, index) => (
          <div className="absolute inset-0" key={index}>
            <Image
              ref={(el) => (imageRefs.current[index] = el)}
              src={image}
              alt="Background"
              priority
              fill
              className={`object-cover w-full z-10 h-full opacity-0 ${
                index === currentImageIndex ? "opacity-1" : "opacity-0"
              }`}
            />
            <div className="absolute inset-0 z-0 bg-white"></div>
          </div>
        ))}
        <div className="absolute inset-0 z-40 flex items-center justify-center">
          <h1 className="text-4xl text-white md:text-5xl">
            <span className="font-bold">LAAN</span>{" "}
            <span className="font-light">Solutions</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
