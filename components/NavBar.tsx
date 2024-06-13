"use client";
import { Bars4Icon, HomeIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex">
      <ul className="hidden sm:flex gap-2 py-1 mr-4">
        <Link href="/">
          <li>
            <HomeIcon className="h-6 w-6 text-white hover:text-blue-200" />
          </li>
        </Link>
        <Link className="navbarlink" href="/cv">
          <li>CV</li>
        </Link>
        <Link className="navbarlink" href="/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link className="navbarlink" href="/mostproud">
          <li>Most Proud</li>
        </Link>
        <Link className="navbarlink" href="/myresources">
          <li>Resources</li>
        </Link>
      </ul>
      <div onClick={handleMenu} className="sm:hidden mr-2">
        <Bars4Icon className="h-7 w-7 text-white" />
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-full sm:hidden h-screen bg-slate-700 p-4 ease-in duration-500"
            : "fixed left-[-100%] h-screen top-10 p-4 ease-in duration-700"
        }
      >
        <div onClick={handleMenu} className="flex flex-col">
          <XMarkIcon className="h-7 w-7 text-white self-end" />
          <ul className="flex flex-col gap-6 py-1 mt-4 items-center">
            <Link href="/">
              <li>
                <HomeIcon className="h-12 w-12 text-white" />
              </li>
            </Link>
            <Link className="navbarlinkmenu" href="/cv">
              <li>CV</li>
            </Link>
            <Link className="navbarlinkmenu" href="/portfolio">
              <li>Portfolio</li>
            </Link>
            <Link className="navbarlinkmenu" href="/mostproud">
              <li>Most Proud</li>
            </Link>
            <Link className="navbarlinkmenu" href="/myresources">
              <li>Resources</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
