import "animate.css";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from "react-on-screen";

export const Contact = () => {

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailMessage",
        "template_tf07n4u",
        form.current,
        "ImR9OJuFzIxlzu-Nm"
      )
      .then(
        (result) => {
          setStatus({ succes: true, message: "Message sent successfully" });
        },
        (error) => {
          setStatus({
            succes: false,
            message: "Something went wrong, please try again later.",
          });
        }
      );
    e.target.reset();
  };

  // const [user, setUser] = useState({
  //     name: '',
  //     email: '',
  //     message: ''
  // })

  const [status, setStatus] = useState({});

  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //     <label>Name</label>
    //     <input type="text" name="user_name" />
    //     <label>Email</label>
    //     <input type="email" name="user_email" />
    //     <label>Message</label>
    //     <textarea name="message" />
    //     <input type="submit" value="Send" />

    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "" : ""
                  }
                >
                  <h2>Get In Touch</h2>

                  <form onSubmit={sendEmail} ref={form}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.name}
                          placeholder="Name"
                          onChange={(e) => onFormUpdate("name", e.target.value)}
                          name="name"
                          required
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                          name="email"
                          required
                        />
                      </Col>

                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          required
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                          name="message"
                        ></textarea>
                        {status.message && (
                          <Col>
                            <div className="alert alert-success" role="alert">
                              <p
                                className={
                                  status.success === false
                                    ? "danger"
                                    : "success"
                                }
                              >
                                {status.message}
                              </p>
                            </div>
                          </Col>
                        )}
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    //   </form>
  );
};
