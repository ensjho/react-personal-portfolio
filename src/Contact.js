import React from "react";
import "./Contact.css";
import { Row, Col } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';



function Contact() {
  return (
    <div>
      <div className="contact-container" id="contact-anchor">
        <Row>
          <Col className="contact-heading">
            <div>Contact</div>
          </Col>
          <Col xs={6} className="contact-details-container">
            <div className="contact-logos">
              <SocialIcon className="logo linkedin" url="https://www.linkedin.com/in/eric-jho" />
              <SocialIcon className="logo github" url="https://github.com/Inhockorea" />
              <SocialIcon url="mailto: ejho13@berkeley.edu" className="logo email"  network="email" />
            </div>
          </Col>
          <Col xs={3}>
          </Col>
        </Row>

      </div>
    </div>
  );
}

export default Contact;


