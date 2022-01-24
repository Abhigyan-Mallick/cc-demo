import React from "react";
import { Link } from "react-router-dom";
import Constants from "../util/constants";

const Header = ({ location }) => {
  return (
    <div className="header">
      <span className="header-title">Dynamic Demo</span>
      <br />
      <span className="header-text">An Experiment with Dynamic Attributes</span>
      {location === Constants.CREATE_DYNAMIC ? (
        <ul className="navbar-nav">
          <li className="header-nav-item">
            <Link className="nav-link" to="/home">
              <span className="header-no-icon">Return Home</span>
              {/* <a className="header-no-icon" href="/">
                Return Home
              </a> */}
            </Link>
          </li>
        </ul>
      ) : location === Constants.DISPLAY_DYNAMIC ? (
        <ul className="navbar-nav">
          <li>
            <Link className="nav-link" to="/home/create-dynamic">
              <span className="header-no-icon">Go Back</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/home">
              <span className="header-no-icon">Return Home</span>
              {/* <a className="header-no-icon" href="/">
                Return Home
              </a> */}
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
