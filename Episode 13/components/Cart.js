import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearItem = () => {
    dispatch(clearItem());
  };
  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="text-center font-bold text-3xl m-2 p-2">Cart</h1>
        <button
          className="shadow-lg m-4 px-4 border border-gray-200 rounded-lg text-red-600 font-medium text-shadow-xs cursor-pointer hover:bg-gray-200 relative -right-20 top-2"
          onClick={handleClearItem}
        >
          Clear Cart 🗑️
        </button>
      </div>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && (
          <h1 className="text-xl font-bold">
            Oops! The cart is Empty! Come back with filled cart
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
