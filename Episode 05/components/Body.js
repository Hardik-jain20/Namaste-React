import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restaurantContainer">
                {resList.map((restaurant) => <RestaurantCard Key = {restaurant.info.id} resData = {restaurant}/>)}
            </div>
        </div>
    )
}

export default Body;