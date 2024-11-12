import ProjectThumbnail from "./ProjectThumbnail";

const Projects = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div className="mb-10" key={project._id}>
          <ProjectThumbnail project={project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
