import ExperienceCard from "@/components/mostproudpage/ExperienceCard";
import ProjectCard from "@/components/mostproudpage/ProjectCard";
import React from "react";

function mostproud() {
  return (
    <div className="text-white flex flex-col items-center text-center">
      <h3 className="text-3xl font-bold mt-4">Most Proud Of</h3>
      <p className="mb-4">
        I have many things I am proud of, mostly my family. But below are two
        things I believe make me well suited to a career in tech and the
        changing world.
      </p>
      <div className="main-container">
        <ExperienceCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default mostproud;
