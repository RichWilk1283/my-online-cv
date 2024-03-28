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
          <h1>Hi, my name is Richard Wilkinson</h1>
          <h3>Aspiring to move career's into the world of IT.</h3>
          <h4>This is my story so far.</h4>
          <p>
            After leaving school I dreamed of getting a job in I.T. but life
            lead me elsewhere.
          </p>
          <p>
            And finally now, enthusiastic, curious and full of transferable
            skills, passionate about forging a new career in the tech world of
            software development. I have fuelled my ambitions by completing the
            Code: Cumbria boot camp course whilst also using resources such as
            Codecademy, Udemy, documentation sites to nurture my appetite to
            move into a role where I can use my strong sense of excellence,
            personal dedication to grow and challenge myself.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Profile;
