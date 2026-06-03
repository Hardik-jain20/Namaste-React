import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const[resInfo, setResInfo] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=24.566951189062507&lng=73.69993209117955&restaurantId=628871&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();

        console.log(json);
        setResInfo(json?.data?.cards[2]?.card?.card.info);
    };
    const {name, cuisines, costForTwoMessage, areaName, } = resInfo?.data?.cards[2]?.card?.card?.info;
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                <li>Pizza</li>
                <li>Burger</li>
                <li>Fries</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;