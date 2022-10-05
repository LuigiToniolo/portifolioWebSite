import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from '@emailjs/browser'; 
import { useRef } from 'react';

export const Contact = () => {

  function message(){

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success')
    const danger = document.getElementById('danger')

    if(name === '' || email === '' || msg === ''){
      danger.style.display = 'block';
    }
    else {
      setTimeout(() => {
        name = '';
        email = '';
        msg = '';
      }, 2000);

      success.style.display = 'block';
      
    }

    setTimeout(() => {
      danger.style.display = 'none';
      success.style.display = 'none';
    }, 4000)
  }

  const form = useRef();

  function sendEmail(e) {

    emailjs
      .sendForm(
        "gmailMessage",
        "template_tf07n4u",
        form.current,
        "ImR9OJuFzIxlzu-Nm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
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

            <div>

              <h2>Get In Touch</h2>
              <form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col size={12} sm={6} className="form-group">
                    <input
                      type="name"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                      id="name"
                    />
                  </Col>

                  <Col size={12} sm={6} className="form-group">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                    />
                  </Col>

                  <Col size={12} className="form-group">
                    <textarea
                      rows="6"
                      ClassName="form-control"
                      name="message"
                      placeholder="Message"
                      id="msg"
                    ></textarea>

                    <div className="mensagens">

                      <div className="success" id="success">
                        Your message Succesfully sent!
                      </div>

                      <div className="danger" id="danger">
                        Fields can't be Empty!
                      </div>
                    </div>

                    <button
                      type="submit"
                      onClick={message()}
                    >
                      Enviar
                    </button>
                  </Col>


                </Row>
              </form>
            </div>
            {/* </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
