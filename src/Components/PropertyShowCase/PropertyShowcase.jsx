import "./index.css";
import PropertyCard from "../PropertyCard/PropertCard";
const PropertyShowcase = ()=>{


    return(
        <div className="propertyContainer">

            <div className="propertyContent">

                <div className="propertyInfomation">
                    <div>
                        <h1>Current Properties</h1>
                        <p>Find the property that suits you at affordable price</p>
                    </div>
                   <div className="propertyInfoViewAll">  <span > View All</span>
                   </div>
                </div>
                <div className="property-list">
                    <PropertyCard
                        image="/path-to-your-image.jpg"
                        title="3 BHK Villa"
                        location="Newyork City, 11th street, USA"
                        price="$25,185"
                        rating="4.8"
                    />
                    {/* Repeat PropertyCard for each property */}
                </div>
            </div>
        </div>

    )
}


export default PropertyShowcase;