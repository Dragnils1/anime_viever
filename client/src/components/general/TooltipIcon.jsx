import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const TooltipIcon = ({ text }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleTooltipToggle = () => {
    setTooltipVisible(!isTooltipVisible);
  };

  return (
    <div className="relative inline-block">
      <FontAwesomeIcon
        icon={faInfoCircle}
        className="text-gray-500 cursor-pointer"
        onMouseEnter={handleTooltipToggle}
        onMouseLeave={handleTooltipToggle}
        onClick={handleTooltipToggle}
      />
      {isTooltipVisible && (
        <div className="absolute z-10 px-4 py-2 mt-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg">
          {text}
        </div>
      )}
    </div>
  );
};

export default TooltipIcon;
