import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; /* This is named export */
import Shimmer from "./Shimmer";  /* This is default export */

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

// Body Component for body section: It contain all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // updated state variable restaurants with Swiggy API data
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  
  // if allRestaurants is empty don't render anything
  if(!allRestaurants) return null;

  // if filtered search not matching your data then display some message
  if(filteredRestaurants?.length === 0) return <h1> No filtered restaurant match your filter</h1>;

  // use ternary operator for if restaurants data is not fetched then display Shimmer UI after the fetched data display my all cards
  return (allRestaurants?.length === 0) ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state of restaurants list
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
