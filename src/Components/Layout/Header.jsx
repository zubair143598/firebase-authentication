import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar header  sticky-top navbar-expand-lg bg-light">
      <div className="container">
        <Link className="nav-link fs-5 clr" aria-current="page" to="Home">
          Home
        </Link>

        <button
          className=" color navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-dark fs-5 " aria-current="page" to="register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fs-5" to="login">
              Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
