import "./index.css"
import { Link } from "react-router-dom"

const PropertyCards = ({ Data }) => {
 
  return (
    <div className="property-cards">
  <Link to={`/properties/${Data.id}`} className="LinkProperties">
  <img src={Data.images[0].value} alt={Data.title} className="property-images" />  
       
     
        <div className="property-infos">
          <p>{Data.name}</p>
          <p className="locations">{Data.location}</p>
          <div className="property-metas">
            <span className="prices">Price: {Data.price}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PropertyCards;
