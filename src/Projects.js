import React from "react";
import "./Projects.css";
import { Row, Col, Card, Button, Carousel } from 'react-bootstrap'
import warbler from "./img/warbler.png"
import jobly from "./img/jobly.png"
import microblog from "./img/microblog.png"
import Emoji from 'a11y-react-emoji'

function Projects() {
  return (
    <div>
      <div className="project-container" id="projects-anchor">
        <Row>
          <Col className="about-heading">
            <div>Projects</div>
          </Col>
          {/* <Col xs={3} className="skills-details-container">
            <Card  className="Cards" >
              <Card.Img  className="imgCard" variant="top" src={warbler} />
              <Card.Body>
                <Card.Title>Warbler</Card.Title>
                <Card.Text>
                  Warbler is a Python-based Twitter clone built using Flask and SQLAlchemy.
                  The application features user authentication and CSRF protection.
              </Card.Text>
                <Card.Link href="#">Github</Card.Link>
                <Card.Link href="#">Demo</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} className="skills-details-container">
            <Card className="Cards" >
              <Card.Img  className="imgCard" variant="top" src={jobly} />
              <Card.Body>
                <Card.Title>Jobly</Card.Title>
                <Card.Text>
                Job application website that allows you to click and apply! Jobly is built with React, Express, and PostgreSQL.
              </Card.Text>
                <Card.Link href="#">Github</Card.Link>
                <Card.Link href="#">Demo</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} className="skills-details-container">
            <Card className="Cards" >
              <Card.Img className="imgCard" variant="top" src={microblog} />
              <Card.Body>
                <Card.Title>Microblog</Card.Title>
                <Card.Text>
                  Blog site that allows users to like, comment, and up vote posts. 
                  Demo coming soon. See code on Github.
              </Card.Text>
                <Card.Link href="#">Github</Card.Link>
                <Card.Link href="#">Demo</Card.Link>
              </Card.Body>
            </Card>
          </Col> */}
          <Col xs= {9}>
            <Carousel interval="null" className="carousel-container">
              <Carousel.Item>
                <img
                  className="image"
                  src={warbler}
                  alt="First slide"
                />
                <div className="caption">
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={warbler}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={warbler}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

          </Col>
        </Row>
      </div>
    </div>

  );
}

export default Projects;


