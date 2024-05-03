import React from "react";

function Skills() {
  return (
    <div className="main-container">
      <section className="main-section">
        <div className="flex flex-col w-full">
          <p className="text-center">
            Below are a few key skills I have acquired either via self-paced
            learning, courses or work and life experience.
          </p>
          <div className="flex flex-col md:grid md:grid-cols-2 text-center my-4 gap-3">
            <div>
              <h4>Technical Skills:</h4>
              <ul>
                <li>C#</li>
              </ul>
            </div>
            <div>
              <h4>Soft Skills:</h4>
              <ul>
                <li>Excellent Communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
