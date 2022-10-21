import { Col } from "react-bootstrap";
// import Modal from "react-modal";

export const ProjectCard = ({ imgUrl, title, description, onClickCard, id }) => {

  return (
    <Col size={12} sm={6} md={4} >
      <button className="proj-imgbx" onClick={() => onClickCard(id)}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </button>
     </Col> 
  );
}

