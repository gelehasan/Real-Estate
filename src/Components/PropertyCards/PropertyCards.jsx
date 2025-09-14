import "./index.css"
import { Link } from "react-router-dom"

const PropertyCards = ({ Data }) => {
  const displayPrice =
    Data.newPrice && Data.newPrice !== ""
      ? Number(Data.newPrice).toLocaleString("de-DE")
      : Number(Data.price).toLocaleString("de-DE")

  return (
    <div className="propertyCardX">
      <Link to={`/properties/${Data.id}`} className="propertyCardX-link">
        <img
          src={Data.images[0].value}
          alt={Data.title}
          className="propertyCardX-image"
        />
        <div className="propertyCardX-info">
          <p className="propertyCardX-title">{Data.name}</p>
          <p className="propertyCardX-location">{Data.location}</p>
          <div className="propertyCardX-meta">
            <span className="propertyCardX-price">
              Price: {displayPrice} $
              {Data.newPrice && Data.newPrice !== "" && (
                <span className="propertyCardX-old">
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