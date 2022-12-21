import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { i18n } from "./MultiLingue/Translate/i18n";
import github from '../assets/img/github-mark-white.png';
import Toniolo from "../assets/img/tonioloJoiasCapa.png";
import domvsIt from "../assets/img/domvsIT.png";
import lpddc from "../assets/img/lp-ddc-nova.png";
import PHP from "../assets/img/PHP.png";
import REACT from "../assets/img/ReactJs.png";
import SCRUM from "../assets/img/Scrum.png";
import VUEJS from "../assets/img/VueJs.png";
import JAVASCRIPT from "../assets/img/JavaScript.png";
import HTMLCSS from "../assets/img/Html-Css.png";
import GITHUB from "../assets/img/Github.png";
import ANGULAR from "../assets/img/Angular.png";
import APIRESTNESTJS from "../assets/img/APIRestNesjJs.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React, { useState } from "react";
import Modal from "react-modal";
import {
  ModalContent1,
  ModalContent2,
  ModalContent3,
  ModalCertificate1,
  ModalCertificate2,
  ModalCertificate3,
  ModalCertificate4,
  ModalCertificate5,
  ModalCertificate6,
  ModalCertificate7,
  ModalCertificate8,
  ModalCertificate9,
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

  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModal4() {
    setIsOpen4(!isOpen4);
  }

  const [isOpen5, setIsOpen5] = useState(false);

  function toggleModal5() {
    setIsOpen5(!isOpen5);
  }

  const [isOpen6, setIsOpen6] = useState(false);

  function toggleModal6() {
    setIsOpen6(!isOpen6);
  }
  const [isOpen7, setIsOpen7] = useState(false);

  function toggleModal7() {
    setIsOpen7(!isOpen7);
  }
  const [isOpen8, setIsOpen8] = useState(false);

  function toggleModal8() {
    setIsOpen8(!isOpen8);
  }
  const [isOpen9, setIsOpen9] = useState(false);

  function toggleModal9() {
    setIsOpen9(!isOpen9);
  }
  const [isOpen10, setIsOpen10] = useState(false);

  function toggleModal10() {
    setIsOpen10(!isOpen10);
  }
  const [isOpen11, setIsOpen11] = useState(false);

  function toggleModal11() {
    setIsOpen11(!isOpen11);
  }
  const [isOpen12, setIsOpen12] = useState(false);

  function toggleModal12() {
    setIsOpen12(!isOpen12);
  }

  return (
    <section className="project" id="project">
      <Container id='projeto'>
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
                        <Nav.Link eventKey="first">Projetos Profissionais</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projetos Pessoais</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certificados</Nav.Link>
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
                              <img src={Toniolo} />
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
                              <img src={lpddc} />
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
                      <Tab.Pane eventKey="second">
                        <div className="personal-project">
                          <a target="blank" href="https://github.com/LuigiToniolo">
                            <span>{i18n.t("projects.personal")}</span>
                            <img src={github} alt="github icon" className="project-icon" />
                          </a>
                        </div>
                        {/* <Row>
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
                              <img src={Toniolo} />
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
                        </Row> */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx" onClick={toggleModal4}>
                              <img src={PHP} />
                              <div className="proj-txtx" >
                                <h4>{i18n.t("certificate.modal1.title")}</h4>
                                <span>
                                  {i18n.t("certificate.modal1.subtitle")}
                                </span>
                              </div>
                            </div>
                          </Col>
                          <Modal
                            isOpen={isOpen4}
                            onRequestClose={toggleModal4}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <button
                              className="botao-modal"
                              onClick={toggleModal4}
                            >
                              X
                            </button>
                            <ModalCertificate1 />
                          </Modal>

                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx" onClick={toggleModal5}>
                              <img src={REACT} />
                              <div className="proj-txtx">
                                <h4>{i18n.t("certificate.modal2.title")}</h4>
                                <span>
                                  {i18n.t("certificate.modal2.subtitle")}
                                </span>
                              </div>
                            </div>
                          </Col>
                          <Modal
                            isOpen={isOpen5}
                            onRequestClose={toggleModal5}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <button
                              className="botao-modal"
                              onClick={toggleModal5}
                            >
                              X
                            </button>
                            <ModalCertificate2 />
                          </Modal>

                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx" onClick={toggleModal6}>
                              <img src={ANGULAR} />
                              <div className="proj-txtx">
                                <h4>{i18n.t("certificate.modal3.title")}</h4>
                                <span>
                                  {i18n.t("certificate.modal3.subtitle")}
                                </span>
                              </div>
                            </div>
                          </Col>
                          <Modal
                            isOpen={isOpen6}
                            onRequestClose={toggleModal6}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <button
                              className="botao-modal"
                              onClick={toggleModal6}
                            >
                              X
                            </button>
                            <ModalCertificate3 />
                          </Modal>

                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx" onClick={toggleModal7}>
                              <img src={SCRUM} />
                              <div className="proj-txtx">
                                <h4>{i18n.t("certificate.modal4.title")}</h4>
                                <span>
                                  {i18n.t("certificate.modal4.subtitle")}
                                </span>
                              </div>
                            </div>
                          </Col>
                          <Modal
                            isOpen={isOpen7}
                            onRequestClose={toggleModal7}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <button
                              className="botao-modal"
                              onClick={toggleModal7}
                            >
                              X
                            </button>
                            <ModalCertificate4 />
                          </Modal>

                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx" onClick={toggleModal8}>
                              <img src={VUEJS} />
                              <div className="proj-txtx">
                                <h4>{i18n.t("certificate.modal5.title")}</h4>
                                <span>
                                  {i18n.t("certificate.modal5.subtitle")}
                                </span>
                              </div>
                            </div>
                          </Col>
                          <Modal
                            isOpen={isOpen8}
                            onRequestClose={toggleModal8}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <button
                              className="botao-modal"
                              onClick={toggleModal8}
                            >
                              X
                            </button>
                            <ModalCertificate5 />
                          </Modal>
                        

                        <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx" onClick={toggleModal9}>
                              <img src={JAVASCRIPT} />
                              <div className="proj-txtx">
                                <h4>{i18n.t("certificate.modal6.title")}</h4>
                                <span>
                                  {i18n.t("certificate.modal6.subtitle")}
                                </span>
                              </div>
                            </div>
                          </Col>
                          <Modal
                            isOpen={isOpen9}
                            onRequestClose={toggleModal9}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <button
                              className="botao-modal"
                              onClick={toggleModal9}
                            >
                              X
                            </button>
                            <ModalCertificate6 />
                          </Modal>

                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx" onClick={toggleModal10}>
                              <img src={HTMLCSS} />
                              <div className="proj-txtx">
                                <h4>{i18n.t("certificate.modal7.title")}</h4>
                                <span>
                                  {i18n.t("certificate.modal7.subtitle")}
                                </span>
                              </div>
                            </div>
                          </Col>
                          <Modal
                            isOpen={isOpen10}
                            onRequestClose={toggleModal10}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <button
                              className="botao-modal"
                              onClick={toggleModal10}
                            >
                              X
                            </button>
                            <ModalCertificate7 />
                          </Modal>

                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx" onClick={toggleModal11}>
                              <img src={GITHUB} />
                              <div className="proj-txtx">
                                <h4>{i18n.t("certificate.modal8.title")}</h4>
                                <span>
                                  {i18n.t("certificate.modal8.subtitle")}
                                </span>
                              </div>
                            </div>
                          </Col>
                          <Modal
                            isOpen={isOpen11}
                            onRequestClose={toggleModal11}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <button
                              className="botao-modal"
                              onClick={toggleModal11}
                            >
                              X
                            </button>
                            <ModalCertificate8 />
                          </Modal>

                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx" onClick={toggleModal12}>
                              <img src={APIRESTNESTJS} />
                              <div className="proj-txtx">
                                <h4>{i18n.t("certificate.modal9.title")}</h4>
                                <span>
                                  {i18n.t("certificate.modal9.subtitle")}
                                </span>
                              </div>
                            </div>
                          </Col>
                          <Modal
                            isOpen={isOpen12}
                            onRequestClose={toggleModal12}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <button
                              className="botao-modal"
                              onClick={toggleModal12}
                            >
                              X
                            </button>
                            <ModalCertificate9 />
                          </Modal>

                        </Row>
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
