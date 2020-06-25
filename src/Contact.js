import React from "react";
import Emoji from "a11y-react-emoji"
import "./Contact.css";


function Contact() {
  return (
    <section>
      <div className="contact-anchor mt-2" id="contact-anchor">
        contact Break point
      </div>
      <div className="container-fluid">
        <div className="row mt-5" >

          <div className="col-12 col-md-3 mr-3 mb-3 contact-heading">
            <div>CONTACT</div>
          </div>
          <div className="col-12 col-md-8 contact-details-container text-left">
            <div className="mb-3">
              <h3> Any Professional inquiries? Asking for my Resume? Get In Touch with me!</h3>
            </div>

            <span className="d-flex align-items-center">
              <Emoji symbol="👉" className="email-pointer mr-3"></Emoji>
              <button className="btn btn-lg btn-outline-primary">
                <a className="email" href="mailto:ejho13@berkeley.edu"> ejho13@berkeley.edu</a>
              </button>
            </span>

            <div className="mb-3 mt-3">
              <h4>Feeling Social?</h4>
              <div className="lead">
                If you want to ask for my resume or see if we can build something awesome together?
              </div>
              <div>
              <span className="d-flex align-items-center">
                <b> I’d love to hear from you! Reach out on Social Media to say Hello! </b>
                <Emoji symbol="👋" className="rockon ml-3"></Emoji>
              </span>
              </div>
            </div>




          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;


