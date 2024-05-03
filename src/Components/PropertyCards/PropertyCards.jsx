

const PropertyCards =({Data})=>{

    return(
        <div className="property-cards">
        <img src={Data.img} alt={title} className="property-images" />
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