"use client";
import { formatProjectData } from "@/app/lib/formatProjectData";
import { getImgUrl } from "@/app/lib/getImgUrl";
import { getProjectData } from "@/app/lib/getProjectsData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
  const [imageURLS, setImageURLS] = useState(Array<string>);

  useEffect(() => {
    const imgUrls: string[] = [];

    images.map((img: string) => {
      const url = getImgUrl(img);
      url.then((data) => {
        imgUrls.push(data);
      });
    });
    setImageURLS(imgUrls);
  }, []);

  return (
    <div className="w-11/12 p-3 rounded-xl bg-blue-950/20 hover:bg-blue-950/40 my-3">
      <Link href={githublink} target="_blank">
        <p className="font-bold">{title}</p>
        <ul className="grid grid-cols-2">
          {techstack.map((data, index: number) => (
            <li className="font-light text-xs" key={index}>
              ⫸ {data}
            </li>
          ))}
        </ul>
        <p className="font-thin my-2">{description}</p>
        <div className="grid grid-cols-2 gap-1 justify-items-center">
          {imageURLS.map((imgUrl: string, index: number) => (
            <Image
              src={imgUrl}
              alt="thumbnail image of a coding project I have created."
              width={300}
              height={300}
              className="rounded-2xl"
            />
          ))}
        </div>
      </Link>
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
    <div className="main-container md:grid md:grid-cols-2">
      {projectsData.map((project: CodingProject, index: number) => (
        <div className="portfolio-card">
          <ProjectCard
            key={index}
            title={project.title}
            githublink={project.githublink}
            techstack={project.techstack}
            order={project.order}
            description={project.description}
            images={project.images}
          />
        </div>
      ))}
    </div>
  );
}

export default PortfolioBoard;
