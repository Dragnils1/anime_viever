import React, { useState } from "react";

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [innerIsOpen, setInnerIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue-500 text-white px-4 py-2"
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute top-full mt-2 py-2 w-56 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5">
          {items.map((item, idx) => {
            if (item.items) {
              return (
                <div key={idx} className="relative">
                  <button
                    onClick={() => setInnerIsOpen((prev) => !prev)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    {item.title}
                  </button>
                  {innerIsOpen && (
                    <div className="absolute left-full mt-0 py-2 w-56 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5">
                      {item.items.map((innerItem, idx) => (
                        <a
                          key={idx}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          {innerItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <a
                key={idx}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {item}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
