import "./index.css";
import { useState } from "react";
import menu from "../../Assets/menu.svg";
import CloseMenu from "../../Assets/x.svg";
import logo from "../../Assets/logo.png"
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";
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
                    <a href="/properties">Properties</a>
                    {currentUser && <a href="/admin-dashboard"> Admin</a>}

                    <a href="/About">About</a>
                    <a href="/Contact">Contact</a>
                </div>
            </div>
        
        </nav>

    )
}

export default Navbar;