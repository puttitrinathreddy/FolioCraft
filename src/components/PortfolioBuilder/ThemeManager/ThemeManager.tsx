import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { setCurrentTheme, updateCustomTheme } from "@/redux/slices/themeSlice";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ColorPicker } from "./ColorPicker";

// Define theme types
type ThemeType = "light" | "dark" | "custom";

interface FontOption {
  value: string;
  label: string;
  family: string;
}

const fontOptions: FontOption[] = [
  { value: "inter", label: "Inter", family: "'Inter', sans-serif" },
  { value: "roboto", label: "Roboto", family: "'Roboto', sans-serif" },
  { value: "poppins", label: "Poppins", family: "'Poppins', sans-serif" },
  { value: "playfair", label: "Playfair Display", family: "'Playfair Display', serif" },
  { value: "montserrat", label: "Montserrat", family: "'Montserrat', sans-serif" },
];

export const ThemeManager: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentTheme, customTheme } = useSelector((state: RootState) => state.theme);

  // Handle changes for custom theme settings
  const handleCustomThemeChange = (key: keyof typeof customTheme, value: string) => {
    dispatch(updateCustomTheme({ [key]: value }));
  };

  // Preview the theme changes
  const previewTheme = (theme: ThemeType) => {
    document.documentElement.classList.remove('light', 'dark', 'custom');
    document.documentElement.classList.add(theme);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Theme Manager</h2>
        <Select
          value={currentTheme}
          onValueChange={(value: ThemeType) => {
            dispatch(setCurrentTheme(value));
            previewTheme(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light Theme</SelectItem>
            <SelectItem value="dark">Dark Theme</SelectItem>
            <SelectItem value="custom">Custom Theme</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {currentTheme === "custom" && customTheme && (
        <Tabs defaultValue="colors" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="spacing">Spacing</TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Primary Color</Label>
                <ColorPicker
                  color={customTheme.primaryColor}
                  onChange={(color: any) => handleCustomThemeChange("primaryColor", color)}
                />
              </div>
              <div>
                <Label>Secondary Color</Label>
                <ColorPicker
                  color={customTheme.secondaryColor}
                  onChange={(color: any) => handleCustomThemeChange("secondaryColor", color)}
                />
              </div>
              <div>
                <Label>Background Color</Label>
                <ColorPicker
                  color={customTheme.backgroundColor}
                  onChange={(color : any) => handleCustomThemeChange("backgroundColor", color)}
                />
              </div>
              <div>
                <Label>Text Color</Label>
                <ColorPicker
                  color={customTheme.textColor}
                  onChange={(color: any) => handleCustomThemeChange("textColor", color)}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="typography" className="space-y-4">
            <div>
              <Label>Font Family</Label>
              <Select
                value={customTheme.fontFamily}
                onValueChange={(value: any) => handleCustomThemeChange("fontFamily", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select font" />
                </SelectTrigger>
                <SelectContent>
                  {fontOptions.map((font) => (
                    <SelectItem 
                      key={font.value} 
                      value={font.value}
                      style={{ fontFamily: font.family }}
                    >
                      {font.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Font Size Scale</Label>
              <Select
                value={customTheme.fontSize}
                onValueChange={(value : any) => handleCustomThemeChange("fontSize", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select size scale" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>

          <TabsContent value="spacing" className="space-y-4">
            {/* Add spacing controls here */}
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default ThemeManager;