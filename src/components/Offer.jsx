import React from "react";
import { offerData } from "../utils/mockData";
const Offer = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
        Exclusive Offers
      </h2>
      <div className="grid gap-6 sm:grid-cols-2  lg:grid-cols-4">
        {offerData.map((offerData, index) => (
          <div
            key={index}
            className={`${offerData.bgColor} p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform`}
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              {offerData.title}
            </h3>
            <p className="text-white">{offerData.description}</p>
            <button className="mt-4 py-2 px-4 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Avail Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
