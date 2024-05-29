import { Link } from 'react-router-dom';
import './DashboardLinks.css'; 
import Footer from '../Footer/Footer';

const DashBoardLinks = ()=>{
    

    return(
     <>   <div className="dashboard-containers">
        <ul className="dashboard-linkss">
            <li>
                <Link to="/manage-properties" className="manage-dashboard-link">Manage Properties</Link>
            </li>
            <li>
                <Link to="/manage-about-me" className="manage-dashboard-link">Manage About Me</Link>
            </li>
           
        </ul>
    </div>
    <Footer /></>
    )
}


export default DashBoardLinks