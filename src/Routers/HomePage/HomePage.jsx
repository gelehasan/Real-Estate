import "./index.css";
import ShowCase from "../../Components/HomeShowCase/ShowCase";
import Services from "../../Components/Services/Services";
import PropertyShowcase from "../../Components/PropertyShowCase/PropertyShowcase";
import Footer from "../../Components/Footer/Footer";
const Homepage = ()=>{


    return( 
       <>   <div> 
        <div className="homePage">
           <ShowCase />
      
        </div>
        
        <Services/>
        <PropertyShowcase />
        
       
        </div>
      
        <Footer /></>
    )
}

export default Homepage;