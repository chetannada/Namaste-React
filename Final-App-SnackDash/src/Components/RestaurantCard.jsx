import { RESTAURANT_IMG } from "../services/Endpoints";
import { LuTimer } from "react-icons/lu";

const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, avgRating, sla, cuisines } = resData?.info;
  return (
    <div className="w-72 h-80 p-2 shadow-xl bg-amber-100 bg-opacity-75 cursor-pointer rounded-lg">
      <img
        className="w-full h-44 object-cover rounded-xl hover:scale-105"
        src={RESTAURANT_IMG + cloudinaryImageId}
      />
      <div className="p-2">
        <h1 className="text-lg font-bold"> {name} </h1>
        <div className="flex space-x-2 font-medium">
          <p>⭐ {avgRating}</p>
          <p className="flex justify-center"> <LuTimer className="mt-1 mr-1" /> {sla?.slaString} </p>
        </div>
        <div className="text-sm">
          <p> {cuisines.join(", ")} </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
