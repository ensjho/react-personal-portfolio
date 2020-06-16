import React from "react";
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Footer from "./Footer"
import Projects from "./Projects";
import Contact from "./Contact";
// import NotFound from "../NotFound";

/**
 * Renders PublicRoute (accessible to all), PrivateRoutes (accessible to logged in users), NotFound
 * PublicRoute wraps the following components which are passed to PublicRoute as children via Props
 *  -- Register
 *  -- About
 *  -- Mission
 *
 * App -> Routes
 */

function Routes() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Routes;
