import React from "react";
import Profile from "./Profile";
import SidePanel from "./SidePanel";
import Experience from "./Experience";

function TraditionalCV() {
  return (
    <div className="flex flex-col w-11/12 items-center gap-2 md:w-10/12 md:grid md:grid-row-2 md:grid-cols-6 md:gap-2">
      <SidePanel />
      <Profile />
      <Experience />
    </div>
  );
}

export default TraditionalCV;
