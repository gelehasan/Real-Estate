import "./index.css";
import ShowCase from "../../Components/HomeShowCase/ShowCase";
import Services from "../../Components/Services/Services";
const Homepage = ()=>{


    return( 
        <div> 
        <div className="homePage">
           <ShowCase />
      
        </div>
        <div>
        <Services/>
        </div>
        </div>
      
    
    )
}

export default Homepage;