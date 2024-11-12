import ProjectThumbnail from "./ProjectThumbnail";

const Projects = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {projects.map((project, index) => (
        <div
          className={` mb-16 ${index % 4 === 2 || index % 4 === 3 ? "lg:col-span-2" : ""}`}
          key={project._id}
        >
          <ProjectThumbnail project={project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
