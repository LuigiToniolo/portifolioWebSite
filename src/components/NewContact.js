import 'animate.css';

import React from 'react';
import emailjs from '@emailjs/browser';

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';


export const NewContact = () => {

    function mensagem(e) {
        e.preventDefault();
        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var msg = document.getElementById('message');
        const success = document.getElementById('success');
        const danger = document.getElementById('danger');
    
        if(name.value === '' || email.value === '' || msg.value === '') {
            danger.style.display = 'block';
        } else {
            setTimeout(() => {
                name.value = '';
                email.value = '';
                msg.value = '';
            }, 5000);
    
            success.style.display = 'block';
        }
    };

    // const [result, showResult] = useState(false);
    const [buttonText, setButtonText] = useState('Send');

    const sendEmail = (e) => {

      e.preventDefault();

    //   setButtonText("Sending...");

      emailjs.sendForm('gmailMessage', 'template_tf07n4u', e.current, 'ImR9OJuFzIxlzu-Nm')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        // e.target.reset();
        // showResult(true)
        // setButtonText('Send');
    }


    return (

    <section className="contact" id="connect">
      <Container>

        <Row className="align-items-center">

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>

          <Col size={12} md={6}>

            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                <h2>Get In Touch</h2>
                
                    <form onSubmit={sendEmail} >

                        <Row>

                            <Col size={12} sm={6} className="px-1">
                            <input 
                                type="text" 
                                id='name'
                                // value={formDetails.name} 
                                placeholder="Name" 
                                // onChange={(e) => onFormUpdate('name', e.target.value)} 
                                name='name'
                                required
                                />
                            </Col>

                            <Col size={12} sm={6} className="px-1">
                            <input 
                                type="email" 
                                id='email'
                                // value={formDetails.email} 
                                placeholder="Email Address" 
                                // onChange={(e) => onFormUpdate('email', e.target.value)} 
                                name='email'
                                required
                                />
                            </Col>

                            <Col size={12} className="px-1">
                            <textarea 
                                rows="6"
                                id='msg'
                                // value={formDetails.message} 
                                placeholder="Message" 
                                // onChange={(e) => onFormUpdate('message', e.target.value)} 
                                name='message'
                                required
                                >
                            </textarea>

                            <Col>

                                <div id='success' className="alert alert-success" role="alert">
                                    <p>Message sent successfully</p>
                                </div>

                                <div id='danger' className="alert alert-success" role="alert">
                                    <p>Complete the whole fields!</p>
                                </div>

                            </Col>

                            <button type="submit" onClick="mensagem()" id='send'><span>{buttonText}</span></button>
                            
                            </Col>

                        </Row>
                    </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    //   </form>
    );
}

