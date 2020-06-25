import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-skills-container"> 
      <div id="about-anchor" className="about-anchor">
        About Break Point
      </div>

      <div className="mt-5">
        <div className="container-fluid about-section">
          <div className="row">
            <div className="col-12 col-md-3 about-heading mr-3 mb-3">
              ABOUT ME
            </div>

            <div className="about-text col-12 col-md-8">
              <div>
                I am a <b>full stack engineer</b> who is passionate about building beautiful interfaces and experiences. I recently graduated from Rithm School's full-stack web development program in San Francisco, specializing in <strong>JavaScript</strong>, <strong>Python</strong>, and <strong>relational databses</strong>.
              </div>

              <div className="mt-3">
                Prior to attending Rithm School, I graduated from <strong>University of California, Berkeley</strong> in the fall of 2019, with a major in <strong>Economics</strong> and a <strong>Certificate in Technology Entrepreneurship from College of Engineering</strong>. By being involved in many start-up projects and making the finalist at the Collider Cup, the biggest start-up competition at Berkeley, I became an adaptive learner who can perform excellently in a fast-paced environment and under pressure. In addition, I’ve served in the Korean Army as a <b>Special Task Force commander</b>, where I supervised a high-performance team of 12 for Counter-terrorism operations to protect Seoul. Serving in the Army has developed me into a proactive leader who will always seek to deliver more results than requested.
              </div>

              <div className="mt-3">
                By combining my ability to write <b>modern</b>, <b>performant</b>, and <b>robust</b> code with my past professional experience and the understanding of business, I am confident I will be an asset to your organization and bring refreshing perspectives and inputs.
              </div>

              <div className="mt-3">
                <b>When I'm not in front of a computer screen</b>, I would practice boxing, go on road trips, jump rope, go for a run near the Bay Bridge, work on calisthenic movements and eat Korean BBQ afterward.
              </div>

            </div>
          </div >
        </div>

        <div id="skills-anchor" className="skills-anchor">
          Skills Break Point
        </div>

        <div className="container-fluid skills-section" id="skills-anchor">
          <div className="row" >
            <div className="col-12 col-md-3 skills-heading mr-3 mb-3">
              <div>
                SKILLS
              </div>
            </div>

            <div className="col text-left">
              <div className="mb-1 font-weight-bold">
                Languages
              </div>

              <div>
                Javascript(ES6)
              </div>

              <div>
                Python
              </div>

              <div>
                HTML
              </div>

              <div>
                CSS
              </div>

              <div>
                SQL
              </div>
            </div>

            <div className="col text-left">
              <div className="mb-1 font-weight-bold">
                Frameworks & Libraries
              </div>

              <div>
                React | Redux
              </div>

              <div>
                Express
              </div>

              <div>
                jQuery
              </div>

              <div>
                Jest
              </div>

              <div>
                Flask
              </div>

              <div>
                Bootstrap
              </div>
            </div>

            <div className="col text-left">
              <div>
                <div className="mb-1 font-weight-bold">
                  Platforms & Tools
                </div>

                <div>
                  PostgreSQL
                </div>

                <div>
                  Graphviz
                </div>

                <div>
                  Git & GitHub
                </div>

                <div>
                  Adobe Premiere Pro
                </div>

                <div>
                  Adobe Photoshop
                </div>

                <div>
                  Adobe XD
                </div>

              </div>
            </div>
          </div>
        </div>

        </div>
    </section>
  );
}

export default About;

