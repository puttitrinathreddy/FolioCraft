import { useDispatch } from "react-redux";
import { updateCustomTheme } from "@/redux/slices/themeSlice";

const FontSelector = () => {
  const dispatch = useDispatch();

  const handleFontChange = (font: string) => {
    dispatch(updateCustomTheme({ fontFamily: font }));
  };

  return (
    <select onChange={(e) => handleFontChange(e.target.value)}>
      <option value="sans-serif">Sans Serif</option>
      <option value="serif">Serif</option>
      <option value="monospace">Monospace</option>
    </select>
  );
};

export default FontSelector;
