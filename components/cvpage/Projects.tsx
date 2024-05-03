import { formatProjectData } from "@/app/lib/formatProjectData";
import { getProjectData } from "@/app/lib/getProjectsData";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type CodingProject = {
  title: string;
  githublink: string;
  techstack: string[];
  order: number;
  description: string;
  images: string[];
};

function ProjectCard({
  title,
  githublink,
  techstack,
  order,
  description,
  images,
  ...props
}: CodingProject) {
  return (
    <Link href={githublink} target="_blank">
      <div className="flex flex-col my-3 md:gap-3 p-3 rounded-xl bg-blue-950/20 hover:bg-blue-950/40">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="pl-3 font-light text-xs text-pretty truncate">
          {githublink}
        </p>
        <ul className="grid grid-cols-2">
          {techstack.map((data, index: number) => (
            <li className="font-light text-xs" key={index}>
              ⫸ {data}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

function Projects() {
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
      <h5 className="font-bold text-center text-2xl text-blue-900 md:mt-8">
        Projects
      </h5>
      {projectsData.map((project: CodingProject, index: number) => (
        <ProjectCard
          key={index}
          title={project.title}
          githublink={project.githublink}
          techstack={project.techstack}
          order={project.order}
          description={project.description}
          images={project.images}
        />
      ))}
    </div>
  );
}

export default Projects;
