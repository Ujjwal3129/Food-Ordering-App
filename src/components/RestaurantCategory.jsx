import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import ItemList from "./ItemList";

function RestaurantCategory({ data, showItem , setShowIndex }) {

    const handleClick = ()=>{
        setShowIndex()
    }
  return (
    <div className="w-6/12 mx-auto my-6  p-6   bg-zinc-100 shadow-lg rounded-xl   ">
      <div
        onClick={handleClick}
        className="flex items-center cursor-pointer  justify-between"
      >
        <span className="text-xl font-bold ">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-xl font-bold">
          
          <IoIosArrowDown />
        </span>
      </div>
      {showItem && <ItemList list={data.itemCards} />}
    </div>
  );
}

export default RestaurantCategory;
