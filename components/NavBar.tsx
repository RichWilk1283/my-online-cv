import { HomeModernIcon, Bars4Icon, HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div className="flex gap-2 last:mr-3 md:last:mr-8 py-1">
      <Link href="/">
        <HomeIcon className="h-6 w-6 text-white" />
      </Link>
      <Link
        className="bg-slate-200 border-2 border-gray-500 px-2 rounded-2xl font-bold"
        href="/cv"
      >
        CV
      </Link>
      <Link
        className="bg-slate-200 border-2 border-gray-500 px-2 rounded-2xl font-bold"
        href="/portfolio"
      >
        Portfolio
      </Link>
      <Bars4Icon className="h-7 w-7 text-white" />
    </div>
  );
}

export default NavBar;
