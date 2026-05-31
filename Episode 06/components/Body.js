//import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
    // local state variable
    const [lisOfRestaurants, setListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.566951189062507&lng=73.69993209117955&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    };

    if(lisOfRestaurants.length === 0){
        return <Shimmer />;
    }
    
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
                {lisOfRestaurants.map((restaurant) => <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>)}
            </div>
        </div>
    )
}

export default Body;