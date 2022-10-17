import { Container, Row, Col } from "react-bootstrap";
import logofooter from "../assets/img/Logo 2 branco.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import github from '../assets/img/GitHubIcon.png';
import { i18n } from "./MultiLingue/Translate/i18n";

export function FooterPages (){
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logofooter} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="blank" href="https://www.linkedin.com/in/luigi-toniolo/"><img src={navIcon1} alt="linkedin icon" /></a>
              <a target="blank" href="https://www.facebook.com/luigi.benetitoniolo/"><img src={navIcon2} alt="facebook icon" /></a>
              <a target="blank" href="https://github.com/LuigiToniolo"><img src={github} alt="github icon" /></a>
            </div>
            <p>{i18n.t('footer.copy')} </p>
            <p>{i18n.t('footer.develop')} </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
