import PortfolioBoard from "@/components/portfoliopage/PortfolioBoard";

function portfolio() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Portfolio page</h1>
      <p>Add some words here about the page contents.</p>
      <PortfolioBoard />
    </main>
  );
}

export default portfolio;
