import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  link: string;
  image: string;
};

function NavCard({ title, link, image }: Props) {
  return (
    <div className="main-container shadow-gray-400/60 shadow-2xl opacity-90 hover:opacity-100">
      <Link href={`/${link}`} className="flex flex-col items-center text-white">
        <h4>{title}</h4>
        <Image
          src={image}
          alt="Background image for the navigation link"
          width={300}
          height={300}
          className="rounded-b-2xl"
        />
      </Link>
    </div>
  );
}

function NavBoard() {
  return (
    <div className="grid grid-cols-3 justify-items-center">
      <NavCard title="CV" link="cv" image="/images/background.png" />
      <NavCard
        title="Portfolio"
        link="portfolio"
        image="/images/background.png"
      />
      <NavCard
        title="Project Most Proud"
        link="portfolio"
        image="/images/background.png"
      />
      <NavCard
        title="Portfolio"
        link="portfolio"
        image="/images/background.png"
      />
      <NavCard
        title="Portfolio"
        link="portfolio"
        image="/images/background.png"
      />
      <NavCard
        title="Portfolio"
        link="portfolio"
        image="/images/background.png"
      />
    </div>
  );
}

export default NavBoard;
