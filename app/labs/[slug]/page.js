import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
export default async function ProjectPage({ params }) {
  const { slug } = params;
  const project = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0]`,
    { slug }
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="relative flex w-full px-5 md:px-10 lg:px-20">
      <div className="sticky h-full min-w-[250px] max-w-1/3 top-64">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col mb-2">
            <p className="text-lg font-bold">Location -</p>
            <p className="flex flex-col text-black">
              <span>{project.streetname}</span>
              <span>
                {project.postalcode}, {project.city}
              </span>
              <span>{project.country}</span>
            </p>
          </div>
          <div className="mb-2">
            <p className="text-lg font-bold">Client -</p>
            <p className="text-black">{project.client}</p>
          </div>
          <div className="mb-2">
            <p className="text-lg font-bold">Start Year -</p>
            <p className="text-black">
              {new Date(project.startDate).getFullYear()}
            </p>
          </div>
          <div className="mb-2">
            <p className="text-lg font-bold">End Year -</p>
            <p className="text-black">
              {new Date(project.endDate).getFullYear()}
            </p>
          </div>
          <div className="mb-2">
            <p className="text-lg font-bold">Size -</p>
            <p className="text-black">{project.size}</p>
          </div>
          <div className="mb-2">
            <p className="text-lg font-bold">Collaborators / Consultants -</p>
            <ul className="text-black">
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
            <p className="text-lg font-bold">Team -</p>
            <ul className="text-black">
              {project.team && project.team.length > 0 ? (
                project.team.map((member, index) => (
                  <li key={index}>{member}</li>
                ))
              ) : (
                <li>No team members listed</li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className=" ml-16 mt-40 h-[300svh]">
        <h1 className="text-5xl font-bold">{project.title}</h1>
        <h2 className="mb-4 text-lg text-gray-500">
          <span>{project.city},</span>
          <span> {project.country}</span>
          <span> | {new Date(project.endDate).getFullYear()}</span>
        </h2>
        <div className="relative w-full mb-10 aspect-video">
          <Image
            src={urlFor(project.image).url()}
            alt={project.title}
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-black portableText">
          {project.content?.map((block) => (
            <PortableText key={block._key} value={block} />
          ))}
        </div>
      </div>
    </main>
  );
}
