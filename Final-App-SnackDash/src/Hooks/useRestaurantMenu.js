import { useState, useEffect } from "react";
import { RESTAURANT_MENU } from "../services/Endpoints";

const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    try {
      const response = await fetch(RESTAURANT_MENU + resId);
      const data = await response.json();
      setRestaurantMenu(data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  return restaurantMenu;
};

export default useRestaurantMenu;
