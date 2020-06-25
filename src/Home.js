import React from "react";
import "./Home.css";
import Eric from "./img/ericjLogo.png"
import scroll from "./img/scroll.svg"
import * as Scroll from 'react-scroll';


function Home() {
  let Link = Scroll.Link;

  return (
    <div>
      <div className="top-anchor" id="top-anchor">
        Top Break Point
      </div>

      <section className="home-background mt-5 p-5">
        <div className="homepage">

          <img className="eric-logo" src={Eric} alt="eric-logo" />

          <div className="mt-5">
          </div>

          <Link to="about-anchor" smooth={true}>
            <img src={scroll} alt="scroll down" className="scroll mb-5" />
          </Link>

        </div>
      </section >

    </div>
  );
}

export default Home;
