import "./index.css"
import Cards from "../ServiceCards/Cards";
import LandIcon from "../../Assets/land icon.png";
import rentIcon from "../../Assets/rent.png";
import houseIcon from "../../Assets/house icon.png"

const Services = ()=>{

    return(
        <div className="card-container">
            <Cards
                icon={<img src={houseIcon} alt="Buy Land" />}
                title="Buy house"
                description="Discover the steps required to purchase a house."
            />
            <Cards
                icon={<img src={rentIcon} alt="Buy Property" />}
                title="Rent a house"
                description="Discover the steps required to rent a house"
            />
            <Cards
                icon={<img src={LandIcon} alt="Buy Property" />}
                title="Buy land"
                description="Discover the steps required to buy a land"
            />
        </div>
    )
}

export default Services;