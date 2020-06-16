import React from "react";
import "./Home.css";
import Eric from "./img/ericjLogo.png"
import scroll from "./img/scroll.svg"


function Home() {
  return (
    <div className="home-background">
      <div className="homepage">
        <img className="eric-logo" src={Eric} alt="hello" />
        <div className="homepage-description">
          Software Engineer || UX Enthusiast
        </div>
        <img src={scroll} alt="scroll down" className="scroll" />
      </div>
    </div>
  );
}

export default Home;
