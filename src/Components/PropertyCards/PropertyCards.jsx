import "./index.css"
import { Link } from "react-router-dom"

const PropertyCards = ({ Data }) => {
  const displayPrice =
    Data.newPrice && Data.newPrice !== ""
      ? Number(Data.newPrice).toLocaleString("de-DE")
      : Number(Data.price).toLocaleString("de-DE")

  return (
    <div className="property-cards">
      <Link to={`/properties/${Data.id}`} className="LinkProperties">
        <img src={Data.images[0].value} alt={Data.title} className="property-images" />  
        <div className="property-infos">
          <p>{Data.name} </p>
          <p className="locations">{Data.location}</p>
          <div className="property-metas">
            <span className="prices">
              Price: {displayPrice} $
              {Data.newPrice && Data.newPrice !== "" && (
                <span className="old-price">
                  (Old: {Number(Data.price).toLocaleString("de-DE")})
                </span>
              )} 
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PropertyCards
