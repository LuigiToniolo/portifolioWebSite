import React from "react";
import "./modal.css";
import imacMock from "../../assets/img/imacMock.png";
import { i18n } from "../MultiLingue/Translate/i18n";

export const ModalContent1 = () => {
  return (
    <div className="conteudo-modal">
      <h2 className="titulo-modal">{i18n.t("projects.modal1.title")}</h2>
      <div className="project-content">
        <div className="project-image">
          <img src={imacMock} />
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
        <img src={imacMock} />
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
        <img src={imacMock} />
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
