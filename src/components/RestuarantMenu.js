import { useEffect, useState} from "react";
import ShimmerUi from "./ShimmerUi";
import RestuarantItemCard from "./RestuarantItemCard";

const RestuarantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [isRecommendedCollapsed , setIsRecommendedCollapsed] = useState(true)
    
    useEffect(() => {
    fetchDataRes();
   },[])
   
  const fetchDataRes = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0641247&lng=77.7444928&restaurantId=3404&catalog_qa=undefined&submitAction=ENTER");

    const json = await data.json();
     setResInfo(json.data);
   }
  

   console.log(resInfo);
   if(resInfo === null) {
    return <ShimmerUi/>;
   }

   const {name, areaName, avgRating, costForTwoMessage, sla, cuisines } = resInfo?.cards[2]?.card?.card?.info;
   const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   
   const isRecommendedToggle = () => {
    setIsRecommendedCollapsed(!isRecommendedCollapsed);
   }

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
            <div className ="collapes">
              Recommended
              <button onClick={() => {isRecommendedToggle()}}>{isRecommendedCollapsed ? "Show" : "Hide"}</button>
            </div>
            <div className= "res-menu">
                {
                  !isRecommendedCollapsed && itemCards.map((item) => {
                    return <RestuarantItemCard key={item.card.info.id} itemCard ={item} />
                  })
                }
            </div>
        </div>
    )
}

export default RestuarantMenu;