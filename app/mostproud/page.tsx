import ExperienceCard from "@/components/mostproudpage/ExperienceCard";
import ProjectCard from "@/components/mostproudpage/ProjectCard";
import React from "react";

function mostproud() {
  return (
    <div className="text-white flex flex-col items-center text-center">
      <h3 className="text-3xl font-bold mt-4">Most Proud Of</h3>
      <p className="mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, velit
        possimus quam fugit illo quod quos dolores, fuga optio magnam iusto
        quisquam officia, aut repudiandae. Eos, tempore ab! Possimus, non.
      </p>
      <div className="main-container">
        <ExperienceCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default mostproud;
