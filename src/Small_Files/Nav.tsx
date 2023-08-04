import { Link } from "react-router-dom";
import {useContext} from "react";
import { Context } from "../Context/Context";

export default function Nav() {
  const {loggedIn} = useContext(Context);
  
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
      {loggedIn ? (
          <>
            <h3>
              <Link to="/profile">Profile</Link>
            </h3>
            |
            <h3>
              <Link to="/logout">Logout</Link>
            </h3>
          </>
        ) : (
          <>
            <h3>
              <Link to="/login">Login</Link>
            </h3>
            |
            <h3>
              <Link to="/registration">Registration</Link>
            </h3>
          </>
        )}
      </div>
    </nav>
  );
}
