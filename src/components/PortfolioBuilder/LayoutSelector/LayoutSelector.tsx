
import React from "react";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedLayout,saveLayout } from "@/redux/slices/layoutSlice";
import { RootState } from "@/redux/store";
import { deleteLayout,  } from "@/redux/slices/layoutSlice";
import ModernSidebar from "./layouts/ModernSidebar";
import MinimalHeader from "./layouts/MinimalHeader";
import PortfolioGrid from "./layouts/PortfolioGrid";
import SplitLayout from "./layouts/SplitLayout";
import FullWidthHero from "./layouts/FullWidthHero";
import ArtistGallery from "./layouts/ArtistGallery";
import DeveloperPortfolio from "./layouts/DeveloperPortfolio";
import TimelineStyle from "./layouts/Timeline";
import InteractiveCardStyle from "./layouts/InteractiveCard";
import SinglePageStyle from "./layouts/SinglePage";


const layouts = [
  { id: 1, name: "Modern Sidebar", component: ModernSidebar },
  { id: 2, name: "Minimal Header", component: MinimalHeader },
  { id: 3, name: "Portfolio Grid", component: PortfolioGrid },
  { id: 4, name: "Split Layout", component: SplitLayout },
  { id: 5, name: "Full-Width Hero", component: FullWidthHero },
  { id: 6, name: "Artist Gallery", component: ArtistGallery },
  { id: 7, name: "Developer Portfolio", component: DeveloperPortfolio },
  { id: 8, name: "Timeline Style", component: TimelineStyle },
  { id: 9, name: "Interactive Card Style", component: InteractiveCardStyle },
  { id: 10, name: "Single Page Style", component: SinglePageStyle },
];

const LayoutSelector: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedLayout = useSelector((state: RootState) => state.layout.selectedLayout);
  const savedLayouts = useSelector((state: RootState) => state.layout.savedLayouts);

  const handleSelectLayout = (layout: any) => {
    console.log('Selecting layout:', layout)
    dispatch(setSelectedLayout(layout)); 
    router.push('/portfolioBuilder/customize'); 
  };

  const handleSaveLayout = () => {
    if (selectedLayout) {
      dispatch(saveLayout(selectedLayout));  // Save the selected layout
    }
  };

  const handleDeleteLayout = (id: number) => {
    dispatch(deleteLayout(id));  // Delete the saved layout
  };

  const SelectedComponent =
    selectedLayout?.component ?? null;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Select a Layout</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {layouts.map((layout) => (
          <div
            key={layout.id}
            onClick={() => handleSelectLayout(layout)}
            className="p-4 bg-gray-100 shadow rounded-lg cursor-pointer hover:bg-gray-200"
          >
            {layout.name}
          </div>
        ))}
      </div>

      <button
        onClick={handleSaveLayout}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition mb-8"
      >
        Save Layout
      </button>

      <div className="bg-white shadow p-8 rounded-lg">
        {SelectedComponent ? (
          <>
            <h2 className="text-xl font-semibold mb-4">Preview: {selectedLayout.name}</h2>
            <SelectedComponent />
          </>
        ) : (
          <p>Select a layout to preview it</p>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Saved Layouts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedLayouts.map((layout) => (
            <div key={layout.id} className="p-4 bg-gray-100 shadow rounded-lg">
              <h3 className="font-semibold">{layout.name}</h3>
              <button
                onClick={() => handleSelectLayout(layout)}
                className="text-blue-600 hover:underline mt-2 block"
              >
                Select Layout
              </button>
              <button
                onClick={() => handleDeleteLayout(layout.id)}
                className="text-red-600 hover:underline mt-2 block"
              >
                Delete Layout
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayoutSelector;

