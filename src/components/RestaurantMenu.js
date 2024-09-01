import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, avgRatingString, costForTwoMessage, cuisines, sla, areaName } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div>
      <div className="w-6/12 mx-auto">
        <h1 className="font-bold text-2xl mt-6">{name}</h1>
        <div className="border border-gray-400 mt-4 text-start rounded-2xl pb-4 shadow-2xl">
          <div className="bg-pink-100 p-8 mt-0 rounded-t-2xl"></div>
          <h2 className="font-bold text-base mt-2 pl-4">
            ⭐ {avgRatingString} . {costForTwoMessage}
          </h2>
          <h2 className="font-bold text-orange-600 pl-4">
            {cuisines.join(", ")}
          </h2>
          <h3 className="font-bold pl-4">Outlet || {areaName}</h3>
          <h4 className="font-bold pl-4">{sla?.deliveryTime} mins</h4>
        </div>
      </div>
      {categories.map((category) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
