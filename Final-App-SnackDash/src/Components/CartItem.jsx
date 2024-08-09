import { removeFromCart } from "../Redux/Slices/cartSlice";
import { RESTAURANT_IMG } from "../services/Endpoints";
import { useDispatch } from "react-redux";

const CartItem = ({ data }) => {
  const { name, imageId, price, defaultPrice } = data;
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <img
          src={RESTAURANT_IMG + imageId}
          alt="Food"
          className="w-12 h-12 object-cover rounded"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{name} </h2>
          <p className="text-gray-500">
            Price: {price / 100 || defaultPrice / 100}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <i
          className="fa-solid fa-trash cursor-pointer"
          onClick={() => dispatch(removeFromCart(data))}
        ></i>
      </div>
    </div>
  );
};

export default CartItem;
