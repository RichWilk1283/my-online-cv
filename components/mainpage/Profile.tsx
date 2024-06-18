import Image from "next/image";
import React from "react";
import profilePic from "@/public/images/RichCloseUp.png";

function Profile() {
  return (
    <div className="main-container">
      <section className="main-section">
        <Image
          src={profilePic}
          alt="Profile picture"
          width={300}
          className="rounded-full"
        />
        <div className="p-2">
          <h1 className="font-bold md:text-xl">
            Hi, i&apos;m Richard Wilkinson
          </h1>
          <h3 className="font-extralight mb-4">
            Aspiring to move career&apos;s into the exciting and ever changing
            world of IT &amp; Software development.
          </h3>
          <h4 className="font-bold mb-2">
            Who I am and what&apos;s made me, me...
          </h4>
          <p className="mb-3">
            After leaving school, I planned to use my natural aptitude and
            curiosity in tech to forge a I.T. career. To start this off I
            enrolled in an Information Technology NVQ. With one day per week
            learning in the training centre and 4 days working for a real
            company doing real work. I loved this style of learning and working.
            After I finished my NVQ I secured a full time job with the company I
            got placed with. This gave me some highly desired independence
            earning my own money.
          </p>
          <p className="mb-3">
            My career ambitions soon propelled me to chase management
            progression. My best experience came from working for British Gas,
            where I become one of the youngest managers. At an early age myself
            and my wife decided to start a family and that soon become a huge
            part of my life and a point of pride. At this point my focus shifted
            to my family. I made several work choices which focused on getting
            the best work life balance for the family. The biggest choice's was
            going work at the family business and our move to the Lake District.
            The decision to buy a guest house 190 miles from my home town to the
            beautiful Lake District, was huge and exciting choice. After
            spending 9 years building up the business and renovating the
            property. I now feel gravity pulling me back to my original
            ambitions of the I.T. and Software Development world.
          </p>
          <p>
            <span className="font-bold">And finally now,</span> enthusiastic,
            curious and full of transferable skills. I am passionate about
            forging a new career. I have fuelled my ambitions by completing the
            Code: Cumbria boot camp course. Also using resources such as
            Codecademy, Udemy, documentation sites to nurture my appetite. My
            aim is to move into a role where I can use my strong sense of
            excellence, personal dedication to grow and challenge myself.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Profile;
