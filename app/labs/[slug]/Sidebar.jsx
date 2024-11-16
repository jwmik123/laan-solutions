"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Sidebar = ({ project }) => {
  const sidebarRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sidebarRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "power1.out",
        duration: 0.8,
        delay: 1,
      }
    );
  });
  return (
    <div
      ref={sidebarRef}
      className="hidden md:block sticky h-full min-w-[250px] max-w-1/3 top-36 opacity-0"
    >
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <p className="text-lg font-medium text-primary-700">Locatie -</p>
          <p className="flex flex-col text-sm font-light text-black">
            <span>{project?.streetname}</span>
            <span>
              {project?.postalcode?.toUpperCase()}, {project?.city}
            </span>
            <span>{project?.country}</span>
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-medium text-primary-700">Client -</p>
          <p className="text-sm font-light text-black">{project?.client}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-medium text-primary-700">Start Jaar -</p>
          <p className="text-sm font-light text-black">
            {project?.startDate
              ? new Date(project.startDate).getFullYear()
              : "N/A"}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-medium text-primary-700">Eind Jaar -</p>
          <p className="text-sm font-light text-black">
            {project?.endDate ? new Date(project.endDate).getFullYear() : "N/A"}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-medium text-primary-700">Grootte -</p>
          <p className="text-sm font-light text-black">{project?.size}</p>
        </div>
        <div className="mb-2">
          <p className="text-lg font-medium text-primary-700">Team -</p>
          <ul className="text-sm font-light text-black">
            {project?.team && project.team.length > 0 ? (
              project.team.map((member, index) => <li key={index}>{member}</li>)
            ) : (
              <li>Geen teamleden gevonden</li>
            )}
          </ul>
        </div>
        {project?.collaborators && project.collaborators.length > 0 && (
          <div className="mb-4">
            <p className="text-lg font-medium text-primary-700">
              In samenwerking met -
            </p>
            <ul className="text-sm font-light text-black">
              {project.collaborators.map((collaborator, index) => (
                <li key={index}>{collaborator}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
