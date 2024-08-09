import { useState } from "react";

const SearchRestaurant = ({ handleFilter, filterRes }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    const filter = filterRes.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(search.toLowerCase())
    );

    handleFilter(filter);
  };

  return (
    <div className="my-120 mx-auto flex justify-center items-center w-full">
      <input
        type="search"
        placeholder="Search restaurants"
        className="w-56 px-4 py-2 text-sm md:w-[40rem] box-border rounded-l-lg bg-white shadow-md border border-gray-600 border-r-0 md:text-xl font-normal text-black"
        onChange={handleInputChange}
      />
      <button className="text-sm px-4 py-2 md:text-xl box-border border border-gray-600 font-semibold bg-red-800 rounded-r-lg shadow-md text-white md:px-6 ml-[-4px] cursor-pointer outline-none"
       onClick={handleSearchSubmit}> Search </button>
    </div>
  );
};

export default SearchRestaurant;
