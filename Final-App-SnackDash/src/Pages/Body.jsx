import RestaurantCard from "../Components/RestaurantCard";
import SearchRestaurant from "../Components/SearchRestaurant";
import Shimmer from "../Components/Shimmer";
import { Link } from "react-router-dom";
import useRestaurantAndFilter from "../Hooks/useRestaurantAndFilter";
import InternetConnection from "../Components/InternetConeection";
import useIsOnline from "../Hooks/useIsOnline";
import withRestaurantOffer from "../Components/hoc/withRestuarntOffer";

const Body = () => {
  const { restaurants, filterRestaurant, setRestaurants } =
    useRestaurantAndFilter();
  const isOnline = useIsOnline();
  const RestaurantWithOffer = withRestaurantOffer(RestaurantCard);

  return (
    <div
      className={`container mx-auto my-10 ${
        !isOnline ? "pointer-events-none" : ""
      }`}
    >
      {!isOnline && <InternetConnection />}
      <div className="w-full my-8">
        <SearchRestaurant
          handleFilter={setRestaurants}
          filterRes={filterRestaurant}
        />
      </div>

      {restaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div>
          <div className="flex flex-wrap gap-6 justify-center md:justify-normal">
            {restaurants?.map((restaurant) => (
              <Link
                to={"/restaurant-menu/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                  <RestaurantWithOffer resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
