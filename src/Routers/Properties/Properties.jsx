import "./index.css";
import { useState } from "react";
const Properties = ()=>{
    const [isOpen, setIsOpen] = useState(false); 
    const toggleDropdown = () => setIsOpen(!isOpen);
    return(
        <div className="propertiesContainer">´
        <div className="propertiesContent">
            <div className="searchFilter">
            <h3>Search for properties</h3>
            <div className="filterOperation">
                        <div class="propertDropdown">
                            <button className="dropbtn" onClick={toggleDropdown}>
                                <span>Tidigast tillträde först </span> <span> {isOpen ? '▲' : '▼'}</span>
                            </button>
                            <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                                <a href="#">Tidigast tillträde först</a>
                                <a href="#">Senast publicerad först</a>
                                <a href="#">Lägst hyra först</a>
                                <a href="#">Störst först (m2)</a>
                                <a href="#">Minst först (m2)</a>
                            </div>
                        </div>
            </div>
            </div>

            </div>
        </div>
    )
}


export default Properties;