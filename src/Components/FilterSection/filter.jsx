import { useState } from "react";

const Filters = ({content, filterData})=>{
    const [isOpen, setIsOpen] = useState(false); 
    const toggleDropdown = () => setIsOpen(!isOpen);
    return(
        <div className="filterOperation">
            <div className="propertDropdown">
                <button className="dropbtn" onClick={toggleDropdown}>
                    <span>{content} </span> <span> {isOpen ? '▲' : '▼'}</span>
                </button>
                <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                <ul> {filterData.map((x)=>{
                        return (
                         
                                <li> {x}</li>
                        
                          
                        ) 
                    })}
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Filters;