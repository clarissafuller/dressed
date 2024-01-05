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
    <header className="bg-primary text-light mb-4 py-3">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
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
        <button type="button" className="profile-button">
          <FontAwesomeIcon className="icon" icon={faCircleUser} />
        </button>
        <button type="button" className="closet-button">
          <FontAwesomeIcon className="icon" icon={faShirt} />
        </button>
        <button type="button" className="order-button">
          <FontAwesomeIcon className="icon" icon={faBagShopping} />
        </button>
      </div>
    </header>
  );
};

export default Header;
