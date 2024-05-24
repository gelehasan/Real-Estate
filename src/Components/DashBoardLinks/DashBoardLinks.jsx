import { Link } from 'react-router-dom';
import './DashboardLinks.css'; 

const DashBoardLinks = ()=>{


    return(
        <div className="dashboard-containers">
        <ul className="dashboard-linkss">
            <li>
                <Link to="/manage-properties" className="manage-dashboard-link">Manage Properties</Link>
            </li>
            <li>
                <Link to="/manage-about-me" className="manage-dashboard-link">Manage About Me</Link>
            </li>
            <li>
                <Link to="/manage-contact-info" className="manage-dashboard-link">Manage Contact Information</Link>
            </li>
        </ul>
    </div>
    )
}


export default DashBoardLinks