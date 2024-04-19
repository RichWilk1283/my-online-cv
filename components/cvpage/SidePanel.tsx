import React from "react";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";

function SidePanel() {
  return (
    <div className="cv-card w-96 order-2 md:order-1 md:w-full md:row-span-2 md:col-span-2 md:h-full md:content-around">
      <Contact />
      <Education />
      <Projects />
    </div>
  );
}

export default SidePanel;
