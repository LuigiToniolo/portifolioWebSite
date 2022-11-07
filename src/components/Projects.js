import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { i18n } from "./MultiLingue/Translate/i18n";
import projImg2 from "../assets/img/project-img2.png";
import domvsIt from "../assets/img/site-domvs.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React, { useState } from "react";
import Modal from "react-modal";
import {
  ModalContent1,
  ModalContent2,
  ModalContent3,
} from "../components/Modal/index";

Modal.setAppElement("#root");

export const Projects = () => {
  const [isOpen1, setIsOpen1] = useState(false);

  function toggleModal1() {
    setIsOpen1(!isOpen1);
  }

  const [isOpen2, setIsOpen2] = useState(false);

  function toggleModal2() {
    setIsOpen2(!isOpen2);
  }

  const [isOpen3, setIsOpen3] = useState(false);

  function toggleModal3() {
    setIsOpen3(!isOpen3);
  }

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>{i18n.t("projects.title")}</h2>

                  <p>{i18n.t("projects.subtitle")}</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx" onClick={toggleModal1}>
                              <img src={domvsIt} />
                              <div className="proj-txtx">
                                <h4>{i18n.t("projects.modal1.title")}</h4>
                                <span>
                                  {i18n.t("projects.modal1.subtitle")}
                                </span>
                              </div>
                            </div>
                          </Col>
                          <Modal
                            isOpen={isOpen1}
                            onRequestClose={toggleModal1}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <button
                              className="botao-modal"
                              onClick={toggleModal1}
                            >
                              X
                            </button>
                            <ModalContent1 />
                          </Modal>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx" onClick={toggleModal2}>
                              <img src={projImg2} />
                              <div className="proj-txtx">
                                <h4>{i18n.t("projects.modal2.title")}</h4>
                                <span>
                                  {i18n.t("projects.modal2.subtitle")}
                                </span>
                              </div>
                            </div>
                          </Col>
                          <Modal
                            isOpen={isOpen2}
                            onRequestClose={toggleModal2}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <button
                              className="botao-modal"
                              onClick={toggleModal2}
                            >
                              X
                            </button>
                            <ModalContent2 />
                          </Modal>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx" onClick={toggleModal3}>
                              <img src={projImg2} />
                              <div className="proj-txtx">
                                <h4>{i18n.t("projects.modal3.title")}</h4>
                                <span>
                                  {i18n.t("projects.modal3.subtitle")}
                                </span>
                              </div>
                            </div>
                          </Col>
                          <Modal
                            isOpen={isOpen3}
                            onRequestClose={toggleModal3}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <button
                              className="botao-modal"
                              onClick={toggleModal3}
                            >
                              X
                            </button>
                            <ModalContent3 />
                          </Modal>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          testeLorem ipsum dolor sit amet consectetur
                          adipisicing elit. Cumque quam, quod neque provident
                          velit, rem explicabo excepturi id illo molestiae
                          blanditiis, eligendi dicta officiis asperiores
                          delectus quasi inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          testLorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
