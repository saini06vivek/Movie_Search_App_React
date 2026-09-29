import "../css/Navbar.css"
import { Link } from "react-router-dom";

function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to = "/Movie_Search_App_React">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/Movie_Search_App_React" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default NavBar;