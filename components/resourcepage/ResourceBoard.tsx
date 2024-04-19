"use client";
import React, { useEffect, useState } from "react";
import { getResourcesData } from "@/app/lib/getResourcesData";
import { formatResourcesData } from "@/app/lib/formatResourcesData";

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
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <p>{link}</p>
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
    <div>
      <h4>Learning Resources:</h4>
      {learningResourcesData.map((resource, index: number) => (
        <ResourceCard
          key={index}
          title={resource.title}
          description={resource.description}
          link={resource.link}
          category={resource.category}
        />
      ))}
      <h4>Tools:</h4>
      {toolsResourcesData.map((resource, index: number) => (
        <ResourceCard
          key={index}
          title={resource.title}
          description={resource.description}
          link={resource.link}
          category={resource.category}
        />
      ))}
      <h4>Services:</h4>
      {servicesResourcesData.map((resource, index: number) => (
        <ResourceCard
          key={index}
          title={resource.title}
          description={resource.description}
          link={resource.link}
          category={resource.category}
        />
      ))}
      <h4>Documentation sites:</h4>
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
  );
}

export default ResourceBoard;
