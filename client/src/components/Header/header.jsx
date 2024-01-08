import { Link } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faCircleUser,
  faShirt,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="nav-container">
        <button type="button" className="menu-button">
          <FontAwesomeIcon className="icon" icon={faBars} />
        </button>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button type="button" className="search-button">
            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="text-container">
          <Link className="text-light" to="/">
            <h1 className="m-0">DRESSED</h1>
            <p className="m-0">effortless style without commitment</p>
          </Link>
        </div>
        <Link to="/profile" className="profile-button">
          <FontAwesomeIcon className="icon" icon={faCircleUser} />
        </Link>
        <Link to="/closet" className="closet-button">
          <FontAwesomeIcon className="icon" icon={faShirt} />
        </Link>
        <Link to="/rent" className="order-button">
          <FontAwesomeIcon className="icon" icon={faBagShopping} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
