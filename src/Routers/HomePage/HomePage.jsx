import "./index.css";
import ShowCase from "../../Components/HomeShowCase/ShowCase";
import Services from "../../Components/Services/Services";
import PropertyShowcase from "../../Components/PropertyShowCase/PropertyShowcase";
const Homepage = ()=>{


    return( 
        <div> 
        <div className="homePage">
           <ShowCase />
      
        </div>
        
        <Services/>
        <PropertyShowcase />
    
        </div>
      
    
    )
}

export default Homepage;