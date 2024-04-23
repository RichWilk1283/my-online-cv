"use client";
import { formatProjectData } from "@/app/lib/formatProjectData";
import { getProjectData } from "@/app/lib/getProjectsData";
import React, { useEffect, useState } from "react";

type CodingProject = {
  title: string;
  githublink: string;
  techstack: string[];
  order: number;
  description: string;
};

function ProjectCard({
  title,
  githublink,
  techstack,
  order,
  description,
  ...props
}: CodingProject) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{githublink}</p>
      <p>{order}</p>
      <p>{description}</p>
    </div>
  );
}

function PortfolioBoard() {
  const [projectsData, setProjectsData] = useState(Array<CodingProject>);
  const [error, setError] = useState("");

  useEffect(() => {
    const response = getProjectData();

    response
      .then((data) => {
        const formatedData: Array<CodingProject> = formatProjectData(data);
        setProjectsData(formatedData);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      <h4>Hello Project Board</h4>
      {projectsData.map((project: CodingProject, index: number) => (
        <ProjectCard
          title={project.title}
          githublink={project.githublink}
          techstack={project.techstack}
          order={project.order}
          description={project.description}
        />
      ))}
    </div>
  );
}
// return (
//   <div>
//     <h4>Hello Project Board</h4>
//     {projectsData.map((project: CodingProject, index: number) => (
//       <ProjectCard
//         thisProject={project}
//       />
//     ))}
//   </div>
// );
// }

export default PortfolioBoard;
