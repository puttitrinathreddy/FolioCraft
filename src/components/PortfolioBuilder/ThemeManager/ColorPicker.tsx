import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ColorPickerProps {
    color: string;
    onChange: (color: string) => void;
    label?: string;
  }
  
  export const ColorPicker = ({ color, onChange, label }: ColorPickerProps) => {
    return (
      <div className="space-y-2">
        {label && <Label>{label}</Label>}
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded border border-gray-200"
            style={{ backgroundColor: color }}
          />
          <Input
            type="color"
            value={color}
            onChange={(e) => onChange(e.target.value)}
            className="w-full"
          />
        </div>
      </div>
    );
  };