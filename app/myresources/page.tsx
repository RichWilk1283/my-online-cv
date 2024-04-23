import ResourceBoard from "@/components/resourcepage/ResourceBoard";
import React from "react";

function myresources() {
  return (
    <div className="text-white flex flex-col items-center text-center">
      <h3 className="text-3xl font-bold mt-4">Useful Resources</h3>
      <p className="mb-4">
        Below is a list (with links) of resources I have found really useful
        while either learning and/ or building projects.
      </p>
      <ResourceBoard />
    </div>
  );
}

export default myresources;
