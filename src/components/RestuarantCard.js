import { CDN_URL } from "../utils/constants";

const ReasturantCard = (props) => {
    const {resData} = props;
    const {
      cloudinaryImageId,
       name, cuisines, 
       sla, 
       costForTwo,
       avgRating} = resData?.info;
  if(!resData){
    return null;
  }
    return (
      <div className="res-card" >
        <img 
          className="res-logo"
          alt ="res-logo"
          src={CDN_URL + 
          cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{sla?.deliveryTime} mintutes</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} stars</h4>
      </div>
    )
  }


 export default ReasturantCard; 