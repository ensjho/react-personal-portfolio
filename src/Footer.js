import React from "react";
import "./Footer.css";
import * as Scroll from 'react-scroll';
import Emoji from "a11y-react-emoji"

function Footer() {
  let Link = Scroll.Link;

  return (
    <div>
      <Link className="goup"
        activeClass="active"
        to="top" smooth={true}>
        <Emoji symbol="🔝" className="top"></Emoji>
      </Link>
      <div className="footer-container">
        <strong>Developed By Eric Steve Jho @ 2020<Emoji className="emoji" symbol="😁"></Emoji></strong>
      </div>
    </div>

  );
}

export default Footer;
