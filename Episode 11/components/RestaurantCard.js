import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    areaName,
    sla,
  } = resData?.info;
  return (
    <div className="res-card w-60 m-3 p-1.5 border bg-orange-200 rounded-md">
      <img
        alt="res-logo"
        className="res-logo rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold">{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3 className="rating">{avgRating} Star</h3>
      <h3>{costForTwo}</h3>
      <h3>{areaName}</h3>
      <h3>{sla?.slaString}</h3>
    </div>
  );
};
// Higher Order Component
// export const withPromotedLabel = (RestaurantCard) => {
//     return () => {
//         return (
//             <div>
//                 <label>Promoted</label>
//                 <RestaurantCard {...props}/>
//             </div>
//         )
//     }
// }

export default RestaurantCard;
