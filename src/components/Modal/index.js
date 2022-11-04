import React from "react";
import "./modal.css";
import { data } from "./data";
// import imacMock from "../../assets/img/imacMock.png";

export const ModalContent1 = () => {
  return (
    <div className="conteudo-modal">
      <h2 className="titulo-modal">{data.modal1.title}</h2>
      <p>{data.modal1.content}</p>
    </div>
  );
};

export const ModalContent2 = () => {
  return (
    <div className="conteudo-modal">
      <h2 className="titulo-modal">{data.modal2.title}</h2>
      <div className="project-content">
        <div className="project-image">
          <img src={data.modal2.imagem} />
        </div>

        <div className="project-info">
          <h3>{data.modal2.titleContent}</h3>
          <p>{data.modal2.content}</p>
          <h4>{data.modal2.techTitle}</h4>
          <div className="tech-list">
            <ul className="col">
              <li>{data.modal2.techList.one}</li>
              <li>{data.modal2.techList.four}</li>
            </ul>
            <ul className="col">
              <li>{data.modal2.techList.two}</li>
              <li>{data.modal2.techList.five}</li>
            </ul>
            <ul className="col">
              <li>{data.modal2.techList.three}</li>
              <li>{data.modal2.techList.six}</li>
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
      <h2 className="titulo-modal">{data.modal3.title}</h2>
      <p>{data.modal3.content}</p>
    </div>
  );
};
