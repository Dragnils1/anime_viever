import React, { useState } from 'react';

const WeekDayContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col">
      <div className="p-4 bg-gray-200">
        <button
          className="flex items-center justify-between w-full"
          onClick={toggleOpen}
        >
          <span className="text-lg font-medium">Понедельник</span>
          <svg
            className={`w-4 h-4 transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6 8v4h8V8H6zm0-4h8a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm1 4v2h6V8H7zm0-4h6v2H7V4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="py-2 bg-gray-100">
          <p className="p-4">Содержимое для Понедельника</p>
        </div>
      )}

      {/* Аналогичные блоки для остальных дней недели */}
      {/* Вторник */}
      <div className="p-4 bg-gray-200">
        <button
          className="flex items-center justify-between w-full"
          onClick={toggleOpen}
        >
          <span className="text-lg font-medium">Вторник</span>
          <svg
            className={`w-4 h-4 transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6 8v4h8V8H6zm0-4h8a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm1 4v2h6V8H7zm0-4h6v2H7V4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="py-2 bg-gray-100">
          <p className="p-4">Содержимое для Вторника</p>
        </div>
      )}

      {/* Конец аналогичных блоков */}
    </div>
  );
};

export default WeekDayContainer;
