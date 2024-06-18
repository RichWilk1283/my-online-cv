import PortfolioBoard from "@/components/portfoliopage/PortfolioBoard";

function portfolio() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Portfolio page</h1>
      <p className="text-center">
        Here are some projects I have enjoyed working on. Most of my projects
        have been created to practice what I have learned. <br />
        <span className=" text-xs md:text-sm font-light">
          The source code can be found on GitHub by clicking on them.
        </span>
      </p>
      <PortfolioBoard />
    </main>
  );
}

export default portfolio;
