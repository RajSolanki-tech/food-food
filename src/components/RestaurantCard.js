import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRatingString, sla, cuisines, areaName } =
    resData?.info;

  return (
    <div className="p-2 m-2 w-72 hover:scale-95 transition">
      <img
        className="w-[575px] h-[175px] rounded-lg object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg pt-1">{name}</h3>
      <h4 className="text-base font-bold">
        ⭐{avgRatingString} . {sla?.slaString}
      </h4>
      <h4 className="truncate text-gray-700 font-semibold">
        {cuisines.join(", ")}
      </h4>
      <h4 className="text-gray-700 font-semibold">{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
