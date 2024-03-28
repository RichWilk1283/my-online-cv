"use client";

import SelectiveCV from "@/components/cvpage/SelectiveCV";
import TraditionalCV from "@/components/cvpage/TraditionalCV";
import React, { useEffect, useState } from "react";

function cv() {
  const [toggleView, setToggleView] = useState(true);

  return (
    <main className="flex flex-col items-center">
      <button
        onClick={() => setToggleView(!toggleView)}
        className="bg-purple-400/50 border border-purple-400 text-white font-semibold rounded-lg w-40 py-2 m-2 mb-4"
      >
        Toggle CV Mode
      </button>
      {toggleView ? <TraditionalCV /> : <SelectiveCV />}
    </main>
  );
}

export default cv;
