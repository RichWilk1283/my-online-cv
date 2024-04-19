import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex flex-col-reverse items-center justify-center md:items-end md:flex-row text-white gap-2 my-4">
      <div id="this" className="flex md:absolute md:left-12">
        <FontAwesomeIcon icon={faCopyright} width={20} />
        <p className="">2023 Richard Wilkinson</p>
      </div>
      <div className="flex gap-6 md:gap-8">
        <Link
          href="https://www.linkedin.com/in/richard-wilkinson1283/"
          className="hover:text-blue-900 hover-animation-spin"
        >
          <FontAwesomeIcon icon={faLinkedin} width={40} className="md:w-20" />
        </Link>
        <Link
          href="https://github.com/RichWilk1283"
          className="hover:text-blue-950 hover-animation-ping"
        >
          <FontAwesomeIcon icon={faGithub} width={40} className="md:w-20" />
        </Link>
        <a
          href="mailto:richardwilkinson1283@gmail.com"
          className="hover:text-blue-600 hover-animation-bounce"
        >
          <FontAwesomeIcon
            icon={faSquareEnvelope}
            width={40}
            className="md:w-20"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
