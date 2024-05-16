import "./index.css"
import { Link } from "react-router-dom"
const PropertyCards = ({ Data }) => {
  console.log(Data)

  return (
    <div className="property-cards">
       <Link to={`/property/${Data.id}`} className="LinkProperties"> 
      <img src={Data.image} alt={Data.title} className="property-images" />
      <div className="property-infos">
        <h3>{Data.title}</h3>
        <p className="locations">{Data.location}</p>
        <div className="property-metas">
          <span className="ratings">{Data.rating} Rating</span>
          <span className="prices">{Data.price}</span>
        </div>
      </div>
      </Link>

    </div>
  )
}

export default PropertyCards;