import React from "react";
import { Nav } from 'react-bootstrap'
import "./Navbar.css";
import * as Scroll from 'react-scroll';



function Navbar() {

  let Link = Scroll.Link;


  return (
    <Nav className="Navbar justify-content-end" id="top" >
      <Link className="goup"
        activeClassName="active"
        to="about-anchor" smooth={true}>
        <span className="navbar-numbers">01.</span>
          About
      </Link>
      <Link className="goup"
        activeClassName="active"
        to="projects-anchor" smooth={true}>
        <span className="navbar-numbers">02.</span>
          Projects
      </Link>
      <Link className="goup"
        activeClassName="active"
        to="contact-anchor" smooth={true}>
        <span className="navbar-numbers">03.</span>
          Contact
      </Link>
    </Nav>
  );
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