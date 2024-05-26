import "./index.css";
import { useState } from "react";
import menu from "../../Assets/menu.svg";
import CloseMenu from "../../Assets/x.svg";
import logo from "../../Assets/logo.png"
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentUser } from "../../Store/Reducers/userReducer/userReducer";
import { useNavigate } from "react-router-dom";
import { SignOutUser } from "../../Firebase/firebase";
import { useDispatch } from "react-redux";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const currentUser = useSelector((state) => state.user.currentUser);
    const homePage = location.pathname === "/";
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const handleSignOut = async () => {
        try {
          await SignOutUser();
          dispatch(setCurrentUser(null));
          navigate('/');
        } catch (error) {
          console.error('Error signing out:', error.message);
        }
      };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={homePage ? "navbars navHomePage" : "navbars"}>
            <div className="nav-container">
                {/* Logo on the left side */}
                <div className="nav-logo">
                <Link to={"/"} className="NavLinksProps"> <img src={logo} /> </Link>
                </div>

                {/* Toggle button for small screens */}
                <img className={isOpen ? "nav-toggles" : "nav-toggle"} onClick={handleToggle} src={isOpen ? CloseMenu : menu} />


                {/* Navigation Links */}
                <div className={`nav-items ${isOpen ? 'open' : ''}`}>
                    <Link to={"/"} className="NavLinksProps">Home</Link>
                    <Link to={"/Properties"} className="NavLinksProps">Properties</Link>
                    {currentUser && <Link to={"/admin-dashboard"} className="NavLinksProps">Admin </Link>}
                    <Link to={"/About"} className="NavLinksProps">About </Link>
                    <Link to={"/Contact"}className="NavLinksProps">Contact </Link>
                    {currentUser &&   <button onClick={handleSignOut} className="signoutBtn"> Sign out</button> }
                 
 
      </div>
            </div>
        
        </nav>

    )
}

export default Navbar;