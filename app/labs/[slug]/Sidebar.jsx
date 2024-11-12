import React from "react";

const Sidebar = ({ project }) => {
  return (
    <div className="sticky h-full min-w-[250px] max-w-1/3 top-32">
      <div className="flex flex-col space-y-2">
        <div className="flex flex-col mb-2">
          <p className="text-lg font-medium text-primary-700">Location -</p>
          <p className="flex flex-col text-sm font-light text-black">
            <span>{project.streetname}</span>
            <span>
              {project.postalcode}, {project.city}
            </span>
            <span>{project.country}</span>
          </p>
        </div>
        <div className="mb-2">
          <p className="text-lg font-medium text-primary-700">Client -</p>
          <p className="text-sm font-light text-black">{project.client}</p>
        </div>
        <div className="mb-2">
          <p className="text-lg font-medium text-primary-700">Start Year -</p>
          <p className="text-sm font-light text-black">
            {new Date(project.startDate).getFullYear()}
          </p>
        </div>
        <div className="mb-2">
          <p className="text-lg font-medium text-primary-700">End Year -</p>
          <p className="text-sm font-light text-black">
            {new Date(project.endDate).getFullYear()}
          </p>
        </div>
        <div className="mb-2">
          <p className="text-lg font-medium text-primary-700">Size -</p>
          <p className="text-sm font-light text-black">{project.size}</p>
        </div>
        <div className="mb-2">
          <p className="text-lg font-medium text-primary-700">
            Collaborators / Consultants -
          </p>
          <ul className="font-light text-black">
            {project.collaborators && project.collaborators.length > 0 ? (
              project.collaborators.map((collaborator, index) => (
                <li key={index}>{collaborator}</li>
              ))
            ) : (
              <li>No collaborators listed</li>
            )}
          </ul>
        </div>
        <div className="mb-2">
          <p className="text-lg font-medium text-primary-700">Team -</p>
          <ul className="text-sm font-light text-black">
            {project.team && project.team.length > 0 ? (
              project.team.map((member, index) => <li key={index}>{member}</li>)
            ) : (
              <li>No team members listed</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
