import React from "react";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";

function SidePanel() {
  return (
    <div className="cv-card md:row-span-2 md:col-span-2 md:h-full">
      <Contact />
      <Education />
      <Projects />
    </div>
  );
}

export default SidePanel;
