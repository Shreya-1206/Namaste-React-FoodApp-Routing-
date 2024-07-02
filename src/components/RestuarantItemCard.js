const RestuarantItemCard = (props) => {
    const {itemCard} = props;

    const {name, price, description, imageId } = itemCard.card.info;
    return (
        <div className ="res-item">
           <div className ="item-info">
            <h2 className = "item-name">{name}</h2>
            <h2 className = "item-price">Rs {price/100}</h2>
            <h3 className = "item-desc">{description}</h3>
           </div>
            <div className="item-img-btn">
              <img className ="item-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+ imageId}/>
              <button className ="item-btn">Add</button>
            </div>
        </div>
    )
}

export default RestuarantItemCard;