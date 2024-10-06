import "./header.css";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <header>
      <nav className="nav">
        <div className="nav-header">
          <Link to="/">
            <h1> Travel Company</h1>{" "}
          </Link>
        </div>
        <ul className="nav-items">
          <li>Home</li>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
