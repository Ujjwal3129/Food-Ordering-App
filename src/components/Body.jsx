import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"; // Assuming you have a ShimmerCard component
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineShimmerWithGame from "../utils/OfflineShimmerWithGame";

function Body() {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    if (onlineStatus) {
      fetchData();
    }
  }, [onlineStatus]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setIsLoading(false);

      console.log(json?.data)
  };
  if (onlineStatus === false) {
    return <OfflineShimmerWithGame/>;
  }
  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-6 justify-center p-6 mx-32 ">
        {[...Array(10)].map((_, index) => (
          <Shimmer key={index} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <SearchBar
        listOfRestaurant={listOfRestaurant}
        setListOfRestaurant={setListOfRestaurant}
      />
      <div className="flex flex-wrap gap-6 justify-center p-6 mx-32">
        {listOfRestaurant.length === 0 ? (
          <h1>No Restaurants Found</h1>
        ) : (
          listOfRestaurant.map((restaurant) => (
            <Link to={"/restaurant/" + restaurant.info.id}  key={restaurant.info.id}>
              <RestaurantCard
               
                resData={restaurant.info}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Body;
