import "./header.css";
import { NavLink } from "react-router-dom";

export default function header() {
  return (
    <header>
      <nav className="nav">
        <div className="nav-header">
          <NavLink to="/">
            <h1> Travel Company</h1>
          </NavLink>
        </div>
        <ul className="nav-items">
          <NavLink to="/home">
            <li>Home</li>
          </NavLink>

          <NavLink to="/about">
            <li>About</li>
          </NavLink>

          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
