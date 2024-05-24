import "./index.css";
import { useState, useEffect } from "react";
import PropertyCards from "../../Components/PropertyCards/PropertyCards";
import houseIcon from "../../Assets/houseExample.png"
import Filters from "../../Components/FilterSection/filter";
import { fetchProperties } from "../../Store/propertyReducer/propertiesSlice";
import { useDispatch, useSelector } from "react-redux";
const propertyTypes = ["Rent", "Land", "Houses"];
const cities = ["Nairobi", "Garisa", "Mombasa"];
const filterBy = ["Price: Low to high", "Price: High to Low", "Latest published"];


const Properties = () => {
    const dispatch = useDispatch();
    const properties = useSelector((state) => state.properties.properties);
    const status = useSelector((state) => state.properties.status);
    const error = useSelector((state) => state.properties.error);

    console.log(properties)
    useEffect(() => {
        if (status === 'idle') {
          dispatch(fetchProperties());
        }
      }, [status, dispatch]);
    
      if (status === 'loading') {
        return <div>Loading...</div>;
      }
    
      if (status === 'failed') {
        return <div>Error: {error}</div>;
      }
    
    return (
        <div className="propertiesContainer">
            <div className="searchForPropText"><p className=""> Search for properties </p> </div>
            <div className="propertiesContent">
                <div className="searchFilter">

                    <Filters
                        content={"Type"}
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
                <div className="propertyShowCase">
                    {
                        properties.map(data => {
                            return (
                              <PropertyCards key={data.id} Data={data} />
                            )
                          })
                    }
                </div>
            </div>
        </div>
    )
}


export default Properties;