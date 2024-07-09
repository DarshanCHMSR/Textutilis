import React from "react";
import propTypes from "prop-types";

export default function Navbar(props) {
  return (
    
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src="favicon-32x32.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
    {props.title}
    </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading1">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
          <div className={`form-check form-switch text-${props.mode === "info"?"dark":"white"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toogleMode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className={`"form-check-label" text-${"primary"}htmlFor="flexSwitchCheckDefault"`} >
              Enable {props.mode === "info"?"Dark":"Light"}Mode
            </label>
          </div>      
{/* 
          <div className="btn-group" role="group" >
    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      SetMode
    </button>
    <ul className={`"dropdown-menu" bg-${props.mode}`}>
      <li><div className={`form-check form-switch text-${props.mode === "light"?"dark":"light"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toogleMode}    
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
              Enable {props.mode === "light"?"Dark":"Light"}Mode
            </label>
          </div>
        </li>
      <li><div className={`form-check form-switch text-${props.mode1 === "light"?"grey":"light"}`}>
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toogleMode1}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
              Enable {props.mode1 === "light"?"grey":"Light"}Mode
            </label>
          </div></li>
    </ul>
  </div>*/}
        </div> 
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string.isRequired,
};
