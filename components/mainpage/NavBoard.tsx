import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import cvOnDesk from "@/public/images/cvondesk.jpeg";
import manAtComputer from "@/public/images/manatcomputer.jpeg";
import rosette from "@/public/images/rosette.jpeg";
import resourcePicture from "@/public/images/resourcespicture.jpeg";

type Props = {
  title: string;
  link: string;
  image: StaticImageData;
};

function NavCard({ title, link, image }: Props) {
  return (
    <div className="main-container shadow-gray-400/60 shadow-2xl opacity-90 hover:opacity-100">
      <Link href={`/${link}`} className="flex flex-col items-center text-white">
        <h4 className=" text-xl font-bold">{title}</h4>
        <Image
          src={image.src}
          alt="Background image for the navigation link"
          width={400}
          height={400}
          className="rounded-b-2xl"
        />
      </Link>
    </div>
  );
}

function NavBoard() {
  return (
    <div className="grid grid-cols-2 justify-items-center">
      <NavCard title="CV" link="cv" image={cvOnDesk} />
      <NavCard title="Portfolio" link="portfolio" image={manAtComputer} />
      <NavCard title="Most Proud" link="mostproud" image={rosette} />
      <NavCard title="Resources" link="myresources" image={resourcePicture} />
    </div>
  );
}

export default NavBoard;
