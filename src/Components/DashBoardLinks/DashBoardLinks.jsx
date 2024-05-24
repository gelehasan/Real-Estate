import { Link } from 'react-router-dom';
import './DashboardLinks.css'; 

const DashBoardLinks = ()=>{


    return(
        <div className="dashboard-container">
        <ul className="dashboard-links">
            <li>
                <Link to="/manage-properties" className="dashboard-link">Manage Properties</Link>
            </li>
            <li>
                <Link to="/manage-about-me" className="dashboard-link">Manage About Me</Link>
            </li>
            <li>
                <Link to="/manage-contact-info" className="dashboard-link">Manage Contact Information</Link>
            </li>
        </ul>
    </div>
    )
}


export default DashBoardLinks