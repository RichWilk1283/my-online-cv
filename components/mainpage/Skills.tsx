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
              <h4 className="font-bold text-lg">Technical Skills:</h4>
              <ul>
                <li>C# & ASP.NET</li>
                <li>Php & Laravel</li>
                <li>JavaScript/ TypeScript</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS (inc. Tailwind and Bootstrap5)</li>
                <li>Visual Studio Code & Visual Studio 2022</li>
                <li>Microsoft: Word and Excel</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg">Soft Skills:</h4>
              <ul>
                <li>Excellent communication</li>
                <li>First rate customer service</li>
                <li>Pro-active thinker</li>
                <li>Problem Solver</li>
                <li>Team player</li>
                <li>Self driven</li>
                <li>Hard working ethic</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
