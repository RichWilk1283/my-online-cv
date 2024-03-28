import { getProjectData } from "@/app/lib/getProjectsData";
import React, { useEffect, useState } from "react";

type CodingProject = {
  title: string;
  githublink: string;
  techstack: string[];
  order: number;
};

function ProjectCard({
  title,
  githublink,
  techstack,
  order,
  ...props
}: CodingProject) {
  return (
    <div>
      <h3>{order}</h3>
      <h3>{title}</h3>
      <p>{githublink}</p>
      <ul>
        {techstack.map((data, index: number) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
}

function Projects() {
  const [projectsData, setProjectsData] = useState(Array<CodingProject>);
  const [error, setError] = useState("");

  useEffect(() => {
    const response = getProjectData();

    response
      .then((data) => {
        setProjectsData(data);
      })
      .catch((error) => {
        setError(error);
      });

    console.log("Projects data:", response); // remove once finisnhed
  }, []);

  return (
    <div>
      <h5>Projects</h5>
      {projectsData.map((project, index: number) => (
        <ProjectCard
          key={index}
          title={project.title}
          githublink={project.githublink}
          techstack={project.techstack}
          order={project.order}
        />
      ))}
    </div>
  );
}

export default Projects;
