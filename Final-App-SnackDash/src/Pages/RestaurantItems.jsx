import { useState } from "react";
import MenuItemCard from "../Components/MenuItemCard";
import { IoIosArrowUp, IoIosArrowDown  } from "react-icons/io";


const RestaurantItems = ({ data }) => {
  const { title, itemCards } = data?.card?.card;
  const [showItems, setShowItems] = useState(true);

  return (
    <div className="p-4 m-4 shadow-xl cursor-pointer">
      <div onClick={() => setShowItems(!showItems)}>
        <div className="flex justify-between ">
          <span className="font-bold text-lg">
            {title} ({itemCards?.length})
          </span>
          <span > { showItems ? <IoIosArrowUp className="size-6" /> : <IoIosArrowDown className="size-6" /> } </span>
        </div>
      </div>
      <div>
        {showItems && (
          <div>
            {itemCards.map((item) => (
              <MenuItemCard data={item} key={item?.card?.info?.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantItems;
