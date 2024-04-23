"use client";
import React, { useEffect, useState } from "react";
import { getResourcesData } from "@/app/lib/getResourcesData";
import { formatResourcesData } from "@/app/lib/formatResourcesData";
import Link from "next/link";

type Resource = {
  title: string;
  description: string;
  link: string;
  category: string;
};

function ResourceCard({
  title,
  description,
  link,
  category,
  ...props
}: Resource) {
  return (
    <div className="w-11/12 p-3 rounded-xl bg-blue-950/20 hover:bg-blue-950/40 my-3">
      <Link className="" href={link} target="_blank">
        <p className="font-bold">{title}</p>
        <p className="font-thin">{description}</p>
      </Link>
    </div>
  );
}

function ResourceBoard() {
  const [learningResourcesData, setLearningResourcesData] = useState(
    Array<Resource>
  );
  const [toolsResourcesData, setToolsResourcesData] = useState(Array<Resource>);
  const [servicesResourcesData, setServicesResourcesData] = useState(
    Array<Resource>
  );
  const [docsResourcesData, setDocsResourcesData] = useState(Array<Resource>);
  const [error, setError] = useState("");

  useEffect(() => {
    const response = getResourcesData();

    response
      .then((data) => {
        const formattedData = formatResourcesData(data);
        setLearningResourcesData(
          formattedData.filter((a) => a.category === "Learning")
        );
        setToolsResourcesData(
          formattedData.filter((a) => a.category === "Tools")
        );
        setServicesResourcesData(
          formattedData.filter((a) => a.category === "Services")
        );
        setDocsResourcesData(
          formattedData.filter((a) => a.category === "Documentation")
        );
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div className="main-container">
      <h4 className="resource-title">Learning Resources:</h4>
      <div className="resource-card">
        {learningResourcesData.map((resource, index: number) => (
          <ResourceCard
            key={index}
            title={resource.title}
            description={resource.description}
            link={resource.link}
            category={resource.category}
          />
        ))}
      </div>
      <h4 className="resource-title">Tools:</h4>
      <div className="resource-card">
        {toolsResourcesData.map((resource, index: number) => (
          <ResourceCard
            key={index}
            title={resource.title}
            description={resource.description}
            link={resource.link}
            category={resource.category}
          />
        ))}
      </div>
      <h4 className="resource-title">Services:</h4>
      <div className="resource-card">
        {servicesResourcesData.map((resource, index: number) => (
          <ResourceCard
            key={index}
            title={resource.title}
            description={resource.description}
            link={resource.link}
            category={resource.category}
          />
        ))}
      </div>
      <h4 className="resource-title">Documentation sites:</h4>
      <div className="resource-card">
        {docsResourcesData.map((resource, index: number) => (
          <ResourceCard
            key={index}
            title={resource.title}
            description={resource.description}
            link={resource.link}
            category={resource.category}
          />
        ))}
      </div>
    </div>
  );
}

export default ResourceBoard;
