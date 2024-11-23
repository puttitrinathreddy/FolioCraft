
import LayoutSelector from '@/components/PortfolioBuilder/LayoutSelector/LayoutSelector';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const PortfolioBuilder: React.FC = () => {
  const selectedLayout = useSelector((state: RootState) => state.layout.selectedLayout);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Choose Your Portfolio Layout
      </h1>
      <p className="text-center mb-8">
        {selectedLayout 
          ? `Selected Layout: ${selectedLayout.name}`
          : 'Select a layout to get started'}
      </p>
      <LayoutSelector />
    </div>
  );
};

export default PortfolioBuilder;