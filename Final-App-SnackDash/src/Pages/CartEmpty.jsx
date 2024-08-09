import { Link } from "react-router-dom";
import cartEmptyImg from "../Assets/cooking.png";

const CartEmpty = () => {
  return (
    <div className="container mx-auto p-4 m-4 flex flex-col items-center justify-center">
      <img src={cartEmptyImg} alt="empty-cart" className="w-80 mb-4" />
      <h2 className="text-[#535665] font-[poppins] text-xl font-medium mb-2">
        Your cart is empty
      </h2>

      <p className="text-[#000000] text-base font-[poppins] mb-2">
        You can go to the home page to view more restaurants
      </p>

      <Link to="/">
        <button
          type="button"
          className="bg-red-800 text-white font-semibold px-5 rounded-md cursor-pointer py-2 hover:bg-orange-400"
        >
          SEE RESTAURANTS NEAR YOU
        </button>
      </Link>
    </div>
  );
};

export default CartEmpty;
