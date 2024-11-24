import { motion, AnimatePresence } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

interface CustomizationPanelProps {
  selectedComponent: string | null;
  onClose: () => void;
}

interface StyleSettings {
  layout: {
    padding: number;
    margin: number;
    width: string;
    height: string;
    alignment: 'left' | 'center' | 'right';
    position: 'static' | 'relative' | 'absolute';
  };
  typography: {
    fontSize: number;
    fontFamily: string;
    fontWeight: string;
    lineHeight: number;
    letterSpacing: number;
    textAlign: 'left' | 'center' | 'right';
  };
  colors: {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    accentColor: string;
  };
  borders: {
    borderWidth: number;
    borderStyle: string;
    borderRadius: number;
  };
  effects: {
    opacity: number;
    shadow: string;
    animation: string;
  };
  responsive: {
    hideOnMobile: boolean;
    hideOnTablet: boolean;
    customBreakpoints: Record<string, boolean>;
  };
}

export const CustomizationPanel: React.FC<CustomizationPanelProps> = ({ selectedComponent, onClose }) => {
  const [settings, setSettings] = useState({
    snapToGrid: true,
    gridSize: 8,
    backgroundColor: '#ffffff',
    fontSize: 16,
    textColor: '#000000',
    padding: 10,
    margin: 10,
  });
  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);
  const [windowHeight, setWindowHeight] = useState(0);
  const handleBackgroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings((prev) => ({ ...prev, backgroundColor: e.target.value }));
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings((prev) => ({ ...prev, fontSize: parseInt(e.target.value, 10) }));
  };

  const handleTextColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings((prev) => ({ ...prev, textColor: e.target.value }));
  };

  const handlePaddingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings((prev) => ({ ...prev, padding: parseInt(e.target.value, 10) }));
  };

  const handleMarginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings((prev) => ({ ...prev, margin: parseInt(e.target.value, 10) }));
  };

  return (

    windowHeight ? (
    <ResizableBox
      width={320}
      height={windowHeight}
      minConstraints={[200, windowHeight]}
      maxConstraints={[600, windowHeight]}
      axis="x"
      className="bg-white border-l border-gray-200 overflow-y-auto p-4">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="space-y-6"
      >
        <motion.div
          layout
          className="space-y-4"
        >
          {/* Grid Settings */}
          <motion.div
            layout
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <Label>Snap to Grid</Label>
              <Switch
                checked={settings.snapToGrid}
                onCheckedChange={(checked) => 
                  setSettings((prev: any) => ({ ...prev, snapToGrid: checked }))
                }
              />
            </div>

            <AnimatePresence>
              {settings.snapToGrid && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <Label>Grid Size</Label>
                  <Slider
                    value={[settings.gridSize]}
                    min={4}
                    max={32}
                    step={4}
                    onValueChange={([value]) => 
                      setSettings((prev: any) => ({ ...prev, gridSize: value }))
                    }
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Customization Options */}
          <div className="mb-4">
            <Label>Background Color</Label>
            <input
              type="color"
              value={settings.backgroundColor}
              onChange={handleBackgroundColorChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <Label>Font Size</Label>
            <input
              type="number"
              value={settings.fontSize}
              onChange={handleFontSizeChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              min="10"
              max="30"
            />
          </div>
          <div className="mb-4">
            <Label>Text Color</Label>
            <input
              type="color"
              value={settings.textColor}
              onChange={handleTextColorChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <Label>Padding</Label>
            <input
              type="number"
              value={settings.padding}
              onChange={handlePaddingChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              min="0"
              max="50"
            />
          </div>
          <div className="mb-4">
            <Label>Margin</Label>
            <input
              type="number"
              value={settings.margin}
              onChange={handleMarginChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              min="0"
              max="50"
            />
          </div>
        </motion.div>
      </motion.div>


    </ResizableBox>
    ) : null
  );
};