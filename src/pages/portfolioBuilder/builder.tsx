import dynamic from 'next/dynamic';

// Import BuilderLayout with no SSR
const BuilderLayout = dynamic(
  () => import('@/components/PortfolioBuilder/Builder/BuilderLayout'),
  { ssr: false }
);

const BuilderPage = () => {
  return (
    <div className="min-h-screen">
      <BuilderLayout />
    </div>
  );
};

export default BuilderPage;