import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button type="button" className="search-button">
            Search
          </button>
        </div>
        <div className="text-container">
          <Link className="text-light" to="/">
            <h1 className="m-0">DRESSED</h1>
            <p className="m-0">effortless style without commitment</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
