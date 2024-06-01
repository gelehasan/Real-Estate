import "./index.css";
import { useState,useEffect } from "react";
import PropertyCards from "../../Components/PropertyCards/PropertyCards";
import Filters from "../../Components/FilterSection/filter";
import { fetchProperties } from "../../Store/propertyReducer/propertiesSlice";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";
const propertyTypes = ["All","Rent", "Land", "Houses"];
const cities = ["All","Nairobi", "Garisa", "Mombasa"];
const filterBy = ["All","Price: Low to high", "Price: High to Low", "Latest published"];



const Properties = () => {
    const dispatch = useDispatch();
    const properties = useSelector((state) => state.properties.properties);
    const status = useSelector((state) => state.properties.status);
    const error = useSelector((state) => state.properties.error);
    const [propCities, setPropCities]= useState();

    const [selectedType, setSelectedType] = useState("All");
    const [selectedCity, setSelectedCity] = useState("All");
    const [selectedFilterBy, setSelectedFilterBy] = useState("All");
    const [searchField, setSearchField] = useState("");

    useEffect(() => {
        if (status === 'idle') {
          dispatch(fetchProperties());
       
        }
        const fetchCities =()=>{
          const cities = []
          if(properties){
            properties.map((x)=>{
              cities.push(x.city)
              })
                     
              setPropCities(cities) 
          }
        
        } 
  
        fetchCities()
      }, [status, dispatch]);
    
    
 
      if (status === 'loading') {
        return <div>Loading...</div>;
      }
    
      if (status === 'failed') {
        return <div>Error: {error}</div>;
      }
 
 
      const handleFilterChange = (filterType, value) => {
        switch (filterType) {
          case 'search':
            let text= value.target.value;
            setSearchField(text)
         
            break;
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
        if (searchField != ""){
          filteredProperties= filteredProperties.filter((x)=>x.name.toLowerCase().includes(searchField.toLowerCase()));
        }
        if (selectedType !== "All") {
          filteredProperties = filteredProperties.filter(property => property.type.toLowerCase() === selectedType.toLowerCase());
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
     
    return (
        <> <div className="propertiesContainer">
            <div className="searchForPropText"><p className=""> Search for properties </p> 
            <input type="text" placeholder="Search" name="search" onChange={(value)=>handleFilterChange("search", value)}/></div>
            <div className="propertiesContent">
                <div className="searchFilter">

                    <Filters
                        content={"Type"}
                        filterData={propertyTypes}
                        onChange={(value) => handleFilterChange("Type", value)}
                        selectedType={selectedType}
                    />
                    <Filters
                        content={"Cities"}
                        filterData={propCities}
                        onChange={(value) => handleFilterChange("Cities", value)}
                        selectedType={selectedCity}
                    />
                    <Filters
                        content={"Filter by:"}
                        filterData={filterBy}
                        onChange={(value) => handleFilterChange("Filter by", value)}
                        selectedType={selectedFilterBy}
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

        <Footer/> </>
    )
}


export default Properties;