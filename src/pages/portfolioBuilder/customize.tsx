import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/router";

const CustomizeLayout: React.FC = () => {
  const selectedLayout = useSelector((state: RootState) => state.layout.selectedLayout);
  const router = useRouter();

  if (!selectedLayout) {
    router.push("/portfolioBuilder"); // Redirect to layout selector if no layout selected
    return null;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Customize Your Layout</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Selected Layout: {selectedLayout.name}</h2>
        <img
          src={selectedLayout.image || ''} // Optionally, if your layouts have images for preview
          alt={selectedLayout.name}
          className="w-full max-w-md rounded shadow"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          Edit Content
        </button>
        <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default CustomizeLayout;
