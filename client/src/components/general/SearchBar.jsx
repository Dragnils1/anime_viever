import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="py-2 pl-8 pr-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none w-full"
        placeholder="Search..."
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;