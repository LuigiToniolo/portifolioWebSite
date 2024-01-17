import React from "react";
import "./modal.css";
import imacDomvs from "../../assets/img/imacDomvs.png";
import imacToniolo from "../../assets/img/imacToniolo.png";
import imaclpddc from "../../assets/img/lp-ddc-imac.png";
import ajudai_imac from "../../assets/img/ajudai-imac.png";

import PHP from "../../assets/img/PHP.png";
import REACT from "../../assets/img/ReactJs.png";
import SCRUM from "../../assets/img/Scrum.png";
import VUEJS from "../../assets/img/VueJs.png";
import JAVASCRIPT from "../../assets/img/JavaScript.png";
import HTMLCSS from "../../assets/img/Html-Css.png";
import GITHUB from "../../assets/img/Github.png";
import ANGULAR from "../../assets/img/Angular.png";
import APIRESTNESTJS from "../../assets/img/APIRestNesjJs.png";

import { i18n } from "../MultiLingue/Translate/i18n";

export const ModalContent1 = () => {
  return (
    <div className="conteudo-modal">
      <h2 className="titulo-modal">{i18n.t("projects.modal1.title")}</h2>
      <div className="project-content">
        <div className="project-image">
          <img src={imacDomvs} />
        </div>

        <div className="project-info">
          <h3>{i18n.t("projects.modal1.titleContent")}</h3>
          <p>{i18n.t("projects.modal1.content")}</p>
          <h4>{i18n.t("projects.modal1.techTitle")}</h4>
          <div className="tech-list">
            <ul className="col">
              <li>{i18n.t("projects.modal1.techList.one")}</li>
              <li>{i18n.t("projects.modal1.techList.four")}</li>
            </ul>
            <ul className="col">
              <li>{i18n.t("projects.modal1.techList.two")}</li>
              <li>{i18n.t("projects.modal1.techList.five")}</li>
            </ul>
            <ul className="col">
              <li>{i18n.t("projects.modal1.techList.three")}</li>
              <li>{i18n.t("projects.modal1.techList.six")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ModalContent2 = () => {
  return (
    <div className="conteudo-modal">
      <h2 className="titulo-modal">{i18n.t("projects.modal2.title")}</h2>
      <div className="project-content">

        <div className="project-image">
        <img src={imacToniolo} />
        </div>

        <div className="project-info">
          <h3>{i18n.t("projects.modal2.titleContent")}</h3>
          <p>{i18n.t("projects.modal2.content")}</p>
          <h4>{i18n.t("projects.modal2.techTitle")}</h4>
          <div className="tech-list">
            <ul className="col">
              <li>{i18n.t("projects.modal2.techList.one")}</li>
              <li>{i18n.t("projects.modal2.techList.four")}</li>
            </ul>
            <ul className="col">
              <li>{i18n.t("projects.modal2.techList.two")}</li>
              <li>{i18n.t("projects.modal2.techList.five")}</li>
            </ul>
            <ul className="col">
              <li>{i18n.t("projects.modal2.techList.three")}</li>
              <li>{i18n.t("projects.modal2.techList.six")}</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export const ModalContent3 = () => {
  return (
    <div className="conteudo-modal">
      <h2 className="titulo-modal">{i18n.t("projects.modal3.title")}</h2>
      <div className="project-content">

        <div className="project-image">
        <img src={imaclpddc} />
        </div>

        <div className="project-info">
          <h3>{i18n.t("projects.modal3.titleContent")}</h3>
          <p>{i18n.t("projects.modal3.content")}</p>
          <h4>{i18n.t("projects.modal3.techTitle")}</h4>
          <div className="tech-list">
            <ul className="col">
              <li>{i18n.t("projects.modal3.techList.one")}</li>
              <li>{i18n.t("projects.modal3.techList.four")}</li>
            </ul>
            <ul className="col">
              <li>{i18n.t("projects.modal3.techList.two")}</li>
              <li>{i18n.t("projects.modal3.techList.five")}</li>
            </ul>
            <ul className="col">
              <li>{i18n.t("projects.modal3.techList.three")}</li>
              <li>{i18n.t("projects.modal3.techList.six")}</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export const ModalContent4 = () => {
  return (
    <div className="conteudo-modal">
      <h2 className="titulo-modal">{i18n.t("projects.modal4.title")}</h2>
      <div className="project-content">

        <div className="project-image">
        <img src={ajudai_imac} />
        </div>

        <div className="project-info">
          <h3>{i18n.t("projects.modal4.titleContent")}</h3>
          <p>{i18n.t("projects.modal4.content")}</p>
          <div className="links">
            <a className="link-projeto" href="https://ajudai.io/" target="_blank">{i18n.t("projects.modal4.link1")}</a>
            <a className="link-projeto" href="https://areadocliente.ajudai.io/" target="_blank">{i18n.t("projects.modal4.link2")}</a>
          </div>
          <h4>{i18n.t("projects.modal4.techTitle")}</h4>
          <div className="tech-list">
            <ul className="col">
              <li>{i18n.t("projects.modal4.techList.one")}</li>
              <li>{i18n.t("projects.modal4.techList.four")}</li>
            </ul>
            <ul className="col">
              <li>{i18n.t("projects.modal4.techList.two")}</li>
              <li>{i18n.t("projects.modal4.techList.five")}</li>
            </ul>
            <ul className="col">
              <li>{i18n.t("projects.modal4.techList.three")}</li>
              <li>{i18n.t("projects.modal4.techList.six")}</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export const ModalCertificate1 = () => {
  return (
    <div className="conteudo-modal">
      <h2 className="titulo-modal">{i18n.t("certificate.modal1.title")}</h2>
      <div className="project-content">
        <div className="project-image">
        <img src={PHP} />
        </div>

        <div className="project-info">
          <h3>{i18n.t("certificate.modal1.titleContent")}</h3>
          <p>{i18n.t("certificate.modal1.content")}</p>
          <h4>{i18n.t("certificate.modal1.certificateTitle")}</h4>
          <div className="tech-list">
            <ul className="col">
              <li><a >{i18n.t("certificate.modal1.courseList.one")}</a></li>
              <li><a >{i18n.t("certificate.modal1.courseList.two")}</a></li>
              <li><a >{i18n.t("certificate.modal1.courseList.three")}</a></li>
              <li><a >{i18n.t("certificate.modal1.courseList.four")}</a></li>
              <li><a >{i18n.t("certificate.modal1.courseList.five")}</a></li>
            </ul>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export const ModalCertificate2 = () => {
  return (
    <div className="conteudo-modal">
      <h2 className="titulo-modal">{i18n.t("certificate.modal2.title")}</h2>
      <div className="project-content">
        <div className="project-image">
        <img src={REACT} />
        </div>

        <div className="project-info">
          <h3>{i18n.t("certificate.modal2.titleContent")}</h3>
          <p>{i18n.t("certificate.modal2.content")}</p>
          <h4>{i18n.t("certificate.modal2.certificateTitle")}</h4>
          <div className="tech-list">
            <ul className="col">
              <li><a >{i18n.t("certificate.modal2.courseList.one")}</a></li>
              <li><a >{i18n.t("certificate.modal2.courseList.two")}</a></li>
              <li><a >{i18n.t("certificate.modal2.courseList.three")}</a></li>
              <li><a >{i18n.t("certificate.modal2.courseList.four")}</a></li>
              <li><a >{i18n.t("certificate.modal2.courseList.five")}</a></li>
              <li><a >{i18n.t("certificate.modal2.courseList.six")}</a></li>
              <li><a >{i18n.t("certificate.modal2.courseList.seven")}</a></li>
              <li><a >{i18n.t("certificate.modal2.courseList.eight")}</a></li>
            </ul>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export const ModalCertificate3 = () => {
  return (
    <div className="conteudo-modal">
      <h2 className="titulo-modal">{i18n.t("certificate.modal3.title")}</h2>
      <div className="project-content">
        <div className="project-image">
        <img src={ANGULAR} />
        </div>

        <div className="project-info">
          <h3>{i18n.t("certificate.modal3.titleContent")}</h3>
          <p>{i18n.t("certificate.modal3.content")}</p>
          <h4>{i18n.t("certificate.modal3.certificateTitle")}</h4>
          <div className="tech-list">
            <ul className="col">
              <li><a >{i18n.t("certificate.modal3.courseList.one")}</a></li>
              <li><a >{i18n.t("certificate.modal3.courseList.two")}</a></li>
              <li><a >{i18n.t("certificate.modal3.courseList.three")}</a></li>
              <li><a >{i18n.t("certificate.modal3.courseList.four")}</a></li>
              <li><a >{i18n.t("certificate.modal3.courseList.five")}</a></li>
            </ul>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export const ModalCertificate4 = () => {
  return (
    <div className="conteudo-modal">
      <h2 className="titulo-modal">{i18n.t("certificate.modal4.title")}</h2>
      <div className="project-content">
        <div className="project-image">
        <img src={SCRUM} />
        </div>

        <div className="project-info">
          <h3>{i18n.t("certificate.modal4.titleContent")}</h3>
          <p>{i18n.t("certificate.modal4.content")}</p>
          <h4>{i18n.t("certificate.modal4.certificateTitle")}</h4>
          <div className="tech-list">
            <ul className="col">
              <li><a >{i18n.t("certificate.modal4.courseList.one")}</a></li>
              <li><a >{i18n.t("certificate.modal4.courseList.two")}</a></li>
              <li><a >{i18n.t("certificate.modal4.courseList.three")}</a></li>
              <li><a >{i18n.t("certificate.modal4.courseList.four")}</a></li>
              <li><a >{i18n.t("certificate.modal4.courseList.five")}</a></li>
              <li><a >{i18n.t("certificate.modal4.courseList.six")}</a></li>
            </ul>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export const ModalCertificate5 = () => {
  return (
    <div className="conteudo-modal">
      <h2 className="titulo-modal">{i18n.t("certificate.modal5.title")}</h2>
      <div className="project-content">
        <div className="project-image">
        <img src={VUEJS} />
        </div>

        <div className="project-info">
          <h3>{i18n.t("certificate.modal5.titleContent")}</h3>
          <p>{i18n.t("certificate.modal5.content")}</p>
          <h4>{i18n.t("certificate.modal5.certificateTitle")}</h4>
          <div className="tech-list">
            <ul className="col">
              <li><a >{i18n.t("certificate.modal5.courseList.one")}</a></li>
              <li><a >{i18n.t("certificate.modal5.courseList.two")}</a></li>
              <li><a >{i18n.t("certificate.modal5.courseList.three")}</a></li>
              <li><a >{i18n.t("certificate.modal5.courseList.four")}</a></li>
            </ul>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export const ModalCertificate6 = () => {
  return (
    <div className="conteudo-modal">
      <h2 className="titulo-modal">{i18n.t("certificate.modal6.title")}</h2>
      <div className="project-content">
        <div className="project-image">
        <img src={JAVASCRIPT} />
        </div>

        <div className="project-info">
          <h3>{i18n.t("certificate.modal6.titleContent")}</h3>
          <p>{i18n.t("certificate.modal6.content")}</p>
          <h4>{i18n.t("certificate.modal6.certificateTitle")}</h4>
          <div className="tech-list">
            <ul className="col">
              <li><a >{i18n.t("certificate.modal6.courseList.one")}</a></li>
              <li><a >{i18n.t("certificate.modal6.courseList.two")}</a></li>
              <li><a >{i18n.t("certificate.modal6.courseList.three")}</a></li>
              <li><a >{i18n.t("certificate.modal6.courseList.four")}</a></li>
            </ul>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export const ModalCertificate7 = () => {
  return (
    <div className="conteudo-modal">
      <h2 className="titulo-modal">{i18n.t("certificate.modal7.title")}</h2>
      <div className="project-content">
        <div className="project-image">
        <img src={HTMLCSS} />
        </div>

        <div className="project-info">
          <h3>{i18n.t("certificate.modal7.titleContent")}</h3>
          <p>{i18n.t("certificate.modal7.content")}</p>
          <h4>{i18n.t("certificate.modal7.certificateTitle")}</h4>
          <div className="tech-list">
            <ul className="col">
              <li><a >{i18n.t("certificate.modal7.courseList.one")}</a></li>
              <li><a >{i18n.t("certificate.modal7.courseList.two")}</a></li>
              <li><a >{i18n.t("certificate.modal7.courseList.three")}</a></li>
              <li><a >{i18n.t("certificate.modal7.courseList.four")}</a></li>
              <li><a >{i18n.t("certificate.modal7.courseList.five")}</a></li>
              <li><a >{i18n.t("certificate.modal7.courseList.six")}</a></li>
            </ul>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export const ModalCertificate8 = () => {
  return (
    <div className="conteudo-modal">
      <h2 className="titulo-modal">{i18n.t("certificate.modal8.title")}</h2>
      <div className="project-content">
        <div className="project-image">
        <img src={GITHUB} />
        </div>

        <div className="project-info">
          <h3>{i18n.t("certificate.modal8.titleContent")}</h3>
          <p>{i18n.t("certificate.modal8.content")}</p>
          <h4>{i18n.t("certificate.modal8.certificateTitle")}</h4>
          <div className="tech-list">
            <ul className="col">
              <li><a >{i18n.t("certificate.modal8.courseList.one")}</a></li>
              <li><a >{i18n.t("certificate.modal8.courseList.two")}</a></li>
            </ul>
          </div>
        </div>
      
      </div>
    </div>
  );
};


export const ModalCertificate9 = () => {
  return (
    <div className="conteudo-modal">
      <h2 className="titulo-modal">{i18n.t("certificate.modal9.title")}</h2>
      <div className="project-content">
        <div className="project-image">
        <img src={APIRESTNESTJS} />
        </div>

        <div className="project-info">
          <h3>{i18n.t("certificate.modal9.titleContent")}</h3>
          <p>{i18n.t("certificate.modal9.content")}</p>
          <h4>{i18n.t("certificate.modal9.certificateTitle")}</h4>
          <div className="tech-list">
            <ul className="col">
              <li><a >{i18n.t("certificate.modal9.courseList.one")}</a></li>
              <li><a >{i18n.t("certificate.modal9.courseList.two")}</a></li>
            </ul>
          </div>
        </div>
      
      </div>
    </div>
  );
};


