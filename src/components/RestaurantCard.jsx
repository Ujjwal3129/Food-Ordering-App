import React from "react";
import { CDN_URL } from "../utils/constants";

function RestaurantCard({ resData }) {
  // Determine the offer to display
  const headerOffer =
    resData.aggregatedDiscountInfoV3?.header || "10% off up to ₹300";
    
  const subHeaderOffer = resData.aggregatedDiscountInfoV3?.subHeader || "";

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-64">
      <img
        src={CDN_URL + resData.cloudinaryImageId}
        alt="Restaurant"
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {resData.name}
        </h3>
        <p className="text-gray-600 text-sm truncate">
          {resData.cuisines.join(", ")}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-yellow-500 font-semibold">
            ★ {resData.avgRatingString}
          </span>
          <span className="text-gray-600 text-sm">30 mins</span>
        </div>

        {/* Offers Section */}
        <div className="mt-2">
          <p className="text-green-600 font-semibold">
            {headerOffer}
          </p>
          {subHeaderOffer && (
            <p className="text-gray-600 text-sm">
              {subHeaderOffer}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
