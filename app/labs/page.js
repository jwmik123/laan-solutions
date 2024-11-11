import { client } from "@/sanity/lib/client";

import ProjectThumbnail from "./ProjectThumbnail";
export default async function LabsPage() {
  const projects = await client.fetch(`*[_type == "project"]`);

  return (
    <section className="mx-5 mt-32 md:mx-10">
      {/* TODO: Add filter */}
      {/* <div className="flex mx-1 my-4 space-x-4">
        <h2 className="text-lg font-bold text-black">Grid</h2>
        <h2 className="text-lg text-black">List</h2>
      </div> */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectThumbnail key={project._id} project={project} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectThumbnail key={project._id} project={project} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectThumbnail key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}
