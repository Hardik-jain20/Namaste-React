import { useState, useEffect } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_URL } from "../utils/constants";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // Custom Hook to fetch data
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, areaName } =
    resInfo?.cards[2]?.card?.card.info;
  const { itemCards } =
    resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card ||
    resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[3].card.card;
  const categories =
    resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
  // const nestedcategories =
  //   resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter(
  //     (c) =>
  //       c?.card?.card?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
  //   );
  //console.log(resInfo.cards[5].groupedCard.cardGroupMap.REGULAR);
  //console.log(categories);

  return (
    <div className="menu text-center">
      <div>
        <h1 className="font-bold my-3 text-2xl">{name}</h1>
        <p className="font-medium mb-2 text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {/* categories accordian */}

        {/* COntrolled Component */}
        {categories.map((category, index) => (
          <RestaurantCategories
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
