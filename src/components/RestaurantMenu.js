import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, avgRatingString, costForTwoMessage, cuisines, sla, areaName } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
      (card) =>
        card.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ).card?.card?.itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {avgRatingString} . {costForTwoMessage}
      </h2>
      <h2>{cuisines.join(", ")}</h2>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" ₹"}
            {(item.card.info.defaultPrice || item.card.info.price) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
