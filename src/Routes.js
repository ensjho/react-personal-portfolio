import React from "react";
import Home from "./Home"
import About from "./About"
import Footer from "./Footer"
import Projects from "./Projects";
import Contact from "./Contact";

function Routes() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Routes;
