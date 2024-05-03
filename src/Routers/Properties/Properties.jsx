import "./index.css";
import { useState } from "react";
import PropertyCards from "../../Components/PropertyCards/PropertyCards";
import houseIcon from "../../Assets/houseExample.png"
import Filters from "../../Components/FilterSection/filter";
const propertyTypes=["Rent", "Land", "Houses"];
const cities=["Nairobi", "Garisa", "Mombasa"];
const filterBy =["Price: Low to high", "Price: High to Low", "Latest published"];

const propertyData=[
    {
        image:"https://res.cloudinary.com/ddeif6hmk/image/upload/v1714313062/photo-1600585154340-be6161a56a0c_vb23mh.jpg",
        title:"3 BHK Villa",
        location:"Newyork City, 11th street, USA",
        price:"$25,185",
         rating:"4.8",
    },
    {
        image:"https://res.cloudinary.com/ddeif6hmk/image/upload/v1714313062/photo-1600585154340-be6161a56a0c_vb23mh.jpg",
        title:"3 BHK Villa",
        location:"Newyork City, 11th street, USA",
        price:"$25,185",
         rating:"4.8",
    },
    {
        image:"https://res.cloudinary.com/ddeif6hmk/image/upload/v1714313062/photo-1600585154340-be6161a56a0c_vb23mh.jpg",
        title:"3 BHK Villa",
        location:"Newyork City, 11th street, USA",
        price:"$25,185",
         rating:"4.8",
    },
    {
        image:"https://res.cloudinary.com/ddeif6hmk/image/upload/v1714313062/photo-1600585154340-be6161a56a0c_vb23mh.jpg",
        title:"3 BHK Villa",
        location:"Newyork City, 11th street, USA",
        price:"$25,185",
         rating:"4.8",
    }
]
const Properties = ()=>{

    return (
        <div className="propertiesContainer">
          
            <div className="propertiesContent">
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
                <div className="propertyShowCase">
                 {
                    propertyData.map(data=>{
                        return(
                            <PropertyCards Data={data}/>
                        )
                    })
                 }
                </div>
            </div>
        </div>
    )
}


export default Properties;