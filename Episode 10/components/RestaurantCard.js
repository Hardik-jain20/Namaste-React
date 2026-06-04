import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, areaName, sla} = resData?.info;
    return (
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src={CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3 className="rating">{avgRating} Star</h3>
            <h3>{costForTwo}</h3>
            <h3>{areaName}</h3>
            <h3>{sla?.slaString}</h3>
        </div>
    )
}

export default RestaurantCard;