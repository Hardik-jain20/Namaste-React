//import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


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
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.566951189062507&lng=73.69993209117955&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //console.log(json);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterdRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) {
        return (
            <h1>Looks like you're OFFLINE! Check your INTERNET CONNECTION!!</h1>
        )
    };
    
    if(!lisOfRestaurants || lisOfRestaurants.length === 0){
        return <Shimmer />;
    }
    
    return (
        <div className="body">
            <div className="filterButton flex">

                <div className="search">
                    <input type="text" className="search-box border border-gray-800 m-0.5" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                        //filter the res-cars and update the ui.
                        const filterdRestaurant = lisOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText)
                        );

                        setFilterdRestaurant(filterdRestaurant);
                    }} className="btn m-2 px-0.5 border-2">Search</button>
                </div>

                <button className="btn m-2 px-0.5 border-2" onClick={()=> {
                    const filteredList = lisOfRestaurants.filter(
                    (res) => res.info.avgRating > 4.2
                    );
                    setListOfRestaurant(filteredList);
                }}> Top Rated Restaurant</button>
            </div>
            <div className="restaurantContainer flex flex-wrap">
                {filterdRestaurant.map((restaurant) => <Link key = {restaurant.info.id} to = {"restaurants/" + restaurant.info.id}><RestaurantCard resData = {restaurant}/></Link>)}
            </div>
        </div>
    )
}

export default Body;