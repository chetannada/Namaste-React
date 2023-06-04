import { useEffect, useState } from "react";

const useResMenuData = (
  swiggy_menu_api_URL,
  resId,
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY
) => {
  const [restaurant, setRestaurant] = useState(null); // use useState to store restaurant data
  const [menuItems, setMenuItems] = useState([]); // use useState to store restaurant Menu Item data

  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(swiggy_menu_api_URL + resId);
      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();

        // Set restaurant data
        const restaurantData =
          json?.data?.cards
            ?.map((x) => x.card)
            ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
            ?.info || null;
        setRestaurant(restaurantData);

        // Set menu item data
        const menuItemsData =
          json?.data?.cards
            .find((x) => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
              (x) => x.card?.card
            )
            ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
            ?.map((x) => x.itemCards)
            .flat()
            .map((x) => x.card?.info) || [];

        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
          if (!uniqueMenuItems.find((x) => x.id === item.id)) {
            uniqueMenuItems.push(item);
          }
        });
        setMenuItems(uniqueMenuItems);
      }
    } catch (err) {
      setMenuItems([]);
      setRestaurant(null);
      console.error(err);
    }
  }
  return [restaurant, menuItems];
};

export default useResMenuData;
