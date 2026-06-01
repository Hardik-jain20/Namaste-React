//import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
    // local state variable
    // whenever a state variable updates, react triggers a reconcilation cycle (re-renders the component)
    const [lisOfRestaurants, setListOfRestaurant] = useState([]);
    const [filterdRestaurant, setFilterdRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.566951189062507&lng=73.69993209117955&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterdRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(!lisOfRestaurants || lisOfRestaurants.length === 0){
        return <Shimmer />;
    }
    
    return (
        <div className="body">
            <div className="filterButton">

                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                        //filter the res-cars and update the ui.
                        const filterdRestaurant = lisOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText)
                        );

                        setFilterdRestaurant(filterdRestaurant);
                    }} className="btn">Search</button>
                </div>

                <button className="btn" onClick={()=> {
                    const filteredList = lisOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.2
                    );
                    setListOfRestaurant(filteredList);
                }}> Top Rated Restaurant</button>
            </div>
            <div className="restaurantContainer">
                {filterdRestaurant.map((restaurant) => <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>)}
            </div>
        </div>
    )
}

export default Body;