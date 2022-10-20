import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { i18n } from "./MultiLingue/Translate/i18n";
// import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react';
import { Dialog } from "@mui/material";
// import Modal from './Modal';

export const Projects = () => {

  //   state = {
  //   showModal: null
  // };

  // getModal = (projects) => {
  //   this.setState({ showModal: projects });
  // };
  // hideModal = () => {
  //   this.setState({ showModal: null });
  // };

  // const { images, onHide } = this.props ;


  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];



  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>{i18n.t('projects.title')}</h2>           

                <p>{i18n.t('projects.subtitle')}</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>

                        {projects.map((projects) => {
                            return(
                              <Col size={12} sm={6} md={4}>
                              <div className="proj-imgbx">
                        
                                <img 
                                  src={projects.imgUrl}
                                  onClick={() => this.getModal(projects)}
                                  alt=""
                                />
                                <div className="proj-txtx">
                                  <h4>{projects.title}</h4>
                                  <span>{projects.description}</span>
                                </div>
                              </div>
                            </Col>
                            )
                        })}

                      </Row>

                      {/* <Dialog open={true} onClose={onHide}>
                        <div className="modal">
                          <p>Olá mundo</p>
                        </div>
                      </Dialog> */}

                      {/* {projects.showModal && (
                        <Modal onHide={projects.hideModal} images={projects.showModal?.imgUrl} />
                      )} */}



                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
