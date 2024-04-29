import "./index.css"
import Cards from "../ServiceCards/Cards";

const Services = ()=>{

    return(
        <div className="card-container">
            <Cards
                icon={<img src="/path-to-buy-icon.png" alt="Buy Land" />}
                title="Buy house"
                description="Discover the steps required to purchase a house."
            />
            <Cards
                icon={<img src="/path-to-buy-icon.png" alt="Buy Property" />}
                title="Rent a house"
                description="Discover the steps required to rent a house"
            />
            <Cards
                icon={<img src="/path-to-buy-icon.png" alt="Buy Property" />}
                title="Buy land"
                description="Discover the steps required to buy a land"
            />
        </div>
    )
}

export default Services;