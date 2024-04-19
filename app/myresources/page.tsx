import ResourceBoard from "@/components/resourcepage/ResourceBoard";
import React from "react";

function myresources() {
  return (
    <div className=" text-white">
      <h3>Useful Resources</h3>
      <p>
        Below is a list (with links) of resources I have found really useful
        while either learning and/ or building projects.
      </p>
      <ResourceBoard />
    </div>
  );
}

export default myresources;
