import "./index.css"
import { Link } from "react-router-dom"

const PropertyCards = ({ Data }) => {
  return (
    <div className="property-cards">
    <div className="property-images"> 
    <Link to={`/properties/${Data.id}`} className="LinkProperties">  <img src={Data.images[0].value} alt={Data.title} className="property-images" /></Link>
      </div> 
      <Link to={`/properties/${Data.id}`} className="LinkProperties">
        <div className="property-infos">
          <h3>{Data.name}</h3>
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
