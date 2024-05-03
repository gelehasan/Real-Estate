import "./index.css";
import { useState } from "react";
import Filters from "../../Components/FilterSection/filter";
const propertyTypes=["Rent", "Land", "Houses"];
const cities=["Nairobi", "Garisa", "Mombasa"];
const filterBy =["Price: Low to high", "Price: High to Low", "Latest published"];

const Properties = ()=>{

    return (
        <div className="propertiesContainer">
          
            <div className="propertiesContent">
                <h3>Search for properties</h3>
                <div className="searchFilter">
                    
                    <Filters
                        content={"Property type"}
                        filterData={propertyTypes}
                    />
                    <Filters
                        content={"Cities"}
                        filterData={cities}
                    />
                    <Filters
                        content={"Filter by:"}
                        filterData={filterBy}
                    />
                </div>

            </div>
        </div>
    )
}


export default Properties;