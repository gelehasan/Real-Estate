import "./index.css"

const PropertyCards = ({ Data }) => {
  console.log(Data)

  return (
    <div className="property-cards">
      <img src={Data.image} alt={Data.title} className="property-images" />
      <div className="property-infos">
        <h3>{Data.title}</h3>
        <p className="locations">{Data.location}</p>
        <div className="property-metas">
          <span className="ratings">{Data.rating} Rating</span>
          <span className="prices">{Data.price}</span>
        </div>
      </div>


    </div>
  )
}

export default PropertyCards;