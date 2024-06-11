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
    <div className="my-2 p-3 rounded-xl bg-blue-950/20">
      <h6>
        {company}
        <span className="text-xs font-thin pl-2">
          {yearfrom} - {yearto}
        </span>
      </h6>
      <p className="font-thin pl-2">{title}</p>
      <p className="py-3">{description}</p>
      <ul className="font-thin p-2">
        {achievements.map((item, index) => {
          return <li key={index}>⫸ {item}</li>;
        })}
      </ul>
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
        const formattedData: Array<Job> = formatExperienceData(data);
        setExperienceData(formattedData);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div className="order-3 cv-card w-96 md:w-full md:h-full md:col-span-4">
      <h3 className="font-bold text-center text-2xl text-blue-900">
        Experience
      </h3>
      {experienceData.map((job: Job, index: number) => (
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
