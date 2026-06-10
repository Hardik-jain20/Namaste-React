import ItemList from "./ItemList";

const RestaurantCategories = ({ data }) => {
    //console.log(data);
    const {title, itemCards, image} = data;
    return(
        <div>
            {/* Accordian Header */}
            <div className="w-6/12 mx-auto my-2 shadow-lg p-4 bg-gray-100 ">
                <div className="flex justify-between">
                    <span className="font-bold text-lg">{title} ({itemCards.length})</span>
                    <span>{"▽"}</span>
                </div>
                
                {/* Accordian Body */}
                <ItemList items = {data.itemCards}/>
            </div>
        </div>
    )
}
export default RestaurantCategories;