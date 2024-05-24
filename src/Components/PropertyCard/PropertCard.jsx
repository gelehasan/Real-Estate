import { Link } from "react-router-dom";
const PropertyCard = ({ image, title, location, price, rating }) => {

  return (
    <div className="property-card">
   <img src={image} alt={title} className="property-image" />
      <div className="property-info">
        <h3>{title}</h3>
        <p className="location">{location}</p>
        <div className="property-meta">
          <span className="rating">{rating} Rating</span>
          <span className="price">{price}</span>
        </div>
      </div>
    
    </div>
  )
}


export default PropertyCard;