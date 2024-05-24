import "./index.css";
import { useState,useEffect } from "react";
import PropertyCards from "../../Components/PropertyCards/PropertyCards";
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

    const [selectedType, setSelectedType] = useState("All");
    const [selectedCity, setSelectedCity] = useState("All");
    const [selectedFilterBy, setSelectedFilterBy] = useState("Latest published");

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
      const handleFilterChange = (filterType, value) => {
        switch (filterType) {
          case "Type":
            setSelectedType(value);
            break;
          case "Cities":
            setSelectedCity(value);
            break;
          case "Filter by":
            setSelectedFilterBy(value);
            break;
          default:
            break;
        }
      };


      const filterProperties = () => {
        let filteredProperties = [...properties];
    
        if (selectedType !== "All") {
          filteredProperties = filteredProperties.filter(property => property.type === selectedType);
        }
    
        if (selectedCity !== "All") {
          filteredProperties = filteredProperties.filter(property => property.city === selectedCity);
        }
    
        if (selectedFilterBy === "Price: Low to high") {
          filteredProperties.sort((a, b) => a.price - b.price);
        } else if (selectedFilterBy === "Price: High to Low") {
          filteredProperties.sort((a, b) => b.price - a.price);
        } else if (selectedFilterBy === "Latest published") {
          filteredProperties.sort((a, b) => new Date(b.published) - new Date(a.published));
        }
        
        return filteredProperties;  
      };
  
      const filteredProperties = filterProperties();
      console.log(filterProperties)
    return (
        <div className="propertiesContainer">
            <div className="searchForPropText"><p className=""> Search for properties </p> </div>
            <div className="propertiesContent">
                <div className="searchFilter">

                    <Filters
                        content={"Type"}
                        filterData={propertyTypes}
                        onChange={(value) => handleFilterChange("Type", value)}
                    />
                    <Filters
                        content={"Cities"}
                        filterData={cities}
                        onChange={(value) => handleFilterChange("Cities", value)}
                    />
                    <Filters
                        content={"Filter by:"}
                        filterData={filterBy}
                        onChange={(value) => handleFilterChange("Filter by", value)}
                    />
                </div>
                <div className="propertyShowCase">
                    {
                        filteredProperties.map(data => {
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