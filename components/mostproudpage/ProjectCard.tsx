"use client";
import { getFormatProudOfProjectData } from "@/app/lib/getFormatProudOfProjectData";
import { getImgUrl } from "@/app/lib/getImgUrl";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type CodingProject = {
  title: string;
  githublink: string;
  techstack: string[];
  order: number;
  description: string;
  images: string[];
};

function ProjectCard() {
  const [proudOfProject, setProudOfProject] = useState<CodingProject | null>(
    null
  );
  const [imageURLS, setImageURLS] = useState<string[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const response = getFormatProudOfProjectData();

    response
      .then((data) => {
        const imgUrls: string[] = [];

        data.images.map((img: string) => {
          const url = getImgUrl(img);
          url.then((data) => {
            imgUrls.push(data);
          });
        });
        setProudOfProject(data);
        setImageURLS(imgUrls);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="proudof-card">
      <h3 className="font-bold">Project:</h3>
      <p className="font-light w-11/12 lg:w-1/2">
        My final project for the Code: Cumbria boot camp course, marked a key
        moment for me. Before the boot camp I had committed a lot of time to
        learning under my own direction. Practicing with little projects using
        C# and .NET frameworks. At the start of the boot camp, I was a little
        apprehensive about learning new languages at the tutors pace. Well, I
        loved every minute of it. The challenge and satisfaction from
        implementing what I have learned has motivated me.
      </p>
      <div className="w-11/12 p-3 rounded-xl bg-blue-950/20 hover:bg-blue-950/40 my-3">
        {proudOfProject ? (
          <div>
            <Link href={proudOfProject?.githublink} target="_blank">
              <p className="font-bold">{proudOfProject?.title}</p>
              <ul className="grid grid-cols-2">
                {proudOfProject?.techstack.map((data, index: number) => (
                  <li className="font-light text-xs" key={index}>
                    ⫸ {data}
                  </li>
                ))}
              </ul>
              <p className="font-thin my-2">{proudOfProject?.description}</p>
              <div className="grid grid-cols-2 gap-1 justify-items-center">
                {imageURLS.map((imgUrl: string, index: number) => (
                  <Image
                    key={index}
                    src={imgUrl}
                    alt="thumbnail image of a coding project I have created."
                    width={400}
                    height={400}
                    className="rounded-xl w-auto h-auto"
                  />
                ))}
              </div>
            </Link>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
