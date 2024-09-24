import "./header.css";

export default function header() {
  return (
    <header>
      <nav className="nav">
        <div className="nav-header">
          <h1> Travel Company</h1>
        </div>
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
