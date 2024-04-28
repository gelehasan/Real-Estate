import "./index.css";
import { useState } from "react";
import menu from "../../Assets/menu.svg";
import CloseMenu from "../../Assets/x.svg";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Logo on the left side */}
                <div className="nav-logo">
                   Gadooy.
                </div>

                {/* Toggle button for small screens */}
                <img className="nav-toggle" onClick={handleToggle} src={ isOpen ? CloseMenu : menu}/>
            

                {/* Navigation Links */}
                <div className={`nav-items ${isOpen ? 'open' : ''}`}>
                    <a href="/home">Home</a>
                    <a href="/features">Features</a>
                    <a href="/service">Service</a>
                    <a href="/listed">Listed</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;