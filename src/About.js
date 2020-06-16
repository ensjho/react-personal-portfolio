import React from "react";
import "./About.css";
import { Row, Col, Button } from 'react-bootstrap'
import resume from "./img/resume.pdf"
import Emoji from 'a11y-react-emoji'

function About() {
  return (
    <div>
      <div className="About-container" id="about-anchor">
        <Row>
          <Col className="about-heading">
            <div>About Me</div>
          </Col>

          <Col xs={8}>
            <div className="about-description">
              I am a full-stack engineer who is passionate about building beautiful interfaces and experiences. I recently graduated from Rithm School's full-stack web development program in San Francisco, specializing in JavaScript, Python, and relational databases. Currently, I am looking for a software engineering role where I can continue to grow and channel my creativity through building user-friendly applications.
              <div className="about-description-hobby">
                <strong>When I'm not in front of a computer screen,</strong> I have a deep passion for fitness. I would practice boxing, jump-rope, go for a run near the Bay Bridge, work on calisthenic movements.
              </div>
            </div>
          </Col>
          <Col xs={1}>
          </Col>
        </Row>
        <div className="button-resume">
          <a href={resume}>
            <Button variant="outline-primary"> Download Resume </Button>
          </a>
        </div>

      </div>
      <div>
        <div className="skills-container">
          <Row>
            <Col className="skills-heading">
              <div>Skills</div>
            </Col>

            <Col xs={8} className="skills-details-container">
              <div>
                <b>JavaScript</b><br></br> React | Redux | Node | Express | jQuery | AJAX | Jest | jQuery
            </div>
              <div className="skills-details">
                <b>Python</b><br></br> Flask
            </div>
              <div className="skills-details">
                <b>SQL</b><br></br> PostgreSQL
            </div>
              <div className="skills-details">
                <b>HTML5 & CSS3</b><br></br> Bootstrap
            </div>
              <div className="skills-details">
                <b>Tools</b><br></br> Chrome DevTools | Git & Github | Adobe Creative Suites (Photoshop, Premiere Pro)
            </div>
            </Col>
            <Col xs={1}>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default About;


