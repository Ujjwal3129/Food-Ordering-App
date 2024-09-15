import React from 'react';

function Shimmer() {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 animate-pulse">
      <div className="w-full h-40 bg-gray-200"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="flex items-center justify-between mt-2">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
}

export default Shimmer;
