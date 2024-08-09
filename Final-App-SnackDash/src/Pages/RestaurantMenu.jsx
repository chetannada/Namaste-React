import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import RestaurantItems from "./RestaurantItems";
import ShimmerRestaurant from "../Components/ShimmerResturant";

// Icons
import { FaStore } from "react-icons/fa";
import { LuTimer } from "react-icons/lu";
import { BsCurrencyRupee } from "react-icons/bs";
import { MdOutlineDeliveryDining } from "react-icons/md";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId);

  if (restaurantMenu === null) {
    return <ShimmerRestaurant />;
  }

  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla: { minDeliveryTime, maxDeliveryTime, lastMileTravelString },
    feeDetails: { totalFee },
  } = restaurantMenu?.cards[2]?.card?.card?.info;

  const restaurantMenus =
    restaurantMenu?.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

  const finalRestaurantMenus = restaurantMenus.filter(
    (restaurant) =>
      restaurant?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="p-2 w-2/3  mx-auto my-4">
      <div>
        <h1 className="font-bold text-white text-2xl p-2 bg-green-600 rounded-md mb-2 text-center"> {name} </h1>
        <div className="bg-neutral-300  rounded-2xl p-4 ">
          <div className="border-2 bg-neutral-100 p-4 rounded-2xl">
            <div className="font-semibold space-x-2">
              <i className="fa-solid fa-star text-green-500"></i>
              <span>
                {avgRating} ({totalRatingsString})
              </span>
              <span> {costForTwoMessage} </span>
            </div>
            <p className="text-orange-600 font-semibold mb-2">
              {cuisines.join(",")}
            </p>
            <div className="space-y-2 font-semibold mb-2">
              <p className="flex items-center"> <FaStore className="mr-2" /> Outlet</p>
              <p className="flex items-center"> <LuTimer className="mr-2" /> {minDeliveryTime} - {maxDeliveryTime} mins </p>
            </div>
            <hr />
            <div className="mt-2 flex space-x-2">
              <MdOutlineDeliveryDining className="size-6" />
              <span>{lastMileTravelString} </span> &nbsp; |
              <span className="flex items-center"><BsCurrencyRupee /> {totalFee / 100} Delivery fee will apply</span>
            </div>
          </div>
        </div>
      </div>

      <div className="my-2">
        {finalRestaurantMenus?.map((item, index) => (
          <RestaurantItems data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
