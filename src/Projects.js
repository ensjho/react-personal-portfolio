import React from "react";
import "./Projects.css";
import { Row, Col, Card, Button, Carousel } from 'react-bootstrap'
import warbler from "./img/warbler.png"
import jobly from "./img/jobly.png"
import microblog from "./img/Microblog.gif"
import Emoji from 'a11y-react-emoji'

function Projects() {
  return (
    <div>
      <div className="project-container" id="projects-anchor">
        <Row>
          <Col className="about-heading">
            <div>Projects</div>
          </Col>
          <Col xs={4}>
            <img src={microblog} alt="microblog" />
          </Col>
          <Col xs={4} className="individual-project-container">
            <div className="project-heading">
              Microblog
              </div>
            <div className="project-description">
              A blog site where users can write/edit/delete blog posts, write comments, and vote up or down to rank posts.
              </div>
            <div className="project-technologies">
              <strong> PostgreSQL | Express | React | Redux | Node.js </strong>
            </div>
            <div className="project-button">
              <Button>
                <a className="project-git" href="https://github.com/Inhockorea/project-react-redux-microblog"> Github </a>
              </Button>
            </div>
          </Col>
          <Col xs={1}></Col>
        </Row>

        <Row className="project-row">
          <Col className="about-heading">
          </Col>
          <Col xs={4}>
            <img src={warbler} alt="warbler" />
          </Col>
          <Col xs={4} className="individual-project-container">
            <div className="project-heading">
              Warbler
              </div>
            <div className="project-description">
              A blog site where users can write/edit/delete blog posts, write comments, and vote up or down to rank posts.
              </div>
            <div className="project-technologies">
              <strong> PostgreSQL | Express | React | Redux | Node.js </strong>
            </div>
            <div className="project-button">
              <Button>
                <a className="project-git" href="https://github.com/Inhockorea/project-react-redux-microblog"> Github </a>
              </Button>
            </div>
          </Col>
          <Col xs={1}></Col>
        </Row>

        <Row className="project-row">
          <Col className="about-heading">
          </Col>
          <Col xs={4}>
            <img src={warbler} alt="warbler" />
          </Col>
          <Col xs={4} className="individual-project-container">
            <div className="project-heading">
              Jobly
              </div>
            <div className="project-description">
              A blog site where users can write/edit/delete blog posts, write comments, and vote up or down to rank posts.
              </div>
            <div className="project-technologies">
              <strong> PostgreSQL | Express | React | Redux | Node.js </strong>
            </div>
            <div className="project-button">
              <Button>
                <a className="project-git" href="https://github.com/Inhockorea/project-react-redux-microblog"> Github </a>

              </Button>
            </div>
          </Col>
          <Col xs={1}></Col>
        </Row>

      </div>
    </div>

  );
}

export default Projects;


