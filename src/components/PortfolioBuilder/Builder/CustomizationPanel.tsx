import { motion, AnimatePresence } from "framer-motion"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const CustomizationPanel = () => {
  const [settings, setSettings] = useState({
    snapToGrid: true,
    gridSize: 8,
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="p-4 space-y-6"
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

        {/* Other settings with animations */}
        <motion.div
          layout
          className="space-y-4"
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Add your other settings here */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};