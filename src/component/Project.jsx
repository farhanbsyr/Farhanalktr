import ProjectCard from "./project/ProjectCard";

function Project({ project }) {
  return (
    <section id="project" className="mt-[150px]">
      <div className="text-center font-semibold mb-6 text-[40px]">
        <h1>Project</h1>
      </div>
      <div className="flex flex-wrap gap-3 justify-around ">
        {project.map((proj) => {
          return (
            <ProjectCard
              key={proj.id}
              images={proj.images}
              title={proj.title}
              body={proj.body}
              skills={proj.skills}
              linked={proj.linked}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Project;
