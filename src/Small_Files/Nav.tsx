import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav--container">
      <Link to="/">
        <img src="Images/logo.jpg" alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link to="/shelters">Shelters</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/donating">Donating</Link>
        </li>
      </ul>
      <div className="nav--login-box">
        <h3>
          <Link to="/login">Login</Link>
        </h3>
        |
        <h3>Register</h3>
      </div>
    </nav>
  );
}
