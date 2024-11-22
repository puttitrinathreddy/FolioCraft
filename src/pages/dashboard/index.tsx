import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4 text-lg">Start building your portfolio!</p>
      <Link href="/portfolioBuilder" className="mt-6 inline-block bg-primary text-white py-2 px-4 rounded-lg">
        
          Go to Portfolio Builder
        
      </Link>
    </div>
  );
};

export default Dashboard;
