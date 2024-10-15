import React from "react";
import { ChevronDown } from "lucide-react";

interface FindOutMoreButtonProps {
  onClick?: () => void;
}

const FindOutMoreButton: React.FC<FindOutMoreButtonProps> = ({ onClick }) => {
  const handleSmoothScrollOneScreen = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll by the height of the current screen
      behavior: "smooth", // Enables smooth scrolling
    });
  };

  return (
    <div
      className="flex cursor-pointer flex-col items-center justify-center bg-white py-4"
      onClick={onClick ?? handleSmoothScrollOneScreen} // Calls the onClick prop if provided, otherwise defaults to handleSmoothScrollOneScreen
    >
      <ChevronDown size={50} className="mb-2 text-primary" />
      <span className="flex h-12 items-center justify-center rounded-full bg-transparent text-xl font-medium text-primary">
        FIND OUT MORE
      </span>
    </div>
  );
};

export default FindOutMoreButton;
