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
            Hi, my name is Richard Wilkinson
          </h1>
          <h3 className="font-extralight mb-4">
            Aspiring to move career's into the exciting world of IT & Software
            development.
          </h3>
          <h4 className="font-bold mb-2">This is my story so far...</h4>
          <p className="mb-3">
            After leaving school, I planned to use my natural aptitude and
            curiousity in tech to forge a I.T. career, to start this off I
            enrolled in an NVQ in Information Technology. This was perfect for
            me with one day per week learning in the training center and 4 days
            actually working for a real company doing real work. After I
            fininshed my NVQ I was offered a full time job with the company I
            was placed with. This gave me some high desired independance earning
            my own money.
          </p>
          <p className="mb-3">
            My career ambitions soon propelled me to chase progression within
            the companies I worked for, my best experience came from working at
            British Gas. At an early age myself and my wife decided to start a
            family and that soon become a huge part of my life and point of
            pride. Its at this point my focus naturally shifted to my family and
            made several work choices which were driven by getting the best work
            life balance for the family. I went to work at the family business
            for several years, then we made the massive decision to buy the
            Dalkeith Guest House and move 190 miles from my home town to the
            Lake District. After spending the last 9 years, building up the
            business and renovating the property I still feel I.T. and Software
            Developement is where my work ambitions are live.
          </p>
          <p>
            <span className="font-bold">And finally now,</span> enthusiastic,
            curious and full of transferable skills, passionate about forging a
            new career in the I.T. & software development tech world. I have
            fuelled my ambitions by completing the Code: Cumbria boot camp
            course whilst also using resources such as Codecademy, Udemy,
            documentation sites to nurture my appetite to move into a role where
            I can use my strong sense of excellence, personal dedication to grow
            and challenge myself.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Profile;
