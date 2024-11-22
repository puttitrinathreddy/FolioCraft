import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const SavedLayouts: React.FC = () => {
  const savedLayouts = useSelector((state: RootState) => state.layout.savedLayouts);

  if (!savedLayouts.length) {
    return <p className="text-gray-500">No saved layouts yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {savedLayouts.map((layout: any, index: any) => (
        <div key={index} className="border shadow rounded-lg p-4">
          <img src={layout.image} alt={layout.name} className="w-full h-48 object-cover rounded" />
          <h3 className="mt-4 font-bold">{layout.name}</h3>
          <p className="text-sm text-gray-600">{layout.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SavedLayouts;
