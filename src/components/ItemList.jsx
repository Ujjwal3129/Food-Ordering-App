import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function ItemList({ list }) {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    
    dispatch(addItem(item))

  };
  console.log(handleAddItem)

  return (
    <div className="space-y-4">
      {list.map((item) => (
        <div
          className="p-4 border-b border-gray-300 flex items-start space-x-4"
          key={item.card.info.id}
        >
          <img
            className="w-36 h-20 object-cover rounded-lg"
            src={CDN_URL + item.card.info.imageId}
            alt={item.card.info.name}
          />
          <button
            onClick={()=>handleAddItem(item)}
            className="px-2 py-1 bg-green-700 rounded-lg text-white text-sm absolute mt-14 "
          >
            Add +
          </button>
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg">{item.card.info.name}</h3>
              <span className="font-semibold text-green-600">
                ₹ {item.card.info.price / 100}
              </span>
            </div>
            <p className="text-sm text-gray-500 my-1 ">
              {item.card.info.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
