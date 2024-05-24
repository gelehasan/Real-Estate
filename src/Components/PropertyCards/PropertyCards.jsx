import "./index.css"
import { Link } from "react-router-dom"
const PropertyCards = ({ Data }) => {
  console.log(Data.images[0].value)

  return (
    <div className="property-cards">
       <Link to={`/properties/${Data.id}`} className="LinkProperties"> 
      <img src={Data.images[0].value} alt={Data.title} className="property-images" />
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