import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    // local state variable
    const [lisOfRestaurants, setListOfRestaurant] = useState(resList);
    
    return (
        <div className="body">
            <div className="filterButton">
                <button className="btn" onClick={()=> {
                    const filteredList = lisOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.2
                    );
                    setListOfRestaurant(filteredList);
                }}> Top Rated Restaurant</button>
            </div>
            <div className="restaurantContainer">
                {lisOfRestaurants.map((restaurant) => <RestaurantCard Key = {restaurant.info.id} resData = {restaurant}/>)}
            </div>
        </div>
    )
}

export default Body;