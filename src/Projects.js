import React from "react";
import "./Projects.css";
import BlogRanker from "./img/BlogRanker.gif"
import DreamJob from "./img/DreamJob.gif"
import warbler from "./img/warbler.gif"

function Projects() {
  return (
    <section className="mt-5">
      <div className="project-anchor" id="projects-anchor">
        project-anchor
      </div>

      <div className="container-fluid projects-section">
        <div className="row">

          <div className="col-12 col-md-3 mr-3 mb-3 project-heading">
            <div>PROJECTS</div>
          </div>

          <div className="col-md-6 p-0">
            <img src={DreamJob} alt="DreamJob" className="blogranker-img border" />
          </div>

          <div className="col col-md-2">
            <div className="project-ind-header font-weight-bold mb-2">
              DreamJob
            </div>

            <div className="project-ind-body">
              <div>
                A job application website that allows you to search, apply, find companies and jobs.
              </div>
            </div>


            <div className="project-demo-section mt-3 d-flex justify-content-center">
              <button className="btn btn-info mr-1">
                <a className="project-links" href="http://dreamjob.demo.ericjho.com/">
                  Demo
                </a>
              </button>
              <button className="btn btn-info">
                <a className="project-links" href="https://github.com/Inhockorea/DreamJob">
                  GitHub
                </a>
              </button>
            </div>
            <div className="text-info d-flex flex-column justify-content-center mt-2">
              <div className="pr-2">
                React | Express
                </div>
              <div className="pr-2">
                PostgreSQL | Node.js
                </div>
            </div>
          </div>
        </div>
      </div>

{/**BlogRanker */}
      <div className="container-fluid projects-section mt-5">
        <div className="row">

          <div className="col-12 col-md-3 mr-3 mb-3 project-heading">
            <div className="hiddenName">PROJECTS</div>
          </div>

          <div className="col-md-6 p-0">
            <img src={BlogRanker} alt="BlogRanker" className="blogranker-img border" />
          </div>

          <div className="col col-md-2">

            <div className="project-ind-header font-weight-bold mb-2">
              Blog Ranker
            </div>

            <div className="project-ind-body">
              <div>
                A blog site where users can write/edit/delete blog posts, write comments, and vote up or down to rank posts.
              </div>
            </div>


            <div className="project-demo-section mt-3 d-flex justify-content-center">
              <button className="btn btn-info mr-1">
                <a className="project-links" href="http://blogranker.demo.ericjho.com/">
                  Demo
                </a>
              </button>
              <button className="btn btn-info">
                <a className="project-links" href="https://github.com/Inhockorea/BlogRanker">
                  GitHub
                </a>
              </button>
            </div>
            <div className="text-info d-flex flex-column justify-content-center mt-2">
              <div className="pr-2">
                React | Redux
                </div>
              <div className="pr-2">
                PostgreSQL | Node.js
                </div>
            </div>
          </div>
        </div>
      </div>

{/**Warbler */}
<div className="container-fluid projects-section mt-5">
        <div className="row">

          <div className="col-12 col-md-3 mr-3 mb-3 project-heading">
            <div className="hiddenName">PROJECTS</div>
          </div>

          <div className="col-md-6 p-0">
            <img src={warbler} alt="warbler" className="blogranker-img border" />
          </div>

          <div className="col col-md-2">

            <div className="project-ind-header font-weight-bold mb-2">
              Warbler
            </div>

            <div className="project-ind-body">
              <div>
              A full stack Twitter clone application. The application features user authentication and CSRF protection.
              </div>
            </div>


            <div className="project-demo-section mt-3 d-flex justify-content-center">
              <button className="btn btn-info mr-1">
                <a className="project-links" href="https://warbler-rithm-15.herokuapp.com/">
                  Demo
                </a>
              </button>
              <button className="btn btn-info">
                <a className="project-links" href="https://github.com/Inhockorea/Warbler">
                  GitHub
                </a>
              </button>
            </div>
            <div className="text-info d-flex flex-column justify-content-center mt-2">
              <div className="pr-2">
                Python | Flask
              </div>
              <div className="pr-2">
                PostgreSQL 
                </div>
            </div>
          </div>
        </div>
      </div>




    </section>

  );
}

export default Projects;


