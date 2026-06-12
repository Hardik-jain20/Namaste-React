import ItemList from "./ItemList";

const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
  //console.log(data);
  const { title, itemCards, image } = data;
  const handleClick = () => {
    //setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12 mx-auto my-2 shadow-lg p-4 bg-gray-100 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>{!showItems ? "▽" : "△"}</span>
        </div>

        {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategories;
