import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategories = ({ data }) => {
    //console.log(data);
    const {title, itemCards, image} = data;
    const [showItems, setShowItems] = useState(false);

    return(
        <div>
            {/* Accordian Header */}
            <div className="w-6/12 mx-auto my-2 shadow-lg p-4 bg-gray-100 ">
                <div className="flex justify-between cursor-pointer" onClick={() => {
                    setShowItems(!showItems);
                }}>
                    <span className="font-bold text-lg">{title} ({itemCards.length})</span>
                    <span>{!showItems ? "▽" : "△"}</span>
                </div>
                
                {/* Accordian Body */}
                {showItems && <ItemList items = {data.itemCards}/>}
            </div>
        </div>
    )
}
export default RestaurantCategories;