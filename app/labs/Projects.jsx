import ProjectThumbnail from "./ProjectThumbnail";

const Projects = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
      {projects.map((project, index) => (
        <div
          className={`mb-4 md:mb-8 lg:mb-16 ${index % 4 === 3 || index % 4 === 3 ? "lg:col-span-8" : "lg:col-span-4"}`}
          key={project._id}
        >
          <ProjectThumbnail project={project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
