import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { setCurrentTheme, updateCustomTheme } from '@/redux/slices/themeSlice';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ColorPicker } from './ColorPicker';

const ThemeManager: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentTheme, customTheme } = useSelector((state: RootState) => state.theme);

  // Local state for previewing theme changes
  const [previewThemeState, setPreviewThemeState] = useState(customTheme);

  // Handle changes for custom theme settings
  const handleCustomThemeChange = (updates: Partial<typeof customTheme>) => {
    setPreviewThemeState({
      ...previewThemeState,
      ...updates,
    });
  };

  // Apply the custom theme changes
  const applyCustomTheme = () => {
    dispatch(updateCustomTheme(previewThemeState)); // Save to Redux store
    dispatch(setCurrentTheme('custom')); // Set the theme to 'custom'
    // Apply theme to the document or body class
    document.documentElement.style.setProperty('--primary-color', previewThemeState.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', previewThemeState.secondaryColor);
    document.documentElement.style.setProperty('--background-color', previewThemeState.backgroundColor);
    document.documentElement.style.setProperty('--text-color', previewThemeState.textColor);
    document.documentElement.style.setProperty('--accent-color', previewThemeState.accentColor);
    document.documentElement.style.setProperty('--font-family', previewThemeState.fontFamily);
  };

  // Preview the custom theme changes
  const previewTheme = (theme: 'light' | 'dark' | 'custom') => {
    document.documentElement.classList.remove('light', 'dark', 'custom');
    document.documentElement.classList.add(theme);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Theme Manager</h2>
        <Select
          value={currentTheme}
          onValueChange={(value: 'light' | 'dark' | 'custom') => {
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

      {currentTheme === 'custom' && (
        <Tabs defaultValue="colors" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Primary Color</Label>
                <ColorPicker
                  color={previewThemeState.primaryColor}
                  onChange={(color: string) => handleCustomThemeChange({ primaryColor: color })}
                />
              </div>
              <div>
                <Label>Secondary Color</Label>
                <ColorPicker
                  color={previewThemeState.secondaryColor}
                  onChange={(color: string) => handleCustomThemeChange({ secondaryColor: color })}
                />
              </div>
              <div>
                <Label>Background Color</Label>
                <ColorPicker
                  color={previewThemeState.backgroundColor}
                  onChange={(color: string) => handleCustomThemeChange({ backgroundColor: color })}
                />
              </div>
              <div>
                <Label>Text Color</Label>
                <ColorPicker
                  color={previewThemeState.textColor}
                  onChange={(color: string) => handleCustomThemeChange({ textColor: color })}
                />
              </div>
              <div>
                <Label>Accent Color</Label>
                <ColorPicker
                  color={previewThemeState.accentColor}
                  onChange={(color: string) => handleCustomThemeChange({ accentColor: color })}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="typography" className="space-y-4">
            <div>
              <Label>Font Family</Label>
              <Select
                value={previewThemeState.fontFamily}
                onValueChange={(value: string) => handleCustomThemeChange({ fontFamily: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select font" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inter">Inter</SelectItem>
                  <SelectItem value="roboto">Roboto</SelectItem>
                  <SelectItem value="poppins">Poppins</SelectItem>
                  <SelectItem value="playfair">Playfair Display</SelectItem>
                  <SelectItem value="montserrat">Montserrat</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>

          <div className="mt-4 flex justify-end space-x-4">
            <button
              onClick={applyCustomTheme}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Apply Custom Theme
            </button>
            <button
              onClick={() => setPreviewThemeState(customTheme)} // Revert to saved theme state
              className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Reset Changes
            </button>
          </div>
        </Tabs>
      )}
    </div>
  );
};

export default ThemeManager;
