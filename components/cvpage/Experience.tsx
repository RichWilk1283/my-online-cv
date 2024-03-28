import React, { useEffect, useState } from "react";
import { getCvExperienceData } from "@/app/lib/getCvExperienceData";
import { formatExperienceData } from "@/app/lib/formatExperienceData";

type Job = {
  company: string;
  title: string;
  yearfrom: string;
  yearto: string;
  description: string;
  achievements: string[];
};

function ExperienceCard({
  company,
  title,
  yearfrom,
  yearto,
  description,
  achievements,
  ...props
}: Job) {
  return (
    <div>
      <h6>{company}</h6>
      <p>
        {yearfrom} - {yearto}
      </p>
      <p>{title}</p>
      <p>{description}</p>
      {achievements.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
}

function Experience() {
  const [experienceData, setExperienceData] = useState(Array<Job>);
  const [error, setError] = useState("");

  useEffect(() => {
    const response = getCvExperienceData();

    response
      .then((data) => {
        // const formattedData = formatExperienceData(data);
        setExperienceData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  //console.log("after the fetch:", experienceData);

  return (
    <div className="cv-card md:col-span-4">
      <h3 className=" font-semibold text-lg text-blue-800">Experience</h3>
      {experienceData.map((job, index: number) => (
        <ExperienceCard
          key={index}
          company={job.company}
          title={job.title}
          yearfrom={job.yearfrom}
          yearto={job.yearto}
          description={job.description}
          achievements={job.achievements}
        />
      ))}
    </div>
  );
}

export default Experience;

// const formattedData = formatExperienceData(data);
// console.log("testing123:", formattedData);
// ("");
