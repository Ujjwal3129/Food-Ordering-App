import React, { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

// Shimmer Component
const Shimmer = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-pulse flex space-x-4">
        <div className="bg-gray-300 h-10 w-10 rounded-full"></div>
        <div className="bg-gray-300 h-10 w-10 rounded-full"></div>
        <div className="bg-gray-300 h-10 w-10 rounded-full"></div>
      </div>
      <p className="mt-6 text-gray-500">You are offline, please reconnect.</p>
    </div>
  );
};

// Simple Game Component
const OfflineGame = () => {
  const [score, setScore] = useState(0);
  const [boxPosition, setBoxPosition] = useState({ top: "50%", left: "50%" });

  // Function to handle box click and increase score
  const handleClick = () => {
    setScore(score + 1);
    // Randomize box position
    setBoxPosition({
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Catch the Box!</h1>
      <div className="relative w-full h-64 border border-gray-300 rounded-lg">
        <div
          className="absolute w-10 h-10 bg-blue-500 rounded-lg cursor-pointer"
          style={boxPosition}
          onClick={handleClick}
        ></div>
      </div>
      <p className="mt-4 text-lg font-semibold">Score: {score}</p>
    </div>
  );
};

// Offline Shimmer with Game Component
const OfflineShimmerWithGame = () => {
  const onlineStatus = useOnlineStatus();

  if (onlineStatus) {
    return null; // Don't render anything when online
  }

  return (
    <div>
      <Shimmer />
      <OfflineGame />
    </div>
  );
};

export default OfflineShimmerWithGame;
