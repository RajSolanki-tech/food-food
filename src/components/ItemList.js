import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an Action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-gray-300 border-b-2 flex justify-between text-left mt-4"
        >
          <div className="w-9/12 mr-2">
            <div className="font-semibold text-xm text-black-500">
              {item.card.info.name}
            </div>
            <div className="font-semibold text-xm text-black-500">
              ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
            </div>
            <p className="text-start text-gray-500 text-sm mt-2 mb-10 font-medium">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button
                className="p-2 bg-orange-400 shadow-lg rounded-lg text-black font-bold cursor-pointer mx-4 my-28 px-10 text-lg"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-36 h-36 rounded-2xl object-cover mb-8"
              alt="no-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
