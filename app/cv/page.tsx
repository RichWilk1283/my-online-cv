"use client";

import SelectiveCV from "@/components/cvpage/SelectiveCV";
import TraditionalCV from "@/components/cvpage/TraditionalCV";

function cv() {
  return (
    <main className="flex flex-col items-center">
      <TraditionalCV />
    </main>
  );
}

export default cv;
