import "./index.css"
import { Link } from "react-router-dom";
const ShowCase = ()=>{

    return(
        <div className="homePageShowCaseDiv">
            <div className="showCaseInfo">
            <h1>Find best places to live and invest in Kenya</h1>
            <p>We have all sort of properties and lands with affordable prices, discover beautiful places to invest your money in</p>
            </div>
            <div className="discoverBtn">
         <Link to={"properties"}>  <button> Discover</button> </Link> 
            </div>
           
        </div>
    )
}

export default ShowCase;