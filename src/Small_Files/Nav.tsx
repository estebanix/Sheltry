import { Link } from "react-router-dom";
import img from "../Images/logo.jpg";

export default function Nav() {
  return (
    <nav className="nav--container">
      <Link to="/">
        <img src={img} alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link to="/shelters">Shelters</Link>
        </li>
        <li>About us</li>
        <li>Donating</li>
      </ul>
      <div className="nav--login-box">
        <h3>Login</h3>
        |
        <h3>Register</h3>
      </div>
    </nav>
  );
}
