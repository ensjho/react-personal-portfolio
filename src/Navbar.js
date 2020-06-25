import React, { useState } from "react";
import "./Navbar.css";
import useWindowDimensions from "./useWindowDimensions"
import * as Scroll from 'react-scroll';

function Navbar() {
  let Link = Scroll.Link;
  const { width } = useWindowDimensions();

  const [hiddenNav, setHiddenNav] = useState(false);

  function toggleNav() {
    setHiddenNav(!hiddenNav)
  }

  return (
    <nav className="navbar navbar-light navbar-expand-md sticky-top"
      style={{ "backgroundColor": "#fcffff" }}>
      <Link
        className="navbar-brand font-weight-bold"
        to="top-anchor"
        smooth={true}>
        Eric Steve Jho
      </Link>

      <button className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        onClick={toggleNav}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {hiddenNav & width < 768 ? (
        <ul className="navbar-nav ml-auto d-flex align-items-center nav-dis">
          <li className="nav-item mr-4">
            <Link
              className="nav-link text-secondary font-weight-bold nav-options"
              to="about-anchor" smooth={true}>
              About
        </Link>
          </li>
          <li className="nav-item mr-4">
            <Link
              className="nav-link text-secondary font-weight-bold nav-options"
              to="skills-anchor" smooth={true}>
              Skills
        </Link>
          </li>
          <li className="nav-item mr-4">
            <Link
              className="nav-link text-secondary font-weight-bold nav-options"
              to="projects-anchor" smooth={true}>
              Projects
          </Link>
          </li>

          <li className="nav-item mr-4">
            <Link
              className="nav-link text-light"
              to="contact-anchor" smooth={true}>
              <button className="btn btn-outline-dark">Contact</button>
            </Link>
          </li>
        </ul>

      )
        : null
      }
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto d-flex align-items-center ">
          <li className="nav-item mr-4">
            <Link
              className="nav-link text-secondary font-weight-bold nav-options"
              to="about-anchor" smooth={true}>
              About
          </Link>
          </li>
          <li className="nav-item mr-4">
            <Link
              className="nav-link text-secondary font-weight-bold nav-options"
              to="skills-anchor" smooth={true}>
              Skills
          </Link>
          </li>
          <li className="nav-item mr-4">
            <Link
              className="nav-link text-secondary font-weight-bold nav-options"
              to="projects-anchor" smooth={true}>
              Projects
            </Link>
          </li>

          <li className="nav-item mr-4">
            <Link
              className="nav-link text-light"
              to="contact-anchor" smooth={true}>
              <button className="btn btn-outline-dark">Contact</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;

/* <NavLink activeClassName="active" exact to="/">
  <span className="navbar-numbers">01.</span>
  Home
</NavLink>
<NavLink activeClassName="active" exact to="/about">
  <span className="navbar-numbers">02.</span>
  About
</NavLink>
<NavLink activeClassName="active" exact to="/project">
  <span className="navbar-numbers">03.</span>
  Projects
</NavLink>
<NavLink activeClassName="active" exact to="/contact">
  <span className="navbar-numbers">04.</span>
  Contact
</NavLink> */