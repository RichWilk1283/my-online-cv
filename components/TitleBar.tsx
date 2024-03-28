import React from "react";
import NavBar from "./NavBar";

function TitleBar() {
  return (
    <div className="flex justify-between items-center w-full text-center border-b border-white/50 mb-2">
      <p className="text-white ml-2">RICHARD WILKINSON</p>
      <NavBar />
    </div>
  );
}

export default TitleBar;
