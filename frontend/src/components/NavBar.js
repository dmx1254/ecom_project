import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({click}) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>Manoush Shop</h2>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className = "cart__link">
              <i className="fas fa-shopping-cart"></i>
              <span>
                Chariot
                <span className="cartlogo__badge">0</span>
              </span>
          </Link>
        </li>
        <li>
            <Link to="/">achat</Link>
        </li>
        
      </ul>
      <div className="hamburger__menu" onClick = {click}>
        {/* &#9776; */}
        <i className="fas fa-bars"></i>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
