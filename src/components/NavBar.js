import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { i18n } from "./MultiLingue/Translate/i18n";
import MultiLanguage from "./MultiLingue";
import logo from '../assets/img/logoteste.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import github from '../assets/img/GitHubIcon.png';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router, Link
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : "" } id="menuMobile">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{i18n.t('navbar.home')}</Nav.Link>
              <Nav.Link href="/aboutme" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} to='/aboutme'>{i18n.t('navbar.skill')}</Nav.Link>
              <Nav.Link href="/#projeto" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{i18n.t('navbar.projects')}</Nav.Link>
              <Nav.Link href="/#connect" id="contatos-title" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{i18n.t('navbar.contact')}</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a target="blank" href="https://www.linkedin.com/in/luigi-toniolo/"><img src={navIcon1} alt="linkedin icon" /></a>
                <a target="blank" href="https://www.facebook.com/luigi.benetitoniolo/"><img src={navIcon2} alt="facebook icon" /></a>
                <a target="blank" href="https://github.com/LuigiToniolo"><img src={github} alt="github icon" /></a>
              </div>
              <HashLink to='#connect' className="button-hash">
                <button className="vvd"><span>{i18n.t('banner.connect')}</span></button>
              </HashLink>
            </span>
            <Nav className="select-lingua">
              <MultiLanguage />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
