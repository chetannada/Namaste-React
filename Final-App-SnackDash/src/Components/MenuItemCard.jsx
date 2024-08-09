import { useDispatch } from "react-redux";
import { RESTAURANT_IMG } from "../services/Endpoints";
import { addToCart } from "../Redux/Slices/cartSlice";

const MenuItemCard = ({ data }) => {
  const { name, price, description, imageId, defaultPrice } = data?.card?.info;
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addToCart(data?.card?.info));
  };
  return (
    <div className="flex border-gray-300 border-b-2 justify-between items-center relative">
      <div className="py-4 px-2 my-4 w-9/12">
        <div className="font-[poppins]">
          <h1 className="font-bold text-base">{name} 
            <span onClick={handleAdd} className="ml-2 px-2 py-1 font-semibold border border-black rounded-md hover:bg-black hover:text-white text-green-700">
             Add 
            </span>
          </h1> 
          <p className="font-medium">₹ {price / 100 || defaultPrice / 100}</p>
          <span className="font-light text-sm">{description}</span>
        </div>
          
      </div>
      {imageId && (<img src={RESTAURANT_IMG + imageId} className="border-2 border-gray-300 w-2/12 h-32 object-cover rounded-md"/>)}
    </div>
  );
};

export default MenuItemCard;
