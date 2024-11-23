import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CustomizeLayout: React.FC = () => {
  const selectedLayout = useSelector((state: RootState) => state.layout.selectedLayout);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter(); // Move router outside of render logic

  useEffect(() => {
    setIsClient(true);
    
    // Check for layout selection inside useEffect
    if (!selectedLayout) {
      router.push("/portfolioBuilder");
    }
  }, [selectedLayout, router]); // Add dependencies

  // Early return for server-side rendering
  if (!isClient) {
    return null;
  }

  // Early return if no layout selected
  if (!selectedLayout) {
    return null;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Customize Your Layout</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Selected Layout: {selectedLayout.name}</h2>
        {selectedLayout.image && ( // Add conditional rendering for image
          <img
            src={selectedLayout.image}
            alt={selectedLayout.name}
            className="w-full max-w-md rounded shadow"
          />
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button 
          onClick={() => router.push('/portfolioBuilder/edit-content')} // Add navigation
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Edit Content
        </button>
        <button 
          onClick={() => router.push('/portfolioBuilder/theme')} // Add navigation
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default CustomizeLayout;