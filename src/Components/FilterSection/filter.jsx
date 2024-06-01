import { useState } from "react";

const Filters = ({content, filterData,onChange,selectedType})=>{
    const [isOpen, setIsOpen] = useState(false); 
    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleChange = (e) => {
        if(selectedType == e){
        
            onChange("All");
         
        }else{
            onChange(e);
        }
      };
    return(
        <div className="filterOperation">
            <div className="propertDropdown">
                <button className="dropbtn" onClick={toggleDropdown}>
                    <span>{content} </span> <span> {isOpen ? '▲' : '▼'}</span>
                </button>
                <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                <ul> {filterData && filterData.map((x)=>{
                        return (
                         
                                <li key={x} className={selectedType==x? "selectedFilter": ""} onClick={()=>handleChange(x) } > {x}</li>
                        
                          
                        ) 
                    })}
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Filters;