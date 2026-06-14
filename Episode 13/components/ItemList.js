import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            className="m-2 p-2 border-gray-300 border-b-2 text-left flex justify-between"
            key={item?.card?.info?.id}
          >
            <div className="w-9/12">
              <div className="my-2 py-1">
                <span className="font-bold">{item?.card?.info?.name}</span>
                <span className="font-medium">
                  {" "}
                  - ₹{" "}
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="mb-4 text-xs text-gray-600">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-3/12 p-2">
              <img
                className="w-40 rounded-2xl"
                src={CDN_URL + item?.card?.info?.imageId}
              />
              <button
                className="shadow-lg mx-12 p-1 mt-2 border border-gray-200 rounded-lg w-18 text-green-600 font-medium text-shadow-xs cursor-pointer hover:bg-gray-200"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
