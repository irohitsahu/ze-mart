import { useState } from "react";

type ViewMode = "mobile" | "tablet" | "desktop";

interface ViewModeSliderProps {
  onChange: (mode: ViewMode) => void;
}

export default function ViewModeSlider({ onChange }: ViewModeSliderProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("mobile");

  const handleChange = (mode: ViewMode) => {
    setViewMode(mode);
    onChange(mode);
  };

  return (
    <div className="fixed top-4 right-4 bg-gray-200 p-1 rounded-full flex space-x-1">
      <button
        onClick={() => handleChange("mobile")}
        className={`px-3 py-1 rounded-full text-sm ${
          viewMode === "mobile" ? "bg-blue-500 text-white" : "bg-white"
        }`}
      >
        Mobile
      </button>
      <button
        onClick={() => handleChange("tablet")}
        className={`px-3 py-1 rounded-full text-sm ${
          viewMode === "tablet" ? "bg-blue-500 text-white" : "bg-white"
        }`}
      >
        Tablet
      </button>
      <button
        onClick={() => handleChange("desktop")}
        className={`px-3 py-1 rounded-full text-sm ${
          viewMode === "desktop" ? "bg-blue-500 text-white" : "bg-white"
        }`}
      >
        Desktop
      </button>
    </div>
  );
}
