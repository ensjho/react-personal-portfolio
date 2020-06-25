import React from "react";
import "./Footer.css";
import * as Scroll from 'react-scroll';
import Emoji from "a11y-react-emoji"
import { SocialIcon } from 'react-social-icons';


function Footer() {
  let Link = Scroll.Link;

  return (
    <div>
      <div className="font-weight-bold m-5">
        <Link
          activeClass="active"
          to="top-anchor"
          smooth={true}>
          <Emoji symbol="🔝" className="top"></Emoji>
        </Link>
      </div>

      <div>
        <SocialIcon className="logo linkedin" url="https://www.linkedin.com/in/eric-jho" />
        <SocialIcon className="logo github" url="https://github.com/Inhockorea" />
        <SocialIcon url="mailto: ejho13@berkeley.edu" className="logo email" network="email" />
        <SocialIcon url="https://www.facebook.com/namgyujho" className="logo facebook" />
        <SocialIcon url="https://twitter.com/EricJho" className="logo twitter" />
      </div>

      <div className="footer-container text-center mt-3 mb-3">
        <strong>Developed By Eric Steve Jho @ 2020<Emoji className="emoji" symbol="😁"></Emoji></strong>
      </div>
    </div>

  );
}

export default Footer;
