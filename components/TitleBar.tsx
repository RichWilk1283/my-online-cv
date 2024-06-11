import React from "react";
import NavBar from "./NavBar";
import Link from "next/link";

function TitleBar() {
  return (
    <div className="flex justify-between items-center w-full text-center border-b border-white/50 mb-5 shadow-xl shadow-slate-700">
      <Link href="/">
        <p className="text-white ml-2 my-3">RICHARD WILKINSON</p>
      </Link>
      <NavBar />
    </div>
  );
}

export default TitleBar;
