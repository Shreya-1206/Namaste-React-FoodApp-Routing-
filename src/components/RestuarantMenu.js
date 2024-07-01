import { useEffect, useState} from "react";
import ShimmerUi from "./ShimmerUi";

const RestuarantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
    fetchDataRes();
   },[])
   
 const fetchDataRes = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0641247&lng=77.7444928&restaurantId=340374&catalog_qa=undefined&submitAction=ENTER");

    const json = await data.json();
     setResInfo(json.data);
     console.log(resInfo);
   }


   if(resInfo === null) {
    return <ShimmerUi/>;
   }

   const {name, areaName, avgRating, costForTwoMessage, sla, cuisines } = resInfo?.cards[2]?.card?.card?.info;

    return (
         <div className="res-info-conatainer">
            <h1>{name}</h1>
            <div className ="res-card2">
              <h3 className = "res-card2Detail">{cuisines.join(", ")}</h3>
              <h3 className = "res-card2Detail">{avgRating}⭐</h3>
              <h3 className = "res-card2Detail"> {areaName} </h3>
              <h3 className = "res-card2Detail"> {costForTwoMessage} </h3>
              <h3 className = "res-card2Detail">{sla.deliveryTime} mins</h3>
              <h3 className = "res-card2Detail">{costForTwoMessage}</h3>
            </div>
            <div className= "res-menu">
                <ul>
                    <li>dish 1</li>
                    <li>dish 2</li>
                    <li>dish 3</li>
                </ul>
            </div>
        </div>
    )
}

export default RestuarantMenu;