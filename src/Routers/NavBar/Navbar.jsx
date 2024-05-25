import "./index.css";
import { useState } from "react";
import menu from "../../Assets/menu.svg";
import CloseMenu from "../../Assets/x.svg";
import logo from "../../Assets/logo.png"
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const currentUser = useSelector((state) => state.user.currentUser);
    const homePage = location.pathname === "/";


    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={homePage ? "navbars navHomePage" : "navbars"}>
            <div className="nav-container">
                {/* Logo on the left side */}
                <div className="nav-logo">
                    <img src={logo} />
                </div>

                {/* Toggle button for small screens */}
                <img className={isOpen ? "nav-toggles" : "nav-toggle"} onClick={handleToggle} src={isOpen ? CloseMenu : menu} />


                {/* Navigation Links */}
                <div className={`nav-items ${isOpen ? 'open' : ''}`}>
                    <a href="/">Home</a>
                    <Link to={"/Properties"} className="LinkProperties">Properties </Link>
                    {currentUser && <Link to={"/admin-dashboard"} className="LinkProperties">Admin </Link> }
                    <Link to={"/About"} className="LinkProperties">About </Link>
                    <Link to={"/Contact"} className="LinkProperties">Contact </Link>
        
                </div>
            </div>
        
        </nav>

    )
}

export default Navbar;