import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1><a href="/" className="title">The Sports Site</a></h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/formula1">Formula 1</Link>
                <Link to="/football">Football</Link>
                <Link to="/nfl">NFL</Link>
            </div>
            
        </nav>
     );
}
 
export default Navbar;