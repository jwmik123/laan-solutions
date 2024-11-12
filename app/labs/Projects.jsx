"use client";
import ProjectThumbnail from "./ProjectThumbnail";
import useProjectStore from "@/app/lib/projectStore";

const Projects = ({ projects }) => {
  const loading = useProjectStore((state) => state.loading);

  return (
    <>
      {!loading ? (
        <section className="mx-5 mt-32 md:mx-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectThumbnail key={project._id} project={project} />
            ))}
          </div>
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Projects;
